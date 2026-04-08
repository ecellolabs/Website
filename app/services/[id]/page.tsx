import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getService, services } from "../data";
import Image from "next/image";

type ServicePageProps = {
  params: Promise<{ id: string }>;
};

const accentClasses = {
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  sky: "bg-sky-50 text-sky-700 ring-sky-100",
  cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  indigo: "bg-indigo-50 text-indigo-700 ring-indigo-100",
} as const;

export async function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getService(id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e8f4ff,_#f8fbff_48%,_#f4f7fb_100%)]">
          {service.image && (
            <img
              src={service.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
              aria-hidden="true"
            />
          )}
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
            <div>
              <p
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ring-1 ${accentClasses[service.accent]}`}
              >
                {service.eyebrow}
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-medium leading-8 text-slate-700">
                {service.tagline}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                {service.summary}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/#book-meeting">Book a Strategy Call</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>

            <Card className="border-slate-200 bg-white/90 shadow-xl shadow-blue-950/10">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  What You Get
                </p>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  Outcome-focused delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="leading-6 text-slate-700">{outcome}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Our Approach
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Built around clarity, delivery, and long-term maintainability.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">{service.promise}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.capabilities.map((capability) => (
                <Card key={capability} className="border-slate-200 bg-slate-50/70">
                  <CardContent className="pt-6">
                    <p className="font-medium leading-6 text-slate-800">{capability}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Delivery Path
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-slate-900">
              A focused path from messy idea to working system.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {service.process.map((item, index) => (
                <Card key={item.step} className="border-slate-200 bg-white">
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {item.step}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Best For
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Teams that need dependable execution.
              </h2>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-3">
              {service.bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
