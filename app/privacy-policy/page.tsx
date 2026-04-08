import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ecello Labs collects, uses, and protects personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect information you choose to share with us, such as your name, email address, company name, project details, and meeting requests.",
      "We may also collect limited technical information, including browser type, device data, pages visited, and basic analytics events that help us improve the website.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use personal information to respond to inquiries, schedule meetings, provide services, improve our website, and maintain the security and reliability of our systems.",
      "We do not sell personal information. We only share information when it is needed to operate our services, comply with legal obligations, or protect Ecello Labs and our users.",
    ],
  },
  {
    title: "Service Providers",
    body: [
      "We may work with trusted service providers for hosting, analytics, communication, scheduling, and project delivery. These providers are expected to handle information responsibly and only for the purposes we authorize.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We keep personal information for as long as needed to respond to requests, provide services, meet legal requirements, resolve disputes, and maintain business records.",
      "When information is no longer needed, we take reasonable steps to delete it or de-identify it.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You can ask us to update, correct, or delete personal information you have shared with us. You can also decline optional cookies through the cookie banner.",
      "Some information may need to be retained where required for legal, security, or legitimate business reasons.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards to protect information. No online system is completely secure, but we work to reduce risk and handle data with care.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How we handle your information"
      description="This policy explains what information Ecello Labs collects, why we use it, and the choices available to you when you use our website or contact our team."
      lastUpdated="April 8, 2026"
      sections={sections}
    />
  );
}
