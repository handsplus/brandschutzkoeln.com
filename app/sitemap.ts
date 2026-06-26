import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { NAV_LINKS, SEO_LINKS } from "@/lib/constants";
import { RATGEBER_ARTICLES } from "@/content/ratgeber";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const routes: MetadataRoute.Sitemap = [
    ...NAV_LINKS.map(({ href }) => ({
      url: href === "/" ? base : `${base}${href}`,
      lastModified: new Date(),
      changeFrequency: (href === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: href === "/" ? 1 : 0.8,
    })),
    ...SEO_LINKS.map(({ href }) => ({
      url: `${base}${href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...RATGEBER_ARTICLES.map(({ slug }) => ({
      url: `${base}/ratgeber/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    {
      url: `${base}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${base}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
  return routes;
}
