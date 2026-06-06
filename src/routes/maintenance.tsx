import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wrench,
  ShieldCheck,
  ClipboardList,
  Truck,
  AlertTriangle,
  Cog,
  ArrowRight,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/components/CtaBlock";
import { OptimizedImage } from "@/components/OptimizedImage";
import maintenanceImg from "@/assets/maintenance.jpg";
import { SeoJsonLd, SeoSchema, breadcrumbJsonLd, seoHead, serviceJsonLd } from "@/lib/seo";

const pageSeo = {
  title: "Machinery Maintenance Services | Ullasco Kuwait",
  description:
    "Ullasco provides preventive maintenance, corrective maintenance, fleet inspection, breakdown response support, and service coordination for machinery in Kuwait.",
  path: "/maintenance",
  image: maintenanceImg,
  imageAlt: "Machinery maintenance service for construction equipment in Kuwait",
  keywords: [
    "machinery maintenance Kuwait",
    "equipment maintenance Kuwait",
    "fleet inspection Kuwait",
    "preventive maintenance Kuwait",
    "corrective maintenance Kuwait",
    "breakdown response Kuwait",
  ],
};

export const Route = createFileRoute("/maintenance")({
  head: () => seoHead(pageSeo),
  component: MaintenancePage,
});

const items = [
  {
    icon: ShieldCheck,
    t: "Preventive Maintenance",
    d: "Scheduled service to keep equipment running safely and reduce unexpected downtime.",
  },
  {
    icon: Wrench,
    t: "Corrective Maintenance",
    d: "Targeted repair and corrective service to restore machinery to working condition.",
  },
  {
    icon: ClipboardList,
    t: "Fleet Inspection Support",
    d: "Routine inspection support to track condition and performance of fleet assets.",
  },
  {
    icon: Cog,
    t: "Machinery Service Coordination",
    d: "Organized service coordination to keep your equipment serviced on schedule.",
  },
  {
    icon: AlertTriangle,
    t: "Breakdown Response Support",
    d: "Responsive support when equipment or fleet assets require urgent attention.",
  },
  {
    icon: Truck,
    t: "Maintenance Record Support",
    d: "Support with maintenance records to keep service history clear and accessible.",
  },
];

function MaintenancePage() {
  return (
    <PageLayout>
      <SeoSchema page={pageSeo}>
        <SeoJsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Maintenance", path: "/maintenance" },
            ]),
            serviceJsonLd({
              name: "Machinery Maintenance Services",
              description: pageSeo.description,
              path: "/maintenance",
            }),
          ]}
        />
      </SeoSchema>

      <PageHero
        eyebrow="Maintenance"
        title="Reliable Maintenance for Machinery & Fleet"
        subtitle="Professional preventive and corrective maintenance support designed to keep equipment and fleet assets operating safely on your projects."
        image={maintenanceImg}
        imageAlt="Machinery maintenance service for construction equipment"
        highlights={["Preventive service", "Corrective support", "Fleet inspection"]}
      />

      <section className="section-y industrial-band">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <OptimizedImage
            src={maintenanceImg}
            alt="Machinery maintenance service for construction equipment"
            width={1280}
            height={896}
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="lazy"
            className="industrial-media w-full h-auto object-cover aspect-[4/3]"
          />
          <div>
            <span className="eyebrow">Safety-focused service</span>
            <h2 className="heading-lg mt-3">Maintenance That Protects Your Operation</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Equipment uptime drives project performance. Ullasco delivers a maintenance-focused
              service mindset across machinery and fleet assets, with preventive scheduling,
              corrective response, and clear coordination throughout the service cycle.
            </p>
            <Link to="/contact" className="btn-primary mt-6">
              Request Maintenance Support <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y industrial-band bg-muted/45">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What we cover</span>
            <h2 className="heading-lg mt-3">Maintenance Services Overview</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <div key={it.t} className="card-surface min-h-56 p-6">
                <div className="icon-box">
                  <it.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </PageLayout>
  );
}
