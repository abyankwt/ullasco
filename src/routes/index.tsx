import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Cog,
  ConstructionIcon,
  Container,
  HardHat,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaBlock } from "@/components/CtaBlock";
import { OptimizedImage } from "@/components/OptimizedImage";
import heroImg from "@/assets/hero-equipment.jpg";
import fleetImg from "@/assets/fleet-yard.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";
import transportImg from "@/assets/transport.jpg";
import { SeoJsonLd, SeoSchema, breadcrumbJsonLd, seoHead, servicesItemListJsonLd } from "@/lib/seo";

const pageSeo = {
  title: "Ullasco Equipments & Machinery | Equipment Rental Kuwait",
  description:
    "Ullasco provides light and heavy equipment rental, machinery rental, fleet solutions, transport services, and machinery maintenance in Kuwait.",
  path: "/",
  image: heroImg,
  imageAlt: "Heavy equipment rental machinery operating on a construction site in Kuwait",
  keywords: [
    "equipment rental Kuwait",
    "heavy equipment rental Kuwait",
    "machinery rental Kuwait",
    "fleet solutions Kuwait",
    "transport services Kuwait",
    "machinery maintenance Kuwait",
    "Ullasco Kuwait",
  ],
};

export const Route = createFileRoute("/")({
  head: () => seoHead(pageSeo),
  component: HomePage,
});

const services = [
  {
    icon: HardHat,
    title: "Light Equipment Rental",
    desc: "Flexible rental support for smaller project needs, site operations, and daily work requirements.",
    href: "/services#equipment-rental",
    cta: "Explore light equipment support",
  },
  {
    icon: ConstructionIcon,
    title: "Heavy Equipment Rental",
    desc: "Reliable access to heavy machinery for construction, infrastructure, and industrial operations.",
    href: "/services#equipment-rental",
    cta: "Explore equipment rental services",
  },
  {
    icon: Truck,
    title: "Fleet Solutions",
    desc: "Organized vehicle and equipment movement for businesses that need dependable fleet support.",
    href: "/services#fleet-solutions",
    cta: "View fleet solutions",
  },
  {
    icon: Container,
    title: "Transport Services",
    desc: "Transport coordination for equipment, materials, and operational requirements across Kuwait.",
    href: "/services#transport-services",
    cta: "View transport services",
  },
  {
    icon: Wrench,
    title: "Machinery Maintenance",
    desc: "Preventive and corrective maintenance support to keep machinery and fleet assets operating safely.",
    href: "/services#maintenance-services",
    cta: "Learn about maintenance support",
  },
  {
    icon: Cog,
    title: "Project & Site Support",
    desc: "Practical equipment and operational support for active project sites and business requirements.",
    href: "/services#project-support",
    cta: "See project support options",
  },
];

const equipment = [
  "Cranes",
  "Trucks",
  "Loaders",
  "Excavation Support",
  "Site Machinery",
  "Fleet Vehicles",
  "Maintenance Tools",
  "Transport Assets",
];

const whyUs = [
  {
    icon: MapPin,
    title: "Kuwait-based knowledge",
    desc: "Local operational understanding of Kuwait's project environments and logistics.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable equipment & fleet",
    desc: "Dependable machinery access matched to your project requirements.",
  },
  {
    icon: Sparkles,
    title: "Professional coordination",
    desc: "Clear communication, scheduling, and on-the-ground service handling.",
  },
  {
    icon: Wrench,
    title: "Maintenance-focused mindset",
    desc: "Service-driven approach keeps assets working safely on every project.",
  },
];

const industries = [
  "Construction",
  "Infrastructure",
  "Oil & Gas Support",
  "Industrial Facilities",
  "Logistics & Transport",
  "Government & Private Projects",
];

const steps = [
  { n: "01", title: "Send Requirement", desc: "Share your project, equipment, or service needs." },
  {
    n: "02",
    title: "Equipment / Fleet Review",
    desc: "We review availability and the right fit for your operation.",
  },
  { n: "03", title: "Quote & Scheduling", desc: "Clear pricing and a confirmed schedule." },
  {
    n: "04",
    title: "Delivery / Service Support",
    desc: "On-site support and ongoing coordination throughout.",
  },
];

