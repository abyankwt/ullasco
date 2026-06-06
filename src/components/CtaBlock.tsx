import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { companyPhoneHref, companyWhatsAppHref } from "@/lib/company";

export function CtaBlock() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy text-white p-10 md:p-16">
          <div className="absolute inset-0 pattern-diagonal opacity-30" aria-hidden />
          <div
            className="absolute -right-20 -bottom-20 size-80 rounded-full bg-primary/30 blur-3xl"
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <span className="eyebrow text-primary">Get in touch</span>
              <h2 className="heading-lg text-white mt-3">
                Need Equipment, Fleet or Maintenance Support?
              </h2>
              <p className="mt-4 text-white/80 max-w-xl leading-relaxed">
                Contact Ullasco today to discuss your project, rental, transport, or maintenance
                requirements. Our team responds quickly with clear coordination.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link to="/contact" className="btn-primary w-full justify-center lg:w-56">
                Request a Quote <ArrowRight className="size-4" />
              </Link>
              <a
                href={companyWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center lg:w-56"
              >
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
              <a
                href={companyPhoneHref}
                className="btn-outline-light w-full justify-center lg:w-56"
              >
                <Phone className="size-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
