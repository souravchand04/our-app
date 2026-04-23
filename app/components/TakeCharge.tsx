"use client";

import FadeUp from "./FadeUp";
import ParallaxDepth from "./ParallaxDepth";

const features = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: "DEDICATED\nTEAM",
    desc: "Find the best fit engineers led by senior, seasoned, and skilled our tech- lead.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3" />
      </svg>
    ),
    title: "PRODUCT\nTEAM",
    desc: "Get top-notch service from an experienced Product Designer Manager team.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4a4 4 0 100 8 4 4 0 000-8zM4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "END-TO-END\nTEAM",
    desc: "Hire an elite squad of leading have professionals to turn idea into an ready-to-market product",
  },
];

export default function TakeCharge() {
  return (
    <ParallaxDepth
      backgroundSpeed={0.08}
      foregroundSpeed={0.55}
      className="w-full bg-[#aacc00] px-12 py-16 relative overflow-hidden"
      background={
        <div className="avatar absolute top-10 left-1/2 -translate-x-1/2 z-0">
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-3xl">
            🧑‍💻
          </div>
        </div>
      }
      foreground={
        <section className="w-full relative z-10">
          {/* Top: headline + avatar + description */}
          <FadeUp className="top-row flex flex-col items-center text-center relative">

            {/* Headline */}
            <div className="headline">
              <div className="overflow-hidden">
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-none tracking-tight text-black">
                  TAKE CHARGE STEERING
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-none tracking-tight text-black">
                  YOUR PRODUCT
                </h2>
              </div>
            </div>

            {/* Description — right-aligned under headline */}
            <div className="description mt-6 max-w-xs text-left self-end">
              <p className="text-sm text-black/70 leading-relaxed">
                Our ability to combine expertise and systems thinking is what fuels us as a team.
              </p>
            </div>
          </FadeUp>

          {/* Divider */}
          <div className="w-full border-t border-black/10 mt-12 mb-10" />

          {/* Feature cards */}
          <FadeUp delay={0.2} className="features-row grid grid-cols-3 divide-x divide-black/10">
            {features.map((f, i) => (
              <div key={i} className={`feature-card flex flex-col gap-4 px-8 ${i === 0 ? "pl-0" : ""} ${i === features.length - 1 ? "pr-0" : ""}`}>
                <div className="icon text-black">{f.icon}</div>
                <h3 className="text-base font-black uppercase leading-tight text-black whitespace-pre-line">
                  {f.title}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </FadeUp>
        </section>
      }
    />
  );
}
