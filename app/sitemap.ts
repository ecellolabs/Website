import type { MetadataRoute } from "next";
import { caseStudies } from "./case-studies/data";
import { services } from "./services/data";
import { getSiteUrl, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getSiteUrl("/about-us"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getSiteUrl("/case-studies"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: getSiteUrl("/contact-us"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: getSiteUrl("/book-meeting"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: getSiteUrl("/privacy-policy"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: getSiteUrl("/terms-conditions"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: getSiteUrl("/cookie-consent"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: getSiteUrl(`/services/${service.id}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
    url: getSiteUrl(`/case-studies/${caseStudy.id}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...caseStudyPages];
}
