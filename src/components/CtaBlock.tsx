import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowRight, ClipboardCheck } from "lucide-react";
import { companyPhoneHref, companyWhatsAppHref } from "@/lib/company";
import transportImg from "@/assets/transport.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";

export function CtaBlock() {
  return (
    <section className="section-y industrial-band">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-lg bg-navy text-white shadow-[0_24px_70px_-46px_rgba(16,31,84,0.8)]">
          <div className="absolute inset-0" aria-hidden>
            <OptimizedImage
              src={transportImg}
              alt=""
              width={1280}
              height={896}
              sizes="100vw"
              loading="lazy"
              className="size-full object-cover opacity-24"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/94 to-navy/74" />
            <div className="absolute inset-0 pattern-site-grid opacity-60" />
          </div>
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1.35fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow text-primary">Get in touch</span>
              <h2 className="heading-lg text-white mt-3">
                Get Availability, Pricing, and Site Support Confirmed
              </h2>
              <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
                Send your equipment, transport, or maintenance requirement and Ullasco will respond
                with a practical next step for your project schedule.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-white/82 sm:grid-cols-3">
                {["Equipment fit", "Transport plan", "Maintenance support"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 border-l-2 border-primary pl-3"
                  >
                    <ClipboardCheck className="size-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 dark-card p-4">
              <Link to="/contact" className="btn-primary w-full justify-center">
                Contact Ullasco for a project quote <ArrowRight className="size-4" />
              </Link>
              <a
                href={companyWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <MessageCircle className="size-4" /> Send WhatsApp Requirement
              </a>
              <a href={companyPhoneHref} className="btn-outline-light w-full justify-center">
                <Phone className="size-4" /> Call for Urgent Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
