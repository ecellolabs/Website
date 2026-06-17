"use client";

import { useState, useEffect, type FormEvent } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgePercent,
  Bot,
  Check,
  Clock,
  Cloud,
  Globe2,
  LayoutTemplate,
  MessageCircle,
  Palmtree,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
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
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useLanguage } from "@/contexts/language";
import { API_BASE_URL } from "@/lib/utils";
import heroImg from "./hero.jpg";
import thailandImg from "./thailand.jpg";
import teamImg from "./team.jpg";
import workspaceImg from "./workspace.jpg";

const CONTACT_API_URL = `${API_BASE_URL}/v1/website/contact`;

const audience = ["Founders", "Freelancers", "Solopreneurs", "Agencies", "Creators", "Remote Teams"];

const destinations = ["Bangkok", "Chiang Mai", "Phuket", "Koh Phangan", "Koh Samui", "Pai"];

const gallery = [
  {
    img: thailandImg,
    alt: "Longtail boats on a turquoise beach in Thailand",
    caption: "Based in Thailand",
  },
  {
    img: teamImg,
    alt: "Remote team collaborating around laptops",
    caption: "Your remote team",
  },
  {
    img: workspaceImg,
    alt: "Laptop workspace overlooking the sea",
    caption: "Work from anywhere",
  },
];

const services = [
  {
    icon: LayoutTemplate,
    title: "Websites & Landing Pages",
    description:
      "Conversion-focused sites that make you look established the day you land. Fast, responsive, and ready to sell.",
  },
  {
    icon: Rocket,
    title: "SaaS & MVPs",
    description:
      "Turn the idea you sketched at a beach cafe into a launched product. We design, build, and ship your MVP.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Run your business on autopilot. We connect your tools and automate the busywork so you can stay off the laptop.",
  },
  {
    icon: Bot,
    title: "AI Workflows & Chatbots",
    description:
      "Custom AI assistants, content engines, and smart workflows that scale you without hiring a team.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Reliable, secure infrastructure that just works — whether you're online from Chiang Mai or a flight to Bali.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Storefronts, payments, and integrations built to take orders 24/7 across every timezone you pass through.",
  },
];

const values = [
  {
    icon: Clock,
    title: "Timezone-friendly",
    description: "Async-first communication and overlapping hours that fit the nomad lifestyle.",
  },
  {
    icon: Rocket,
    title: "Launch in weeks",
    description: "Lean, focused sprints get you live fast — not stuck in endless development.",
  },
  {
    icon: BadgePercent,
    title: "Transparent pricing",
    description: "Fixed quotes agreed up front. No surprise invoices landing in your inbox.",
  },
  {
    icon: ShieldCheck,
    title: "You own everything",
    description: "Full code, accounts, and assets handed to you. No lock-in, ever.",
  },
];

const offerIncludes = [
  "Free 1-on-1 strategy consultation (no strings attached)",
  "20% off your first project — exclusive to nomads in Thailand",
  "A clear, fixed-price roadmap before you commit a cent",
  "Direct line to the people actually building your product",
];

const steps = [
  {
    title: "Book your free consultation",
    description:
      "Tell us what you're building over a relaxed call. We listen, ask the right questions, and spot the opportunities.",
  },
  {
    title: "Get your plan & quote",
    description:
      "You receive a clear scope and a fixed price — with your 20% nomad discount already applied. No pressure.",
  },
  {
    title: "We build & you launch",
    description:
      "We ship in focused sprints with regular updates, then hand over everything. You go live and keep moving.",
  },
];

const stats = [
  { value: "50+", label: "Products shipped" },
  { value: "100%", label: "Remote-first" },
  { value: "4", label: "Continents served" },
  { value: "2–6 wks", label: "Typical launch" },
];

const faqs = [
  {
    q: "Is the consultation really free?",
    a: "Yes — completely. It's a no-obligation call to understand your goals and see if we're a fit. You walk away with clarity whether you work with us or not.",
  },
  {
    q: "How does the 20% discount work?",
    a: "It's applied to your first project quote, exclusively for digital nomads based in Thailand. We agree a fixed price up front with the discount already included.",
  },
  {
    q: "I'm always moving around. Will communication be a problem?",
    a: "Not at all. We're remote-first and async-friendly. We keep you updated on your schedule and book live calls around your timezone.",
  },
  {
    q: "Do I own the final product?",
    a: "100%. All code, accounts, and assets are handed over to you. There's no lock-in and no hidden dependency on us.",
  },
];

