"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"logo" | "line" | "curtain" | "done">(
    "logo"
  );

  useEffect(() => {
    const lineTimer = setTimeout(() => setPhase("line"), 1000);
    const curtainTimer = setTimeout(() => setPhase("curtain"), 2500);
    const doneTimer = setTimeout(() => setPhase("done"), 3300);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(curtainTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <div
          className="fixed inset-0"
          style={{
            zIndex: 9999,
            pointerEvents: phase === "curtain" ? "none" : "auto",
          }}
        >
          {/* Top curtain half */}
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{
              height: "50%",
              backgroundColor: "var(--bg-primary)",
              zIndex: 2,
            }}
            animate={phase === "curtain" ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Bottom curtain half */}
          <motion.div
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "50%",
              backgroundColor: "var(--bg-primary)",
              zIndex: 2,
            }}
            animate={phase === "curtain" ? { y: "100%" } : { y: "0%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Content layer */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ zIndex: 3 }}
            animate={
              phase === "curtain"
                ? { opacity: 0, scale: 0.95 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Logo image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src="/logoimobiliareransparent.png"
                alt="Noah Building"
                width={300}
                height={300}
                priority
                quality={100}
                unoptimized
                style={{
                  height: "300px",
                  width: "auto",
                  objectFit: "contain",
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </motion.div>

            {/* Expanding line */}
            <motion.div
              className="mt-8 rounded-full"
              style={{
                height: "2px",
                backgroundColor: "var(--gold)",
              }}
              initial={{ width: 0 }}
              animate={phase === "logo" ? { width: 0 } : { width: 200 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
