import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal";
import { getSiteUrl } from "@/lib/seo";

const url = getSiteUrl("/cookie-consent");

export const metadata: Metadata = {
  title: "Cookie Consent",
  description: "How Ecello Labs uses cookies and how visitors can manage cookie preferences.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Cookie Consent | Ecello",
    description: "How Ecello Labs uses cookies and how visitors can manage cookie preferences.",
    url,
  },
  twitter: {
    title: "Cookie Consent | Ecello",
    description: "How Ecello Labs uses cookies and how visitors can manage cookie preferences.",
    images: [getSiteUrl("/logo-square.svg")],
  },
};

const sections = [
  {
    title: "What Cookies Are",
    body: [
      "Cookies are small files stored on your device that help websites remember information, support core functionality, and understand how visitors use a site.",
      "Similar technologies, such as local storage, may also be used to remember your cookie preference in the browser.",
    ],
  },
  {
    title: "Essential Cookies",
    body: [
      "Essential cookies and storage are used to keep the website functioning, remember your consent choice, protect forms, and maintain reliable site behavior.",
      "These are necessary for the site to work and cannot always be disabled through our banner.",
    ],
  },
  {
    title: "Analytics Cookies",
    body: [
      "Analytics cookies may help us understand which pages are useful, how visitors move through the site, and where the experience can be improved.",
      "If you decline optional cookies, we will not intentionally use optional analytics cookies from this website session.",
    ],
  },
  {
    title: "Managing Preferences",
    body: [
      "On your first visit, the cookie banner lets you accept or decline optional cookies. Your selection is saved in your browser so we do not ask again on every page view.",
      "You can change your preference by clearing this site's local storage or cookies in your browser settings, then revisiting the website.",
    ],
  },
  {
    title: "Third Party Tools",
    body: [
      "Some embedded or third-party services may use their own cookies or tracking technologies. Their privacy practices are governed by their own policies.",
      "We aim to use reputable tools and limit data collection to what is useful for operating and improving the website.",
    ],
  },
];

export default function CookieConsentPage() {
  return (
    <LegalPage
      eyebrow="Cookie Consent"
      title="Your cookie choices"
      description="This notice explains how Ecello Labs uses cookies and similar browser storage, including how your consent preference is saved."
      lastUpdated="April 8, 2026"
      sections={sections}
    />
  );
}
