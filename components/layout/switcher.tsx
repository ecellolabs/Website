"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
};

export default function LanguageSwitcher({ locale, className = "" }: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const rest = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "");

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <Button
        variant="ghost"
        className="!px-4 !py-2.5 text-[13px] uppercase tracking-wide"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {locale}
      </Button>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[104px] rounded-2xl border-2 border-[var(--color-navy)] bg-white overflow-hidden shadow-lg z-10"
        >
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}${rest}`}
              role="option"
              aria-selected={l === locale}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                l === locale
                  ? "bg-[var(--color-navy)] text-white"
                  : "text-[var(--color-navy)] hover:bg-[var(--color-navy)]/10"
              }`}
            >
              {l}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
