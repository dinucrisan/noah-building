"use client";

import { motion } from "framer-motion";

const articles = [
  {
    category: "Piața Imobiliară",
    title: "5 Tendințe Pentru 2024 În Piața Imobiliară Din România",
    preview:
      "Descoperiți ce schimbări majore se anticipează în sectorul rezidențial...",
    date: "15 Ianuarie 2024",
  },
  {
    category: "Ghid Cumpărători",
    title: "Ghidul Complet Pentru Achiziția Primului Apartament",
    preview:
      "Tot ce trebuie să știți înainte de a face cel mai important pas...",
    date: "8 Ianuarie 2024",
  },
  {
    category: "Investiții",
    title: "De Ce Să Investești În Imobiliare Premium",
    preview: "Avantajele investițiilor imobiliare pe termen lung...",
    date: "2 Ianuarie 2024",
  },
  {
    category: "Design Interior",
    title: "Tendințe De Design Interior Pentru Locuințe Moderne",
    preview: "Cele mai populare stiluri și materiale...",
    date: "20 Decembrie 2023",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex w-full flex-col items-center justify-center"
        style={{
          height: "40vh",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "48px",
            fontWeight: 700,
            color: "var(--gold)",
          }}
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-3"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "#CCCCCC",
          }}
        >
          Sfaturi și noutăți din piața imobiliară
        </motion.p>
      </section>

      {/* Articles Grid */}
      <section
        style={{
          padding: "0 40px 80px 40px",
        }}
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="group overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid #1a1a1a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1a1a1a";
              }}
            >
              {/* Image placeholder */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  backgroundColor: "#1a1a1a",
                }}
              />

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    color: "var(--gold)",
                  }}
                >
                  {article.category}
                </span>

                <h2
                  className="mt-2 transition-colors duration-300 group-hover:text-[var(--gold)]"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {article.title}
                </h2>

                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    color: "#CCCCCC",
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {article.preview}
                </p>

                <span
                  className="mt-3 block"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "#AAAAAA",
                  }}
                >
                  {article.date}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
