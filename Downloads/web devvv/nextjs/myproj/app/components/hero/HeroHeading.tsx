export default function HeroHeading() {
  return (
    <div className="relative">
      <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-none tracking-tight uppercase text-black">
        WE ARE
        <br />
        SKILLED IN
        <br />
        <span className="flex items-center gap-4">
          AND
          {/* Green dev badge */}
          <span className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#aadd00] shrink-0">
            <span
              className="absolute text-[10px] font-bold uppercase tracking-widest text-black"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              development
            </span>
          </span>
          {/* Avatar circle */}
          <span className="inline-block w-16 h-16 rounded-full overflow-hidden border-4 border-white bg-gray-300 shrink-0">
            {/* placeholder face */}
            <span className="flex items-center justify-center w-full h-full text-2xl">🕶️</span>
          </span>
        </span>
      </h1>

      {/* Web Design label */}
      <div className="absolute left-0 top-[58%] flex flex-col leading-tight">
        <span className="text-xs font-bold uppercase tracking-widest text-black">WEB</span>
        <span className="text-xs font-bold uppercase tracking-widest text-black">DESIGN</span>
        <span className="mt-1 h-[2px] w-10 bg-[#aadd00]" />
      </div>
    </div>
  )
}
