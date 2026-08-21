"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type CookieConsentContent = {
  title: string;
  body: string;
  accept: string;
  reject: string;
  customize: string;
};

type CookieConsentProps = {
  content: CookieConsentContent;
};

const STORAGE_KEY = "ecello-cookie-consent";

export default function CookieConsent({ content }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section
      role="dialog"
      aria-live="polite"
      aria-label={content.title}
      className="fixed z-[70] left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6 w-auto sm:w-[380px] rounded-3xl border border-[rgba(189,209,232,0.68)] bg-white/96 backdrop-blur-md shadow-[0_20px_55px_-26px_rgba(11,31,58,0.44)] p-5"
    >
      <h3 className="font-[family-name:var(--font-bricolage)] text-[20px] leading-[1.1] font-bold text-[var(--color-navy)]">
        {content.title}
      </h3>
      <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[#3a4761]">{content.body}</p>

      <div className="mt-4 flex flex-wrap items-center justify-end gap-2.5">
        <Button
          variant="white"
          type="button"
          onClick={() => {}}
          className="!px-4 !py-2 !text-[14px] !border !border-[var(--color-line)] !text-[var(--color-navy)] hover:!text-[var(--color-navy)] hover:!border-[var(--color-navy)]"
        >
          {content.customize}
        </Button>
        <Button
          variant="ghost"
          type="button"
          onClick={() => decide("rejected")}
          className="!px-4 !py-2 !text-[14px]"
        >
          {content.reject}
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => decide("accepted")}
          className="!px-4 !py-2 !text-[14px]"
        >
          {content.accept}
        </Button>
      </div>
    </section>
  );
}
