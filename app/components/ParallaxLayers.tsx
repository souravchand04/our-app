"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxLayersProps {
  children: React.ReactNode;
  className?: string;
  depth?: "shallow" | "medium" | "deep";
}

export default function ParallaxLayers({
  children,
  className = "",
  depth = "medium",
}: ParallaxLayersProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const depthMap = {
    shallow: 20,
    medium: 50,
    deep: 100,
  };

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [depthMap[depth], -depthMap[depth]]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
