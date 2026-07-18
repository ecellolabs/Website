"use client";

import { useEffect, useState } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

export default function Calendly({ url }: { url: string }) {
  const [height, setHeight] = useState(700);

  useEffect(() => {
    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    // Calendly's iframe reports its content height via postMessage. Sizing our
    // container to match lets the outer page scroll instead of the iframe.
    const onMessage = (e: MessageEvent) => {
      if (e.data?.event === "calendly.page_height") {
        setHeight(Number(e.data.payload.height));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={url}
      data-resize="true"
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
}
