"use client";

import FadeUp from "./FadeUp";
import ParallaxSection from "./ParallaxSection";

export default function CTA() {
  return (
    <ParallaxSection offset={70} className="w-full">
      <section className="w-full bg-white px-12 py-10">
      <FadeUp className="cta-card relative w-full rounded-2xl bg-[#111] overflow-hidden flex flex-col items-center justify-center py-20 px-8 text-center">

        {/* Lime circle deco — top right */}
        <div className="cta-deco absolute -top-16 -right-16 w-72 h-72 rounded-full border-[40px] border-[#aacc00] opacity-90" />

        {/* Headline */}
        <div className="cta-headline relative z-10">
          <div className="overflow-hidden">
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tight text-white">
              LET'S START YOUR
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tight text-white">
              EXPERIENCE WITH AROLAX
            </h2>
          </div>
        </div>

        {/* CTA link */}
        <a
          href="#"
          className="cta-link relative z-10 mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white border-b border-white/40 pb-1 hover:border-white transition-colors"
        >
          LET'S GET IN TOUCH
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

      </FadeUp>
      </section>
    </ParallaxSection>
  );
}
