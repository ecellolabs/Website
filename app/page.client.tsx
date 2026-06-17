"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollControls from "@/components/layout/scroll";
import { StatsSection } from "@/components/ui/stats-animation";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language";

const technologies = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
  "Terraform",
  "PostgreSQL",
  "OpenAI",
  "Docker",
  "Kubernetes",
];

const marqueeTechnologies = [...technologies, ...technologies];

export default function HomePageClient() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#0a1730]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/background.webp')" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,118,217,0.22),_transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1730]/25 via-[#0a1730]/55 to-[#0a1730]/90" />
          <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t.hero.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              {t.hero.subheading}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#book-meeting">{t.hero.bookMeeting}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#services">{t.hero.exploreServices}</a>
              </Button>
            </div>
          </div>
          <ScrollControls scrollDownTarget="#about" />
        </section>

        <section id="about" className="border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t.about.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.about.heading}</h2>
              <p className="mt-6 text-slate-600">{t.about.description}</p>
            </div>
          </div>
          <div className="overflow-hidden border-y border-slate-200 bg-slate-50">
            <div className="marquee-track py-4">
              {[0, 1].map((group) => (
                <div key={group} className="marquee-group">
                  {marqueeTechnologies.map((tech, index) => (
                    <span
                      key={`${group}-${tech}-${index}`}
                      className="inline-flex shrink-0 items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden bg-[#f8fbff]">
          <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t.services.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.services.heading}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {t.services.items.map((service, index) => (
                <Card
                  key={service.title}
                  className="group h-full border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-semibold text-blue-700 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <CardTitle className="text-base font-semibold text-slate-900">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-600">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <StatsSection />

        <section className="relative overflow-hidden bg-[#f8fbff]">
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.howWeWork.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {t.howWeWork.heading}
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {t.howWeWork.steps.map((item, index) => (
                <div
                  key={item.step}
                  className="group relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg md:p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white transition duration-200 group-hover:bg-blue-700">
                      {index + 1}
                    </div>
                    {index < t.howWeWork.steps.length - 1 && (
                      <div className="hidden h-px flex-1 bg-slate-200 md:block" />
                    )}
                  </div>
                  <div className="mt-5">
                    <p className="font-semibold text-slate-900 transition duration-200 group-hover:text-blue-700">
                      {item.step}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="book-meeting" className="relative overflow-hidden border-y border-slate-200 bg-white">
          <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/3 rounded-full bg-blue-50 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.bookMeeting.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  {t.bookMeeting.heading}
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  {t.bookMeeting.description}
                </p>
                <div className="mt-10 flex flex-col gap-8">
                  {t.bookMeeting.steps.map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-500">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-slate-200 shadow-lg shadow-blue-950/5">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-slate-900">
                    {t.bookMeeting.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder={t.bookMeeting.form.name} />
                    <Input type="email" placeholder={t.bookMeeting.form.email} />
                  </div>
                  <Input placeholder={t.bookMeeting.form.company} />
                  <Textarea className="min-h-40" placeholder={t.bookMeeting.form.message} />
                  <Button asChild size="lg" className="w-full">
                    <a href="/book-meeting">{t.bookMeeting.form.submit}</a>
                  </Button>
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
