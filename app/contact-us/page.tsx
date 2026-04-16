"use client";

<<<<<<< Alpha-1.1
=======
import { useState, type FormEvent } from "react";
>>>>>>> master
import Link from "next/link";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< Alpha-1.1
import { useLanguage } from "@/contexts/language";
=======
import { API_BASE_URL } from "@/lib/utils";
>>>>>>> master

const contactValues = [
  { value: "contact@ecello.net", href: "mailto:contact@ecello.net" },
  { value: "+92 300 5397347", href: "tel:+923005397347" },
  { value: "Islamabad, Pakistan", href: "https://www.ecello.net" },
];

const CONTACT_API_URL = `${API_BASE_URL}/v1/website/contact`;

export default function ContactUsPage() {
<<<<<<< Alpha-1.1
  const { t } = useLanguage();
  const p = t.contactPage;
=======
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setStatus({ type: null, message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, subject, message }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Unable to send your message right now.");
      }

      setStatus({ type: "success", message: result?.message || "Message sent successfully." });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
>>>>>>> master

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="bg-[linear-gradient(180deg,_#eff6ff_0%,_#f7f9fc_100%)]">
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-3xl font-semibold">{p.heading}</p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {p.subheading}
              </p>

              <div className="mt-10 grid gap-4">
                {contactValues.map((detail, i) => (
                  <Card key={detail.href} size="sm">
                    <CardContent>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {p.detailLabels[i]}
                      </p>
                      <Button
                        asChild
                        variant="link"
                        className="mt-2 h-auto justify-start p-0 text-base font-semibold"
                      >
                        <Link href={detail.href}>{detail.value}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {p.form.eyebrow}
                </p>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  {p.form.heading}
                </CardTitle>
                <CardDescription>
                  {p.form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
<<<<<<< Alpha-1.1
                    <Input name="name" placeholder={p.form.name} />
                    <Input name="email" type="email" placeholder={p.form.email} />
                  </div>
                  <Input name="company" placeholder={p.form.company} />
                  <Input name="subject" placeholder={p.form.subject} />
                  <Textarea
                    name="message"
                    className="min-h-40"
                    placeholder={p.form.message}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    {p.form.submit}
=======
                    <Input name="name" placeholder="Your name" required />
                    <Input name="email" type="email" placeholder="Work email" required />
                  </div>
                  <Input name="company" placeholder="Company or project" />
                  <Input name="subject" placeholder="Subject" required />
                  <Textarea
                    name="message"
                    className="min-h-40"
                    placeholder="Tell us what you need help with..."
                    required
                  />
                  {status.type && (
                    <p
                      className={`rounded-xl border px-4 py-3 text-sm ${
                        status.type === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-rose-200 bg-rose-50 text-rose-700"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
>>>>>>> master
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
