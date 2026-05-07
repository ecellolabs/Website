import Link from "next/link";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const helpfulLinks = [
  { label: "Explore Services", href: "/#services" },
  { label: "View Case Studies", href: "/case-studies" },
  { label: "Book a Meeting", href: "/#book-meeting" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e9f2ff,_#f8fbff_48%,_#f4f7fb_100%)]">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl items-center px-4 py-20 sm:px-6">
          <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <section>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">
                404 / Page Not Found
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                This page drifted out of the deployment pipeline.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                The link may be outdated, moved, or mistyped. Let&apos;s get you back to the parts of
                Ecello that are still shipping cleanly.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/">Go Home</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#book-meeting">Book Meeting</Link>
                </Button>
              </div>
            </section>

            <Card className="border-slate-200 bg-white/90">
              <CardContent className="space-y-6 pt-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-7xl font-semibold tracking-tight text-blue-600">404</p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Route unavailable
                  </p>
                  <p className="mt-3 leading-7 text-slate-600">
                    Try one of these quick routes, or head home and restart from the main page.
                  </p>
                </div>

                <div className="grid gap-3">
                  {helpfulLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">-&gt;</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
