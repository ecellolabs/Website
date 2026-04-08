import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const principles = [
  {
    title: "Product-first thinking",
    description:
      "We shape every build around the user, the business outcome, and the constraints that actually matter in production.",
  },
  {
    title: "Reliable engineering",
    description:
      "Our work favors clean architecture, practical documentation, and deployment paths that teams can operate with confidence.",
  },
  {
    title: "Useful AI and cloud",
    description:
      "We bring modern AI and cloud systems into products where they create real leverage, not just novelty.",
  },
];

const stats = [
  { value: "4", label: "Core service areas" },
  { value: "AI", label: "Ready product workflows" },
  { value: "Cloud", label: "Native delivery mindset" },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e9f2ff,_#f8fbff_45%,_#f4f7fb_100%)]">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                About Ecello Labs
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                We build software systems with product taste and engineering discipline.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Ecello Labs partners with ambitious teams to design, build, and scale cloud-ready
                products, automation systems, and AI-powered workflows that are useful in the real
                world.
              </p>
            </div>

            <Card className="border-slate-200 bg-white/90 shadow-xl shadow-blue-950/10">
              <CardContent className="grid gap-4 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-3xl font-semibold text-blue-600">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                How We Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Small enough to care deeply, sharp enough to own hard problems.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                We are most useful when a product needs more than implementation. We help clarify
                what to build, choose the right technical path, and keep momentum through launch
                and iteration.
              </p>
            </div>

            <div className="grid gap-5">
              {principles.map((principle) => (
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
              What We Build
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-4">
              {["Automation", "Web Development", "Computer Vision", "Cloud Architecture"].map((item) => (
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
