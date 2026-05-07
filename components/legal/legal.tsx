import Link from "next/link";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="border-b border-slate-200 bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_100%)]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {description}
            </p>
            <p className="mt-6 text-sm font-medium text-slate-500">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <div className="space-y-5">
              {sections.map((section) => (
                <Card
                  key={section.title}
                  id={section.title.toLowerCase().replaceAll(" ", "-")}
                  className="scroll-mt-28 rounded-md border-slate-200 bg-white"
                >
                  <CardContent className="space-y-4 pt-1">
                    <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-slate-600 sm:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}

              <Card className="rounded-md border-slate-200 bg-[#f8fbff]">
                <CardContent className="pt-1">
                  <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    Questions about this page can be sent to{" "}
                    <Link
                      href="mailto:alex@ecello.net"
                      className="font-medium text-blue-600 underline-offset-4 hover:underline"
                    >
                      alex@ecello.net
                    </Link>
                    .
                  </p>
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
