"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScrollControlsProps = {
  scrollDownTarget: string;
};

export default function ScrollControls({ scrollDownTarget }: ScrollControlsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Button
        asChild
        variant="outline"
        size="icon-lg"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full border-slate-300 bg-white/80 text-slate-700 shadow-lg shadow-blue-950/10 backdrop-blur transition hover:bg-white hover:text-blue-700"
      >
        <a href={scrollDownTarget} aria-label="Scroll down">
          <ArrowDown aria-hidden="true" />
        </a>
      </Button>

      <Button
        type="button"
        size="icon-lg"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full shadow-xl shadow-blue-950/20 transition-all duration-200",
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <ArrowUp aria-hidden="true" />
      </Button>
    </>
  );
}
