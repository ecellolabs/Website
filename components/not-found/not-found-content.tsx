import { Button } from "@/components/ui/button";
import BrokenCircuit from "@/components/not-found/broken-circuit";

type NotFoundContentProps = {
  /** Locale-prefixed home link, e.g. "/en". */
  homeHref?: string;
};

export default function NotFoundContent({ homeHref = "/en" }: NotFoundContentProps) {
  return (
    <main className="relative min-h-screen min-h-[100svh] flex items-center overflow-hidden before:content-[''] before:absolute before:inset-0 before:z-0 before:pointer-events-none before:[background:radial-gradient(720px_460px_at_82%_12%,rgba(46,155,238,.16),transparent_62%),radial-gradient(560px_420px_at_6%_88%,rgba(21,96,212,.10),transparent_60%)]">
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6.5 py-20 grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-12 md:gap-10 items-center">
        {/* Copy */}
        <div className="max-w-[520px] min-w-0 order-2 md:order-1">

          <h1 className="text-[clamp(56px,9vw,110px)] font-extrabold mt-5 leading-none">
            <span className="text-gradient animate-sheen">404</span>
          </h1>

          <p className="text-[clamp(16px,1.7vw,19px)] text-[--color-muted] mt-5 max-w-[460px]">
            The page you were looking for isn&apos;t wired up — the signal
            reached a severed trace and never made it to the other side.
          </p>

          <div className="flex gap-3.5 mt-9 flex-wrap">
            <Button variant="primary" arrow href={homeHref} className="!px-6.5 !py-4 !text-base">
              Back to home
            </Button>
            <Button
              variant="ghost"
              href="mailto:alex@ecello.net?subject=Something%20isn't%20working"
              className="!px-6.5 !py-4 !text-base"
            >
              Report a problem
            </Button>
          </div>
        </div>

        {/* Broken circuit animation */}
        <div className="order-1 md:order-2 min-w-0">
          <div className="relative rounded-[28px] border-2 border-[--color-line] bg-white p-6 sm:p-9">
            <BrokenCircuit />
          </div>
        </div>
      </div>
    </main>
  );
}
