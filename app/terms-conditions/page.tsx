import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply when using the Ecello Labs website and services.",
};

const sections = [
  {
    title: "Use Of The Website",
    body: [
      "By using this website, you agree to use it lawfully, responsibly, and in a way that does not interfere with the security or availability of the site.",
      "You may not attempt to gain unauthorized access, disrupt the website, copy protected materials, or use the site for misleading or harmful purposes.",
    ],
  },
  {
    title: "Service Discussions",
    body: [
      "Information on this website is provided for general business and technology discussion. A project, service, or commercial engagement begins only when both parties agree to written terms.",
      "Any timelines, examples, or outcomes described on the website are illustrative and may vary based on project scope, technical requirements, and dependencies.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The Ecello Labs name, website content, visuals, copy, and other materials are owned by Ecello Labs or used with permission unless otherwise stated.",
      "You may not reproduce, modify, distribute, or reuse website content for commercial purposes without written permission.",
    ],
  },
  {
    title: "Third Party Links",
    body: [
      "The website may link to third-party platforms, tools, or resources. These links are provided for convenience and do not mean we control or endorse those services.",
      "You are responsible for reviewing the terms and policies of any third-party website you visit.",
    ],
  },
  {
    title: "Limitation Of Liability",
    body: [
      "The website is provided on an as-is and as-available basis. We work to keep information accurate, but we do not guarantee that the site will always be error-free, current, or uninterrupted.",
      "To the fullest extent permitted by law, Ecello Labs is not liable for indirect, incidental, or consequential damages arising from website use.",
    ],
  },
  {
    title: "Changes To Terms",
    body: [
      "We may update these terms as our website, services, or legal requirements change. The updated version will be posted on this page with a revised date.",
      "Continuing to use the website after changes are posted means you accept the updated terms.",
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Terms for using this website"
      description="These terms describe the basic rules that apply when you browse the Ecello Labs website or contact us about our services."
      lastUpdated="April 8, 2026"
      sections={sections}
    />
  );
}
