"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollControls from "@/components/layout/scroll";
import type { CSSProperties } from "react";
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

const generateBinary = (length = 500) => {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += Math.random() > 0.5 ? "1" : "0";
  }
  return str;
};

type BinaryLineProps = {
  speed?: number;
  direction?: "up" | "down";
  right?: CSSProperties["right"];
  opacity?: number;
};

const binaryStreamLines: BinaryLineProps[] = [
  { speed: 30, direction: "up", right: "0px" },
  { speed: 60, direction: "down", right: "10px" },
  { speed: 50, direction: "up", right: "20px" },
  { speed: 130, direction: "down", right: "30px" },
  { speed: 110, direction: "up", right: "40px" },
  { speed: 70, direction: "down", right: "50px" },
  { speed: 60, direction: "up", right: "60px" },
  { speed: 40, direction: "down", right: "70px" },
  { speed: 80, direction: "up", right: "80px" },
  { speed: 100, direction: "down", right: "90px" },
  { speed: 50, direction: "up", right: "100px" },
];

const BinaryLine = ({ speed = 6, direction = "down", right = 0, opacity = 0.5 }: BinaryLineProps) => {
  const animationName = direction === "up" ? "binaryScrollUp" : "binaryScrollDown";
  const content = useMemo(() => generateBinary(200), []);

  const renderBlock = (groupIndex: number) => (
    <span
      key={groupIndex}
      suppressHydrationWarning
      style={{
        whiteSpace: "pre",
        fontFamily: "monospace",
        fontSize: "14px",
        lineHeight: "14px",
        writingMode: "vertical-rl",
        textOrientation: "upright",
        color: `rgba(11, 70, 163, ${opacity})`,
      }}
    >
      {content}
    </span>
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right,
        height: "100%",
        width: "20px",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {renderBlock(0)}
        {renderBlock(1)}
      </div>
    </div>
  );
};

function BinaryStreams({ lines = binaryStreamLines }: { lines?: BinaryLineProps[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden mx-auto w-full max-w-6xl px-4 sm:block sm:px-6">
      <div className="relative h-full overflow-hidden">
        {lines.map((line, i) => (
          <BinaryLine key={i} {...line} />
        ))}
      </div>

      <style>
        {`
@keyframes binaryScrollDown {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}

@keyframes binaryScrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
        `}
      </style>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e9f2ff,_#f8fbff_45%,_#f4f7fb_100%)]">
          <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">{t.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {t.hero.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
              {t.hero.subheading}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#book-meeting">{t.hero.bookMeeting}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">{t.hero.exploreServices}</a>
              </Button>
            </div>
          </div>
          <BinaryStreams />
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

        <section id="services" className="bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t.services.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.services.heading}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {t.services.items.map((service) => (
                <Card key={service.title} className="h-full border-slate-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-base font-semibold text-slate-900">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-600">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <StatsSection />

        <section className="bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.howWeWork.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {t.howWeWork.heading}
            </h2>
            <div className="mt-12 grid gap-0 md:grid-cols-4">
              {t.howWeWork.steps.map((item, index) => (
                <div key={item.step} className="group relative flex flex-col md:pr-8">
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

        <section id="book-meeting" className="border-y border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
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
                      <span className="mt-0.5 shrink-0 text-sm font-semibold text-slate-300">
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

              <Card className="border-slate-200 bg-white">
                <CardContent className="flex flex-col gap-4 p-8">
                  <Input placeholder={t.bookMeeting.form.name} />
                  <Input type="email" placeholder={t.bookMeeting.form.email} />
                  <Input placeholder={t.bookMeeting.form.company} />
                  <Textarea
                    placeholder={t.bookMeeting.form.message}
                    className="min-h-[160px] resize-none"
                  />
                  <Button className="mt-6 w-full" size="lg">{t.bookMeeting.form.submit}</Button>
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
