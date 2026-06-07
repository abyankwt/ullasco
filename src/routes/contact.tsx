import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Briefcase, CheckCircle2, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import {
  companyAddress,
  companyEmail,
  companyMapEmbedUrl,
  companyMapUrl,
  companyPhoneDisplay,
  companyPhoneHref,
  companyWhatsAppHref,
} from "@/lib/company";
import fleetImg from "@/assets/fleet-yard.jpg";
import { SeoJsonLd, SeoSchema, breadcrumbJsonLd, seoHead } from "@/lib/seo";

const pageSeo = {
  title: "Contact Ullasco | Equipment Rental & Maintenance Kuwait",
  description:
    "Contact Ullasco Equipments & Machinery for equipment rental, fleet, transport, and machinery maintenance enquiries in Kuwait.",
  path: "/contact",
  image: fleetImg,
  imageAlt: "Ullasco fleet and transport support for project operations in Kuwait",
  keywords: [
    "contact Ullasco",
    "equipment rental quote Kuwait",
    "machinery rental enquiry Kuwait",
    "fleet support quote Kuwait",
    "maintenance service quote Kuwait",
  ],
};

export const Route = createFileRoute("/contact")({
  head: () => seoHead(pageSeo),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = (name: string) => String(formData.get(name) ?? "").trim();
    const subject = `Quote Request from ${value("name") || "Website"}`;
    const body = [
      "New quote request from Ullasco website:",
      "",
      `Name: ${value("name")}`,
      `Company Name: ${value("company") || "Not provided"}`,
      `Phone Number: ${value("phone")}`,
      `Email: ${value("email")}`,
      `Service Required: ${value("service")}`,
      "",
      "Message:",
      value("message"),
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:${companyEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <PageLayout>
      <SeoSchema page={pageSeo}>
        <SeoJsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ])}
        />
      </SeoSchema>

      <PageHero
        eyebrow="Contact"
        title="Request Equipment, Fleet or Maintenance Support"
        subtitle="Share the requirement, location and timeline. Ullasco will respond with availability, pricing direction and the next operational step."
        image={fleetImg}
        imageAlt="Ullasco fleet and transport support for project operations"
        highlights={["Quote support", "Availability check", "Fast coordination"]}
      />

      <section className="section-y industrial-band">
        <div className="container-x relative grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="card-surface p-6 md:p-10">
            <h2 className="text-2xl">Get Quote & Availability</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Include the equipment type, project location, expected duration and required date.
            </p>

            {submitted ? (
              <div className="mt-8 flex gap-4 rounded-md border border-primary/30 bg-primary/10 p-6">
                <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg text-navy">Thank you</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your email app should open with the quote request addressed to Ullasco. For
                    urgent requirements, call or send the same details on WhatsApp.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
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
                      Select a service...
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
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className={inputCls}
                    placeholder="Equipment needed, site location, dates, quantity, and any transport or maintenance requirement."
                  />
                </Field>
                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:flex-wrap">
                  <button type="submit" className="btn-primary">
                    Send Quote Request
                  </button>
                  <a
                    href={companyWhatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageCircle className="size-4" /> WhatsApp Requirement
                  </a>
                  <a href={companyPhoneHref} className="btn-outline-navy">
                    <Phone className="size-4" /> Call Now
                  </a>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="dark-card p-6 text-white">
              <h2 className="text-xl text-white">Prefer direct coordination?</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Call or WhatsApp the requirement for faster availability checks on active site,
                transport or maintenance needs.
              </p>
              <a href={companyPhoneHref} className="btn-outline-light mt-5 w-full">
                <Phone className="size-4" /> Call Ullasco
              </a>
            </div>
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
              lines={[companyEmail]}
              href={`mailto:${companyEmail}`}
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

      <section className="pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-lg border border-border shadow-card">
            <iframe
              title="Ullasco location in Kuwait"
              src={companyMapEmbedUrl}
              className="block h-[420px] w-full"
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
            Open location in Google Maps
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

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
      <span className="mb-1.5 block text-sm font-medium text-navy">
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
    <div className="card-surface flex min-h-28 items-start gap-4 p-5">
      <div className="icon-box shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase text-muted-foreground">{title}</div>
        {lines.map((line) => (
          <div key={line} className="mt-0.5 font-display font-semibold text-navy">
            {line}
          </div>
        ))}
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition hover:-translate-y-0.5">
      {inner}
    </a>
  ) : (
    inner
  );
}
