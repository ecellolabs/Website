import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
        url: `${siteUrl}/ecello.svg`,
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
    images: [`${siteUrl}/ecello.svg`],
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
    icon: "/ecello.svg",
    apple: "/ecello.svg",
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ecello",
    url: siteUrl,
    logo: `${siteUrl}/ecello.svg`,
    description: "Ecello provides enterprise-grade cloud-based solutions, SaaS product development, AI model integration, and DevOps services.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-300-5397347",
      contactType: "Customer Service",
      email: "contact@ecello.net",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK",
    },
    sameAs: [
      "https://linkedin.com/company/ecello",
      "https://github.com/ecellolabs",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development Services",
    provider: {
      "@type": "Organization",
      name: "Ecello",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cloud Solutions and Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Product Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Model Development and Integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Infrastructure and DevOps",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design & Frontend Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Model Deployments",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ecello" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="alternate" type="application/rss+xml" title="Ecello RSS Feed" href={`${siteUrl}/rss.xml`} />
      </head>
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
