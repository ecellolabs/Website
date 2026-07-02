"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Messages } from "@/lib/i18n";

type HeaderProps = {
  content: Messages["header"];
};

export default function Header({ content }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-60 border-b transition-[background,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "bg-white/84 backdrop-blur-md border-[rgba(189,209,232,0.24)]"
            : "bg-transparent backdrop-blur-none border-transparent"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6.5 py-4 flex items-center justify-between gap-4.5">
          <a className="flex items-center gap-2.5" href="#top" aria-label={content.homeLabel}>
            <span className="wordmark text-[31px]">ecello</span>
          </a>
          <nav className="hidden md:flex items-center gap-8.5">
            {content.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-[#33405a] relative transition-colors hover:text-[--color-navy] after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-[image:--brand-soft] after:rounded-full after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            variant="primary"
            arrow
            href="mailto:alex@ecello.net?subject=Let's%20talk"
            className="hidden md:inline-flex !bg-[--color-navy] !text-white"
          >
            {content.cta}
          </Button>
          <button
            className="flex md:hidden flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
            aria-label={content.openMenu}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="w-6 h-0.5 bg-[--color-navy] rounded-sm" />
            <span className="w-6 h-0.5 bg-[--color-navy] rounded-sm" />
            <span className="w-6 h-0.5 bg-[--color-navy] rounded-sm" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-55 bg-[--color-paper]/97 backdrop-blur-md flex flex-col justify-center gap-2 px-10 transition-transform duration-400 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {content.nav.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-bricolage)] text-3xl font-bold text-[--color-navy] py-3 border-b border-[--color-line]"
          >
            {link.label}
          </a>
        ))}
        <Button
          variant="primary"
          arrow
          href="mailto:alex@ecello.net?subject=Let's%20talk"
          className="mt-6 justify-center !bg-[--color-navy] !text-white"
          onClick={() => setMenuOpen(false)}
        >
          {content.cta}
        </Button>
      </div>
    </>
  );
}
