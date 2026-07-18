"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import { SOCIALS } from "./socials";

type HeaderProps = {
  content: Messages["header"];
  locale: Locale;
};

export default function Header({ content, locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const bookingHref = localizeHref(locale, "/booking");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-60 border-b transition-[background,border-color,backdrop-filter] duration-300 ${
          menuOpen
            ? "bg-[var(--color-paper)] backdrop-blur-md border-[rgba(189,209,232,0.24)]"
            : scrolled
              ? "bg-white/84 backdrop-blur-md border-[rgba(189,209,232,0.24)]"
              : "bg-transparent backdrop-blur-none border-transparent"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6.5 py-4 flex items-center justify-between gap-4.5">
          <a className="flex items-center gap-2.5" href={localizeHref(locale, "#top")} aria-label={content.homeLabel}>
            <span className="wordmark text-[31px]">ecello</span>
          </a>
          <nav className="hidden md:flex items-center gap-8.5">
            {content.nav.map((link) => (
              <a
                key={link.href}
                href={localizeHref(locale, link.href)}
                className="group text-[15px] font-medium text-[#33405a] relative transition-colors duration-300 hover:text-[#0b1f3a] after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#0b1f3a] after:rounded-full after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button variant="primary" href={bookingHref}>
              {content.cta}
            </Button>
          </div>
          <button
            className="relative z-70 flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 -mr-2 bg-transparent border-none cursor-pointer"
            aria-label={menuOpen ? content.closeMenu : content.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--color-navy)] rounded-sm transition-transform duration-300 ease-out ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-navy)] rounded-sm transition-opacity duration-200 ease-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-navy)] rounded-sm transition-transform duration-300 ease-out ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-55 bg-[var(--color-navy)]/40 backdrop-blur-sm transition-opacity duration-300 ease-out md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Left-side drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={content.openMenu}
        className={`fixed top-[73px] bottom-0 left-0 z-58 w-[86%] max-w-[340px] bg-[var(--color-paper)] flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex-1 px-6 py-5">
          <nav className="flex flex-col">
            {content.nav.map((link) => (
              <a
                key={link.href}
                href={localizeHref(locale, link.href)}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-bricolage)] text-lg font-bold text-[var(--color-navy)] py-3 border-b border-[var(--color-line)]"
              >
                {link.href === "#about" ? "About us" : link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 mt-6">
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid place-items-center w-10 h-10 rounded-full border-2 border-[var(--color-navy)] text-[var(--color-navy)]"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" aria-hidden>
                  {icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="px-6 py-5 border-t border-[var(--color-line)]">
          <Button
            variant="primary"
            href={bookingHref}
            className="w-full justify-center"
            onClick={() => setMenuOpen(false)}
          >
            {content.cta}
          </Button>
        </div>
      </div>
    </>
  );
}
