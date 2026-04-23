"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const pagesMenu = [
  { label: "ABOUT US", href: "#" },
  { label: "TEAM", href: "#" },
  { label: "SERVICES", href: "#" },
  { label: "CAREER", href: "#" },
  { label: "PORTFOLIOS", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "BLOG", href: "#" },
  { label: "CONTACT", href: "/contact-us" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pages", href: "#", dropdown: true },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "/contact-us" },
  { label: "Shop", href: "#" },
];

export default function Navbar() {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="w-full bg-[#f0f0eb] px-8 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <Image src="/next.svg" alt="Logo" width={90} height={22} className="dark:invert" />
      </Link>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700 font-medium">
        {navLinks.map((link) => (
          <li key={link.label} ref={link.dropdown ? dropdownRef : undefined} className="relative">
            {link.dropdown ? (
              <button
                onClick={() => setPagesOpen((o) => !o)}
                className="flex items-center gap-1 hover:text-black transition-colors"
              >
                {link.label}
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <Link href={link.href} className="hover:text-black transition-colors">
                {link.label}
              </Link>
            )}

            {/* Dropdown panel */}
            {link.dropdown && pagesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-2xl shadow-xl py-4 w-64 z-50">
                {pagesMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setPagesOpen(false)}
                    className="flex items-center justify-between px-6 py-3 text-sm font-bold text-gray-800 hover:text-black transition-colors"
                  >
                    {item.label}
                  
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Search"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </button>
        <Link
          href="#"
          className="bg-[#aacc00] text-black text-sm font-semibold px-5 py-2 rounded-full hover:brightness-95 transition-all"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
