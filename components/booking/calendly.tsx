"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

// Reserved up front so the footer doesn't sit right under the header while the
// widget is still loading, then jump down once Calendly reports its real height.
const MIN_HEIGHT = 900;

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
    // MIN_HEIGHT to avoid a visible collapse-then-grow flash.
    const onMessage = (e: MessageEvent) => {
      if (e.data?.event === "calendly.page_height") {
        setHeight(Math.max(MIN_HEIGHT, Number(e.data.payload.height)));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [url]);

  return <div ref={containerRef} className="w-full" style={{ minWidth: "320px", height: `${height}px` }} />;
}
