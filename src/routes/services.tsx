import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/components/CtaBlock";
import { OptimizedImage } from "@/components/OptimizedImage";
import fleetImg from "@/assets/fleet-yard.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";
import transportImg from "@/assets/transport.jpg";
import { SeoJsonLd, SeoSchema, breadcrumbJsonLd, seoHead, servicesItemListJsonLd } from "@/lib/seo";

const pageSeo = {
  title: "Equipment Rental, Fleet & Maintenance Services | Ullasco Kuwait",
  description:
    "Explore Ullasco services for equipment rental, machinery rental, fleet solutions, transport services, maintenance, and project support in Kuwait.",
  path: "/services",
  image: fleetImg,
  imageAlt: "Ullasco fleet and equipment rental support for project operations in Kuwait",
  keywords: [
    "equipment rental services Kuwait",
    "fleet solutions Kuwait",
    "transport services Kuwait",
    "project support Kuwait",
    "machinery maintenance services Kuwait",
  ],
};

export const Route = createFileRoute("/services")({
  head: () => seoHead(pageSeo),
  component: ServicesPage,
});

const sections = [
  {
    id: "equipment-rental",
    title: "Equipment Rental",
    intro:
      "Flexible rental of light and heavy machinery for construction, industrial and project operations across Kuwait.",
    benefits: [
      "Access to the right equipment",
      "Flexible rental terms",
      "Site-ready delivery support",
      "Coordinated scheduling",
    ],
    industries: ["Construction", "Infrastructure", "Industrial Facilities", "Project Operations"],
    image: fleetImg,
  },
  {
    id: "fleet-solutions",
    title: "Fleet Solutions",
    intro:
      "Organized fleet support for businesses that require coordinated vehicle and equipment movement.",
    benefits: [
      "Structured fleet coordination",
      "Operational efficiency",
      "Scalable support",
      "Reliable scheduling",
    ],
    industries: ["Logistics", "Transport Operations", "Industrial Sites", "Project Contractors"],
    image: fleetImg,
  },
  {
    id: "transport-services",
    title: "Transport Services",
    intro:
      "Transport coordination for equipment, materials, and operational requirements across Kuwait.",
    benefits: [
      "Equipment & material transport",
      "Coordinated logistics",
      "Timely delivery support",
      "Cross-Kuwait coverage",
    ],
    industries: ["Construction", "Infrastructure", "Logistics", "Industrial Facilities"],
    image: transportImg,
  },
  {
    id: "maintenance-services",
    title: "Maintenance Services",
    intro:
      "Preventive and corrective maintenance support to keep machinery and fleet assets operating safely.",
    benefits: [
      "Preventive maintenance",
      "Corrective service support",
      "Reduced downtime",
      "Maintenance coordination",
    ],
    industries: ["Equipment Operators", "Fleet Owners", "Industrial Facilities", "Project Sites"],
    image: maintenanceImg,
  },
  {
    id: "project-support",
    title: "Project Support",
    intro:
      "Practical equipment and operational support for active project sites and business requirements.",
    benefits: [
      "Site-ready coordination",
      "Equipment & fleet alignment",
      "Responsive support",
      "Long-term partnership",
    ],
    industries: [
      "Government & Private Projects",
      "Construction",
      "Oil & Gas Support",
      "Infrastructure",
    ],
    image: fleetImg,
  },
];

function ServicesPage() {
  return (
    <PageLayout>
      <SeoSchema page={pageSeo}>
        <SeoJsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
            servicesItemListJsonLd(
              sections.map((section) => ({
                name: section.title,
                description: section.intro,
                path: `/services#${section.id}`,
              })),
            ),
          ]}
        />
      </SeoSchema>

      <PageHero
        eyebrow="Our services"
        title="Equipment, Fleet, Transport & Maintenance Services"
        subtitle="A complete range of equipment and operational services for construction, industrial and project-based clients across Kuwait."
        image={fleetImg}
        imageAlt="Ullasco fleet and transport support for project operations"
        highlights={["Rental", "Transport", "Maintenance"]}
      >
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/15 transition"
            >
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="section-y industrial-band">
        <div className="container-x space-y-16">
          {sections.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="relative grid lg:grid-cols-[0.9fr_1.35fr] gap-10 items-start scroll-mt-24"
            >
              <div>
                <div className="text-6xl font-display font-bold text-primary/20">0{i + 1}</div>
                <h2 className="heading-lg mt-2">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.intro}</p>
                <Link to="/contact" className="btn-primary mt-6">
                  Enquire about this service <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <OptimizedImage
                  src={s.image}
                  alt={`${s.title} for construction and industrial project operations in Kuwait`}
                  width={1280}
                  height={896}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  loading="lazy"
                  className="industrial-media aspect-[4/3] w-full object-cover sm:col-span-2"
                />
                <div className="card-surface min-h-60 p-6">
                  <h3 className="text-base font-display font-semibold text-navy uppercase">
                    Key Benefits
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-charcoal">
                        <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-surface min-h-60 p-6 bg-navy text-white border-navy">
                  <h3 className="text-base font-display font-semibold text-white uppercase">
                    Suitable Industries
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.industries.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-white/85">
                        <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> {b}
                      </li>
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
