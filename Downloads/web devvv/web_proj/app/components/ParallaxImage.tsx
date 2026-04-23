"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  width?: number;
  height?: number;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = "",
  width = 500,
  height = 500,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80 * speed, -80 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </motion.div>
  );
}
