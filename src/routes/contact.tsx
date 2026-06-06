import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Globe, MessageCircle, CheckCircle2, Briefcase } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import {
  companyAddress,
  companyMapEmbedUrl,
  companyMapUrl,
  companyPhoneDisplay,
  companyPhoneHref,
  companyWhatsAppHref,
} from "@/lib/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ullasco | Equipment, Fleet & Maintenance Kuwait" },
      {
        name: "description",
        content:
          "Contact Ullasco for equipment rental, fleet, transport, and maintenance enquiries in Kuwait. Call, WhatsApp or send a message.",
      },
      { property: "og:title", content: "Contact Ullasco" },
      {
        property: "og:description",
        content: "Get in touch for equipment, fleet, transport and maintenance support.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Equipment & Fleet Needs"
        subtitle="Share your requirement and our team will respond with availability, pricing, and a clear plan."
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* FORM */}
          <div className="card-surface p-8 md:p-10">
            <h2 className="text-2xl">Request a Quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your project and we'll get back to you.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-primary/10 border border-primary/30 p-6 flex gap-4">
                <CheckCircle2 className="size-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg text-navy">Thank you</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your message has been received. Our team will be in touch shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-5">
                <Field label="Name" required>
                  <input required name="name" className={inputCls} />
                </Field>
                <Field label="Company Name">
                  <input name="company" className={inputCls} />
                </Field>
                <Field label="Phone Number" required>
                  <input required type="tel" name="phone" className={inputCls} />
                </Field>
                <Field label="Email" required>
                  <input required type="email" name="email" className={inputCls} />
                </Field>
                <Field label="Service Required" required className="sm:col-span-2">
                  <select required name="service" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select a service…
                    </option>
                    <option>Equipment Rental</option>
                    <option>Fleet Solution</option>
                    <option>Transport Service</option>
                    <option>Maintenance Service</option>
                    <option>Project Support</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Message" required className="sm:col-span-2">
                  <textarea required name="message" rows={5} className={inputCls} />
                </Field>
                <div className="sm:col-span-2 flex flex-wrap gap-3">
                  <button type="submit" className="btn-primary">
                    Send Enquiry
                  </button>
                  <a
                    href={companyWhatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageCircle className="size-4" /> WhatsApp Us
                  </a>
                  <a href={companyPhoneHref} className="btn-outline-navy">
                    <Phone className="size-4" /> Call Now
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* CONTACT CARDS */}
          <div className="space-y-4">
            <InfoCard
              icon={MapPin}
              title="Location"
              lines={[companyAddress]}
              href={companyMapUrl}
            />
            <InfoCard
              icon={Phone}
              title="Phone"
              lines={[companyPhoneDisplay]}
              href={companyPhoneHref}
            />
            <InfoCard
              icon={Mail}
              title="Email"
              lines={["info@ullasco.com"]}
              href="mailto:info@ullasco.com"
            />
            <InfoCard icon={Globe} title="Website" lines={["www.ullasco.com"]} />
            <InfoCard
              icon={Briefcase}
              title="Business"
              lines={["Equipment, Fleet, Transport & Maintenance Services"]}
            />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-2xl overflow-hidden border border-border shadow-card">
            <iframe
              title="Ullasco location — Kuwait"
              src={companyMapEmbedUrl}
              className="w-full h-[420px] block"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={companyMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm font-semibold text-primary hover:text-navy"
          >
            Open location in Bing Maps
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

function Field({
  label,
  children,
  required,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-medium text-navy mb-1.5">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <div className="card-surface p-5 flex gap-4 items-start">
      <div className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-navy font-display font-semibold mt-0.5">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:translate-y-[-2px] transition">
      {inner}
    </a>
  ) : (
    inner
  );
}
