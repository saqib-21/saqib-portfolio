"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingLines from "./FloatingLines";

interface WaveBackgroundProps {
  variant?: "hero" | "section";
  className?: string;
}

export default function WaveBackground({
  variant = "hero",
  className = "",
}: WaveBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const isHero = variant === "hero";

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Base emerald background */}
      <div className="absolute inset-0 bg-emerald-950" />

      {/* Soft emerald glow */}
      {isHero && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(16,120,80,0.18), transparent 60%)",
          }}
        />
      )}

      {/* Animated FloatingLines */}
      <motion.div style={{ y }} className="absolute inset-0">
        <FloatingLines
          linesGradient={["#1d5912", "#064e3b", "#022c22"]}
          animationSpeed={1}
          interactive={isHero}
          bendRadius={5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.35}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[6, 6, 6]}
          lineDistance={[5, 5, 5]}
          mixBlendMode="screen"
        />
      </motion.div>
    </div>
  );
}
