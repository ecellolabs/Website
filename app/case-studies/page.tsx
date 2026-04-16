"use client";

import Link from "next/link";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caseStudies } from "./data";
import { useLanguage } from "@/contexts/language";

export default function CaseStudyListPage() {
  const { t } = useLanguage();
  const p = t.caseStudiesPage;

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e9f2ff,_#f8fbff_45%,_#f4f7fb_100%)]">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              {p.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              {p.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
              {p.subheading}
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.id}
                  href={`/case-studies/${caseStudy.id}`}
                  className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
                >
                  <Card className="h-full border-slate-200 bg-slate-50/70 transition duration-200 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-blue-950/10">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                          {caseStudy.eyebrow}
                        </span>
                        <span className="text-sm font-semibold text-slate-400 transition-colors group-hover:text-blue-600">
                          {p.viewLabel}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500">{caseStudy.client}</p>
                        <CardTitle className="mt-2 text-2xl font-semibold leading-tight text-slate-900">
                          {caseStudy.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col justify-between gap-8">
                      <p className="text-sm leading-6 text-slate-600">{t.caseStudySummaries[caseStudy.id] ?? caseStudy.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
