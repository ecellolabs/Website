import type { Metadata } from "next";
import ContactUsPageClient from "./page.client";
import { getSiteUrl } from "@/lib/seo";

const url = getSiteUrl("/contact-us");

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Ecello about product engineering, cloud architecture, automation, or AI delivery. Send a note and we will respond with a focused next step.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Contact Us | Ecello",
    description:
      "Talk to Ecello about product engineering, cloud architecture, automation, or AI delivery. Send a note and we will respond with a focused next step.",
    url,
  },
  twitter: {
    title: "Contact Us | Ecello",
    description:
      "Talk to Ecello about product engineering, cloud architecture, automation, or AI delivery. Send a note and we will respond with a focused next step.",
    images: ["https://ecello.net/logo-square.svg"],
  },
};

export default function ContactUsPage() {
  return <ContactUsPageClient />;
}
