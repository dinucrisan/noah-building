"use client";

import { useEffect, useRef } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play — browsers may block autoplay
    const tryPlay = () => {
      video.play().catch(() => {
        // Silently fail if autoplay is blocked
      });
    };

    tryPlay();

    // Also try on user interaction
    const handleInteraction = () => {
      tryPlay();
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("scroll", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        src="/videos/bg-city.mp4"
        id="video-bg"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        id="video-bg-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: "rgba(10, 10, 10, 0.93)",
        }}
      />
    </>
  );
}
