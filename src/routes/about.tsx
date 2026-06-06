import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
  Award,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/components/CtaBlock";
import { OptimizedImage } from "@/components/OptimizedImage";
import projectsImg from "@/assets/projects.jpg";
import { SeoJsonLd, SeoSchema, breadcrumbJsonLd, seoHead } from "@/lib/seo";

const pageSeo = {
  title: "About Ullasco | Equipment & Machinery Company Kuwait",
  description:
    "Learn about Ullasco Equipments & Machinery, a Kuwait-based provider of equipment rental, fleet, transport, and maintenance services since 2019.",
  path: "/about",
  image: projectsImg,
  imageAlt: "Construction and industrial equipment project site in Kuwait",
  keywords: [
    "Ullasco Equipments Machinery",
    "equipment company Kuwait",
    "machinery company Kuwait",
    "equipment rental company Kuwait",
    "Ullasco Kuwait",
  ],
};

export const Route = createFileRoute("/about")({
  head: () => seoHead(pageSeo),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    t: "Reliability",
    d: "Consistent service that clients can count on, project after project.",
  },
  {
    icon: ShieldCheck,
    t: "Safety",
    d: "Safe handling of equipment and fleet operations on every site.",
  },
  {
    icon: Award,
    t: "Professionalism",
    d: "Clear coordination, transparent communication, and trusted delivery.",
  },
  {
    icon: HeartHandshake,
    t: "Responsiveness",
    d: "Fast turnaround on enquiries, quotes, and operational support.",
  },
  {
    icon: CheckCircle2,
    t: "Practical Support",
    d: "Site-ready solutions matched to your real project conditions.",
  },
  {
    icon: HeartHandshake,
    t: "Long-Term Partnerships",
    d: "Relationships built on trust, performance, and continued service.",
  },
];

function AboutPage() {
  return (
    <PageLayout>
      <SeoSchema page={pageSeo}>
        <SeoJsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ])}
        />
      </SeoSchema>

      <PageHero
        eyebrow="About us"
        title="About Ullasco Equipments & Machinery"
        subtitle="Ullasco for Light & Heavy Equipment & Machinery Co. W.L.L. is a Kuwait-based company providing equipment rental, fleet solutions, transport, and maintenance services. Since 2019, the company has supported clients with dependable machinery access, practical coordination, and professional service delivery."
        image={projectsImg}
        imageAlt="Construction and industrial equipment project site in Kuwait"
        highlights={[
          "Established in 2019",
          "Kuwait-based operations",
          "Equipment, fleet and maintenance",
        ]}
      />

      <section className="section-y industrial-band">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Company Overview</span>
            <h2 className="heading-lg mt-3">A Kuwait-Based Equipment Partner</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We support construction, industrial, logistics, infrastructure, and project-based
              clients across Kuwait and the GCC. Our focus is providing reliable equipment,
              organized fleet support, transport coordination, and maintenance services that keep
              operations moving safely and efficiently.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From light tools to heavy machinery, our team ensures every requirement is met with
              practical solutions and professional service delivery.
            </p>
          </div>
          <OptimizedImage
            src={projectsImg}
            alt="Construction and industrial equipment project site in Kuwait"
            width={1280}
            height={896}
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="lazy"
            className="industrial-media w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
      </section>

      <section className="section-y industrial-band bg-muted/45">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <div className="card-surface p-8">
            <div className="icon-box">
              <Target className="size-6" />
            </div>
            <h3 className="mt-5 text-2xl">Our Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To provide reliable equipment, fleet, transport, and maintenance solutions that help
              businesses complete their operations safely and efficiently.
            </p>
          </div>
          <div className="card-surface p-8">
            <div className="inline-flex size-12 items-center justify-center rounded-md bg-navy text-white">
              <Eye className="size-6" />
            </div>
            <h3 className="mt-5 text-2xl">Our Vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To become a trusted equipment and machinery support partner for companies across
              Kuwait and the GCC.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Values</span>
            <h2 className="heading-lg mt-3">What We Stand For</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="card-surface min-h-48 p-6">
                <div className="icon-box size-10">
                  <v.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-site-grid opacity-35" aria-hidden />
        <div className="container-x relative grid lg:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow text-primary">Safety & Reliability</span>
            <h2 className="heading-lg text-white mt-3">
              Service Built on Safe, Dependable Operations
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Equipment and fleet support is only as valuable as its reliability. We focus on safe
              handling, maintained assets, and coordination that respects your project timelines.
            </p>
          </div>
          <div>
            <span className="eyebrow text-primary">Why Clients Trust Us</span>
            <h2 className="heading-lg text-white mt-3">Practical, Professional, Local</h2>
            <ul className="mt-5 space-y-3 text-white/85">
              {[
                "Kuwait-based operational knowledge",
                "Equipment, fleet and maintenance under one partner",
                "Clear coordination from enquiry to delivery",
                "Service-driven approach to long-term relationships",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                Talk to our team <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </PageLayout>
  );
}
