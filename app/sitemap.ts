import type { MetadataRoute } from "next";
import { ADVENTURE_MAP } from "@/lib/constants";
import { PRODUCTS } from "@/lib/mock/products";
import { STORIES } from "@/lib/mock/stories";
import { SEO_PAGES } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const staticRoutes = ["", "/adventure", "/shop", "/stories", "/membership", "/free"];

  const dynamicRoutes = [
    ...ADVENTURE_MAP.map((loc) => loc.href),
    ...PRODUCTS.map((p) => `/shop/${p.slug}`),
    ...STORIES.map((s) => `/stories/${s.slug}`),
    ...SEO_PAGES.map((p) => `/free/${p.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
