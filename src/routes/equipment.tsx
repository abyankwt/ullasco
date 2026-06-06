import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ConstructionIcon, Truck, Wrench, HardHat, Cog, Container } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/components/CtaBlock";
import fleetImg from "@/assets/fleet-yard.jpg";
import { SeoJsonLd, SeoSchema, breadcrumbJsonLd, seoHead, servicesItemListJsonLd } from "@/lib/seo";

const pageSeo = {
  title: "Equipment & Fleet Rental Categories | Ullasco Kuwait",
  description:
    "Review Ullasco equipment and fleet support categories including heavy equipment, light equipment, transport fleet, maintenance support, and site support in Kuwait.",
  path: "/equipment",
  image: fleetImg,
  imageAlt: "Ullasco heavy equipment and transport fleet available for Kuwait projects",
  keywords: [
    "heavy equipment rental Kuwait",
    "light equipment rental Kuwait",
    "crane rental Kuwait",
    "excavator rental Kuwait",
    "fleet rental Kuwait",
    "transport fleet Kuwait",
  ],
};

export const Route = createFileRoute("/equipment")({
  head: () => seoHead(pageSeo),
  component: EquipmentPage,
});

type Cat =
  | "All"
  | "Heavy Equipment"
  | "Light Equipment"
  | "Transport Fleet"
  | "Maintenance Support"
  | "Site Support";

const items: { name: string; cat: Exclude<Cat, "All">; icon: typeof Truck }[] = [
  { name: "Mobile Cranes", cat: "Heavy Equipment", icon: ConstructionIcon },
  { name: "Excavators", cat: "Heavy Equipment", icon: ConstructionIcon },
  { name: "Wheel Loaders", cat: "Heavy Equipment", icon: ConstructionIcon },
  { name: "Dump Trucks", cat: "Heavy Equipment", icon: Truck },
  { name: "Compact Tools", cat: "Light Equipment", icon: HardHat },
  { name: "Generators", cat: "Light Equipment", icon: HardHat },
  { name: "Lighting Towers", cat: "Light Equipment", icon: HardHat },
  { name: "Compressors", cat: "Light Equipment", icon: HardHat },
  { name: "Flatbed Trailers", cat: "Transport Fleet", icon: Truck },
  { name: "Lowbed Trailers", cat: "Transport Fleet", icon: Truck },
  { name: "Pickup Fleet", cat: "Transport Fleet", icon: Truck },
  { name: "Service Vans", cat: "Transport Fleet", icon: Container },
  { name: "Maintenance Vehicles", cat: "Maintenance Support", icon: Wrench },
  { name: "Service Tooling", cat: "Maintenance Support", icon: Wrench },
  { name: "Inspection Support", cat: "Maintenance Support", icon: Wrench },
  { name: "Site Coordination", cat: "Site Support", icon: Cog },
  { name: "Operator Support", cat: "Site Support", icon: Cog },
  { name: "Logistics Support", cat: "Site Support", icon: Cog },
];

const cats: Cat[] = [
  "All",
  "Heavy Equipment",
  "Light Equipment",
  "Transport Fleet",
  "Maintenance Support",
  "Site Support",
];

function EquipmentPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <PageLayout>
      <SeoSchema page={pageSeo}>
        <SeoJsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Equipment & Fleet", path: "/equipment" },
            ]),
            servicesItemListJsonLd(
              cats
                .filter((cat) => cat !== "All")
                .map((cat) => ({
                  name: `${cat} support`,
                  description: `Ullasco provides ${cat.toLowerCase()} coordination and availability support for project requirements in Kuwait.`,
                  path: "/equipment",
                })),
            ),
          ]}
        />
      </SeoSchema>

      <PageHero
        eyebrow="Equipment & Fleet"
        title="Equipment Support Built for Real Site Demands"
        subtitle="Tell us your requirement and we will confirm availability for your project. Availability may vary based on project requirements."
        image={fleetImg}
        imageAlt="Ullasco heavy equipment and transport fleet in Kuwait"
        highlights={["Heavy equipment", "Transport fleet", "Maintenance support"]}
      >
        <Link to="/contact" className="btn-primary">
          Enquire Availability <ArrowRight className="size-4" />
        </Link>
      </PageHero>

      <section className="section-y industrial-band">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary shadow-[inset_0_-2px_0_rgba(0,0,0,0.14)]"
                    : "bg-white text-charcoal border-border hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((it) => (
              <div key={it.name} className="card-surface flex min-h-56 flex-col p-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-11 items-center justify-center rounded-md bg-navy text-white">
                    <it.icon className="size-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase text-primary">{it.cat}</span>
                </div>
                <h3 className="mt-5 text-lg">{it.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  Contact our team to confirm availability.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Enquire <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </PageLayout>
  );
}
