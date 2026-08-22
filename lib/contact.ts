export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  /** reCAPTCHA v3 token. Empty when no site key is configured. */
  recaptchaToken: string;
};

/**
 * Sends a contact enquiry.
 *
 * TODO: wire this up to the real endpoint. Right now it only waits and
 * resolves so the form can exercise its pending / success / error states.
 * When the endpoint exists, POST `data` to it and throw on a non-ok
 * response — the form already renders the error state for a rejection.
 *
 * The endpoint is also where `recaptchaToken` gets verified, against
 * RECAPTCHA_SECRET_KEY. Nothing checks it on the client, and nothing can.
 */
export async function submitContact(data: ContactFormData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (!data.email) {
    throw new Error("submitContact: missing email");
  }
}
