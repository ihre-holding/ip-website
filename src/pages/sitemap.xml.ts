import type { APIRoute } from "astro";
import { jobs } from "../data/jobs";

const SITE = "https://www.ihre-pflege.de";

// Statische Seiten mit SEO-Wert. Bewerbungsformulare (/jobs/<slug>/bewerben/)
// sind bewusst nicht enthalten.
const staticPaths = [
  "/",
  "/leistungen/",
  "/standorte/",
  "/jobs/",
  "/impressum/",
  "/datenschutz/",
];

export const GET: APIRoute = () => {
  const buildDate = new Date().toISOString().slice(0, 10);

  const urls = [
    ...staticPaths.map((path) => ({ loc: path, lastmod: buildDate })),
    ...jobs.map((job) => ({ loc: `/jobs/${job.slug}/`, lastmod: job.posted })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`)
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
