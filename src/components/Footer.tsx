"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/proprietati", label: "Proprietăți" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const socialIcons = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: YoutubeIcon, label: "Youtube" },
  { icon: Phone, label: "Telefon" },
];

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        padding: "60px 40px",
        backgroundColor: "var(--bg-footer)",
      }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">
        {/* Column 1 - Logo */}
        <div>
          <Image
            src="/logoimobiliareransparent.png"
            alt="Noah Building"
            width={210}
            height={70}
            priority
            quality={100}
            unoptimized
            style={{
              height: "70px",
              width: "auto",
              objectFit: "contain",
              imageRendering: "-webkit-optimize-contrast",
            }}
          />
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "#AAAAAA",
              maxWidth: "250px",
              lineHeight: 1.6,
            }}
          >
            Agenția ta de încredere pentru proprietăți premium.
          </p>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <h4
            className="font-bold"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Navigare
          </h4>
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#AAAAAA",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#AAAAAA";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h4
            className="font-bold"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Contact
          </h4>
          <div className="flex flex-col gap-2.5">
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "#AAAAAA",
              }}
            >
              Str. Exemplu Nr. 10, București
            </span>
            <a
              href="tel:+40700000000"
              className="transition-colors duration-300"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "#AAAAAA",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#AAAAAA";
              }}
            >
              +40 700 000 000
            </a>
            <a
              href="mailto:contact@noahbuilding.ro"
              className="transition-colors duration-300"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "#AAAAAA",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#AAAAAA";
              }}
            >
              contact@noahbuilding.ro
            </a>
          </div>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h4
            className="font-bold"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Social Media
          </h4>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="transition-all duration-300 hover:scale-[1.15]"
                style={{ color: "#AAAAAA" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#AAAAAA";
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Separator */}
      <div
        className="mx-auto max-w-[1200px]"
        style={{
          height: "1px",
          backgroundColor: "rgba(201, 162, 39, 0.15)",
          margin: "40px 0 20px 0",
        }}
      />

      {/* Copyright */}
      <p
        className="text-center"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "12px",
          color: "#AAAAAA",
        }}
      >
        © 2024 Noah Building. Toate drepturile rezervate.
      </p>
    </footer>
  );
}
