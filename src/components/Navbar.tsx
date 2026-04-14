"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/proprietati", label: "Proprietăți" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full transition-all duration-300"
        style={{
          zIndex: 100,
          padding: isScrolled ? "16px 40px" : "16px 40px",
          background: isScrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(201,162,39,0.15)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/logoimobiliareransparent.png"
              alt="Noah Building"
              width={400}
              height={130}
              priority
              quality={100}
              unoptimized
              className="h-[70px] w-auto md:h-[110px]"
              style={{
                width: "auto",
                objectFit: "contain",
                imageRendering: "-webkit-optimize-contrast",
                filter: "brightness(1.4) contrast(1.25)",
              }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                    className="transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "var(--text-primary)",
                  opacity: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1"; /* already full */
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
                className="transition-all duration-[400ms]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                color: "var(--gold)",
                border: "1px solid var(--gold)",
                padding: "8px 20px",
                borderRadius: "0px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gold)";
                e.currentTarget.style.color = "var(--bg-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--gold)";
              }}
            >
              CONTACTEAZĂ-NE
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="flex flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Deschide meniu"
            style={{ width: "30px", height: "30px" }}
          >
            <span
              className="block h-[2px] w-6 rounded-full"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <span
              className="block h-[2px] w-6 rounded-full"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <span
              className="block h-[2px] w-6 rounded-full"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex flex-col items-center justify-center"
            style={{
              zIndex: 200,
              backgroundColor: "var(--bg-primary)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Închide meniu"
                className="absolute top-5 right-5 transition-opacity duration-300 hover:opacity-80"
              style={{
                color: "var(--gold)",
                fontSize: "32px",
                fontFamily: "var(--font-heading)",
              }}
            >
              ✕
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                            className="transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "28px",
                      color: "var(--text-primary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-primary)";
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
