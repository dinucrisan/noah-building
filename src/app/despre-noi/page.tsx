"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Excelență",
    description: "Ne dedicăm perfecțiunii în fiecare detaliu.",
  },
  {
    number: "02",
    title: "Încredere",
    description: "Construim relații pe termen lung bazate pe transparență.",
  },
  {
    number: "03",
    title: "Inovație",
    description:
      "Folosim cele mai noi tehnologii pentru rezultate superioare.",
  },
];

const team = [
  { name: "Andrei Popescu", role: "Director General" },
  { name: "Maria Ionescu", role: "Consultant Senior" },
  { name: "Alex Dumitrescu", role: "Specialist Proprietăți" },
];

export default function DespreNoiPage() {
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
          Despre Noi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-3"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "#BBBBBB",
          }}
        >
          Povestea Noah Building
        </motion.p>
      </section>

      {/* Poveste */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto"
        style={{
          maxWidth: "800px",
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "36px",
            fontWeight: 700,
            color: "var(--gold)",
            marginBottom: "28px",
          }}
        >
          Cine Suntem
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            color: "#CCCCCC",
            lineHeight: 1.9,
          }}
        >
          Noah Building este o agenție imobiliară premium fondată cu viziunea de
          a transforma modul în care oamenii își găsesc locuința perfectă. Cu o
          echipă dedicată și o abordare personalizată, oferim servicii de
          consultanță imobiliară la cele mai înalte standarde.
        </p>
        <p
          className="mt-6"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            color: "#CCCCCC",
            lineHeight: 1.9,
          }}
        >
          De-a lungul anilor, am construit relații solide bazate pe încredere,
          transparență și profesionalism. Fiecare proprietate din portofoliul
          nostru este atent selectată pentru a corespunde celor mai exigente
          cerințe.
        </p>
      </motion.section>

      {/* Valori */}
      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "28px",
            fontWeight: 700,
            color: "var(--gold)",
            marginBottom: "48px",
          }}
        >
          Valorile Noastre
        </motion.h2>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((val, i) => (
            <motion.div
              key={val.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.15,
              }}
              style={{
                backgroundColor: "var(--bg-secondary)",
                padding: "32px",
                border: "1px solid #1a1a1a",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "rgba(201, 162, 39, 0.2)",
                  lineHeight: 1,
                }}
              >
                {val.number}
              </span>
              <h3
                className="mt-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {val.title}
              </h3>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#CCCCCC",
                  lineHeight: 1.6,
                }}
              >
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Echipă */}
      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "28px",
            fontWeight: 700,
            color: "var(--gold)",
            marginBottom: "48px",
          }}
        >
          Echipa Noastră
        </motion.h2>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.15,
              }}
              className="flex flex-col items-center text-center"
            >
              {/* Placeholder avatar */}
              <div
                className="rounded-full"
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#1a1a1a",
                }}
              />
              <h3
                className="mt-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {member.name}
              </h3>
              <span
                className="mt-1"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--gold)",
                }}
              >
                {member.role}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
