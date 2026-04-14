"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";

type FilterType = "toate" | "apartamente" | "penthouse";

const filters: { label: string; value: FilterType }[] = [
  { label: "Toate", value: "toate" },
  { label: "Apartamente", value: "apartamente" },
  { label: "Penthouse", value: "penthouse" },
];

const properties = [
  {
    title: "Apartament Modern",
    price: "185.000 €",
    location: "București Sector 1",
    rooms: "3",
    area: "85",
    floor: "4",
    type: "apartamente" as const,
  },
  {
    title: "Penthouse Premium",
    price: "320.000 €",
    location: "Cluj-Napoca",
    rooms: "4",
    area: "140",
    floor: "12",
    type: "penthouse" as const,
  },
  {
    title: "Studio Luxury",
    price: "95.000 €",
    location: "Timișoara",
    rooms: "2",
    area: "55",
    floor: "6",
    type: "apartamente" as const,
  },
  {
    title: "Duplex Exclusiv",
    price: "275.000 €",
    location: "Brașov",
    rooms: "5",
    area: "180",
    floor: "2",
    type: "penthouse" as const,
  },
  {
    title: "Apartament Central",
    price: "210.000 €",
    location: "București Sector 3",
    rooms: "3",
    area: "95",
    floor: "8",
    type: "apartamente" as const,
  },
  {
    title: "Loft Industrial",
    price: "165.000 €",
    location: "Constanța",
    rooms: "2",
    area: "75",
    floor: "5",
    type: "apartamente" as const,
  },
];

export default function ProprietatiPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("toate");

  const filtered =
    activeFilter === "toate"
      ? properties
      : properties.filter((p) => p.type === activeFilter);

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
          Proprietăți
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
          Descoperă colecția noastră de proprietăți premium
        </motion.p>
      </section>

      {/* Filters */}
      <div
        className="flex flex-wrap items-center justify-center gap-4"
        style={{
          padding: "40px 20px",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className="transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "2px",
              padding: "10px 24px",
              borderRadius: "0px",
              backgroundColor: "transparent",
              border:
                activeFilter === filter.value
                  ? "1px solid var(--gold)"
                  : "1px solid #333333",
              color:
                activeFilter === filter.value
                  ? "var(--gold)"
                  : "#CCCCCC",
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      <section
        style={{
          padding: "0 40px 80px 40px",
        }}
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
            >
              <PropertyCard
                title={prop.title}
                price={prop.price}
                location={prop.location}
                rooms={prop.rooms}
                area={prop.area}
                floor={prop.floor}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
