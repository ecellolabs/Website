import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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

const reviews = [
  {
    quote:
      "Ecello Labs transformed our legacy process into an automated platform in under twelve weeks.",
    name: "Head of Operations",
    company: "Fintech Client",
  },
  {
    quote:
      "Strong technical ownership, transparent communication, and a team that treats outcomes like their own.",
    name: "Product Director",
    company: "HealthTech Client",
  },
  {
    quote:
      "Their cloud and DevOps work reduced deployment risk and improved our engineering velocity immediately.",
    name: "CTO",
    company: "SaaS Client",
  },
];

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
          <div className="border-y border-slate-200 bg-slate-50">
            <div className="marquee-track py-4">
              {[...technologies, ...technologies].map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="mx-2 inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
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

        <section id="case-studies" className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Client Reviews</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Trusted by teams that ship fast</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {reviews.map((review) => (
                <Card key={review.company} className="h-full border-slate-200 bg-slate-50/70">
                  <CardContent className="space-y-4 pt-6">
                    <p className="text-slate-700">&quot;{review.quote}&quot;</p>
                    <div>
                      <p className="font-semibold text-slate-900">{review.name}</p>
                      <p className="text-sm text-slate-500">{review.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="book-meeting" className="border-y border-slate-200 bg-[#f8fbff]">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Book a Meeting</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let&apos;s plan your next product move</h2>
                <p className="mt-5 text-slate-600">
                  Tell us what you are building and where you need support. We will follow up with
                  a focused strategy call.
                </p>
              </div>

              <Card className="border-slate-200 bg-white">
                <CardContent className="space-y-4 pt-6">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Work Email" />
                  <Input placeholder="Company" />
                  <Button className="w-full">Book Meeting</Button>
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
