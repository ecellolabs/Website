import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Baloo_2 } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getMessages, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

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
    <html
      lang={locale}
      className={`${inter.variable} ${bricolage.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-[--color-ink] bg-[--color-paper] leading-relaxed">
        <Header content={messages.header} />
        {children}
        <Footer content={messages.footer} />
      </body>
    </html>
  );
}
