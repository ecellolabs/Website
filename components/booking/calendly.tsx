"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

const MIN_HEIGHT = 900;
const LOADER_HEIGHT = "100vh";
const MIN_LOADER_MS = 2000;

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function Calendly({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(MIN_HEIGHT);
  const [loaded, setLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const ready = loaded && minTimeElapsed;

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), MIN_LOADER_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const init = () => window.Calendly?.initInlineWidget({ url, parentElement: container });

    if (window.Calendly) {
      init();
    } else {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT_SRC}"]`);
      if (existing) {
        existing.addEventListener("load", init, { once: true });
      } else {
        const script = document.createElement("script");
        script.src = CALENDLY_SCRIPT_SRC;
        script.async = true;
        script.addEventListener("load", init, { once: true });
        document.body.appendChild(script);
      }
    }

    const onMessage = (e: MessageEvent) => {
      if (typeof e.data?.event !== "string" || !e.data.event.startsWith("calendly.")) return;
      setLoaded(true);
      if (e.data.event === "calendly.page_height") {
        setHeight(Math.max(MIN_HEIGHT, Number(e.data.payload.height)));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [url]);

  return (
    <div
      className="relative w-full transition-[height] duration-300"
      style={{ minWidth: "320px", height: ready ? `${height}px` : LOADER_HEIGHT }}
    >
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-10 w-10 animate-spin rounded-full border-4 border-mist border-t-blue"
            role="status"
            aria-label="Loading booking calendar"
          />
        </div>
      )}
      <div
        ref={containerRef}
        className="h-full w-full transition-opacity duration-300"
        style={{ opacity: ready ? 1 : 0 }}
        aria-hidden={!ready}
      />
    </div>
  );
}
