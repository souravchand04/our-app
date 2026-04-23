"use client";

import FadeUp from "./FadeUp";
import ParallaxSection from "./ParallaxSection";

const posts = [
  {
    title: "AROLAX DEVELOPMENT TECH AGENCY WE TALENT MEET OPPORTUNITY",
    excerpt: "We lead by the design philosophy that every deal only visually...",
    bg: "bg-[#2a2a2a]",
    image: null,
  },
  {
    title: "AROLAX SELECTED 32+ BEST WEB AGENCY AND DEVELOPMENT TOOL",
    excerpt: "We lead by the design philosophy that every deal only visually...",
    bg: "bg-[#2a2a2a]",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    title: "AROLAX SELECTED 32+ BEST WEB AGENCY AND DEVELOPMENT TOOL",
    excerpt: "Welcome to Arolax Agency Theme Sites. This is your first post. Edit or delete it, then start writing!",
    bg: "bg-[#2a2a2a]",
    image: null,
  },
];

export default function Journal() {
  return (
    <ParallaxSection offset={65} className="w-full">
     

      
      <section className="w-full bg-white px-12 py-20 overflow-hidden">

      {/* Top row */}
      <FadeUp className="top-row flex items-start justify-between mb-12">
        <div className="headline">
          <div className="overflow-hidden">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tight text-black">
              JOURNAL INSIGHT
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tight text-black">
              OF AROLAX
            </h2>
          </div>
        </div>

        <div className="right-meta flex flex-col gap-3 max-w-xs text-right">
          <p className="text-sm text-gray-500 leading-relaxed">
            Our ability to combine expertise and systems thinking is what fuels us as a team.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black self-end hover:gap-4 transition-all"
          >
            ALL BLOG
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </FadeUp>

      {/* Cards grid */}
      <FadeUp delay={0.2} className="posts-grid grid grid-cols-3 gap-4">
        {posts.map((post, i) => (
          <div
            key={i}
            className={`post-card relative rounded-xl overflow-hidden flex flex-col justify-between p-6 min-h-72 cursor-pointer group ${post.bg}`}
          >
            {/* Background image */}
            {post.image && (
              <div className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                />
              </div>
            )}

            {/* Author */}
            <div className="post-author relative z-10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-500 overflow-hidden flex items-center justify-center text-sm">
                👨‍💼
              </div>
              <div>
                <p className="text-gray-400 text-[10px]">Written by</p>
                <p className="text-white text-xs font-bold">Admin</p>
              </div>
            </div>

            {/* Content */}
            <div className="post-content relative z-10 flex flex-col gap-3 mt-8">
              <h3 className="text-sm font-black uppercase leading-snug text-white">
                {post.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </FadeUp>

    </section>
    
    </ParallaxSection>
  );
}
