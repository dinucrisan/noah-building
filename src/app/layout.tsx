import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import LayoutShell from "@/components/LayoutShell";
import VideoBackground from "@/components/VideoBackground";

export const metadata: Metadata = {
  title: "Noah Building | Agenție Imobiliară de Lux",
  description:
    "Noah Building — agenția ta imobiliară de încredere. Descoperă proprietăți exclusiviste și găsește-ți casa visurilor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className="min-h-screen antialiased"
        style={{
          color: "var(--text-primary)",
          fontFamily: "var(--font-body)",
        }}
      >
        <VideoBackground />
        <SmoothScroll>
          <LayoutShell>{children}</LayoutShell>
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
