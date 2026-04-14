"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full text-center"
      style={{ padding: "100px 20px" }}
    >
      <h2
        className="text-2xl md:text-4xl"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(24px, 4vw, 36px)",
          color: "var(--text-primary)",
          fontWeight: 700,
        }}
      >
        Pregătit să-ți găsești casa perfectă?
      </h2>

      <p
        className="mt-3"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "var(--text-secondary)",
        }}
      >
        Contactează-ne astăzi pentru o consultație gratuită
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-block font-bold transition-all duration-300 hover:scale-[1.03]"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          backgroundColor: "var(--gold)",
          color: "var(--bg-primary)",
          padding: "16px 40px",
          borderRadius: "8px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--gold-light)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--gold)";
        }}
      >
        Contactează-ne Acum
      </Link>
    </motion.section>
  );
}
