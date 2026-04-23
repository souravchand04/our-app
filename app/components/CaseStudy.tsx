"use client";

import FadeUp from "./FadeUp";
import ParallaxDepth from "./ParallaxDepth";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80", alt: "Fashion phones mockup", tall: false },
  { id: 2, src: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80", alt: "iPhone mockup on stones", tall: false },
  { id: 3, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80", alt: "Abstract dark shapes", tall: false },
  { id: 4, src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", alt: "Phone in hand", tall: false },
  { id: 5, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", alt: "Crystal ball landscape", tall: false },
  { id: 6, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", alt: "Architecture arches", tall: false },
  { id: 7, src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80", alt: "Give your people a platform", tall: false },
  { id: 8, src: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80", alt: "Phone close up", tall: false },
];

export default function CaseStudy() {
  return (
    <ParallaxDepth
      backgroundSpeed={0.15}
      foregroundSpeed={0.65}
      className="w-full bg-white px-12 py-20 relative"
      background={
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-blue-100" />
          <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-purple-100" />
        </div>
      }
      foreground={
        

       
        <section className="w-full relative z-10">
          <FadeUp className="case-grid grid grid-cols-4 grid-rows-2 gap-3 relative">
        {images.map((img, i) => (
          <div
            key={img.id}
            className="case-item relative overflow-hidden rounded-xl bg-gray-100 h-52 group cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}

        {/* Center "CASE STUDY" badge — overlapping the grid */}
        <div className="case-badge absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-28 h-28 rounded-full bg-[#aacc00] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
          <span className="text-xs font-black uppercase tracking-widest text-black text-center leading-tight">
            CASE<br />STUDY
          </span>
        </div>
        </FadeUp>
        </section>
       
      }
    />
  );
}
