"use client";

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
import { useLanguage } from "@/contexts/language";

const contactValues = [
  { value: "contact@ecello.net", href: "mailto:contact@ecello.net" },
  { value: "+92 300 5397347", href: "tel:+923005397347" },
  { value: "Islamabad, Pakistan", href: "https://www.ecello.net" },
];

export default function ContactUsPage() {
  const { t } = useLanguage();
  const p = t.contactPage;

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
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
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
