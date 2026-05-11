import type { Metadata } from "next";
import BookMeetingPageClient from "./page.client";
import { getSiteUrl } from "@/lib/seo";

const url = getSiteUrl("/book-meeting");

export const metadata: Metadata = {
  title: "Book Meeting",
  description:
    "Book a strategy call with Ecello to discuss your product, cloud, automation, or AI project and map out the next step.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Book Meeting | Ecello",
    description:
      "Book a strategy call with Ecello to discuss your product, cloud, automation, or AI project and map out the next step.",
    url,
  },
  twitter: {
    title: "Book Meeting | Ecello",
    description:
      "Book a strategy call with Ecello to discuss your product, cloud, automation, or AI project and map out the next step.",
    images: ["https://ecello.net/logo-square.svg"],
  },
};

export default function BookMeetingPage() {
  return <BookMeetingPageClient />;
}
