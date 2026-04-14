"use client";

import { useRef, useEffect } from "react";
import { Home, MapPin, Maximize, Building2 } from "lucide-react";
import VanillaTilt from "vanilla-tilt";

interface PropertyCardProps {
  title: string;
  price: string;
  location: string;
  rooms: string;
  area: string;
  floor: string;
}

export default function PropertyCard({
  title,
  price,
  location,
  rooms,
  area,
  floor,
}: PropertyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    VanillaTilt.init(el, {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.15,
    });

    return () => {
      (el as HTMLDivElement & { vanillaTilt?: { destroy: () => void } }).vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderRadius: "12px",
        border: "1px solid var(--border-gold)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-gold-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-gold)";
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
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "18px",
            color: "var(--text-primary)",
            fontWeight: 600,
          }}
        >
          {title}
        </h3>

        <p
          className="mt-1"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "24px",
            color: "var(--gold)",
            fontWeight: 700,
          }}
        >
          {price}
        </p>

        <div className="mt-1 flex items-center gap-1">
          <MapPin size={14} style={{ color: "var(--text-secondary)" }} />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-secondary)",
            }}
          >
            {location}
          </span>
        </div>

        {/* Details row */}
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center gap-1.5">
            <Home size={16} style={{ color: "var(--gold)" }} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-secondary)",
              }}
            >
              {rooms} Camere
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Maximize size={16} style={{ color: "var(--gold)" }} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-secondary)",
              }}
            >
              {area} m²
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Building2 size={16} style={{ color: "var(--gold)" }} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-secondary)",
              }}
            >
              Etaj {floor}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
