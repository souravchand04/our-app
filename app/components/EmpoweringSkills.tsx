"use client";

import FadeUp from "./FadeUp";
import ParallaxSection from "./ParallaxSection";

const skills = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    active: true,
    title: "CREATIVITY",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    active: false,
    title: "RELATIONSHIPS",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    active: false,
    title: "RESPONSIBILITY",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    active: false,
    title: "COST EFFECTIVE",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement",
  },
];

export default function EmpoweringSkills() {
  return (
    <ParallaxSection offset={35} className="w-full">
      <div className="container">

      
      <section className="w-full bg-white px-12 py-20 overflow-hidden">

      {/* Top row: headline + description */}
      <FadeUp className="top-row flex items-start justify-between mb-14">
        <div className="headline">
          <div className="overflow-hidden">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-none tracking-tight text-black">
              EMPOWERING SKILLS
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-none tracking-tight text-black">
              TO HELP YOU!
            </h2>
          </div>
        </div>

        <p className="section-desc max-w-xs text-sm text-gray-500 leading-relaxed mt-2">
          Add the best talent on the market, an agile skilled management & seamless involvement
        </p>
      </FadeUp>

      {/* Bottom row: skills list + visual */}
      <FadeUp delay={0.2} className="bottom-row flex items-start gap-12">

        {/* Skills list */}
        <div className="skills-list flex flex-col gap-8 w-80 shrink-0">
          {skills.map((skill, i) => (
            <div key={i} className={`skill-item flex items-start gap-4 pb-8 ${i < skills.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className={`skill-icon shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${skill.active ? "bg-[#aacc00] text-black" : "bg-gray-100 text-gray-500"}`}>
                {skill.icon}
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wide text-black mb-2">
                  {skill.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual: chart card + team photo */}
        <div className="visual-block relative flex-1 h-80">

          {/* Chart card */}
          <div className="chart-card absolute top-0 left-0 w-56 bg-[#1e2235] rounded-2xl p-4 z-10 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#aacc00] flex items-center justify-center">
                  <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white text-xs font-semibold">Weekly dinamycs</span>
              </div>
              <span className="text-gray-400 text-xs">···</span>
            </div>
            {/* Bar chart */}
            <div className="flex items-end gap-1 h-16 mb-2">
              {[40, 55, 35, 60, 45, 70, 50, 90, 65, 80].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === 8 ? "bg-[#aacc00]" : "bg-white/20"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            {/* 42% badge */}
            <div className="flex justify-end mb-1">
              <span className="bg-[#aacc00] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">42%</span>
            </div>
            <div className="flex justify-between text-[10px] text-gray-400">
              <span>JUL 05-12</span>
              <span>JUL 13-20</span>
            </div>
          </div>

          {/* Team photo */}
          <div className="team-photo absolute right-0 top-0 w-[calc(100%-6rem)] h-full rounded-2xl bg-gray-200 overflow-hidden flex items-center justify-center">
            <span className="text-gray-400 text-sm">Team photo</span>
          </div>

        </div>
      </FadeUp>
    </section>
    </div>
    </ParallaxSection>
  );
}
