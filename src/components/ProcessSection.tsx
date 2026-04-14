"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  { number: 1, label: "Contactează-ne" },
  { number: 2, label: "Vizionare" },
  { number: 3, label: "Ofertă" },
  { number: 4, label: "Mutare" },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled
      const start = rect.top - windowHeight * 0.7;
      const end = rect.bottom - windowHeight * 0.3;
      const total = end - start;

      if (total <= 0) return;

      const current = -start;
      const p = Math.max(0, Math.min(1, current / total));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getStepActive = (index: number) => {
    const threshold = index * (1 / 3);
    return progress >= threshold;
  };

  const getLineScale = (index: number) => {
    const segmentStart = index * (1 / 3);
    const segmentEnd = (index + 1) * (1 / 3);
    if (progress <= segmentStart) return 0;
    if (progress >= segmentEnd) return 1;
    return (progress - segmentStart) / (segmentEnd - segmentStart);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ padding: "80px 20px" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "36px",
          color: "var(--gold)",
          fontWeight: 700,
          marginBottom: "64px",
        }}
      >
        Cum Funcționează
      </motion.h2>

      {/* Desktop layout */}
      <div className="mx-auto hidden max-w-[900px] items-center justify-between md:flex">
        {steps.map((step, i) => (
          <div key={step.number} className="flex items-center">
            <StepCircle
              number={step.number}
              label={step.label}
              isActive={getStepActive(i)}
            />

            {i < steps.length - 1 && (
              <div
                className="relative mx-4 overflow-hidden"
                style={{
                  width: "120px",
                  height: "4px",
                  backgroundColor: "#333333",
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              >
                <div
                  className="absolute inset-0 origin-left"
                  style={{
                    backgroundColor: "var(--gold)",
                    borderRadius: "2px",
                    transform: `scaleX(${getLineScale(i)})`,
                    transition: "transform 0.1s linear",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col items-center gap-0 md:hidden">
        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-col items-center">
            <StepCircle
              number={step.number}
              label={step.label}
              isActive={getStepActive(i)}
            />

            {i < steps.length - 1 && (
              <div
                className="relative my-4 overflow-hidden"
                style={{
                  width: "4px",
                  height: "40px",
                  backgroundColor: "#333333",
                  borderRadius: "2px",
                }}
              >
                <div
                  className="absolute inset-0 origin-top"
                  style={{
                    backgroundColor: "var(--gold)",
                    borderRadius: "2px",
                    transform: `scaleY(${getLineScale(i)})`,
                    transition: "transform 0.1s linear",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function StepCircle({
  number,
  label,
  isActive,
}: {
  number: number;
  label: string;
  isActive: boolean;
}) {
  return (
    <div className="flex flex-col items-center" style={{ minWidth: "80px" }}>
      <div
        className="flex items-center justify-center rounded-full transition-all duration-500"
        style={{
          width: "56px",
          height: "56px",
          border: `2px solid ${isActive ? "var(--gold)" : "#333333"}`,
          backgroundColor: "transparent",
        }}
      >
        <span
          className="transition-colors duration-500"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "20px",
            color: isActive ? "var(--gold)" : "#777777",
          }}
        >
          {number}
        </span>
      </div>
      <span
        className="mt-3 text-center transition-colors duration-500"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: isActive ? "var(--text-primary)" : "#AAAAAA",
        }}
      >
        {label}
      </span>
    </div>
  );
}
