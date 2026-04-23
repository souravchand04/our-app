"use client";

import FadeUp from "./FadeUp";
import ParallaxSection from "./ParallaxSection";

const services = [
  {
    num: "01.",
    title: "PROJECT\nMANAGEMENT",
    desc: "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
    items: ["Mobile & Web Design", "Interation Design", "UX Research & Plan"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    num: "02.",
    title: "UI/UX\nDESIGN",
    desc: "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
    items: ["Brand Identity", "Motion Design", "Design Systems"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    num: "03.",
    title: "WEB\nDESIGN",
    desc: "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
    items: ["Mobile & Web Design", "Interation Design", "UX Research & Plan"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    num: "04.",
    title: "BACKEND\nDEVELOPMENT",
    desc: "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
    items: ["Mobile & Web Design", "Interation Design", "UX Research & Plan"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12H3m18 0h-2M12 5V3m0 18v-2m4.95-13.95l-1.41 1.41M6.46 17.54l-1.41 1.41M19.46 17.54l-1.41-1.41M6.46 6.46L5.05 5.05M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
];

export default function PremiumService() {
  return (
    <ParallaxSection offset={50} className="w-full">
      <section className="w-full bg-white px-12 py-20 overflow-hidden">

      {/* Top: avatar + headline + description */}
      <FadeUp className="top-row flex flex-col items-start relative mb-16">

        {/* Avatar */}
        <div className="avatar mb-[-0.75rem] ml-56 z-10">
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-3xl">
            🧑‍💻
          </div>
        </div>

        <div className="flex items-end justify-between w-full">
          {/* Headline */}
          <div className="headline">
            <div className="overflow-hidden">
              <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-none tracking-tight text-black">
                WE <span className="text-gray-300">PROVIDE</span> PREMIUM
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-none tracking-tight text-black">
                AROLAX SERVICE
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="section-desc max-w-xs text-sm text-gray-500 leading-relaxed mb-2">
            Our ability to combine expertise and systems thinking is what fuels us as a team.
          </p>
        </div>
      </FadeUp>

      {/* Service rows */}
      <FadeUp delay={0.2} className="services-list flex flex-col divide-y divide-gray-100">
        {services.map((s, i) => (
          <div key={i} className="service-item grid grid-cols-[80px_1fr_1fr_80px] items-center gap-8 py-8">

            {/* Number */}
            <span className="service-num text-sm font-bold text-gray-400">{s.num}</span>

            {/* Title */}
            <h3 className="service-title text-lg font-black uppercase leading-tight text-black whitespace-pre-line">
              {s.title}
            </h3>

            {/* Description + bullets */}
            <div className="service-desc">
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.desc}</p>
              <ul className="flex flex-col gap-1">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#aacc00] font-bold">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Icon */}
            <div className="service-icon w-14 h-14 rounded-xl border border-gray-100 flex items-center justify-center text-gray-700 justify-self-end">
              {s.icon}
            </div>

          </div>
        ))}
      </FadeUp>

    </section>
    </ParallaxSection>
  );
}
