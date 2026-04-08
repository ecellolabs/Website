import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CookieConsentBanner from "@/components/layout/banner";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://ecello.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ecello | Cloud-based Solutions & AI-Powered Software Products",
    template: "%s | Ecello",
  },
  description: "Ecello provides enterprise-grade cloud-based solutions, SaaS product development, AI model integration, and DevOps services. Building innovative software products like Classfellow, Solidio, Collinear, and Intellema.",
  applicationName: "Ecello",
  keywords: [
    "cloud solutions",
    "SaaS development",
    "AI model development",
    "DevOps services",
    "cloud infrastructure",
    "software development",
    "AI integration",
    "enterprise software",
    "product development",
    "UI/UX design",
    "frontend development",
    "AI deployment",
    "cloud consulting",
    "software products",
    "technology solutions",
    "Islamabad software company",
    "Pakistan tech company",
  ],
  authors: [{ name: "Ecello" }],
  creator: "Ecello",
  publisher: "Ecello",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ecello",
    title: "Ecello | Cloud-based Solutions & AI-Powered Software Products",
    description: "Enterprise-grade cloud solutions, SaaS development, AI integration, and DevOps services. Building innovative software products for businesses worldwide.",
    images: [
      {
        url: `${siteUrl}/ecello-square.svg`,
        width: 1200,
        height: 630,
        alt: "Ecello - Cloud-based Solutions & AI-Powered Software Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecello | Cloud-based Solutions & AI-Powered Software Products",
    description: "Enterprise-grade cloud solutions, SaaS development, AI integration, and DevOps services.",
    images: [`${siteUrl}/ecello-square.svg`],
    creator: "@ecello",
    site: "@ecello",
  },
  alternates: {
    canonical: siteUrl,
    types: {
      "application/rss+xml": `${siteUrl}/rss.xml`,
    },
  },
  category: "Technology",
  classification: "Software Development, Cloud Solutions, AI Technology",
  other: {
    "contact:email": "contact@ecello.net",
    "contact:phone": "+92 300 5397347",
    "geo.region": "PK-IS",
    "geo.placename": "Islamabad",
  },
  icons: {
    icon: "/logo-square.svg",
    apple: "/logo-square.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
