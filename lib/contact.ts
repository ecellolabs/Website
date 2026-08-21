export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

/**
 * Sends a contact enquiry.
 *
 * TODO: wire this up to the real endpoint. Right now it only waits and
 * resolves so the form can exercise its pending / success / error states.
 * When the endpoint exists, POST `data` to it and throw on a non-ok
 * response — the form already renders the error state for a rejection.
 */
export async function submitContact(data: ContactFormData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (!data.email) {
    throw new Error("submitContact: missing email");
  }
}
