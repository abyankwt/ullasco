import { createFileRoute } from "@tanstack/react-router";
import { Building2, Factory, Truck, Hammer, Forklift, Cog } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/components/CtaBlock";
import projectsImg from "@/assets/projects.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Industries Served | Ullasco Kuwait" },
      { name: "description", content: "Industries Ullasco supports — construction, industrial facilities, logistics, infrastructure, equipment movement, and fleet operations." },
      { property: "og:title", content: "Industries Served — Ullasco" },
      { property: "og:description", content: "Construction, industrial, logistics, infrastructure and fleet operations." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const industries = [
  { icon: Hammer, t: "Construction Sites", d: "Equipment, fleet and transport support for active construction operations." },
  { icon: Factory, t: "Industrial Facilities", d: "Reliable machinery and maintenance services for industrial environments." },
  { icon: Truck, t: "Logistics Operations", d: "Fleet and transport coordination for logistics-driven businesses." },
  { icon: Building2, t: "Infrastructure Works", d: "Equipment and project support across infrastructure developments." },
  { icon: Forklift, t: "Equipment Movement", d: "Coordinated transport for machinery and equipment across Kuwait." },
  { icon: Cog, t: "Fleet Operation Support", d: "Practical fleet management support for operational businesses." },
];

function ProjectsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Industries we support"
        title="Industries Served by Ullasco"
        subtitle="Practical, project-ready support for businesses across construction, industrial, logistics and infrastructure sectors in Kuwait."
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <img src={projectsImg} alt="Industrial project site" width={1280} height={896} loading="lazy"
              className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" />
            <div>
              <span className="eyebrow">Project-ready</span>
              <h2 className="heading-lg mt-3">Built Around Real Site Needs</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Every industry has different operational demands. Ullasco supports clients with equipment access,
                fleet coordination, transport, and maintenance services aligned to the realities of their work.
              </p>
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((it) => (
              <div key={it.t} className="card-surface p-7">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-navy text-white">
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
