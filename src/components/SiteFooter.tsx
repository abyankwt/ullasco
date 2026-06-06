import { Link } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import {
  companyAddress,
  companyEmail,
  companyMapUrl,
  companyPhoneDisplay,
  companyPhoneHref,
} from "@/lib/company";
import logoUrl from "@/assets/ullasco-logo.png";
import { OptimizedImage } from "@/components/OptimizedImage";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 pattern-site-grid opacity-25" aria-hidden />
      <div className="container-x relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 inline-flex rounded-md bg-white p-2">
            <OptimizedImage
              src={logoUrl}
              alt="Ullasco Equipments & Machinery logo"
              className="h-10 w-auto"
              width={620}
              height={200}
              sizes="140px"
              loading="lazy"
            />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/75">
            Ullasco Equipments & Machinery provides reliable equipment rental, fleet, transport, and
            maintenance solutions in Kuwait.
          </p>
          <SocialLinks className="mt-5 text-white/80" />
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/equipment", "Equipment & Fleet"],
              ["/maintenance", "Maintenance"],
              ["/industries", "Industries Served"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link to={href} className="transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase text-white">Services</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {[
              ["/equipment", "Light Equipment Rental"],
              ["/equipment", "Heavy Equipment Rental"],
              ["/services#fleet-solutions", "Fleet Solutions"],
              ["/services#transport-services", "Transport Services"],
              ["/maintenance", "Machinery Maintenance"],
              ["/services#project-support", "Project & Site Support"],
            ].map(([href, label]) => (
              <li key={`${href}-${label}`}>
                <a href={href} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
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
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={companyPhoneHref} className="hover:text-primary">
                {companyPhoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${companyEmail}`} className="hover:text-primary">
                {companyEmail}
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 size-4 shrink-0 text-primary" />
              www.ullasco.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x relative flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 md:flex-row">
          <p>
            Copyright {new Date().getFullYear()} Ullasco for Light & Heavy Equipment & Machinery Co.
            W.L.L.
          </p>
          <p>Kuwait / GCC</p>
        </div>
      </div>
    </footer>
  );
}
