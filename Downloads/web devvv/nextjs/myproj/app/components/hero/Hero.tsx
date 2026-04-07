import HeroHeading from './HeroHeading'
import HeroDescription from './HeroDescription'
import HeroImage from './HeroImage'
import HeroSideText from './HeroSideText'
import CustomerBadge from './CustomerBadge'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center px-8 lg:px-16 py-16 overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gray-100 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 w-full flex items-center justify-between gap-8">
        {/* Left — heading + description */}
        <div className="flex-1 max-w-xl">
          <HeroHeading />
          <HeroDescription />
        </div>

        {/* Center — image */}
        <div className="flex flex-col items-center gap-16">
          <HeroImage />
          <CustomerBadge />
        </div>

        {/* Right — side text */}
        <HeroSideText />
      </div>

      {/* Scroll up FAB */}
      <button
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-[#aadd00] hover:text-black transition-colors z-50"
      >
        ↑
      </button>
    </section>
  )
}
