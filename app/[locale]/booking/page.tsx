import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingPage from "@/components/booking/content";
import { getMessages, isLocale, locales } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { metadata } = getMessages(locale).booking;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/${locale}/booking`,
      languages: Object.fromEntries(locales.map((lang) => [lang, `/${lang}/booking`])),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <BookingPage />;
}