function HomePage() {
  return (
    <PageLayout>
      <SeoSchema page={pageSeo}>
        <SeoJsonLd
          data={[
            breadcrumbJsonLd([{ name: "Home", path: "/" }]),
            servicesItemListJsonLd(
              services.map((service) => ({
                name: service.title,
                description: service.desc,
                path: service.href,
              })),
            ),
          ]}
        />
      </SeoSchema>

      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 -z-10">
          <OptimizedImage
            src={heroImg}
            alt="Heavy equipment rental machinery operating on a construction site in Kuwait"
            width={1920}
            height={1080}
            sizes="100vw"
            priority
            className="size-full object-cover bg-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/45" />
        </div>
        <div className="container-x py-24 md:py-36 lg:py-40">
          <span className="eyebrow text-primary fade-up">Kuwait / Equipment Operations</span>
          <h1 className="heading-xl text-white mt-5 max-w-5xl fade-up-delay-1">
            Heavy Equipment, Fleet and Maintenance Support for Real Project Sites
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/86 md:text-lg fade-up-delay-2">
            Ullasco supports construction, industrial and logistics teams with equipment rental,
            transport coordination, fleet support and machinery maintenance across Kuwait.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row fade-up-delay-3">
            <Link to="/services" className="btn-primary">
              Explore our equipment rental services <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Contact Ullasco for a project quote
            </Link>
          </div>
          <ul className="mt-12 grid max-w-4xl gap-3 text-sm text-white/86 sm:grid-cols-2 lg:grid-cols-4 fade-up-delay-3">
            {[
              "Light & heavy equipment",
              "Fleet and transport",
              "Maintenance response",
              "Kuwait-based support",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 border-l-2 border-primary bg-white/[0.055] px-4 py-3 backdrop-blur"
              >
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y industrial-band">
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">About Ullasco</span>
            <h2 className="heading-lg mt-3">
              A Machinery and Fleet Partner Built Around Site Reality
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Established in 2019, Ullasco delivers dependable equipment, fleet, transport, and
              maintenance solutions across Kuwait. We support businesses with reliable machinery
              access, professional coordination, and practical site-ready service.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                { v: "2019", l: "Established" },
                { v: "Kuwait", l: "Operations Base" },
                { v: "24/7", l: "Coordination" },
                { v: "GCC", l: "Reach" },
              ].map((stat) => (
                <div key={stat.l} className="card-surface p-5">
                  <div className="font-display text-2xl font-bold text-navy">{stat.v}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline-navy mt-7">
              Learn about Ullasco <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <OptimizedImage
              src={fleetImg}
              alt="Ullasco fleet and transport support for project operations"
              width={1280}
              height={896}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="industrial-media aspect-[4/3] h-auto w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 bg-navy/88 p-3 text-white backdrop-blur">
              <div>
                <div className="text-xs text-white/62">Core support</div>
                <div className="font-display font-semibold">Fleet + equipment</div>
              </div>
              <div>
                <div className="text-xs text-white/62">Service model</div>
                <div className="font-display font-semibold">Coordinated delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y industrial-band bg-muted/45">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="What we do"
            title="Our Core Services"
            subtitle="From rental to maintenance, we handle the machinery, fleet, and transport requirements that keep your project moving."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="card-surface group flex min-h-64 flex-col p-7"
              >
                <div className="icon-box transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2">
                  {service.cta} <ArrowRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Equipment & Fleet"
            title="Equipment Support Built for Real Site Demands"
            subtitle="Practical machinery, transport, and maintenance assets to support active projects."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {equipment.map((item, index) => (
              <div key={item} className="card-surface min-h-36 p-6 text-center">
                <div className="mx-auto inline-flex size-12 items-center justify-center rounded-md bg-navy font-display text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 font-display font-semibold text-navy">{item}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            Availability may vary based on project requirements. Contact our team for current
            equipment and fleet support.
          </p>
          <div className="mt-7 flex justify-center">
            <Link to="/equipment" className="btn-primary">
              Explore available equipment and fleet categories <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 pattern-site-grid opacity-40" aria-hidden />
        <div className="container-x relative">
          <span className="eyebrow text-primary">Why Ullasco</span>
          <h2 className="heading-lg mt-3 max-w-2xl text-white">Why Companies Work With Ullasco</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="dark-card min-h-56 p-6 transition-colors hover:bg-white/10"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="Industries Served" title="Supporting Multiple Industries" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry}
                to="/industries"
                className="card-surface group flex min-h-24 items-center gap-4 p-6"
              >
                <div className="size-2.5 shrink-0 rounded-full bg-primary" />
                <span className="font-display font-semibold text-navy">{industry}</span>
                <ArrowRight className="ml-auto size-4 text-primary opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y industrial-band bg-muted/45">
        <div className="container-x relative">
          <SectionHeader eyebrow="How it works" title="Clear Coordination From Enquiry to Site" />
          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            <div
              className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-border md:block"
              aria-hidden
            />
            {steps.map((step) => (
              <li key={step.n} className="relative">
                <div className="inline-flex size-14 items-center justify-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground shadow-md">
                  {step.n}
                </div>
                <h3 className="mt-5 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <OptimizedImage
              src={maintenanceImg}
              alt="Machinery maintenance service for construction equipment"
              width={1280}
              height={896}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="industrial-media aspect-[4/3] h-auto w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden items-center gap-3 rounded-md bg-primary px-5 py-4 text-primary-foreground shadow-xl md:flex">
              <Clock className="size-5" />
              <span className="font-display font-semibold">Fast Response</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Maintenance mindset</span>
            <h2 className="heading-lg mt-3">Built on Reliability Since 2019</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Ullasco for Light & Heavy Equipment & Machinery Co. W.L.L. has built its reputation
              through reliable service, practical equipment support, and professional client
              relationships in Kuwait.
            </p>
            <Link to="/maintenance" className="btn-primary mt-7">
              Learn about our maintenance support <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="eyebrow">Transport support</span>
            <h2 className="heading-lg mt-3">
              Moving Machinery, Materials and Fleet Assets Across Kuwait
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Transport coordination is planned around site access, schedules and equipment
              requirements, helping clients reduce friction between yard, road and project location.
            </p>
            <a href="/services#transport-services" className="btn-outline-navy mt-7">
              View fleet and transport solutions <ArrowRight className="size-4" />
            </a>
          </div>
          <OptimizedImage
            src={transportImg}
            alt="Heavy equipment transport service using a flatbed truck in Kuwait"
            width={1280}
            height={896}
            sizes="(min-width: 1024px) 55vw, 100vw"
            loading="lazy"
            className="industrial-media aspect-[16/10] w-full object-cover"
          />
        </div>
      </section>

      <CtaBlock />
    </PageLayout>
  );
}
