import { createFileRoute } from "@tanstack/react-router";
import { Building2, Factory, Truck, Hammer, Forklift, Cog } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/components/CtaBlock";
import { OptimizedImage } from "@/components/OptimizedImage";
import projectsImg from "@/assets/projects.jpg";
import { SeoJsonLd, SeoSchema, breadcrumbJsonLd, seoHead } from "@/lib/seo";

const pageSeo = {
  title: "Industries Served | Ullasco Equipment Services Kuwait",
  description:
    "Ullasco supports construction sites, industrial facilities, logistics operations, infrastructure works, equipment movement, and fleet operations in Kuwait.",
  path: "/industries",
  image: projectsImg,
  imageAlt: "Construction site equipment and cranes supporting industrial projects in Kuwait",
  keywords: [
    "construction equipment Kuwait",
    "industrial equipment support Kuwait",
    "logistics fleet support Kuwait",
    "infrastructure equipment Kuwait",
    "equipment movement Kuwait",
  ],
};

export const Route = createFileRoute("/industries")({
  head: () => seoHead(pageSeo),
  component: IndustriesPage,
});

const industries = [
  {
    icon: Hammer,
    t: "Construction Sites",
    d: "Equipment, fleet and transport support for active construction operations.",
  },
  {
    icon: Factory,
    t: "Industrial Facilities",
    d: "Reliable machinery and maintenance services for industrial environments.",
  },
  {
    icon: Truck,
    t: "Logistics Operations",
    d: "Fleet and transport coordination for logistics-driven businesses.",
  },
  {
    icon: Building2,
    t: "Infrastructure Works",
    d: "Equipment and project support across infrastructure developments.",
  },
  {
    icon: Forklift,
    t: "Equipment Movement",
    d: "Coordinated transport for machinery and equipment across Kuwait.",
  },
  {
    icon: Cog,
    t: "Fleet Operation Support",
    d: "Practical fleet management support for operational businesses.",
  },
];

function IndustriesPage() {
  return (
    <PageLayout>
      <SeoSchema page={pageSeo}>
        <SeoJsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries Served", path: "/industries" },
          ])}
        />
      </SeoSchema>

      <PageHero
        eyebrow="Industries we support"
        title="Industries Served by Ullasco"
        subtitle="Practical, project-ready support for businesses across construction, industrial, logistics and infrastructure sectors in Kuwait."
        image={projectsImg}
        imageAlt="Construction site equipment and cranes supporting industrial projects in Kuwait"
        highlights={["Construction", "Industrial facilities", "Logistics operations"]}
      />

      <section className="section-y industrial-band">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <OptimizedImage
              src={projectsImg}
              alt="Construction site equipment and cranes supporting industrial projects in Kuwait"
              width={1280}
              height={896}
              sizes="(min-width: 1024px) 58vw, 100vw"
              loading="lazy"
              className="industrial-media w-full h-auto object-cover aspect-[4/3]"
            />
            <div>
              <span className="eyebrow">Project-ready</span>
              <h2 className="heading-lg mt-3">Built Around Real Site Needs</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Every industry has different operational demands. Ullasco supports clients with
                equipment access, fleet coordination, transport, and maintenance services aligned to
                the realities of their work.
              </p>
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((it) => (
              <div key={it.t} className="card-surface min-h-60 p-7">
                <div className="inline-flex size-12 items-center justify-center rounded-md bg-navy text-white">
                  <it.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl">{it.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </PageLayout>
  );
}
