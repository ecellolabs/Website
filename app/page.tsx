import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollControls from "@/components/layout/scroll";
import type { CSSProperties } from "react";
import { StatsSection } from "@/components/ui/stats-animation";
import { Textarea } from "@/components/ui/textarea";

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

const services = [
  {
    title: "Product Engineering",
    description:
      "End-to-end software development from idea validation to scalable architecture and launch.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Reliable cloud infrastructure, automated CI/CD, and proactive observability for modern teams.",
  },
  {
    title: "AI Integration",
    description:
      "Practical AI systems, assistants, and workflows that create measurable business outcomes.",
  },
];

const steps = [
  {
    step: "Discover",
    description: "We learn your business, your users, and the problem worth solving before writing a single line of code.",
  },
  {
    step: "Design",
    description: "We map out the architecture, user flows, and technical approach so everyone is aligned before building begins.",
  },
  {
    step: "Build",
    description: "We develop in focused cycles with regular check-ins, keeping progress visible and feedback loops short.",
  },
  {
    step: "Deliver",
    description: "We ship to production, hand over clean documentation, and stay available through the transition.",
  },
];

const meetingSteps = [
  {
    step: "01",
    title: "Tell us about your project",
    description:
      "Fill in the form with a brief overview of what you are building and what kind of support you are looking for.",
  },
  {
    step: "02",
    title: "We review and reach out",
    description:
      "We review your submission within 24 hours and follow up with a short message to confirm next steps.",
  },
  {
    step: "03",
    title: "We get on a strategy call",
    description:
      "We schedule a focused 30 minute call to understand your goals and outline how we can help.",
  },
];


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
  const content = generateBinary(200);

  const renderBlock = (groupIndex: number) => (
    <span
      key={groupIndex}
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
    <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-6xl px-4 sm:px-6">
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
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e9f2ff,_#f8fbff_45%,_#f4f7fb_100%)]">
          <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Ecello Labs</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Building intelligent software experiences for ambitious teams.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
              We design and deliver cloud-ready products, AI-powered workflows, and dependable
              engineering systems that scale with your business.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#book-meeting">Book Meeting</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
          <BinaryStreams />
          <ScrollControls scrollDownTarget="#about" />
        </section>

        <section id="about" className="border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">About Us</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A product-first technology partner</h2>
              <p className="mt-6 text-slate-600">
                Ecello Labs partners with startups and enterprise teams to build software that is
                practical, secure, and future-ready. Our approach blends product thinking,
                engineering discipline, and modern AI capabilities.
              </p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Our Services</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Built to deliver real business value</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {services.map((service) => (
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
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A clear path from problem to working product.
            </h2>
            <div className="mt-12 grid gap-0 md:grid-cols-4">
              {steps.map((item, index) => (
                <div key={item.step} className="group relative flex flex-col md:pr-8">
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
                  Book a Meeting
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Let&apos;s plan your next product move
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  Tell us what you are building and where you need support. We will follow up with
                  a focused strategy call.
                </p>
                <div className="mt-10 flex flex-col gap-8">
                  {meetingSteps.map((item) => (
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

              <Card className="border-slate-200 bg-white shadow-sm">
                <CardContent className="flex flex-col gap-4 p-8">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Work Email" />
                  <Input placeholder="Company" />
                  <Textarea
                    placeholder="Tell us about your project. What are you building, what stage are you at, and where do you need help?"
                    className="min-h-[160px] resize-none"
                  />
                  <Button className="mt-6 w-full" size="lg">Book Meeting</Button>
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
