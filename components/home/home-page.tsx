"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Ship from "@/components/ui/ship";
import type { HomeContent } from "@/lib/i18n";

const ABOUT_PHOTOS = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
];

const BUBBLES: Array<{
  side: "ltr" | "rtl";
  top: string;
  size: number;
  dur: string;
  delay: string;
}> = [
  { side: "ltr", top: "22%", size: 10, dur: "15s", delay: "0s" },
  { side: "ltr", top: "68%", size: 16, dur: "19s", delay: "-3s" },
  { side: "ltr", top: "40%", size: 7, dur: "13s", delay: "-7s" },
  { side: "ltr", top: "82%", size: 22, dur: "23s", delay: "-11s" },
  { side: "ltr", top: "14%", size: 12, dur: "17s", delay: "-14s" },
  { side: "rtl", top: "34%", size: 14, dur: "18s", delay: "-2s" },
  { side: "rtl", top: "58%", size: 9, dur: "14s", delay: "-6s" },
  { side: "rtl", top: "76%", size: 18, dur: "21s", delay: "-9s" },
  { side: "rtl", top: "28%", size: 6, dur: "12s", delay: "-13s" },
  { side: "rtl", top: "50%", size: 20, dur: "25s", delay: "-16s" },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-[family-name:var(--font-bricolage)] font-extrabold tracking-[-0.02em] text-[clamp(44px,6vw,68px)] leading-none bg-[linear-gradient(120deg,#8fd0ff,#bfeaff_55%,#e6f6ff)] bg-clip-text text-transparent">
        {n}
        {suffix}
      </div>
      <p className="mt-3 text-[#c7dcf3] text-[15px] max-w-[220px] mx-auto leading-snug">{label}</p>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

type HomePageProps = {
  content: HomeContent;
};

export default function HomePage({ content }: HomePageProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [slide, setSlide] = useState(0);
  const [perView, setPerView] = useState(1);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({ startX: 0, active: false, width: 1 });
  const draggingRef = useRef(false);

  const len = content.trust.testimonials.length;
  const pages = Math.ceil(len / perView);
  const current = Math.min(slide, pages - 1);
  const prev = () => setSlide((s) => (Math.min(s, pages - 1) - 1 + pages) % pages);
  const next = () => setSlide((s) => (Math.min(s, pages - 1) + 1) % pages);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current = { startX: e.clientX, active: true, width: e.currentTarget.clientWidth };
    draggingRef.current = true;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    setDragX(e.clientX - drag.current.startX);
  };
  const onPointerUp = () => {
    if (!drag.current.active) return;
    const dx = dragX;
    const threshold = Math.min(120, drag.current.width * 0.18);
    drag.current.active = false;
    draggingRef.current = false;
    setIsDragging(false);
    setDragX(0);
    if (dx <= -threshold) next();
    else if (dx >= threshold) prev();
  };

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.55);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setPerView(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const total = Math.ceil(len / perView);
    const id = setInterval(() => {
      if (draggingRef.current) return;
      setSlide((s) => (s + 1) % total);
    }, 5500);
    return () => clearInterval(id);
  }, [len, perView]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el, i) => {
      const parent = el.parentElement;
      const staggered = parent?.classList.contains("stats-grid");
      if (staggered) {
        (el as HTMLElement).style.transitionDelay = `${(i % 3) * 0.1}s`;
      }
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen min-h-[100svh] pt-26 pb-24 flex items-center overflow-hidden before:content-[''] before:absolute before:inset-0 before:z-0 before:pointer-events-none before:[background:radial-gradient(720px_460px_at_82%_12%,rgba(46,155,238,.16),transparent_62%),radial-gradient(560px_420px_at_6%_88%,rgba(21,96,212,.10),transparent_60%)]"
      >
        <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6.5 grid grid-cols-1 md:grid-cols-[1.04fr_.96fr] gap-10 items-center">
          <div className="max-w-[560px] min-w-0">
            <h1 className="text-[clamp(44px,6.4vw,80px)] font-extrabold mt-5.5">
              <span className="block overflow-hidden">
                <span className="block">{content.hero.titleTop}</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-gradient animate-sheen">{content.hero.titleBottom}</span>
              </span>
            </h1>
            <p className="text-[clamp(17px,1.7vw,20px)] text-[--color-muted] mt-6 max-w-[520px]">
              {content.hero.body}
            </p>
            <div className="flex gap-3.5 mt-8.5 flex-wrap">
              <Button
                variant="primary"
                arrow
                href="mailto:alex@ecello.net?subject=Let's%20talk"
                className="!px-6.5 !py-4 !text-base"
              >
                {content.hero.primaryCta}
              </Button>
              <Button variant="ghost" href="#about" className="!px-6.5 !py-4 !text-base">
                {content.hero.secondaryCta}
              </Button>
            </div>
          </div>

          <Ship />
        </div>

        <Button
          variant="scrollDown"
          href="#about"
          aria-label={content.hero.scrollLabel}
          className="absolute left-1/2 bottom-6 z-20 -translate-x-1/2 hover:-translate-x-1/2"
        >
          ↓
        </Button>
      </section>

      <Button
        variant="scrollUp"
        href="#top"
        aria-label={content.hero.backToTopLabel}
        className={`fixed right-6.5 bottom-6.5 z-70 transition-[opacity,transform,background,border-color,color] duration-300 ${
          showBackToTop
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-3"
        }`}
      >
        ↑
      </Button>

      {/* STATS STRIP */}
      <div className="relative overflow-hidden py-16 border-y border-white/6 bg-[#08315a]">
        <div className="absolute inset-0 z-0 pointer-events-none [background:radial-gradient(120%_150%_at_50%_50%,#1d6ba8_0%,#135286_34%,#0b3d68_62%,#062a4c_100%)]" />
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
          {BUBBLES.map((b, i) => (
            <span
              key={i}
              className={`absolute top-1/2 rounded-full border border-[rgba(190,230,255,.4)] bg-[rgba(190,230,255,.12)] ${
                b.side === "ltr" ? "bubble-ltr" : "bubble-rtl"
              }`}
              style={
                {
                  top: b.top,
                  width: b.size,
                  height: b.size,
                  "--dur": b.dur,
                  "--delay": b.delay,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <div className="relative z-[2] max-w-[1180px] mx-auto px-6.5">
          <div className="stats-grid grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
            {content.stats.map((s) => (
              <div key={s.label} className="reveal">
                <Stat value={s.value} suffix={s.suffix} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section id="about" className="py-24">
        <div className="max-w-[1180px] mx-auto px-6.5 grid grid-cols-1 md:grid-cols-[1.02fr_.98fr] gap-14 md:gap-16 items-center">
          <div className="reveal min-w-0">
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-[--color-azure]">
              {content.about.eyebrow}
            </span>
            <h2 className="text-[clamp(30px,4.4vw,52px)] font-extrabold mt-4">
              {content.about.title}
            </h2>
            {content.about.body.map((paragraph, i) => (
              <p
                key={paragraph}
                className={`text-[--color-muted] text-[17px] leading-relaxed ${i === 0 ? "mt-6" : "mt-4"}`}
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col gap-3 mt-8">
              {content.about.bullets.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-[15px] font-medium text-[--color-ink]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[17px] h-[17px] text-[--color-azure] flex-none"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Fading photos in a bordered white frame with an offset blue accent */}
          <div className="reveal relative min-w-0">
            <span
              aria-hidden
              className="absolute -bottom-5 -right-5 w-full h-full border-2 border-[--color-azure] pointer-events-none"
            />
            <div className="relative border-2 border-[--color-navy] bg-white p-3">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                {ABOUT_PHOTOS.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={content.about.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover [animation:crossfade_21s_ease-in-out_infinite]"
                    style={{ animationDelay: `${i * -7}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 overflow-hidden bg-white">
        <div className="max-w-[1180px] mx-auto px-6.5 text-center reveal">
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-[--color-azure]">
            {content.process.eyebrow}
          </span>
          <h2 className="text-[clamp(30px,4.4vw,52px)] font-extrabold mt-4">
            {content.process.title}
          </h2>
          <p className="text-[--color-muted] text-[17px] mt-5 max-w-[560px] mx-auto">
            {content.process.body}
          </p>
        </div>

        <div className="max-w-[1180px] mx-auto px-6.5 mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8 lg:gap-x-12">
          {content.process.steps.map((step, i) => (
            <div key={step.no} className="reveal flex justify-center">
              <div className="float-box w-full max-w-[344px]" style={{ animationDelay: `${i * -1.6}s` }}>
                <div className="box-wrap">
                  {/* box outline — front face + receding top/right edges */}
                  <svg className="box-wire" viewBox="0 0 344 316" aria-hidden="true">
                    <path
                      className="edge"
                      vectorEffect="non-scaling-stroke"
                      d="M0 44 H296 V316 H0 Z M0 44 L48 0 L344 0 L296 44 M344 0 L344 272 L296 316"
                    />
                    {/* tape strip across the lid, wrapping down and closing off on the right face */}
                    <path
                      className="tape"
                      vectorEffect="non-scaling-stroke"
                      d="M28.4 18 L324.4 18 L324.4 138 L315.6 146 L315.6 26 L19.6 26 Z"
                    />
                  </svg>
                  {/* front cover — the text lives here */}
                  <div className="box-cover p-7">
                    <span className="grid place-items-center w-12 h-12 rounded-full border-2 border-black text-black font-[family-name:var(--font-bricolage)] font-extrabold text-lg">
                      {step.no}
                    </span>
                    <h3 className="text-2xl font-extrabold mt-5 text-[--color-ink]">{step.title}</h3>
                    <p className="text-[--color-muted] text-[14.5px] leading-relaxed mt-3">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TRUST US */}
      <section id="trust" className="py-24 bg-[--color-paper] border-y border-[rgba(189,209,232,0.24)]">
        <div className="max-w-[1040px] mx-auto px-6.5">
          <div className="text-center">
            <span className="reveal block text-xs font-bold tracking-[0.16em] uppercase text-[--color-azure]">
              {content.trust.eyebrow}
            </span>
            <h2 className="reveal text-[clamp(30px,4.4vw,52px)] font-extrabold mt-4">
              {content.trust.title}
            </h2>
          </div>

          <div className="reveal mt-14 flex items-center gap-4 sm:gap-6">
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label={content.trust.previous}
              className="hidden sm:grid flex-none place-items-center w-12 h-12 rounded-full bg-white text-[--color-navy] border-2 border-[--color-navy] transition-colors duration-200 hover:border-[--color-azure] hover:text-[--color-azure] cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Draggable track */}
            <div
              className={`min-w-0 flex-1 overflow-hidden select-none touch-pan-y ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <div
                className={isDragging ? "flex" : "flex transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"}
                style={{ transform: `translateX(calc(-${current * 100}% + ${dragX}px))` }}
              >
                {content.trust.testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="flex-none px-2 md:px-3"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <figure className="h-full flex flex-col rounded-[26px] border-2 border-[--color-line] bg-white px-7 py-8 md:px-9 md:py-9 text-left">
                      {/* rating */}
                      <div className="flex gap-1 text-[--color-azure]" aria-hidden>
                        {Array.from({ length: 5 }).map((_, s) => (
                          <svg key={s} viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                            <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.9 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="flex-1 font-[family-name:var(--font-bricolage)] text-[clamp(18px,1.9vw,22px)] font-medium leading-snug tracking-[-0.01em] text-[--color-ink] mt-5">
                        {t.quote}
                      </blockquote>
                      <figcaption className="flex items-center gap-4 mt-7 pt-6 border-t border-[--color-line]">
                        <span className="grid place-items-center w-12 h-12 rounded-full bg-[--color-navy] text-white font-bold text-[15px] flex-none">
                          {initials(t.name)}
                        </span>
                        <span>
                          <span className="block font-bold text-[--color-navy] leading-tight">{t.name}</span>
                          <span className="block text-[--color-muted] text-sm mt-0.5">{t.role}</span>
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label={content.trust.next}
              className="hidden sm:grid flex-none place-items-center w-12 h-12 rounded-full bg-white text-[--color-navy] border-2 border-[--color-navy] transition-colors duration-200 hover:border-[--color-azure] hover:text-[--color-azure] cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-9">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                aria-label={`${content.trust.goToPage} ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-7 bg-[--color-blue]"
                    : "w-2.5 bg-[rgba(21,96,212,0.24)] hover:bg-[rgba(21,96,212,0.5)]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 pb-24">
        <div className="max-w-[1232px] mx-auto px-6.5">
          <div className="reveal relative overflow-hidden text-white rounded-[32px] px-10 py-18 text-center [background:radial-gradient(760px_430px_at_20%_12%,rgba(46,155,238,.32),transparent_68%),linear-gradient(135deg,#0b2264_0%,#0d286b_52%,#24538f_100%)] before:content-[''] before:absolute before:-inset-x-[18%] before:-top-[32%] before:-bottom-[24%] before:z-0 before:[background:radial-gradient(700px_380px_at_18%_8%,rgba(46,155,238,.4),transparent_64%),radial-gradient(760px_440px_at_88%_82%,rgba(21,96,212,.12),transparent_72%)] before:animate-drift">
            <svg
              className="absolute left-0 right-0 -bottom-0.5 w-full h-[210px] opacity-86 z-0"
              viewBox="0 0 1200 210"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="waveFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1d7fd4" stopOpacity=".08" />
                  <stop offset=".4" stopColor="#1b77ca" stopOpacity=".46" />
                  <stop offset="1" stopColor="#1a67b0" stopOpacity=".9" />
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M0,112 C120,88 240,88 360,112 C480,136 600,136 720,112 C840,88 960,88 1080,112 C1200,136 1320,136 1440,112 C1560,88 1680,88 1800,112 C1920,136 2040,136 2160,112 C2280,88 2400,88 2520,112 L2520,210 L0,210 Z"
                  fill="url(#waveFade)"
                />
                <path
                  d="M0,138 C150,116 300,116 450,138 C600,160 750,160 900,138 C1050,116 1200,116 1350,138 C1500,160 1650,160 1800,138 C1950,116 2100,116 2250,138 C2400,160 2550,160 2700,138 L2700,210 L0,210 Z"
                  fill="#2690df"
                  opacity=".22"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="-1200 0"
                  dur="16s"
                  repeatCount="indefinite"
                />
              </g>
            </svg>
            <div className="relative z-[1] max-w-[640px] mx-auto">
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold">
                {content.cta.title}
              </h2>
              <p className="text-[#c7d6f2] text-lg mt-4.5">
                {content.cta.body}
              </p>
              <Button
                variant="white"
                arrow
                href="mailto:alex@ecello.net?subject=Let's%20talk%20about%20a%20project"
                className="!mt-8.5 !px-7.5 !py-4 !text-[17px]"
              >
                {content.cta.button}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
