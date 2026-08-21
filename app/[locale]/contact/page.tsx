import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactPage from "@/components/contact/content";
import { getMessages, isLocale, locales } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { contact } = getMessages(locale);

  return {
    title: contact.metadata.title,
    description: contact.metadata.description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: Object.fromEntries(locales.map((lang) => [lang, `/${lang}/contact`])),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ContactPage content={getMessages(locale).contact} />;
}
