import type { Metadata } from "next";
import CaseStudyListPageClient from "./page.client";
import { getSiteUrl } from "@/lib/seo";

const url = getSiteUrl("/case-studies");

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Ecello case studies across product engineering, automation, cloud systems, and AI-backed software delivery.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Case Studies | Ecello",
    description:
      "Explore Ecello case studies across product engineering, automation, cloud systems, and AI-backed software delivery.",
    url,
  },
  twitter: {
    title: "Case Studies | Ecello",
    description:
      "Explore Ecello case studies across product engineering, automation, cloud systems, and AI-backed software delivery.",
    images: ["https://ecello.net/logo-square.svg"],
  },
};

export default function CaseStudyListPage() {
  return <CaseStudyListPageClient />;
}
