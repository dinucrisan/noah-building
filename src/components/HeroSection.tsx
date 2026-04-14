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
        preload="metadata"
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      >
        <source src="/video_siteimobiliare1.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to right, rgba(10,10,10,0.93), rgba(10,10,10,0.2))",
        }}
      />

      {/* Content */}
      <div
        className="relative flex w-full items-center justify-center px-6 md:justify-start md:px-20"
        style={{ zIndex: 2, height: "100%" }}
      >
        <div className="flex flex-col items-center text-center md:items-start md:text-left" style={{ maxWidth: "500px" }}>
          {/* Gold vertical accent line */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="hidden md:block"
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
            className="text-[18px] md:text-[32px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              letterSpacing: "8px",
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
            className="text-[12px] md:text-[16px]"
            style={{
              fontFamily: "var(--font-body)",
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
            className="text-[14px] md:text-[17px]"
            style={{
              fontFamily: "var(--font-body)",
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
            className="w-full md:w-auto"
            style={{ marginTop: "32px" }}
          >
            <Link
              href="/proprietati"
              className="block w-full text-center transition-all duration-[400ms] md:inline-block md:w-auto"
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
            className="flex items-center justify-center md:justify-start"
            style={{ marginTop: "48px", gap: "40px" }}
          >
            <div className="flex flex-col items-center md:items-start">
              <span
                className="text-[28px] md:text-[36px]"
                style={{
                  fontFamily: "var(--font-heading)",
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

            <div
              style={{
                width: "1px",
                height: "30px",
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            />

            <div className="flex flex-col items-center md:items-start">
              <span
                className="text-[28px] md:text-[36px]"
                style={{
                  fontFamily: "var(--font-heading)",
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
