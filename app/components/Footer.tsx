"use client";

import FadeUp from "./FadeUp";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111] flex flex-col items-center justify-center px-12 py-20 gap-6">

      {/* Hello tag */}
      <FadeUp className="hello-tag flex items-center gap-2">
        <span className="text-2xl">🖐️</span>
        <span className="text-white text-sm font-bold uppercase tracking-widest">HELLO !</span>
      </FadeUp>

      {/* Headline */}
      <FadeUp delay={0.1} className="headline text-center">
        <div className="overflow-hidden">
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none tracking-tight text-white">
            LET'S TALK
          </h2>
        </div>
        <div className="overflow-hidden">
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none tracking-tight text-white">
            WITH US
          </h2>
        </div>
      </FadeUp>

      {/* Email */}
      <a
        href="mailto:hello@example.com"
        className="email-link text-white text-lg hover:text-[#aacc00] transition-colors mt-2"
      >
        hello@example.com
      </a>

      {/* Bottom bar */}
      <FadeUp delay={0.2} className="footer-bar w-full flex items-center justify-between mt-12 pt-6 border-t border-white/10">

        {/* Copyright */}
        <span className="text-gray-500 text-xs uppercase tracking-widest">
          © 2024-25 CROWDYFLOW AGENCY
        </span>

        {/* Nav links */}
        <nav className="footer-nav flex items-center gap-8">
          {["Agency", "Career", "Privacy", "Terms & Condition"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-400 text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="social-icons flex items-center gap-3">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Scroll up */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full border border-[#aacc00] flex items-center justify-center text-[#aacc00] hover:bg-[#aacc00] hover:text-black transition-colors ml-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

      </FadeUp>
    </footer>
  );
}
