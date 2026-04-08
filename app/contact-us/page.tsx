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
        <section className="bg-[linear-gradient(180deg,_#eff6ff_0%,_#f7f9fc_100%)]">
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-3xl font-semibold">Contact Us</p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Send a quick note about your product, automation, AI, or cloud challenge. We will
                respond with a focused next step instead of a generic sales loop.
              </p>

              <div className="mt-10 grid gap-4">
                {contactDetails.map((detail) => (
                  <Card key={detail.label} size="sm">
                    <CardContent>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {detail.label}
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
                  Send a Message
                </p>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  Start the conversation
                </CardTitle>
                <CardDescription>
                  A few details help us route your note to the right specialist.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input name="name" placeholder="Your name" />
                    <Input name="email" type="email" placeholder="Work email" />
                  </div>
                  <Input name="company" placeholder="Company or project" />
                  <Input name="subject" placeholder="Subject" />
                  <Textarea
                    name="message"
                    className="min-h-40"
                    placeholder="Tell us what you need help with..."
                  />
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