function CountdownBar() {
  const [t, setT] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const KEY = "dn-offer-deadline";
    const stored = Number(localStorage.getItem(KEY));
    let deadline = stored;
    if (!stored || Number.isNaN(stored) || stored <= Date.now()) {
      deadline = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 days from first visit
      localStorage.setItem(KEY, String(deadline));
    }
    const tick = () => {
      const diff = Math.max(deadline - Date.now(), 0);
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");
  const units = [
    { label: "Days", value: t ? pad(t.d) : "--" },
    { label: "Hours", value: t ? pad(t.h) : "--" },
    { label: "Mins", value: t ? pad(t.m) : "--" },
    { label: "Secs", value: t ? pad(t.s) : "--" },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 px-4 py-4 text-center sm:flex-row sm:gap-6 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3">
          {units.map((u) => (
            <div
              key={u.label}
              className="flex min-w-[3.75rem] flex-col items-center rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur"
            >
              <span className="font-mono text-2xl font-bold leading-none tabular-nums sm:text-3xl">
                {u.value}
              </span>
              <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-wider text-slate-300">
                {u.label}
              </span>
            </div>
          ))}
        </div>
        <span className="flex items-center gap-2 text-base font-semibold sm:text-lg">
          <Sparkles className="size-5 text-amber-300" />
          20% off + free consultation
        </span>
      </div>
    </div>
  );
}

export default function DigitalNomadPage() {
  const { t } = useLanguage();
  const p = t.contactPage;
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

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <CountdownBar />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <Image
            src={heroImg}
            alt="Friends celebrating together on a sunny vacation"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/65 to-blue-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[86vh] w-full max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:py-32">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-1.5 text-sm font-semibold text-emerald-100 backdrop-blur">
                <Palmtree className="size-4" />
                For digital nomads in Thailand
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-blue-400/15 px-4 py-1.5 text-sm font-semibold text-blue-100 backdrop-blur">
                <BadgePercent className="size-4" />
                20% off + free consultation
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your remote product team, <span className="text-blue-300">while you live the dream.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-200 sm:text-lg">
              You came to Thailand for the freedom — not to wrestle with code, deadlines, and tech
              headaches. Ecello is the on-demand software, product, and AI team that builds and runs the
              hard stuff, so you can focus on growing your business and enjoying the ride.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#offer">
                  Claim your 20% off
                  <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
              >
                <a href="#build">See what we build</a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-300">
              <span className="font-medium text-slate-200">Helping nomads launch from</span>
              {destinations.map((city, i) => (
                <span key={city} className="inline-flex items-center gap-2">
                  <span className="font-semibold text-white">{city}</span>
                  {i < destinations.length - 1 && <span className="text-white/40">•</span>}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Audience strip */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
            <p className="text-center text-sm font-medium text-slate-500">
              Built for nomads who run real businesses
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {audience.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* What we build */}
        <section id="build" className="bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              What we build
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Everything you need to run a business from anywhere
            </h2>
            <p className="mt-5 max-w-2xl text-slate-600">
              From your first landing page to a fully automated, AI-powered operation — we handle the
              technology so you can stay light and mobile.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="group h-full border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                  >
                    <CardHeader>
                      <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="mt-4 text-base font-semibold text-slate-900">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-6 text-slate-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Ecello */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why Ecello
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              A team that gets the nomad lifestyle
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex flex-col">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-5 font-semibold text-slate-900">{value.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Lifestyle gallery */}
        <section className="border-t border-slate-200 bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              The lifestyle
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Build your business. Live the adventure.
            </h2>
          </div>
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.caption}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200"
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                    {item.caption}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Offer */}
        <section id="offer" className="bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top_right,_#1d4ed8,_#0b46a3_55%,_#06245a_100%)] px-6 py-12 text-white sm:px-12 sm:py-16">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold">
                    <Sparkles className="size-4" />
                    Digital Nomad Launch Offer
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                    20% off your first project — and the consultation is on us.
                  </h2>
                  <p className="mt-5 max-w-xl text-blue-100">
                    Tell us what you&apos;re building. We&apos;ll map out a plan, give you a fixed price with
                    your nomad discount already applied, and you decide. Zero risk, zero obligation.
                  </p>

                  <ul className="mt-8 space-y-3">
                    {offerIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-blue-50">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                          <Check className="size-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-blue-700 hover:bg-blue-50"
                    >
                      <a href="#contact">
                        Book my free consultation
                        <ArrowRight className="size-5" />
                      </a>
                    </Button>
                    <span className="text-sm text-blue-100">Limited spots each month.</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-100">
                      Your nomad deal
                    </p>
                    <div className="mt-4 flex items-end gap-3">
                      <span className="text-6xl font-bold leading-none">20%</span>
                      <span className="pb-1 text-lg font-semibold text-blue-100">off</span>
                    </div>
                    <p className="mt-2 text-blue-100">your first project</p>
                    <div className="my-6 h-px bg-white/15" />
                    <div className="flex items-center gap-3">
                      <MessageCircle className="size-5 text-blue-100" />
                      <span className="text-lg font-semibold">Free</span>
                      <span className="text-blue-100">strategy consultation</span>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <Globe2 className="size-5 text-blue-100" />
                      <span className="text-sm text-blue-100">
                        Exclusive to nomads based in Thailand
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Three simple steps to launch</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((item, index) => (
                <div key={item.title} className="group relative flex flex-col md:pr-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white transition duration-200 group-hover:bg-blue-700">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden h-px flex-1 bg-slate-200 md:block" />
                    )}
                  </div>
                  <div className="mt-5">
                    <p className="font-semibold text-slate-900 transition duration-200 group-hover:text-blue-700">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white px-6 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Good to know
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <Card key={faq.q} className="h-full border-slate-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-base font-semibold text-slate-900">{faq.q}</CardTitle>
                    <CardDescription className="mt-2 text-sm leading-7 text-slate-600">
                      {faq.a}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Final CTA */}
        <section id="contact" className="border-y border-slate-200 bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                  <Palmtree className="size-4" />
                  Let&apos;s build something
                </span>
                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                  Claim your free consultation & 20% off
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  Drop your details and a quick note about your project. We&apos;ll get back to you to
                  book a relaxed, no-obligation call — and lock in your nomad discount.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "No obligation — just honest advice",
                    "Fixed pricing with 20% off applied",
                    "Talk directly with the builders",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-sm text-slate-700">{point}</span>
                    </div>
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
                      <Input name="name" placeholder={p.form.name} required />
                      <Input name="email" type="email" placeholder={p.form.email} required />
                    </div>
                    <Input name="company" placeholder={p.form.company} />
                    <Input name="subject" placeholder={p.form.subject} />
                    <Textarea
                      name="message"
                      className="min-h-40"
                      placeholder={p.form.message}
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
                      {isSubmitting ? "Sending..." : p.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
