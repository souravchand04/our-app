"use client";

import FadeUp from "./FadeUp";
import ParallaxDepth from "./ParallaxDepth";
import AnimatedHeader from "@/providers/AnimatedHeader";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white px-12 py-20 relative overflow-hidden one ">

      {/* Section label */}
      <FadeUp className="section-label mb-4">
        <AnimatedHeader >
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
          01 WHO WE ARE
        </span>
        </AnimatedHeader>
      </FadeUp>

      {/* Headline */}
      <FadeUp delay={0.1} className="headline max-w-3xl">
        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight uppercase">
          
          <AnimatedHeader scrub>
          <div className="overflow-hidden one">
            
            <span className="block">HAVE A BRILLIANT</span>
           
          </div>
           </AnimatedHeader>

           <AnimatedHeader scrub>
          <div className="overflow-hidden two">
            <span className="block">
              IDEA BOOST THE{" "}
              <span className="text-gray-300 two">GROWTH</span>
            </span>
           </div>
           </AnimatedHeader>
           <AnimatedHeader scrub>
          <div className="overflow-hidden three">
            <span className="block">
              <span className="text-gray-300 three">DEVELOPMENT</span>{" "}
              AGENCY
            </span>
          </div>
          </AnimatedHeader>
          <AnimatedHeader scrub>
          <div className="overflow-hidden four">
            <span className="block">YOUR BRANDING!</span>
          </div>
          </AnimatedHeader>
        </h2>
      </FadeUp>

      {/* Decorative shape — extreme right */}
      <ParallaxDepth
        backgroundSpeed={0.5}
        foregroundSpeed={0.5}
        className="deco-shape absolute top-16 right-8 h-32 w-44 overflow-visible"
        background={
          <div className="absolute left-235 top-1/10 -translate-y-1/2 w-14 h-14 bg-[#aacc00] rounded-tl-full z-0" />
        }
        foreground={
          <div
            className="absolute left-250 top-1/10 -translate-y-1/2 w-24 h-20 bg-black z-10"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)", transform: 'rotate(90deg)' }}
          />
        }
      />

      {/* Bottom row */}
      <FadeUp delay={0.2} className="bottom-row flex items-start gap-16 mt-16">

        {/* Avatars + count */}
        <div className="clients-block flex flex-col gap-3 shrink-0">
          <div className="flex items-center">
            {["👨", "👩", "🧑"].map((emoji, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white -ml-2 first:ml-0 flex items-center justify-center text-base"
              >
                {emoji}
              </div>
            ))}
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-black">32k+</span>
          </div>
          <p className="text-xs text-gray-500 leading-snug">
            happy<br />clients of<br />our Services
          </p>
        </div>

        {/* Description + CTA */}
        <div className="description-block max-w-sm">
          <p className="text-gray-600 text-sm leading-relaxed">
            Consumers today rely heavily on digital means to research products. We research a brand of bldend engaging with it, according to the meanwhile, 51% of consumers.
          </p>
          <a
            href="#"
            className="explore-cta inline-flex items-center gap-2 mt-8 text-sm font-bold uppercase tracking-widest text-black hover:gap-4 transition-all"
          >
            EXPLORE US MORE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Spacer between CTA and images */}
        <div className="flex-1" />

      </FadeUp>

      {/* Image + stat row */}
      <FadeUp delay={0.3} className="media-row flex items-end gap-6 mt-12">

        {/* Left image */}
        <div className="image-left shrink-0 w-56 h-44 rounded-xl bg-gray-200 overflow-hidden flex items-center justify-center">
          <span className="text-gray-400 text-xs">Team photo 1</span>
        </div>

        {/* Explore CTA circle */}
        <div className="explore-circle shrink-0 w-32 h-32 rounded-full border border-gray-200 flex flex-col items-center justify-center gap-1 hover:border-black transition-colors cursor-pointer">
          <span className="text-xs font-bold uppercase tracking-widest text-black text-center leading-tight">
            EXPLORE US<br />MORE
          </span>
          <svg className="w-3 h-3 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right image */}
        <div className="image-right shrink-0 w-56 h-72 rounded-xl bg-gray-200 overflow-hidden flex items-center justify-center">
          <span className="text-gray-400 text-xs">Team photo 2</span>
        </div>

        {/* Stat card */}
        <div className="stat-card shrink-0 w-52 bg-gray-50 rounded-xl p-6 flex flex-col gap-3">
          {/* Quote icon */}
          <div className="flex gap-1">
            <div className="w-3 h-4 bg-black rounded-sm" />
            <div className="w-3 h-4 bg-black rounded-sm" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Make your business prosper with our great team of experts. We'll make your.
          </p>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-5xl font-black text-black leading-none">1.8</span>
            <span className="text-2xl font-black text-black">x</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-black">
            FASTER SERVICE
          </span>
        </div>

      </FadeUp>
    </section>
  );
}
