import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import fleetImg from "@/assets/fleet-yard.jpg";
import heroImg from "@/assets/hero-equipment.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";
import projectsImg from "@/assets/projects.jpg";
import { absoluteUrl, siteUrl } from "@/lib/seo";

const pages = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0",
    image: heroImg,
    imageTitle: "Heavy equipment rental machinery in Kuwait",
  },
  {
    path: "/services",
    changefreq: "monthly",
    priority: "0.9",
    image: fleetImg,
    imageTitle: "Ullasco equipment rental, fleet, transport and maintenance services",
  },
  {
    path: "/equipment",
    changefreq: "monthly",
    priority: "0.9",
    image: fleetImg,
    imageTitle: "Ullasco equipment and fleet rental categories",
  },
  {
    path: "/maintenance",
    changefreq: "monthly",
    priority: "0.85",
    image: maintenanceImg,
    imageTitle: "Machinery maintenance services in Kuwait",
  },
  {
    path: "/about",
    changefreq: "monthly",
    priority: "0.7",
    image: projectsImg,
    imageTitle: "About Ullasco Equipments and Machinery",
  },
  {
    path: "/industries",
    changefreq: "monthly",
    priority: "0.7",
    image: projectsImg,
    imageTitle: "Industries supported by Ullasco in Kuwait",
  },
  {
    path: "/contact",
    changefreq: "monthly",
    priority: "0.75",
    image: fleetImg,
    imageTitle: "Contact Ullasco for equipment rental and maintenance support",
  },
];

const lastmod = "2026-06-06";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = pages
          .map(
            (page) =>
              `  <url>\n    <loc>${escapeXml(
                `${siteUrl}${page.path}`,
              )}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${
                page.changefreq
              }</changefreq>\n    <priority>${page.priority}</priority>\n    <image:image>\n      <image:loc>${escapeXml(
                absoluteUrl(page.image),
              )}</image:loc>\n      <image:title>${escapeXml(
                page.imageTitle,
              )}</image:title>\n    </image:image>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
