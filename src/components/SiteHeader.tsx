import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/ullasco-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Equipment" },
  { to: "/maintenance", label: "Maintenance" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[0_1px_0_0_var(--color-border)]" : "bg-white"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Ullasco home">
          <img src={logo.url} alt="Ullasco Equipments & Machinery" className="h-10 md:h-12 w-auto" width={240} height={120} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-charcoal/80 hover:text-navy rounded-md transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-navy rounded-md bg-muted" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a href="tel:+96500000000" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-primary">
            <Phone className="size-4" /> Call
          </a>
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-4">Request a Quote</Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center size-10 rounded-md border border-border text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-x py-4 flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-base font-medium text-charcoal border-b border-border/60"
                activeProps={{ className: "py-3 text-base font-semibold text-primary border-b border-border/60" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-4">Request a Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
