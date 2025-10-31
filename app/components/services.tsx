"use client";

import { useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "SaaS Product Development",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "AI Model Development and Integration",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Cloud Infrastructure and DevOps",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Maintenance and Deployments",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "UI/UX Design & Frontend Development",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "AI Model Deployments",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Services() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSelect = (id: number, index: number) => {
    setSelectedId(id);
    const el = itemRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="services" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Services We Offer
          </h2>
          <p className="text-foreground/80 mb-10">
            Discover some of the enterprise-grade services we offer.
          </p>
        </div>

        <div
          ref={trackRef}
          className="relative overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          <div className="flex items-stretch gap-4 md:gap-6 px-4">
            {services.map((service, index) => {
              const isSelected = selectedId === service.id;
              return (
                <button
                  key={service.id}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  onClick={() => handleSelect(service.id, index)}
                  className={`
                    snap-center shrink-0 rounded-3xl border-2 cursor-pointer transition-all duration-300 ease-in-out
                    text-left flex flex-col justify-center
                    w-[85vw] sm:w-[22rem] md:w-[30rem] lg:w-[36rem]
                    min-h-56 md:min-h-64 lg:min-h-72
                    ${isSelected
                      ? 'bg-black text-white border-black shadow-2xl opacity-100'
                      : 'bg-gray-100 text-foreground border-gray-200'}
                  `}
                >
                  <div className="flex items-center gap-5 md:gap-6 px-6 md:px-10">
                    <div className={`${isSelected ? 'text-white' : 'text-foreground'}`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`
                        text-2xl md:text-3xl lg:text-4xl font-semibold
                        ${isSelected ? 'text-white' : 'text-foreground'}
                      `}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
