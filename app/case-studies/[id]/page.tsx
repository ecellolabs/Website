import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caseStudies, getCaseStudy } from "../data";

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ id: caseStudy.id }));
}

type CaseStudyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e9f2ff,_#f8fbff_45%,_#f4f7fb_100%)]">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div>
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
              >
                Back to case studies
              </Link>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                {caseStudy.eyebrow}
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                {caseStudy.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
                {caseStudy.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {caseStudy.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 transition duration-200 hover:border-blue-200 hover:text-blue-700"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <Card className="border-slate-200 bg-white/85 shadow-xl shadow-blue-950/10">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Project Snapshot
                </p>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  {caseStudy.client}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition duration-200 hover:border-blue-200 hover:bg-blue-50/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">{metric.value}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:py-20">
            {[
              { title: "Challenge", body: caseStudy.challenge },
              { title: "Solution", body: caseStudy.solution },
              { title: "Outcome", body: caseStudy.outcome },
            ].map((item) => (
              <div key={item.title} className="group">
                <Card className="h-full border-slate-200 bg-slate-50/70 transition duration-200 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-blue-950/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-slate-900 transition duration-200 group-hover:text-blue-700">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-slate-600">{item.body}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {caseStudy.overview && (
          <section className="bg-[#f8fbff]">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Overview
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-slate-900">
                About this project
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-slate-600">
                {caseStudy.overview}
              </p>
            </div>
          </section>
        )}

        {(caseStudy.challengeDetail || caseStudy.solutionDetail) && (
          <section className="bg-white">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
              {caseStudy.challengeDetail && (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    The Problem
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900">
                    What we were up against
                  </h2>
                  <p className="mt-5 leading-8 text-slate-600">
                    {caseStudy.challengeDetail}
                  </p>
                </div>
              )}
              {caseStudy.solutionDetail && (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    The Approach
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900">
                    How we solved it
                  </h2>
                  <p className="mt-5 leading-8 text-slate-600">
                    {caseStudy.solutionDetail}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {caseStudy.features && caseStudy.features.length > 0 && (
          <section className="bg-[#f8fbff]">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Features
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900">
                What we built
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudy.features.map((feature) => (
                  <div key={feature.title} className="group">
                    <Card className="h-full border-slate-200 bg-white transition duration-200 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-950/10">
                      <CardHeader>
                        <CardTitle className="text-base font-semibold text-slate-900 transition duration-200 group-hover:text-blue-700">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {caseStudy.challenges && caseStudy.challenges.length > 0 && (
          <section className="bg-white">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Engineering
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900">
                Technical challenges
              </h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {caseStudy.challenges.map((item, index) => (
                  <div key={item.title} className="group flex gap-5">
                    <span className="mt-1 shrink-0 text-sm font-semibold text-slate-300 transition duration-200 group-hover:text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
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
        )}

        {caseStudy.outcomeDetail && (
          <section className="bg-[#f8fbff]">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Results
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-slate-900">
                Business impact
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-slate-600">
                {caseStudy.outcomeDetail}
              </p>
            </div>
          </section>
        )}

        <section className="border-t border-slate-200 bg-[#f8fbff]">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Build With Us
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Have a product challenge like this?
              </h2>
            </div>
            <Button asChild size="lg">
              <Link href="/#book-meeting">Book Meeting</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
