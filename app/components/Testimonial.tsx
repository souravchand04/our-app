"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";
import ParallaxDepth from "./ParallaxDepth";
import { useRef } from "react";

import { useEffect } from "react";
import gsap from "gsap";



const testimonials = [
  {
    rating: 4.9,
    text: "We are a full-service digital agency that builds fascinating user experiences. Our approach combines data-driven insights with creative excellence to deliver results that matter.",
    name: "CEYHAN ÖZÇIVIT",
    role: "Mid-Level Developer",
    avatar: "👨‍💻",
  },
  {
    rating: 5.0,
    text: "An incredible team that delivers beyond expectations every single time. Their technical prowess is matched only by their professional communication.",
    name: "SARAH JOHNSON",
    role: "Product Manager",
    avatar: "👩‍💼",
  },
  {
    rating: 4.8,
    text: "Their attention to detail and design quality is truly unmatched in the industry. They transformed our vision into a stunning digital reality.",
    name: "MARK WILLIAMS",
    role: "Senior Designer",
    avatar: "🧑‍🎨",
  },
];

export default function Testimonial() {

  useEffect(() => {
  const el = btnRef.current;
  if (!el) return;

  // super fast setters
  const xTo = gsap.quickTo(el, "x", { duration: 0.3, ease: "power3.out" });
  const yTo = gsap.quickTo(el, "y", { duration: 0.3, ease: "power3.out" });

  const handleMouseMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    xTo(x * 0.4);
    yTo(y * 0.4);
  };

  const handleMouseLeave = () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  el.addEventListener("mousemove", handleMouseMove);
  el.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    el.removeEventListener("mousemove", handleMouseMove);
    el.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];
  const btnRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <ParallaxDepth
      backgroundSpeed={0.1}
      foregroundSpeed={0.65}
      // Added overflow-hidden to parent to prevent parallax bleed, and adjusted padding
      className="w-full max-w-7xl mx-auto  bg-white px-6 md:px-12 py-24 lg:py-40 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-26 lg:gap-24 relative overflow-hidden"
      background={
        <FadeUp 
          className="left-col flex flex-col gap-8 w-full lg:w-1/2 relative z-10 pl-5 pt-4"
        >
          <div className="headline">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-tighter text-black">
              TRUSTED CLIENTS<br />
              <span className="text-gray-200">TESTIMONIAL</span>
            </h2>
          </div>

          <p className="text-base text-gray-500 leading-relaxed max-w-md">
            Consumers today rely heavily on digital means to research products. We provide the expertise to ensure your brand stands out in the digital landscape.
          </p>

          <a
          ref={btnRef}
            href="#"
            className="group w-fit flex items-center gap-2 border border-gray-300 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            EXPLORE US MORE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </FadeUp>
      }
      foreground={
        <FadeUp 
          delay={0.2} 
          className="right-col w-full lg:w-[450px] flex flex-col gap-10 relative z-20"
        >
          {/* Card stack - Increased min-height to ensure visibility */}
          <div className="card-stack relative w-full h-[400px] md:h-[450px] left-170 -top-20">
            {/* Back cards with offset logic */}
            <div className="absolute inset-0 bg-gray-100 rounded-3xl translate-x-4 translate-y-4 rotate-2" />
            <div className="absolute inset-0 bg-gray-200 rounded-3xl translate-x-2 translate-y-2 rotate-1" />

            {/* Front card */}
            <div className="testimonial-card absolute inset-0 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden border border-gray-100">
              <div className="flex-1 p-10 flex flex-col gap-6">
                {/* Rating */}
                <div className="rating flex items-baseline gap-2">
                  <span className="text-5xl font-black text-black">{t.rating}</span>
                  <span className="text-yellow-400 text-2xl">★</span>
                </div>

                {/* Quote text */}
                <p className="text-lg font-medium text-gray-800 leading-snug flex-1 italic">
                  "{t.text}"
                </p>

                {/* Quote icon (re-styled for better visibility) */}
                <div className="self-end flex gap-1 opacity-20">
                   <div className="w-4 h-6 bg-black rounded-sm" />
                   <div className="w-4 h-6 bg-black rounded-sm" />
                </div>
              </div>

              {/* Author bar */}
              <div className="author-bar bg-black flex items-center gap-4 px-8 py-6">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-xl shrink-0 border border-gray-600 ">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="nav-controls flex items-center gap-6 px-2 relative left-220 -top-25">
            <div className="flex gap-3 ">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" color="grey" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" color="grey" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="h-[1px] flex-1 bg-gray-100" />
            <span className="text-xs font-bold tabular-nums">0{current + 1} / 0{testimonials.length}</span>
          </div>
        </FadeUp>
      }
    />
  );
}