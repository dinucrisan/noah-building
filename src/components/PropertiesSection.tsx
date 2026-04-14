"use client";

import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    title: "Apartament Modern",
    price: "185.000 €",
    location: "București Sector 1",
    rooms: "3",
    area: "85",
    floor: "4",
  },
  {
    title: "Penthouse Premium",
    price: "320.000 €",
    location: "Cluj-Napoca",
    rooms: "4",
    area: "140",
    floor: "12",
  },
  {
    title: "Studio Luxury",
    price: "95.000 €",
    location: "Timișoara",
    rooms: "2",
    area: "55",
    floor: "6",
  },
];

export default function PropertiesSection() {
  return (
    <section
      className="w-full"
      style={{ padding: "80px 20px" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-center"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "36px",
          color: "var(--gold)",
          fontWeight: 700,
        }}
      >
        Proprietăți Selectate
      </motion.h2>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">
        {properties.map((prop, i) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.15,
            }}
          >
            <PropertyCard {...prop} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
