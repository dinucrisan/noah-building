"use client";

import { useEffect, useRef } from "react";

interface Circle {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  alpha: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlesRef = useRef<Circle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initCircles = () => {
      const w = canvas.width;
      const h = canvas.height;

      circlesRef.current = [
        {
          x: w * 0.15,
          y: h * 0.2,
          radius: 400,
          dx: 0.18,
          dy: 0.12,
          alpha: 0.03,
        },
        {
          x: w * 0.75,
          y: h * 0.15,
          radius: 350,
          dx: -0.15,
          dy: 0.2,
          alpha: 0.025,
        },
        {
          x: w * 0.5,
          y: h * 0.6,
          radius: 450,
          dx: 0.12,
          dy: -0.18,
          alpha: 0.03,
        },
        {
          x: w * 0.85,
          y: h * 0.7,
          radius: 300,
          dx: -0.2,
          dy: -0.1,
          alpha: 0.025,
        },
        {
          x: w * 0.3,
          y: h * 0.85,
          radius: 380,
          dx: 0.1,
          dy: -0.15,
          alpha: 0.03,
        },
        {
          x: w * 0.6,
          y: h * 0.35,
          radius: 320,
          dx: -0.12,
          dy: 0.18,
          alpha: 0.02,
        },
      ];
    };

    resize();
    initCircles();

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      for (const circle of circlesRef.current) {
        // Move
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Wrap around edges
        if (circle.x - circle.radius > w) circle.x = -circle.radius;
        if (circle.x + circle.radius < 0) circle.x = w + circle.radius;
        if (circle.y - circle.radius > h) circle.y = -circle.radius;
        if (circle.y + circle.radius < 0) circle.y = h + circle.radius;

        // Draw
        const gradient = ctx.createRadialGradient(
          circle.x,
          circle.y,
          0,
          circle.x,
          circle.y,
          circle.radius
        );
        gradient.addColorStop(0, `rgba(201, 162, 39, ${circle.alpha})`);
        gradient.addColorStop(1, "rgba(201, 162, 39, 0)");

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resize();
      // Reposition circles proportionally on resize
      const w = canvas.width;
      const h = canvas.height;
      circlesRef.current.forEach((circle) => {
        if (circle.x > w) circle.x = w * 0.5;
        if (circle.y > h) circle.y = h * 0.5;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(120px)",
      }}
    />
  );
}
