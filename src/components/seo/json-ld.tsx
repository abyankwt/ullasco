/* eslint-disable react-refresh/only-export-components */

import {
  companyEmail,
  companyLatitude,
  companyLocality,
  companyLongitude,
  companyMapUrl,
  companyPhoneInternational,
  companyPostalCode,
  companyRegion,
  companyStreetAddress,
  socialLinks,
} from "@/lib/company";

export type JsonLdSchema = Record<string, unknown>;
export type JsonLdData = JsonLdSchema | JsonLdSchema[];

const SITE_URL = "https://www.ullasco.com";
const COMPANY_NAME = "Ullasco Equipments & Machinery";
const LEGAL_NAME = "Ullasco for Light & Heavy Equipment & Machinery Co. W.L.L.";
const COMPANY_DESCRIPTION =
  "Ullasco Equipments & Machinery provides light and heavy equipment rental, machinery rental, fleet solutions, transport services, and machinery maintenance services in Kuwait.";
const LOGO_URL = `${SITE_URL}/logo.png`;
const IMAGE_URL = `${SITE_URL}/og-image.jpg`;
const SERVICE_TYPES = [
  "Heavy Equipment Rental",
  "Light Equipment Rental",
  "Machinery Rental",
  "Fleet Solutions",
  "Transport Services",
  "Machinery Maintenance",
];

function safeJson(data: JsonLdData) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function sameAsLinks() {
  return socialLinks.map((link) => link.href);
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: companyStreetAddress,
    addressLocality: companyLocality,
    addressRegion: companyRegion,
    postalCode: companyPostalCode,
    addressCountry: "KW",
  };
}

export function JsonLd({ data }: { data: JsonLdData }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(data) }} />;
}

export function organizationSchema(): JsonLdSchema {
  const sameAs = sameAsLinks();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    image: IMAGE_URL,
    description: COMPANY_DESCRIPTION,
    telephone: companyPhoneInternational,
    email: companyEmail,
    address: postalAddress(),
    areaServed: [
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Place", name: "GCC" },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function localBusinessSchema(): JsonLdSchema {
  const sameAs = sameAsLinks();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/RentalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: IMAGE_URL,
    description: COMPANY_DESCRIPTION,
    address: postalAddress(),
    telephone: companyPhoneInternational,
    email: companyEmail,
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyLatitude,
      longitude: companyLongitude,
    },
    hasMap: companyMapUrl,
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Place", name: "GCC" },
    ],
    serviceType: SERVICE_TYPES,
    makesOffer: SERVICE_TYPES.map((serviceType) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: serviceType,
        areaServed: { "@type": "Country", name: "Kuwait" },
      },
    })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function webSiteSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: COMPANY_NAME,
    url: SITE_URL,
    inLanguage: "en-KW",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function breadcrumbListSchema(items: Array<{ name: string; url: string }>): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    areaServed: [
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Place", name: "GCC" },
    ],
    serviceType: name,
  };
}

export function faqPageSchema(
  faqs: Array<{ question: string; answer: string }>,
): JsonLdSchema | null {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function OrganizationJsonLd() {
  return <JsonLd data={organizationSchema()} />;
}

export function LocalBusinessJsonLd() {
  return <JsonLd data={localBusinessSchema()} />;
}

export function WebSiteJsonLd() {
  return <JsonLd data={webSiteSchema()} />;
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  return <JsonLd data={breadcrumbListSchema(items)} />;
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return <JsonLd data={serviceSchema({ name, description, url })} />;
}

export function FAQPageJsonLd({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = faqPageSchema(faqs);
  if (!schema) return null;
  return <JsonLd data={schema} />;
}
