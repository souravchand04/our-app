export default function HeroSideText() {
  return (
    <div
      className="hidden lg:flex flex-col items-end gap-0.5 text-right shrink-0"
      style={{ writingMode: 'horizontal-tb' }}
    >
      <span className="text-xs font-bold uppercase tracking-widest text-black">BUILDING</span>
      <span className="text-xs font-bold uppercase tracking-widest text-black">OUTSTANDING</span>
      <span className="text-xs font-bold uppercase tracking-widest text-black">DESIGN &amp;</span>
      <span className="text-xs font-bold uppercase tracking-widest text-black">DEVELOPMENT</span>
    </div>
  )
}
