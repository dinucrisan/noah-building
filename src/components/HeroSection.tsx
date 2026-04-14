"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      className="relative flex w-full items-center overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Fallback background */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 0, backgroundColor: "var(--bg-primary)" }}
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      >
        <source src="/video_siteimobiliare1.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay — left to right */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to right, rgba(10,10,10,0.93), rgba(10,10,10,0.2))",
        }}
      />

      {/* Content — left aligned */}
      <div
        className="relative flex w-full items-center px-6 md:px-20"
        style={{ zIndex: 2, height: "100%" }}
      >
        <div className="flex flex-col items-start" style={{ maxWidth: "500px" }}>
          {/* Gold vertical accent line */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            style={{
              width: "1px",
              height: "80px",
              backgroundColor: "rgba(201, 162, 39, 0.5)",
              marginBottom: "24px",
              transformOrigin: "top",
            }}
          />

          {/* NOAH BUILDING */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "14px",
              color: "#FFFFFF",
              textTransform: "uppercase",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            NOAH BUILDING
          </motion.span>

          {/* Horizontal gold line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 0.8, width: 80 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            style={{
              height: "1px",
              backgroundColor: "var(--gold)",
              margin: "16px 0",
            }}
          />

          {/* LUXURY REAL ESTATE */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "6px",
              color: "var(--gold)",
              textTransform: "uppercase",
            }}
          >
            LUXURY REAL ESTATE
          </motion.span>

          {/* Description paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              fontWeight: 400,
              color: "#CCCCCC",
              lineHeight: 1.8,
              maxWidth: "420px",
              marginTop: "24px",
            }}
          >
            Transformăm viziunea ta într-o investiție de succes. Portofoliu
            exclusiv de proprietăți premium în cele mai căutate zone din
            România.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            style={{ marginTop: "32px" }}
          >
            <Link
              href="/proprietati"
              className="inline-block transition-all duration-[400ms]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                backgroundColor: "transparent",
                border: "1.5px solid var(--gold)",
                padding: "18px 52px",
                borderRadius: "0px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(201, 162, 39, 0.1)";
                e.currentTarget.style.borderColor = "var(--gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "var(--gold)";
              }}
            >
              DESCOPERĂ PROIECTUL
            </Link>
          </motion.div>

          {/* Mini stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            className="flex items-center"
            style={{ marginTop: "48px", gap: "40px" }}
          >
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                10+
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  color: "var(--gold)",
                  marginTop: "4px",
                }}
              >
                Ani Experiență
              </span>
            </div>

            {/* Separator */}
            <div
              style={{
                width: "1px",
                height: "30px",
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            />

            {/* Stat 2 */}
            <div className="flex flex-col">
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                150+
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  color: "var(--gold)",
                  marginTop: "4px",
                }}
              >
                Proprietăți
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
