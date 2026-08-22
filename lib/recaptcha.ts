/**
 * Google reCAPTCHA v3 — invisible, score based. There is no widget and nothing
 * for a person to solve: we ask Google for a token on submit and hand it to the
 * endpoint, which is where the score actually gets checked.
 *
 * TODO: nothing verifies the token yet. Until something POSTs it to
 * https://www.google.com/recaptcha/api/siteverify with RECAPTCHA_SECRET_KEY,
 * this only proves the browser could reach Google — a determined bot is
 * unaffected. The honeypot in the form is still doing the real work.
 */

export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export const RECAPTCHA_ENABLED = RECAPTCHA_SITE_KEY.length > 0;

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

const SCRIPT_ID = "recaptcha-v3";

let loading: Promise<Grecaptcha> | null = null;

/** Injects the reCAPTCHA script once and resolves when the API is usable. */
export function loadRecaptcha(): Promise<Grecaptcha> {
  if (loading) return loading;

  loading = new Promise<Grecaptcha>((resolve, reject) => {
    if (!RECAPTCHA_ENABLED) {
      reject(new Error("loadRecaptcha: NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set"));
      return;
    }

    const ready = () => {
      const grecaptcha = window.grecaptcha;
      if (!grecaptcha) {
        reject(new Error("loadRecaptcha: script loaded but window.grecaptcha is missing"));
        return;
      }
      grecaptcha.ready(() => resolve(grecaptcha));
    };

    const failed = () => {
      // Let a later submit retry — a blocked request now may succeed on retry.
      loading = null;
      document.getElementById(SCRIPT_ID)?.remove();
      reject(new Error("loadRecaptcha: script failed to load"));
    };

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.addEventListener("load", ready, { once: true });
      existing.addEventListener("error", failed, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", ready, { once: true });
    script.addEventListener("error", failed, { once: true });
    document.head.appendChild(script);
  });

  return loading;
}

/** Runs an assessment and returns the one-shot token. Tokens expire in 2 minutes. */
export async function getRecaptchaToken(action: string): Promise<string> {
  const grecaptcha = await loadRecaptcha();
  return grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
}
