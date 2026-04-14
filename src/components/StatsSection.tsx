"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 150, suffix: "+", label: "Proprietăți Vândute" },
  { value: 10, suffix: "", label: "Ani Experiență" },
  { value: 98, suffix: "%", label: "Clienți Mulțumiți" },
];

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedCounter({ value, suffix, started }: { value: number; suffix: string; started: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      setCurrent(Math.round(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [started, value]);

  return (
    <span
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "56px",
        color: "var(--gold)",
      }}
    >
      {current}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
      style={{ padding: "80px 20px" }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:justify-center md:gap-0">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center">
            {/* Separator before 2nd and 3rd items on desktop */}
            {i > 0 && (
              <div
                className="mx-10 hidden md:block"
                style={{
                  width: "1px",
                  height: "40px",
                  backgroundColor: "rgba(201, 162, 39, 0.3)",
                }}
              />
            )}

            <div className="flex flex-col items-center text-center" style={{ minWidth: "160px" }}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} started={started} />
              <span
                className="mt-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                }}
              >
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
