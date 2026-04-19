"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
    {
        value: "5+",
        label: "Years of Experience",
        description:
            "Over five years building software products across automation, AI, cloud, and full-stack web development for clients in multiple markets.",
    },
    {
        value: "10+",
        label: "Products Shipped",
        description:
            "From Shopify plugins and mobile training apps to recruitment platforms and AI-powered workflows, we have taken products from idea to production.",
    },
    {
        value: "3+",
        label: "Countries Served",
        description:
            "We have delivered software for clients and end users across USA, Germany, and beyond, adapting to different markets and operational contexts.",
    },
];

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
    const [display, setDisplay] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);
    const suffix = stat.value.replace(/[0-9]/g, "");

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    const duration = 1500;
                    const steps = 40;
                    const increment = numericValue / steps;
                    const interval = duration / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= numericValue) {
                            setDisplay(numericValue);
                            clearInterval(timer);
                        } else {
                            setDisplay(Math.floor(current));
                        }
                    }, interval);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [numericValue]);

    return (
        <div ref={ref} className="group">
            <Card className="h-full border-slate-200 bg-slate-50/70 transition duration-200 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-blue-950/10">
                <CardContent className="space-y-4 pb-8 pt-8">
                    <p className="text-5xl font-semibold text-blue-600 transition duration-200 group-hover:text-blue-700">
                        {display}{suffix}
                    </p>
                    <p className="text-lg font-semibold text-slate-900 transition duration-200 group-hover:text-blue-700">
                        {stat.label}
                    </p>
                    <p className="leading-7 text-slate-600">{stat.description}</p>
                </CardContent>
            </Card>
        </div>
    );
}

export function StatsSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    By the Numbers
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                    Built on real experience, delivered across real products.
                </h2>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {stats.map((stat) => (
                        <StatCard key={stat.label} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}