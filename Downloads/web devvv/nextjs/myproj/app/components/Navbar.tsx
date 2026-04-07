'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const dropdownItems: Record<string, string[]> = {
  Pages: ['About', 'Services', 'Portfolio', 'Team'],
  Blog: ['Latest Posts', 'Categories', 'Archive'],
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggle = (label: string) =>
    setOpenMenu((prev) => (prev === label ? null : label))

  return (
    <nav
      className="flex items-center justify-between px-8 py-3"
      style={{ backgroundColor: '#e8ead8' }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <Image src="/next.svg" alt="Arolax logo" width={90} height={28} style={{ height: 'auto' }} />
      </Link>

      {/* Nav links */}
      <ul className="flex items-center gap-8 text-sm font-medium text-gray-800">
        <li>
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
        </li>

        {Object.keys(dropdownItems).map((label) => (
          <li key={label} className="relative">
            <button
              onClick={() => toggle(label)}
              className="flex items-center gap-1 hover:text-black transition-colors cursor-pointer"
              aria-expanded={openMenu === label}
              aria-haspopup="true"
            >
              {label}
              <svg
                className={`w-3 h-3 transition-transform ${openMenu === label ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openMenu === label && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-1 z-50">
                {dropdownItems[label].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setOpenMenu(null)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <li>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/shop" className="hover:text-black transition-colors">
            Shop
          </Link>
        </li>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button aria-label="Search" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </button>

        <Link
          href="/signup"
          className="px-5 py-2 rounded-full text-sm font-semibold text-black transition-colors"
          style={{ backgroundColor: '#aadd00' }}
        >
          Sign up
        </Link>
      </div>
    </nav>
  )
}
