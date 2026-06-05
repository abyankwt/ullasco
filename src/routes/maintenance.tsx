import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, ShieldCheck, ClipboardList, Truck, AlertTriangle, Cog, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/components/CtaBlock";
import maintenanceImg from "@/assets/maintenance.jpg";

export const Route = createFileRoute("/maintenance")({
  head: () => ({
    meta: [
      { title: "Maintenance Services | Ullasco Kuwait" },
      { name: "description", content: "Preventive and corrective maintenance, fleet inspection, breakdown response and service coordination for machinery and fleet in Kuwait." },
      { property: "og:title", content: "Maintenance Services — Ullasco" },
      { property: "og:description", content: "Maintenance, inspection and breakdown response for equipment and fleet." },
      { property: "og:url", content: "/maintenance" },
    ],
    links: [{ rel: "canonical", href: "/maintenance" }],
  }),
  component: MaintenancePage,
});

const items = [
  { icon: ShieldCheck, t: "Preventive Maintenance", d: "Scheduled service to keep equipment running safely and reduce unexpected downtime." },
  { icon: Wrench, t: "Corrective Maintenance", d: "Targeted repair and corrective service to restore machinery to working condition." },
  { icon: ClipboardList, t: "Fleet Inspection Support", d: "Routine inspection support to track condition and performance of fleet assets." },
  { icon: Cog, t: "Machinery Service Coordination", d: "Organized service coordination to keep your equipment serviced on schedule." },
  { icon: AlertTriangle, t: "Breakdown Response Support", d: "Responsive support when equipment or fleet assets require urgent attention." },
  { icon: Truck, t: "Maintenance Record Support", d: "Support with maintenance records to keep service history clear and accessible." },
];

function MaintenancePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Maintenance"
        title="Reliable Maintenance for Machinery & Fleet"
        subtitle="Professional preventive and corrective maintenance support designed to keep equipment and fleet assets operating safely on your projects."
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={maintenanceImg} alt="Mechanic servicing heavy equipment" width={1280} height={896} loading="lazy"
            className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" />
          <div>
            <span className="eyebrow">Safety-focused service</span>
            <h2 className="heading-lg mt-3">Maintenance That Protects Your Operation</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Equipment uptime drives project performance. Ullasco delivers a maintenance-focused service mindset
              across machinery and fleet assets, with preventive scheduling, corrective response, and clear
              coordination throughout the service cycle.
            </p>
            <Link to="/contact" className="btn-primary mt-6">Request Maintenance Support <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-muted/40">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What we cover</span>
            <h2 className="heading-lg mt-3">Maintenance Services Overview</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <div key={it.t} className="card-surface p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
