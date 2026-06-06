import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import {
  companyAddress,
  companyMapUrl,
  companyPhoneDisplay,
  companyPhoneHref,
} from "@/lib/company";
import logoUrl from "@/assets/ullasco-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white inline-flex rounded-md p-2 mb-4">
            <img src={logoUrl} alt="Ullasco" className="h-10 w-auto" width={180} height={80} />
          </div>
          <p className="text-sm text-white/75 leading-relaxed max-w-xs">
            Ullasco Equipments & Machinery provides reliable equipment rental, fleet, transport, and
            maintenance solutions in Kuwait.
          </p>
          <SocialLinks className="mt-5 text-white/80" />
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/75">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/equipment", "Equipment & Fleet"],
              ["/maintenance", "Maintenance"],
              ["/projects", "Industries Served"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link to={href} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-white/75">
            <li>Light Equipment Rental</li>
            <li>Heavy Equipment Rental</li>
            <li>Fleet Solutions</li>
            <li>Transport Services</li>
            <li>Machinery Maintenance</li>
            <li>Project & Site Support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex gap-3">
              <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
              <a
                href={companyMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {companyAddress}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 text-primary mt-0.5 shrink-0" />{" "}
              <a href={companyPhoneHref} className="hover:text-primary">
                {companyPhoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 text-primary mt-0.5 shrink-0" />{" "}
              <a href="mailto:info@ullasco.com" className="hover:text-primary">
                info@ullasco.com
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="size-4 text-primary mt-0.5 shrink-0" /> www.ullasco.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Ullasco for Light & Heavy Equipment & Machinery Co. W.L.L.
          </p>
          <p>Kuwait • GCC</p>
        </div>
      </div>
    </footer>
  );
}
