/* eslint-disable react-refresh/only-export-components */

import type { ReactNode } from "react";
import {
  JsonLd,
  breadcrumbListSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  webSiteSchema,
  type JsonLdData,
} from "@/components/seo/json-ld";

export const siteUrl = "https://www.ullasco.com";
export const siteName = "Ullasco Equipments & Machinery";
export const siteLocale = "en_KW";
export const siteLanguage = "en-KW";
export const siteLogo = "/logo.png";
export const siteImage = "/og-image.jpg";
export const defaultDescription =
  "Ullasco provides light and heavy equipment rental, machinery rental, fleet solutions, transport services, and machinery maintenance services in Kuwait.";
export const defaultKeywords = [
  "equipment rental Kuwait",
  "heavy equipment rental Kuwait",
  "light equipment rental Kuwait",
  "machinery rental Kuwait",
  "fleet solutions Kuwait",
  "transport services Kuwait",
  "machinery maintenance Kuwait",
  "Ullasco",
];

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  canonicalPath?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  robots?: string;
  keywords?: string[];
};

export function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export function seoHead({
  title,
  description,
  path,
  canonicalPath,
  image = siteImage,
  imageAlt = `${siteName} equipment rental and machinery services in Kuwait`,
  type = "website",
  robots = "index, follow, max-image-preview:large",
  keywords = defaultKeywords,
}: SeoPage) {
  const url = absoluteUrl(canonicalPath ?? path);
  const pageUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { name: "keywords", content: keywords.join(", ") },
      { name: "author", content: siteName },
      { name: "publisher", content: siteName },
      { property: "og:locale", content: siteLocale },
      { property: "og:site_name", content: siteName },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:secure_url", content: imageUrl },
      { property: "og:image:alt", content: imageAlt },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: imageAlt },
      { name: "geo.region", content: "KW-AH" },
      { name: "geo.placename", content: "Fahaheel, Ahmadi Governorate, Kuwait" },
      { name: "ICBM", content: "29.08424, 48.13324" },
      { name: "DC.title", content: title },
      { name: "language", content: siteLanguage },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: siteLanguage, href: url },
      { rel: "alternate", hrefLang: "x-default", href: url },
      { rel: "bookmark", href: pageUrl },
    ],
  };
}

export function SeoJsonLd({ data }: { data: JsonLdData }) {
  return <JsonLd data={data} />;
}

export function organizationJsonLd() {
  return organizationSchema();
}

export function localBusinessJsonLd() {
  return localBusinessSchema();
}

export function webSiteJsonLd() {
  return webSiteSchema();
}

export function webPageJsonLd({ title, description, path }: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: siteLanguage,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(siteImage),
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
    },
    about: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return breadcrumbListSchema(
    items.map((item) => ({ name: item.name, url: absoluteUrl(item.path) })),
  );
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return serviceSchema({ name, description, url: absoluteUrl(path) });
}

export function servicesItemListJsonLd(
  services: Array<{ name: string; description: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: serviceJsonLd(service),
    })),
  };
}

export function SeoSchema({ page, children }: { page: SeoPage; children?: ReactNode }) {
  return (
    <>
      <SeoJsonLd
        data={[organizationJsonLd(), localBusinessJsonLd(), webSiteJsonLd(), webPageJsonLd(page)]}
      />
      {children}
    </>
  );
}
