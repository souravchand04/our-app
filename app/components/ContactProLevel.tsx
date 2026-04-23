import Image from "next/image";

export default function ContactProLevel() {
  return (
    <section className="w-full grid grid-cols-2" style={{ height: "420px" }}>

      {/* LEFT — full bleed photo */}
      <div className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
          alt="Team collaborating"
          fill
          className="object-cover object-center"
          sizes="50vw"
        />
      </div>

      {/* RIGHT — dark card with building bg */}
      <div className="relative overflow-hidden bg-[#1a1a1a] flex flex-col justify-between p-12">
        {/* faint building image as bg */}
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="50vw"
        />

        {/* Content on top */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <h2 className="text-white text-[clamp(1.6rem,3vw,2.6rem)] font-black leading-tight max-w-xs">
            We&apos;re simple but pro-level agency
          </h2>

          <div className="flex flex-col gap-6">
            <p className="text-gray-300 text-sm leading-relaxed max-w-[260px]">
              Theme Builder, you have complete control over the{" "}
              <span className="font-semibold text-white">static elements</span> of your website
            </p>

            {/* Circle button */}
            <a
              href="#"
              className="w-20 h-20 rounded-full border border-white/50 flex flex-col items-center justify-center text-white text-[10px] font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              <span>LEARN</span>
              <span>MORE</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-1">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
