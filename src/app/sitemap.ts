import type { MetadataRoute } from "next";
import { siteConfig, navLinks } from "@/lib/constants/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navLinks.map((route) => ({
    url: route.href === "/" ? siteConfig.url : `${siteConfig.url}${route.href}`,
    lastModified,
    changeFrequency: route.href === "/" ? "weekly" : "monthly",
    priority:
      route.href === "/"
        ? 1.0
        : route.href === "/dich-vu" || route.href === "/dat-lich"
          ? 0.9
          : 0.8,
  }));
}
