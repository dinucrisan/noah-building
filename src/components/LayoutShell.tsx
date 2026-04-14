"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative" style={{ zIndex: 1 }}>
      <LoadingScreen />
      {!isLoading && (
        <>
          <Navbar />
          <main className="relative" style={{ zIndex: 1 }}>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}
