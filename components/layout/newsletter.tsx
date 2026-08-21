"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import type { Messages } from "@/lib/i18n";

type NewsletterFormProps = {
  content: Messages["footer"]["newsletter"];
};

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <path
        d="M22 2 11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2 15 22l-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NewsletterForm({ content }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const subscribe = () => {
    if (!email) return;
    setEmail("");
    setOpen(true);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    subscribe();
  };

  return (
    <div className="w-full max-w-[420px]">
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-1.5 rounded-full border border-[rgba(189,209,232,0.6)] p-1.5 transition-colors duration-200 focus-within:border-[--color-blue] focus-within:bg-white"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={content.placeholder}
          aria-label={content.title}
          className="flex-1 min-w-0 bg-transparent pl-4 py-2 text-[15px] text-[#0b1f3a] placeholder:text-[#8b98af] outline-none"
        />
        <Button
          variant="primary"
          type="submit"
          aria-label={content.cta}
          icon={<PlaneIcon />}
          className="shrink-0 !w-[40px] !h-[40px] !p-0 !rounded-full justify-center !bg-[--color-blue] !border-[--color-blue] !text-white hover:!bg-white hover:!border-[--color-navy] hover:!text-[--color-navy]"
        />
      </form>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f2fd] text-[--color-blue]">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
              <path
                d="M20 6 9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="mt-4 font-[family-name:var(--font-bricolage)] text-[22px] font-bold text-[#0b1f3a]">
            {content.title}
          </h3>
          <p className="mt-2 text-[15px] text-[--color-muted]">{content.success}</p>
        </div>
      </Dialog>
    </div>
  );
}
