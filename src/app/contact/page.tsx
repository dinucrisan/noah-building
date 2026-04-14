"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const contactCards = [
  {
    icon: Phone,
    label: "TELEFON",
    value: "+40 700 000 000",
    href: "tel:+40700000000",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "contact@noahbuilding.ro",
    href: "mailto:contact@noahbuilding.ro",
  },
  {
    icon: MapPin,
    label: "ADRESĂ",
    value: "Str. Exemplu Nr. 10, București",
    href: undefined,
  },
];

const whyCards = [
  {
    number: "01",
    title: "Experiență Dovedită",
    description: "Peste 10 ani în piața imobiliară premium",
  },
  {
    number: "02",
    title: "Portofoliu Exclusiv",
    description: "Acces la proprietăți care nu sunt listate public",
  },
  {
    number: "03",
    title: "Transparență Totală",
    description: "Fără costuri ascunse, fără surprize",
  },
  {
    number: "04",
    title: "Suport Dedicat",
    description: "Consultant personal pe toată durata procesului",
  },
];

const inputBaseStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "2px solid #222222",
  color: "var(--text-primary)",
  padding: "18px 0",
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  borderRadius: "0px",
  outline: "none",
  transition: "border-color 0.3s",
  marginBottom: "8px",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    e.currentTarget.style.borderBottomColor = "var(--gold)";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    e.currentTarget.style.borderBottomColor = "#222222";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="flex w-full flex-col items-center justify-center"
        style={{ height: "40vh" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "56px",
            fontWeight: 800,
            color: "var(--gold)",
          }}
        >
          Contact
        </motion.h1>

        {/* Gold line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 80 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          style={{
            height: "2px",
            backgroundColor: "var(--gold)",
            marginTop: "20px",
          }}
        />
      </section>

      {/* ===== STATS CONTACT ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
        style={{ padding: "0 20px 80px 20px" }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:justify-center md:gap-0">
          {[
            { number: "24h", label: "Timp de Răspuns" },
            { number: "500+", label: "Consultații Oferite" },
            { number: "100%", label: "Confidențialitate" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <div
                  className="mx-10 hidden md:block"
                  style={{
                    width: "1px",
                    height: "48px",
                    backgroundColor: "rgba(201, 162, 39, 0.3)",
                  }}
                />
              )}
              <div className="flex flex-col items-center">
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "var(--gold)",
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    color: "#BBBBBB",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== FORM + INFO ===== */}
      <section style={{ padding: "0 40px 80px 40px" }}>
        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr]"
          style={{ maxWidth: "1100px", gap: "64px" }}
        >
          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "32px",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              Trimite-ne un mesaj
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "#BBBBBB",
                marginTop: "12px",
                marginBottom: "32px",
              }}
            >
              Completează formularul și te contactăm noi
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nume Complet"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputBaseStyle}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputBaseStyle}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputBaseStyle}
              />

              {/* Select — Tip Proprietate */}
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                  ...inputBaseStyle,
                  color: formData.propertyType ? "var(--text-primary)" : "#555555",
                  appearance: "none",
                  WebkitAppearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23888' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L2 5h12L8 11z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0 center",
                }}
              >
                <option value="" disabled>Selectează tipul</option>
                <option value="apartament">Apartament</option>
                <option value="casa">Casă</option>
                <option value="penthouse">Penthouse</option>
                <option value="teren">Teren</option>
              </select>

              {/* Select — Buget Estimat */}
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                  ...inputBaseStyle,
                  color: formData.budget ? "var(--text-primary)" : "#555555",
                  appearance: "none",
                  WebkitAppearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23888' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L2 5h12L8 11z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0 center",
                }}
              >
                <option value="" disabled>Selectează bugetul</option>
                <option value="sub100">Sub 100.000€</option>
                <option value="100-200">100.000€ - 200.000€</option>
                <option value="200-500">200.000€ - 500.000€</option>
                <option value="peste500">Peste 500.000€</option>
              </select>

              <textarea
                name="message"
                placeholder="Mesaj"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                  ...inputBaseStyle,
                  height: "120px",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                className="w-full transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--bg-primary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                  padding: "20px",
                  borderRadius: "0px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "32px",
                }}
              >
                Trimite Mesajul
              </button>
            </form>
          </motion.div>

          {/* RIGHT — Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Contact Cards */}
            {contactCards.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div
                  className="transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,162,39,0.1)",
                    padding: "28px",
                    marginBottom: "16px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.1)";
                  }}
                >
                  <Icon
                    size={28}
                    style={{ color: "var(--gold)", marginBottom: "12px" }}
                  />
                  <span
                    className="block"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "4px",
                      color: "var(--gold)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="block"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href}>
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}

            {/* Program Card */}
            <div
              className="transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,162,39,0.1)",
                padding: "28px",
                marginBottom: "16px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.1)";
              }}
            >
              <Clock
                size={28}
                style={{ color: "var(--gold)", marginBottom: "12px" }}
              />
              <span
                className="block"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                  color: "var(--gold)",
                  marginBottom: "8px",
                }}
              >
                PROGRAM
              </span>
              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  Luni – Vineri: 09:00 – 18:00
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#CCCCCC",
                  }}
                >
                  Sâmbătă: 10:00 – 14:00
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#AAAAAA",
                  }}
                >
                  Duminică: Închis
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-5" style={{ marginTop: "8px" }}>
              {[InstagramIcon, FacebookIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="transition-all duration-300 hover:scale-110"
                  style={{ color: "#888888" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#888888";
                  }}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== DE CE SĂ NE ALEGI ===== */}
      <section style={{ padding: "80px 40px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "32px",
            fontWeight: 700,
            color: "var(--gold)",
            marginBottom: "48px",
          }}
        >
          De Ce Noah Building?
        </motion.h2>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="text-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,162,39,0.1)",
                padding: "32px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.1)";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "rgba(201,162,39,0.2)",
                  lineHeight: 1,
                }}
              >
                {card.number}
              </span>
              <h3
                className="mt-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                {card.title}
              </h3>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#BBBBBB",
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== HARTĂ ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex w-full items-center justify-center"
        style={{
          height: "350px",
          backgroundColor: "#111111",
          borderTop: "1px solid rgba(201,162,39,0.1)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "#AAAAAA",
          }}
        >
          Hartă Interactivă
        </span>
      </motion.div>
    </>
  );
}
