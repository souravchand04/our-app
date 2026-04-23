"use client"; // Required for useEffect and canvas interaction

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FluidSimulation } from "@/providers/FluidSimulation";

export default function ContactHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !h1Ref.current) return;

    const config = {
      simResolution: 256,
      dyeResolution: 1024,
      curl: 25,
      pressureIterations: 50,
      velocityDissipation: 0.95,
      dyeDissipation: 0.95,
      splatRadius: 0.275,
      forceStrength: 7.5,
      pressureDecay: 0.75,
      threshold: 1.0,
      edgeSoftness: 0.0,
      inkColor: new THREE.Color(1, 1, 1),
    };

    // Initialize the simulation
    const simulation = new FluidSimulation(
      canvasRef.current,
      config,
      h1Ref.current
    );

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section className="relative w-full bg-white px-8 pt-16 pb-12 overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        id="fluid"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Content Container */}
      <div className="relative z-10 pointer-events-none">
        {/* Big heading */}
        <h1
          ref={h1Ref}
          className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[1.05] text-center text-black max-w-6xl mx-auto"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          We are &ldquo;Arolax&rdquo; - web design and creative agency based in
          California
        </h1>

        {/* Sub-row */}
        <div className="mt-10 flex items-start gap-6 max-w-3xl mx-auto">
          {/* Label */}
          <div className="flex items-center gap-3 shrink-0 pt-1">
            <span className="text-xs font-semibold tracking-widest text-black uppercase whitespace-nowrap">
              01. About Us
            </span>
            <span className="block w-12 h-px bg-black" />
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            Unlocking creative horizons: the story behind &ldquo;Arolax&rdquo; a
            global digital agency crafting experiences, building dreams, and
            shaping success.
          </p>
        </div>
      </div>
    </section>
  );
}