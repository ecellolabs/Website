"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language";

export default function AboutUsPage() {
  const { t } = useLanguage();
  const p = t.aboutPage;

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e9f2ff,_#f8fbff_45%,_#f4f7fb_100%)]">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                {p.eyebrow}
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                {p.heading}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {p.subheading}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {p.howWeWork.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  {p.howWeWork.heading}
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  {p.howWeWork.description}
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <img
                  src="/team-image.jpg"
                  alt="Ecello Labs team"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-5">
              {p.principles.map((principle) => (
                <Card key={principle.title} className="border-slate-200 bg-slate-50/70">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-slate-600">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {p.whatWeBuild}
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-4">
              {p.serviceItems.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-lg font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
