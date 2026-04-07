import Link from 'next/link'

export default function HeroDescription() {
  return (
    <div className="flex items-start gap-6 mt-10">
      {/* Scroll arrow */}
      <div className="flex flex-col items-center gap-1 pt-1 shrink-0">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-gray-400 animate-bounce" />
        </div>
      </div>

      {/* Text + CTA */}
      <div className="max-w-xs">
        <p className="text-sm text-gray-600 leading-relaxed">
          We are a full-service digital agency that builds fascinating user
          experiences. our team creates and exceptional UI design and
          functionality.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-[#aadd00] hover:border-[#aadd00] transition-colors"
        >
          Get Started Now <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}
