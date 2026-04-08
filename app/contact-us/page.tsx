import Link from "next/link";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactDetails = [
  { label: "Email", value: "contact@ecello.net", href: "mailto:contact@ecello.net" },
  { label: "Phone", value: "+92 300 5397347", href: "tel:+923005397347" },
  { label: "Location", value: "Islamabad, Pakistan", href: "https://www.ecello.net" },
];

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e9f2ff,_#f8fbff_45%,_#f4f7fb_100%)]">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                Contact Us
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Tell us what you are building. We will help you find the next right move.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Send a quick note about your product, automation, AI, or cloud challenge. We will
                respond with a focused next step instead of a generic sales loop.
              </p>

              <div className="mt-10 grid gap-4">
                {contactDetails.map((detail) => (
                  <Link
                    key={detail.label}
                    href={detail.href}
                    className="rounded-xl border border-slate-200 bg-white/80 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-950/5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {detail.label}
                    </p>
                    <p className="mt-2 font-semibold text-slate-900">{detail.value}</p>
                  </Link>
                ))}
              </div>
            </div>

            <Card className="border-slate-200 bg-white/95 shadow-xl shadow-blue-950/10">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Send a Message
                </p>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  Start the conversation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input name="name" placeholder="Your name" />
                    <Input name="email" type="email" placeholder="Work email" />
                  </div>
                  <Input name="company" placeholder="Company or project" />
                  <Input name="subject" placeholder="Subject" />
                  <Textarea name="message" className="min-h-40" placeholder="Tell us what you need help with..." />
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
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
