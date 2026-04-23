"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDepthProps {
  background: React.ReactNode;
  foreground: React.ReactNode;
  backgroundSpeed?: number;
  foregroundSpeed?: number;
  className?: string;
}

export default function ParallaxDepth({
  background,
  foreground,
  backgroundSpeed = 0.2,
  foregroundSpeed = 0.8,
  className = "",
}: ParallaxDepthProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * backgroundSpeed, -100 * backgroundSpeed]
  );

  const fgY = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * foregroundSpeed, -100 * foregroundSpeed]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background Layer - Moves Slower */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        {background}
      </motion.div>

      {/* Foreground Layer - Moves Faster */}
      <motion.div style={{ y: fgY }} className="relative z-10">
        {foreground}
      </motion.div>
    </div>
  );
}
