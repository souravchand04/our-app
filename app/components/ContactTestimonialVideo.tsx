"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    author: "Mike David",
    role: "Developer",
  },
  {
    quote:
      "Working with this agency transformed our digital presence completely. Their attention to detail and creative approach exceeded every expectation we had going into the project.",
    author: "Sarah Chen",
    role: "Product Manager",
  },
  {
    quote:
      "A truly professional team that delivers on every promise. From strategy to execution, they guided us through the entire process with clarity and confidence.",
    author: "James Okafor",
    role: "CEO, Startify",
  },
];

const services = [
  {
    title: "Website & mobile design",
    desc: "We deploy world-class creative design, team on demand, that can design serial measures of success is when a client partner with more than once to do ship scale.",
  },
  { title: "Motion graphic & animation", desc: null },
  { title: "User experience", desc: null },
];

export default function ContactTestimonialVideo() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="w-full bg-white">

      {/* ── TESTIMONIAL SLIDER ── */}
      <div className="relative flex items-center justify-center px-16 py-16 max-w-4xl mx-auto">

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Quote content */}
        <div className="flex flex-col items-center text-center gap-5">
          {/* Quote marks */}
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
            <path d="M0 28V16.8C0 7.467 5.04 2.24 15.12 0l1.68 2.8C11.2 4.293 8.4 7.467 8.4 12.6H14V28H0zm20 0V16.8C20 7.467 25.04 2.24 35.12 0L36.8 2.8C31.2 4.293 28.4 7.467 28.4 12.6H34V28H20z" fill="#111" />
          </svg>

          <p className="text-gray-700 text-base leading-relaxed max-w-xl">
            {t.quote}
          </p>

          <p className="text-xs text-gray-500">
            <span className="font-semibold text-black">{t.author}</span>, {t.role}
          </p>

          {/* Dots */}
          <div className="flex gap-2 mt-1">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-black" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Next arrow + vertical divider */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <div className="w-px h-16 bg-gray-200" />
          <button
            onClick={next}
            aria-label="Next"
            className="p-2 text-gray-400 hover:text-black transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>

      {/* ── VIDEO + INFO CARD ── */}
      <div className="grid grid-cols-2 max-w-4xl mx-auto mb-16 shadow-sm">

        {/* Left — image with play button */}
        <div className="relative overflow-hidden" style={{ height: "340px" }}>
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
            alt="Working professional"
            fill
            className="object-cover object-center"
            sizes="40vw"
          />
          {/* Play button */}
          <button
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="w-12 h-12 bg-black/80 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M4 2l10 6-10 6V2z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Right — dark info panel */}
        <div className="bg-[#1c1c1c] text-white p-8 flex flex-col justify-between" style={{ height: "340px" }}>
          <h3 className="text-2xl font-black leading-snug">
            Working in the fields of UI/UX design and art direction.
          </h3>

          <div className="flex flex-col gap-4">
            {services.map((s, i) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs">↗</span>
                  <p className={`text-sm font-semibold ${i === 0 ? "underline underline-offset-2" : ""}`}>
                    {s.title}
                  </p>
                </div>
                {s.desc && (
                  <p className="text-xs text-gray-400 leading-relaxed mt-1 pl-4">
                    {s.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
