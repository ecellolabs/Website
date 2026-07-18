"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

// Reserved up front so the footer doesn't sit right under the header while the
// widget is still loading, then jump down once Calendly reports its real height.
const MIN_HEIGHT = 900;

// Full viewport height while the loader is showing, so the spinner sits
// centered in view and the footer stays below the fold instead of peeking up.
const LOADER_HEIGHT = "100vh";

// Keeps the loader from flashing by for iframes that render almost instantly —
// the reveal waits for this floor even if Calendly reports ready sooner.
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
  // The widget is built in the DOM from the start (Calendly needs a real,
  // attached element to init into), but stays invisible behind the loader
  // until its iframe reports back — that first message is our signal that
  // there's actually something worth looking at.
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

    // Calendly's script only auto-scans the DOM for `.calendly-inline-widget`
    // elements once, on its own load. Client-side (SPA) navigation to this page
    // happens after that scan already ran, so we init explicitly via its API
    // instead of relying on the auto-scan, every time this component mounts.
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

    // Calendly's iframe reports its content height via postMessage. Sizing our
    // container to match lets the outer page scroll instead of the iframe. Early
    // messages during load can report a smaller height, so never shrink below
    // MIN_HEIGHT to avoid a visible collapse-then-grow flash. The first message
    // of any kind also means the iframe has rendered content, so that's when we
    // reveal it and drop the loader.
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
