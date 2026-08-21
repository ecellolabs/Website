"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { submitContact } from "@/lib/contact";
import type { ContactContent } from "@/lib/i18n";

type ContactPageProps = {
  content: ContactContent;
};

type FieldName = "name" | "email" | "company" | "message";
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const REQUIRED_ORDER = ["name", "email", "message"] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labelClass = "block text-xs font-bold tracking-[0.14em] uppercase text-[--color-navy] mb-2.5";

const fieldClass =
  "w-full rounded-full border bg-white px-4.5 py-3.5 text-[15px] text-[#0b1f3a] placeholder:text-[#8b98af] outline-none transition-colors duration-200";

const fieldTone = {
  base: "border-line focus:border-navy",
  invalid: "border-[#c0392b] focus:border-[#c0392b]",
} as const;

function fieldClasses(hasError: boolean) {
  return `${fieldClass} ${hasError ? fieldTone.invalid : fieldTone.base}`;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-[13.5px] text-[#c0392b] mt-2">
      {message}
    </p>
  );
}

export default function ContactPage({ content }: ContactPageProps) {
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const submitting = status === "submitting";

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const setField = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const validate = (): Errors => {
    const found: Errors = {};
    if (!values.name.trim()) found.name = content.errors.name;
    if (!values.email.trim()) found.email = content.errors.email;
    else if (!EMAIL_PATTERN.test(values.email.trim())) found.email = content.errors.emailInvalid;
    if (!values.message.trim()) found.message = content.errors.message;
    return found;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const found = validate();
    setErrors(found);

    const firstInvalid = REQUIRED_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      const refs = { name: nameRef, email: emailRef, message: messageRef };
      refs[firstInvalid].current?.focus();
      return;
    }

    // Honeypot filled — a bot. Show the success state and send nothing.
    if (honeypot.trim()) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      await submitContact({
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        message: values.message.trim(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:z-0 before:pointer-events-none before:[background:radial-gradient(720px_460px_at_82%_12%,rgba(46,155,238,.16),transparent_62%),radial-gradient(560px_420px_at_6%_88%,rgba(21,96,212,.10),transparent_60%)]">
      <div className="relative z-10 w-full max-w-[640px] mx-auto px-6.5 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="text-center">
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-[--color-azure]">
            {content.eyebrow}
          </span>
          <h1 className="text-[clamp(34px,5.2vw,58px)] font-extrabold mt-4">{content.title}</h1>
          <p className="text-[clamp(16px,1.7vw,19px)] text-[--color-muted] mt-5 max-w-[520px] mx-auto">
            {content.intro}
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-12 md:mt-14 rounded-[26px] border-2 border-[--color-line] bg-white px-7 py-10 md:px-9 md:py-12 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f2fd] text-[--color-blue]">
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
            <h2
              ref={successRef}
              tabIndex={-1}
              className="text-[clamp(22px,2.6vw,28px)] font-extrabold mt-5 outline-none"
            >
              {content.success.title}
            </h2>
            <p className="text-[--color-muted] text-[16px] mt-3">{content.success.body}</p>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className="mt-12 md:mt-14 flex flex-col gap-7">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                {content.fields.name.label}
              </label>
              <input
                ref={nameRef}
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={values.name}
                onChange={(e) => setField("name", e.target.value)}
                placeholder={content.fields.name.placeholder}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={fieldClasses(Boolean(errors.name))}
              />
              <FieldError id="contact-name-error" message={errors.name} />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                {content.fields.email.label}
              </label>
              <input
                ref={emailRef}
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder={content.fields.email.placeholder}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={fieldClasses(Boolean(errors.email))}
              />
              <FieldError id="contact-email-error" message={errors.email} />
            </div>

            <div>
              <label htmlFor="contact-company" className={labelClass}>
                {content.fields.company.label}
                <span className="ml-2 font-medium normal-case tracking-normal text-[--color-muted]">
                  {content.optional}
                </span>
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={values.company}
                onChange={(e) => setField("company", e.target.value)}
                placeholder={content.fields.company.placeholder}
                className={fieldClasses(false)}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                {content.fields.message.label}
              </label>
              <textarea
                ref={messageRef}
                id="contact-message"
                name="message"
                required
                rows={6}
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
                placeholder={content.fields.message.placeholder}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${fieldClasses(Boolean(errors.message))} resize-y min-h-[150px] leading-relaxed`}
              />
              <FieldError id="contact-message-error" message={errors.message} />
            </div>

            {/* Honeypot — hidden from people, tempting to bots. */}
            <div aria-hidden className="absolute w-px h-px -m-px overflow-hidden opacity-0">
              <label htmlFor="contact-website">{content.honeypotLabel}</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center gap-5 mt-1">
              <Button
                variant="primary"
                type="submit"
                disabled={submitting}
                aria-busy={submitting || undefined}
                className={`!px-7.5 !py-4 !text-[17px] ${submitting ? "opacity-60 !cursor-not-allowed" : ""}`}
              >
                {submitting ? content.pending : content.submit}
              </Button>

              {status === "error" ? (
                <p role="alert" className="text-[14.5px] text-[--color-muted] text-center">
                  {content.failure.body}{" "}
                  <a
                    href={`mailto:${content.failure.email}`}
                    className="font-semibold text-[--color-navy] underline underline-offset-2 hover:text-[--color-azure]"
                  >
                    {content.failure.email}
                  </a>
                </p>
              ) : null}
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
