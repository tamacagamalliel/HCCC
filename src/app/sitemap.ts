import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";
import { programs } from "@/content/programs";
import { newsArticles } from "@/content/news";
import { events } from "@/content/events";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/about/history",
    "/about/mission-vision-values",
    "/about/leadership",
    "/about/campus",
    "/academics",
    "/academics/basic-education",
    "/academics/junior-high",
    "/academics/senior-high",
    "/academics/college",
    "/admissions",
    "/admissions/process",
    "/admissions/requirements",
    "/admissions/faq",
    "/campus-life",
    "/campus-life/activities",
    "/campus-life/organizations",
    "/campus-life/community",
    "/campus-life/gallery",
    "/news",
    "/events",
    "/calendar",
    "/inquire",
    "/contact",
    "/privacy",
    "/data-privacy",
    "/terms",
    "/accessibility",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const programRoutes = programs.map((p) => ({
    url: absoluteUrl(`/academics/programs/${p.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const newsRoutes = newsArticles.map((n) => ({
    url: absoluteUrl(`/news/${n.slug}`),
    lastModified: new Date(n.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const eventRoutes = events.map((e) => ({
    url: absoluteUrl(`/events/${e.slug}`),
    lastModified: new Date(e.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...programRoutes, ...newsRoutes, ...eventRoutes];
}
