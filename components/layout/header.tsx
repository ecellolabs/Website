"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "About Us", href: "/about-us" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact-us" },
];

const serviceLinks = [
  { label: "Automation", href: "/services/automation" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Computer Vision", href: "/services/computer-vision" },
  { label: "Cloud Architecture", href: "/services/cloud-architecture" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center" aria-label="Ecello Labs home" onClick={closeMenus}>
            <Image src="/logo.svg" alt="Ecello Labs" width={100} height={30} priority />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8 text-sm font-medium">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setServicesMenuOpen((open) => !open)}
                  className="inline-flex cursor-pointer items-center gap-2 text-slate-700 transition-colors hover:text-slate-900"
                  aria-expanded={servicesMenuOpen}
                  aria-controls="services-menu"
                >
                  Services
                </button>

                {servicesMenuOpen ? (
                  <div
                    id="services-menu"
                    className="absolute left-0 top-full mt-4 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-blue-950/10"
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesMenuOpen(false)}
                        className="block cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setServicesMenuOpen(false)}
                  className="text-slate-700 transition-colors hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild>
              <Link href="/book-meeting" onClick={() => setServicesMenuOpen(false)}>
                Book Meeting
              </Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((open) => !open);
              setServicesMenuOpen(false);
            }}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Open menu</span>
            <span className="flex flex-col gap-1">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {mobileMenuOpen ? (
          <div id="mobile-nav" className="border-t border-slate-200 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Services
                </p>
                <div className="grid gap-1">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenus}
                      className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-900"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenus}
                  className="cursor-pointer rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-1 w-full" size="sm">
                <Link href="/book-meeting" onClick={closeMenus}>
                  Book Meeting
                </Link>
              </Button>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
