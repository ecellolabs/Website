import type { Metadata } from "next";
import HomePageClient from "./page.client";

const siteUrl = "https://ecello.net";

export const metadata: Metadata = {
  title: "Ecello Labs | Product Engineering for Ambitious Teams",
  description:
    "Ecello builds cloud-ready software products, automation systems, and AI-powered workflows for startups and enterprise teams.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Ecello Labs | Product Engineering for Ambitious Teams",
    description:
      "Ecello builds cloud-ready software products, automation systems, and AI-powered workflows for startups and enterprise teams.",
    url: siteUrl,
  },
  twitter: {
    title: "Ecello Labs | Product Engineering for Ambitious Teams",
    description:
      "Ecello builds cloud-ready software products, automation systems, and AI-powered workflows for startups and enterprise teams.",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
