"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "ecello-cookie-consent";
const COOKIE_CONSENT_EVENT = "ecello-cookie-consent-change";

type ConsentValue = "accepted" | "declined";

function subscribeToCookieConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
  };
}

function getCookieConsentSnapshot() {
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) ?? "";
}

function getCookieConsentServerSnapshot() {
  return "accepted";
}

export default function CookieConsentBanner() {
  const consent = useSyncExternalStore(
    subscribeToCookieConsent,
    getCookieConsentSnapshot,
    getCookieConsentServerSnapshot
  );

  const saveConsent = (value: ConsentValue) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
  };

  if (consent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-md border border-slate-200 bg-white p-4 text-slate-900 shadow-2xl shadow-slate-900/20 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold">Cookie preferences</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            We use essential cookies to keep the site working and optional analytics cookies to
            understand what helps visitors. You can accept or decline optional cookies.
          </p>
          <Link
            href="/cookie-consent"
            className="mt-2 inline-flex text-sm font-medium text-blue-600 underline-offset-4 hover:underline"
          >
            Read our cookie notice
          </Link>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Button type="button" variant="outline" onClick={() => saveConsent("declined")}>
            Decline
          </Button>
          <Button type="button" onClick={() => saveConsent("accepted")}>
            Accept cookies
          </Button>
        </div>
      </div>
    </div>
  );
}
