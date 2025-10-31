"use client";

import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    name: "Classfellow",
    description: "A platform that can record lectures, get instant transcriptions and summaries. ClassFellow captures your classes in real-time so you can focus on learning instead of taking notes",
    image: '/classfellow.png',
    link: "https://classfellow.developertest.cloud",
  },
  {
    id: 2,
    name: "Solidio",
    description: "A web based platofrm for startups to present their project & connect with investors",
    image: "/solidio.png",
    link: "https://solidio.developertest.cloud",
  },
  {
    id: 3,
    name: "Collinear",
    description: "An AI-Driven CRM Platform with Intelligent Automation and Conversational Assistants",
    image: "/collinear.png",
    link: "https://collinear.developertest.cloud",
  },
  {
    id: 4,
    name: "Intellema",
    description: "AI-powered solutions that turn your data into valuable insights, automate tasks, and accelerate business growth by leveraging advanced machine learning and automation technologies.",
    image: "/intellema.png",
    link: "https://intellema.com",
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSelect = (id: number, index: number) => {
    setSelectedId(id);
    const el = itemRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="products" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Our Projects
          </h2>
          <p className="text-foreground/80 mb-10">
            Some projects we have been able to complete successfully.
          </p>
        </div>

        <div
          ref={trackRef}
          className="relative overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          <div className="flex items-stretch gap-4 md:gap-6">
            {projects.map((project, index) => {
              const isSelected = selectedId === project.id;
              return (
                <div
                  key={project.id}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  onClick={() => handleSelect(project.id, index)}
                  className={`
                    snap-center shrink-0 rounded-2xl bg-white border-2 border-gray-200 cursor-pointer transition-all duration-300 ease-in-out
                    flex flex-col overflow-hidden
                    w-[70vw] sm:w-[22rem] md:w-[28rem] lg:w-[32rem]
                    ${isSelected
                      ? 'shadow-xl opacity-100 '
                      : 'opacity-60 hover:opacity-80'}
                  `}
                >
                  <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                      {project.name}
                    </h3>
                    <p className="text-foreground/70 text-sm md:text-base mb-6 flex-1">
                      {project.description}
                    </p>
                    <button
                     onClick={() => window.open(project.link, '_blank')}
                     className="
                      w-full bg-transparent border-2 border-black text-black px-6 py-3 rounded-full 
                      transition-all duration-300 font-medium hover:bg-black hover:text-white cursor-pointer
                    ">
                      View Project
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}