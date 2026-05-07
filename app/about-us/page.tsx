import type { Metadata } from "next";
import AboutUsPageClient from "./page.client";

const url = "https://ecello.net/about-us";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Ecello approaches product engineering, cloud systems, automation, and AI delivery for ambitious teams.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "About Us | Ecello",
    description:
      "Learn how Ecello approaches product engineering, cloud systems, automation, and AI delivery for ambitious teams.",
    url,
  },
  twitter: {
    title: "About Us | Ecello",
    description:
      "Learn how Ecello approaches product engineering, cloud systems, automation, and AI delivery for ambitious teams.",
  },
};

export default function AboutUsPage() {
  return <AboutUsPageClient />;
}
