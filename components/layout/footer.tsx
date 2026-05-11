"use client";

import Link from "next/link";
import type { SVGProps } from "react";
import { services } from "@/app/services/data";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language";

type IconProps = SVGProps<SVGSVGElement>;

function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.51.47-3.16-.63-3.36-1.2-.11-.29-.6-1.2-1.03-1.44-.35-.19-.85-.66-.01-.67.79-.01 1.35.74 1.54 1.05.9 1.55 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.2 10.2 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.53V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function WebsiteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.46 3.75 5.46 3.75 9S14.5 18.54 12 21" />
      <path d="M12 3C9.5 5.46 8.25 8.46 8.25 12S9.5 18.54 12 21" />
    </svg>
  );
}

const socialLinks = [
  { label: "Github", href: "https://github.com/ecellolabs/", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ecello", icon: LinkedinIcon },
  { label: "Website", href: "https://ecello.net", icon: WebsiteIcon },
];

const pageHrefs = ["/", "/about-us", "/case-studies", "/contact-us", "/book-meeting"];
const legalHrefs = ["/privacy-policy", "/cookie-consent", "/terms-conditions"];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const footerColumns = [
    {
      title: f.columnTitles[0],
      links: pageHrefs.map((href, i) => ({ label: f.pageLabels[i], href })),
    },
    {
      title: f.columnTitles[1],
      links: services.map((service, i) => ({
        label: t.nav.serviceLabels[i],
        href: `/services/${service.id}`,
      })),
    },
    {
      title: f.columnTitles[2],
      links: legalHrefs.map((href, i) => ({ label: f.legalLabels[i], href })),
    },
  ];

  return (
    <footer className="bg-[#0f2345] text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.05fr_1.45fr_1.05fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-xl font-semibold">Ecello Labs</p>
              <p className="max-w-md text-sm leading-6 text-slate-300">
                {f.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-slate-100 transition hover:border-sky-300 hover:bg-sky-400/15 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {column.title}
                </p>
                <ul className="space-y-3 text-sm">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-300 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-4 lg:justify-self-end">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                {f.newsletter}
              </p>
              <p className="text-sm leading-6 text-slate-300">
                {f.newsletterDesc}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild className="bg-sky-500 text-white hover:bg-sky-600">
                <Link href="/contact-us">{f.subscribe}</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                <Link href="/book-meeting">{t.nav.bookMeeting}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{f.copyright}</p>
          <p>{f.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
