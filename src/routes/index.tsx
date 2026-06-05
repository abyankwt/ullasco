import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, MessageCircle, Phone, Truck, Wrench, HardHat, ConstructionIcon,
  Container, Cog, ShieldCheck, MapPin, Clock, Sparkles, CheckCircle2,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaBlock } from "@/components/CtaBlock";
import heroImg from "@/assets/hero-equipment.jpg";
import fleetImg from "@/assets/fleet-yard.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ullasco Equipments & Machinery | Equipment Rental, Fleet & Maintenance Services Kuwait" },
      { name: "description", content: "Ullasco provides light and heavy equipment rental, fleet solutions, transport, and maintenance services in Kuwait for construction, industrial, and project operations." },
      { property: "og:title", content: "Ullasco Equipments & Machinery | Kuwait" },
      { property: "og:description", content: "Light & heavy equipment rental, fleet, transport, and maintenance services in Kuwait." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: HardHat, title: "Light Equipment Rental", desc: "Flexible rental support for smaller project needs, site operations, and daily work requirements." },
  { icon: ConstructionIcon, title: "Heavy Equipment Rental", desc: "Reliable access to heavy machinery for construction, infrastructure, and industrial operations." },
  { icon: Truck, title: "Fleet Solutions", desc: "Fleet support for businesses that require organized vehicle and equipment movement." },
  { icon: Container, title: "Transport Services", desc: "Transport coordination for equipment, materials, and operational requirements across Kuwait." },
  { icon: Wrench, title: "Machinery Maintenance", desc: "Preventive and corrective maintenance support to keep machinery and fleet assets operating safely." },
  { icon: Cog, title: "Project & Site Support", desc: "Practical equipment and operational support for active project sites and business requirements." },
];

const equipment = ["Cranes","Trucks","Loaders","Excavation Support","Site Machinery","Fleet Vehicles","Maintenance Tools","Transport Assets"];

const whyUs = [
  { icon: MapPin, title: "Kuwait-based knowledge", desc: "Local operational understanding of Kuwait's project environments and logistics." },
  { icon: ShieldCheck, title: "Reliable equipment & fleet", desc: "Dependable machinery access matched to your project requirements." },
  { icon: Sparkles, title: "Professional coordination", desc: "Clear communication, scheduling, and on-the-ground service handling." },
  { icon: Wrench, title: "Maintenance-focused mindset", desc: "Service-driven approach keeps assets working safely on every project." },
];

const industries = [
  "Construction","Infrastructure","Oil & Gas Support","Industrial Facilities","Logistics & Transport","Government & Private Projects",
];

const steps = [
  { n: "01", title: "Send Requirement", desc: "Share your project, equipment, or service needs." },
  { n: "02", title: "Equipment / Fleet Review", desc: "We review availability and the right fit for your operation." },
  { n: "03", title: "Quote & Scheduling", desc: "Clear pricing and a confirmed schedule for delivery." },
  { n: "04", title: "Delivery / Service Support", desc: "On-site support and ongoing coordination throughout." },
];

function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Heavy construction equipment at a Kuwait site" width={1920} height={1080}
            className="size-full object-cover bg-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
          <div className="absolute inset-0 pattern-diagonal opacity-30" />
        </div>
        <div className="container-x py-24 md:py-36">
          <span className="eyebrow text-primary fade-up">Kuwait • Since 2019</span>
          <h1 className="heading-xl text-white mt-4 max-w-4xl fade-up-delay-1">
            Reliable Equipment, Fleet & Maintenance Solutions in Kuwait
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed fade-up-delay-2">
            Ullasco Equipments & Machinery provides light and heavy equipment rental, transport support,
            fleet solutions, and maintenance services for construction, industrial, and project operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 fade-up-delay-3">
            <Link to="/contact" className="btn-primary">Request a Quote <ArrowRight className="size-4" /></Link>
            <Link to="/services" className="btn-outline-light">Explore Services</Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/85 fade-up-delay-3">
            {["Light & Heavy Equipment","Fleet & Transport Support","Maintenance Services","Kuwait Based"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUICK OVERVIEW */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">About Ullasco</span>
            <h2 className="heading-lg mt-3">Your Trusted Machinery & Fleet Partner</h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Established in 2019, Ullasco delivers dependable equipment, fleet, transport, and maintenance
              solutions across Kuwait. We support businesses with reliable machinery access, professional
              service coordination, and practical site-ready support.
            </p>
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {[
                { v: "2019", l: "Established" },
                { v: "Kuwait", l: "Operations Base" },
                { v: "24/7", l: "Coordination" },
                { v: "GCC", l: "Reach" },
              ].map((s) => (
                <div key={s.l} className="card-surface p-5">
                  <div className="text-2xl font-bold text-navy font-display">{s.v}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-7"><Link to="/about" className="btn-outline-navy">Learn More <ArrowRight className="size-4" /></Link></div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-primary/10 rounded-3xl rotate-2" aria-hidden />
            <img src={fleetImg} alt="Crane and fleet trucks at Ullasco yard" width={1280} height={896} loading="lazy"
              className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y bg-muted/40">
        <div className="container-x">
          <SectionHeader eyebrow="What we do" title="Our Core Services"
            subtitle="From rental to maintenance, we handle the machinery, fleet, and transport requirements that keep your project moving." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="card-surface p-7 group">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT HIGHLIGHT */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="Equipment & Fleet" title="Equipment Support Built for Real Site Demands"
            subtitle="Practical machinery, transport, and maintenance assets to support active projects." />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {equipment.map((e, i) => (
              <div key={e} className="card-surface p-6 text-center">
                <div className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-navy text-white text-sm font-display font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 font-semibold text-navy font-display">{e}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            Availability may vary based on project requirements. Contact our team for current equipment and fleet support.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-y bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-diagonal opacity-20" aria-hidden />
        <div className="container-x relative">
          <span className="eyebrow text-primary">Why Ullasco</span>
          <h2 className="heading-lg text-white mt-3 max-w-2xl">Why Companies Work With Ullasco</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <w.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg text-white">{w.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="Industries Served" title="Supporting Multiple Industries" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((i) => (
              <div key={i} className="card-surface p-6 flex items-center gap-4">
                <div className="size-2.5 rounded-full bg-primary shrink-0" />
                <span className="font-display font-semibold text-navy">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-y bg-muted/40">
        <div className="container-x">
          <SectionHeader eyebrow="How it works" title="Simple, Clear & Fast Coordination" />
          <ol className="mt-14 grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-border" aria-hidden />
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-display font-bold text-lg shadow-md">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img src={maintenanceImg} alt="Ullasco maintenance technician at work" width={1280} height={896} loading="lazy"
              className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-xl">
              <Clock className="size-5" />
              <span className="font-display font-semibold">Fast Response</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">About Ullasco</span>
            <h2 className="heading-lg mt-3">Built on Reliability Since 2019</h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Ullasco for Light & Heavy Equipment & Machinery Co. W.L.L. has built its reputation through reliable
              service, practical equipment support, and a commitment to professional client relationships in Kuwait.
            </p>
            <div className="mt-7"><Link to="/about" className="btn-primary">Learn More About Ullasco <ArrowRight className="size-4" /></Link></div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </PageLayout>
  );
}
