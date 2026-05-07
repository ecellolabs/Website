import type { Metadata } from "next";
import ContactUsPageClient from "./page.client";

const url = "https://ecello.net/contact-us";

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
  },
};

export default function ContactUsPage() {
  return <ContactUsPageClient />;
}
