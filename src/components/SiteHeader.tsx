import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Menu, X, Phone, Clock3 } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { companyAddress, companyMapUrl, companyPhoneHref } from "@/lib/company";
import logoUrl from "@/assets/ullasco-logo.png";
import { OptimizedImage } from "@/components/OptimizedImage";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Equipment" },
  { to: "/maintenance", label: "Maintenance" },
  { to: "/industries", label: "Industries" },
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_0_0_var(--color-border),0_16px_40px_-34px_rgba(16,31,84,0.7)] backdrop-blur"
          : "bg-white"
      }`}
    >
      <div className="hidden border-b border-border/70 bg-navy text-white md:block">
        <div className="container-x flex min-h-10 items-center justify-between gap-4 py-2 text-xs">
          <a
            href={companyMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-0 items-center gap-2 text-white/80 transition hover:text-primary"
          >
            <MapPin className="size-4 shrink-0 text-primary" />
            <span className="truncate">{companyAddress}</span>
          </a>
          <div className="flex shrink-0 items-center gap-5">
            <span className="inline-flex items-center gap-2 text-white/78">
              <Clock3 className="size-4 text-primary" />
              Equipment, fleet, transport and maintenance
            </span>
            <SocialLinks className="text-white/85" />
          </div>
        </div>
      </div>
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Ullasco home">
          <OptimizedImage
            src={logoUrl}
            alt="Ullasco Equipments & Machinery logo"
            className="h-10 md:h-12 w-auto"
            width={620}
            height={200}
            sizes="(min-width: 768px) 150px, 128px"
            loading="eager"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-3 py-2 text-sm font-medium text-charcoal/78 transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-navy hover:after:scale-x-100"
              activeProps={{
                className:
                  "relative px-3 py-2 text-sm font-semibold text-navy after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-primary",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={companyPhoneHref}
            className="inline-flex items-center gap-2 border-r border-border pr-4 text-sm font-semibold text-navy hover:text-primary"
          >
            <Phone className="size-4" /> 4100 3264
          </a>
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-4">
            Request Quote
          </Link>
        </div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container-x py-4 flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-base font-medium text-charcoal border-b border-border/60"
                activeProps={{
                  className: "py-3 text-base font-semibold text-primary border-b border-border/60",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-4 justify-center">
              Request Quote & Availability
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
