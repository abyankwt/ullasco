import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/components/CtaBlock";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Ullasco Equipment Rental, Fleet & Maintenance Kuwait" },
      { name: "description", content: "Equipment rental, fleet solutions, transport, maintenance, and project support services in Kuwait." },
      { property: "og:title", content: "Ullasco Services" },
      { property: "og:description", content: "Equipment, fleet, transport, maintenance and project support in Kuwait." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const sections = [
  {
    id: "equipment-rental",
    title: "Equipment Rental",
    intro: "Flexible rental of light and heavy machinery for construction, industrial and project operations across Kuwait.",
    benefits: ["Access to the right equipment", "Flexible rental terms", "Site-ready delivery support", "Coordinated scheduling"],
    industries: ["Construction", "Infrastructure", "Industrial Facilities", "Project Operations"],
  },
  {
    id: "fleet-solutions",
    title: "Fleet Solutions",
    intro: "Organized fleet support for businesses that require coordinated vehicle and equipment movement.",
    benefits: ["Structured fleet coordination", "Operational efficiency", "Scalable support", "Reliable scheduling"],
    industries: ["Logistics", "Transport Operations", "Industrial Sites", "Project Contractors"],
  },
  {
    id: "transport-services",
    title: "Transport Services",
    intro: "Transport coordination for equipment, materials, and operational requirements across Kuwait.",
    benefits: ["Equipment & material transport", "Coordinated logistics", "Timely delivery support", "Cross-Kuwait coverage"],
    industries: ["Construction", "Infrastructure", "Logistics", "Industrial Facilities"],
  },
  {
    id: "maintenance-services",
    title: "Maintenance Services",
    intro: "Preventive and corrective maintenance support to keep machinery and fleet assets operating safely.",
    benefits: ["Preventive maintenance", "Corrective service support", "Reduced downtime", "Maintenance coordination"],
    industries: ["Equipment Operators", "Fleet Owners", "Industrial Facilities", "Project Sites"],
  },
  {
    id: "project-support",
    title: "Project Support",
    intro: "Practical equipment and operational support for active project sites and business requirements.",
    benefits: ["Site-ready coordination", "Equipment & fleet alignment", "Responsive support", "Long-term partnership"],
    industries: ["Government & Private Projects", "Construction", "Oil & Gas Support", "Infrastructure"],
  },
];

function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our services"
        title="Equipment, Fleet, Transport & Maintenance Services"
        subtitle="A complete range of equipment and operational services for construction, industrial and project-based clients across Kuwait."
      >
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/15 transition">
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-x space-y-16">
          {sections.map((s, i) => (
            <article key={s.id} id={s.id} className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start scroll-mt-24">
              <div>
                <div className="text-6xl font-display font-bold text-primary/20">0{i + 1}</div>
                <h2 className="heading-lg mt-2">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.intro}</p>
                <Link to="/contact" className="btn-primary mt-6">Enquire about this service <ArrowRight className="size-4" /></Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="card-surface p-6">
                  <h3 className="text-base font-display font-semibold text-navy uppercase tracking-wider">Key Benefits</h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-charcoal"><CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> {b}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-surface p-6 bg-navy text-white border-navy">
                  <h3 className="text-base font-display font-semibold text-white uppercase tracking-wider">Suitable Industries</h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.industries.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-white/85"><CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBlock />
    </PageLayout>
  );
}
