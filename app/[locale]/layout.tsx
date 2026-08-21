import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/layout/cookie-consent";
import { getMessages, isLocale, locales } from "@/lib/i18n";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { metadata } = getMessages(locale);

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((lang) => [lang, `/${lang}`])),
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <>
      <Header content={messages.header} locale={locale} />
      {children}
      <Footer content={messages.footer} locale={locale} />
      <CookieConsent content={messages.cookie} />
    </>
  );
}
