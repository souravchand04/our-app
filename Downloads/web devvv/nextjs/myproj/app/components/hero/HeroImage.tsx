'use client'

export default function HeroImage() {
  return (
    <div className="relative w-[420px] h-[420px] shrink-0">
      {/* Split circle — left half red tinted, right half normal */}
      <div className="absolute inset-0 rounded-full overflow-hidden flex">
        {/* Left half — red overlay */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800')" }}
          />
          <div className="absolute inset-0 bg-red-700/60" />
        </div>
        {/* Right half — normal */}
        <div
          className="relative w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800')", backgroundPositionX: '-210px' }}
        />
      </div>

      {/* Play button */}
      <button
        aria-label="Watch video"
        className="absolute bottom-12 right-0 translate-x-1/3 flex items-center gap-3 group"
      >
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-lg group-hover:bg-[#aadd00] transition-colors">
          <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-black">
          WATCH<br />VIDEO
        </span>
      </button>

      {/* Scroll hint arrow bottom */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-lg animate-bounce">↓</div>
    </div>
  )
}
