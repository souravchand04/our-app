"use client";

import FadeUp from "./FadeUp";
import ParallaxDepth from "./ParallaxDepth";

const brands = [
  { name: "Smart Education", label: "smart\neducation" },
  { name: "Fitness", label: "FITNESS" },
  { name: "Natural Mineral Water", label: "natural" },
  { name: "The Best Graduation", label: "THE BEST\nGRADUATION" },
  { name: "Mothers", label: "Mothers" },
  { name: "Micro", label: "MICRO" },
];

export default function Brands() {
  return (
    <ParallaxDepth
      backgroundSpeed={0.05}
      foregroundSpeed={0.4}
      className="w-full bg-[#2a2a2a] flex items-stretch"
      background={
        <div className="brands-deco shrink-0 grid grid-cols-2 w-20">
          <div className="bg-[#3a3a3a]" />
          <div className="bg-[#aacc00]" />
          <div className="bg-[#222]" />
          <div className="bg-[#333]" />
        </div>
      }
      foreground={
       

        
        <section className="w-full">
          <FadeUp className="brands-list flex items-center divide-x divide-white/10 overflow-hidden flex-1">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="brand-item flex-1 flex items-center justify-center px-6 py-5 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <span className="text-white text-sm font-semibold tracking-widest uppercase text-center whitespace-pre-line leading-tight">
                  {brand.label}
                </span>
              </div>
            ))}
          </FadeUp>
        </section>
        
      }
    />
  );
}
