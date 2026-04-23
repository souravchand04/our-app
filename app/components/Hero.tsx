"use client";


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import CircularAnimation from "@/providers/CircularAnimation";
import Marquee from "@/providers/Marquie";


const slideUp = (delay = 0) => ({
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLImageElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const rightY = useTransform(scrollYProgress, [0, 0.87], ["90%", "0%"]);



  return (
    <section className="relative w-full min-h-[calc(100vh-56px)] bg-white flex flex-col px-12 py-10 overflow-visible">
      
      
      

      {/* Top row: headline + images */}
      <div className="flex items-center pl-20 -mt-15 flex-1 relative py-0 pt-0 min-h-[80vh] ">

      {/* Left: Headline */}
      <div className="flex-[1.5] flex flex-col justify-center items-start relative z-10 h-100 min-h-[80vh] bg-white  rounded-lg">
        {/* Line 1 */}
        <div className="w-full h-full min-h-[100vh] flex items-center justify-center position-fixed ">
       <CircularAnimation />
    </div>
      </div>

      {/* Right: Splitting/Merging Circle Images */}
      <div className="flex-1 flex justify-center items-center relative h-[500px]">
        <div ref={imageRef} className="relative w-[280px] h-[280px]">
          
              
            <div className="flex relative -right-40 rotate-30 top-19">
            <img src="https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/intro-shape-1.png" alt="" />
          </div>

          {/* RIGHT HALF - Slides up on scroll */}
          <motion.div
            style={{ y: rightY }}
            className="absolute inset-y-0 right-0 w-1/2 overflow-hidden"
          >
            <div className="absolute right-0 w-[280px] h-[280px] rounded-full overflow-hidden border-l-2 border-white/20 bg-red-600 flex items-center justify-center">
              {/* <span className="text-white text-lg">Right Half</span> */}
              <img ref={rightImageRef} src="https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/1-1.jpg" alt="" className="w-full h-full object-contain translate-x-17" />
            </div>
          </motion.div>
          

          {/* LEFT HALF - Static */}
          <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
            <div className="absolute left-0 w-[280px] h-[280px] rounded-full overflow-hidden bg-blue-600 flex items-center justify-center">
              {/* <span className="text-white text-lg">Left Half</span> */}
              <img ref={leftImageRef} src="https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Group-1000003642.png" alt="" className="shery-img w-full h-full object-contain -translate-x-17.5 cursor-pointer image" />
            </div>
          </div>

          {/* Watch video control */}
          <div className="absolute bottom-0 right-0 translate-x-1/2 z-30 flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-2xl">
              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="image text-[10px] font-bold uppercase tracking-tighter leading-tight">
              WATCH<br />VIDEO
            </span>
          </div>

          {/* Squiggle decoration */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-3xl text-gray-300 opacity-50">
            ∿∿
          </div>
        </div>
      </div>
      </div>{/* end top row */}

      {/* Bottom sub-section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        className="flex items-start gap-12 pt-8 pb-4"
      >

        {/* Scroll down arrow */}
        <div className="scroll-arrow shrink-0 mt-2">
          <button
            aria-label="Scroll down"
            className="w-10 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors relative top-15"
          >
            <svg className="w-4 h-4 text-black"  fill="none" stroke="currentColor" viewBox="0 0 24 24 ">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Description + CTA */}
        <div className=" flex flex-col sub-description max-w-sm relative -top-[3vh]">
          <div className="w-screen absolute left-[-9rem] overflow-hidden pointer-events-none"> {/* Adjust offset based on padding */}
    <Marquee  text="We are a full-service digital agency that builds fascinating user experiences." />
  </div>

  <a
    href="#"
    className="inline-flex items-center gap-2 mt-20 text-sm font-bold uppercase tracking-widest text-black hover:gap-4 transition-all"
  >
    GET STARTED NOW
    {/* ... arrow svg */}
  </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-5 text-sm font-bold uppercase tracking-widest text-black hover:gap-4 transition-all"
          >
            GET STARTED NOW
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right: arrow icon + customer avatars */}
        <div className="sub-social flex flex-col items-start gap-4 shrink-0">
          {/* Arrow icon box */}
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>

          {/* Avatars */}
          <div className="flex items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white -ml-2 first:ml-0 overflow-hidden flex items-center justify-center text-xs text-gray-500"
              >
                {i === 1 ? "👨" : i === 2 ? "👩" : "🧑"}
              </div>
            ))}
            <div className="w-9 h-9 rounded-full bg-[#aacc00] border-2 border-white -ml-2 flex items-center justify-center">
              <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>

          {/* Customer count */}
          <p className="text-sm text-gray-600">
            <span className="font-bold text-black">We have 18k+</span> customers<br />word-wide
          </p>
        </div>

      </motion.div>{/* end bottom sub-section */}

      {/* Shery.js initialization */}
      

      {/* Scroll up button */}
      <button
        aria-label="Scroll up"
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </section>
  );
}
