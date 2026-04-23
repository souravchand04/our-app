"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";
import ParallaxSection from "./ParallaxSection";

const faqs = [
  {
    q: "HOW DOES THE AGILE MANIFESTO ADDRESS PLANNING?",
    a: "Overcomplicate thing heve calling it's good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it's easy to find.",
  },
  { q: "REFLECTS YOUR AUDIENCE'S NEED?", a: null },
  { q: "WHAT IS A STATEMENT OF WORK IN PROJECT MANAGEMENT?", a: null },
  { q: "WHEN IS AN FAQ PAGE APPROPRIATE?", a: null },
  { q: "WHAT QUESTIONS BELONG ON AN FAQ PAGE?", a: null },
  { q: "ALIGN WITH YOUR BRAND LOOK AND FEEL?", a: null },
  { q: "HOW TO BECOME AN AGILE PROJECT MANAGER?", a: null },
  { q: "HOW TO MANAGE AGILE TEAMS?", a: null },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <ParallaxSection offset={40} className="w-full">
      <section className="w-full bg-white px-12 py-20 flex gap-16 overflow-hidden">

      {/* Left */}
      <FadeUp className="left-col shrink-0 w-64 flex flex-col gap-6">
        <div className="headline">
          <div className="overflow-hidden">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tight text-black">
              FREQUENTLY
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tight text-black">
              ASKED
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tight text-black">
              QUESTIONS
            </h2>
          </div>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">
          Frequently asked question (FAQ) pages to find answars.
        </p>
      </FadeUp>

      {/* Right: accordion */}
      <FadeUp delay={0.15} className="faq-list flex-1 flex flex-col divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left gap-4"
            >
              <span className="text-xs font-black uppercase tracking-wide text-black">
                {faq.q}
              </span>
              <span className="shrink-0 text-black text-lg leading-none">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && faq.a && (
              <div className="faq-answer pb-5">
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </FadeUp>

    </section>
    </ParallaxSection>
  );
}
