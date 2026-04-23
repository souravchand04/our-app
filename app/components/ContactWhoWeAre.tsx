import Image from "next/image";

const images = {
  small: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  large: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
};

export default function ContactWhoWeAre() {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT — label + images */}
        <div className="flex flex-col gap-6">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest text-black uppercase">
              02. Who We Are
            </span>
            {/* crosshair icon */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-black shrink-0">
              <line x1="11" y1="0" x2="11" y2="22" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="11" x2="22" y2="11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Two images — small top-left, large bottom-right offset */}
          <div className="relative w-full" style={{ height: "420px" }}>
            {/* Small image — top left */}
            <div
              className="absolute top-0 left-0 overflow-hidden rounded-sm shadow-md"
              style={{ width: "55%", height: "52%" }}
            >
              <Image
                src={images.small}
                alt="Team member working"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>

            {/* Large image — bottom right, overlapping */}
            <div
              className="absolute bottom-0 right-0 overflow-hidden rounded-sm shadow-md"
              style={{ width: "68%", height: "72%" }}
            >
              <Image
                src={images.large}
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — heading + stats */}
        <div className="flex flex-col gap-10 pt-2">
          <h2
            className="text-[clamp(1.8rem,3.5vw,3rem)] font-black leading-tight text-black"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            We make storable strategy growth your company with arolax agency!
          </h2>

          {/* Stats row */}
          <div className="flex items-start gap-0 divide-x divide-gray-300">
            {/* Stat 1 */}
            <div className="flex items-start gap-3 pr-8">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mt-1 shrink-0 text-gray-400">
                <rect x="4" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 10V7a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <p className="text-2xl font-black text-black">50+</p>
                <p className="text-xs text-gray-500 leading-snug mt-0.5">
                  projects success<br />rate 99%
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-start gap-3 pl-8">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mt-1 shrink-0 text-gray-400">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-2xl font-black text-black">12+</p>
                <p className="text-xs text-gray-500 leading-snug mt-0.5">
                  award for digital<br />innovation
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
