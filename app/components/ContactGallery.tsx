import Image from "next/image";

// Swap these src values with your real images
const images = {
  bigLeft: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  topCenter: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  bottomRight: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
};

export default function ContactGallery() {
  return (
    <div className="w-full grid grid-cols-[1fr_auto_1fr] grid-rows-2 gap-1 bg-white" style={{ height: "520px" }}>

      {/* LEFT — tall image spanning both rows */}
      <div className="row-span-2 relative overflow-hidden">
        <Image
          src={images.bigLeft}
          alt="Office space"
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>

      {/* CENTER TOP — portrait photo */}
      <div className="relative overflow-hidden" style={{ width: "260px" }}>
        <Image
          src={images.topCenter}
          alt="Team member"
          fill
          className="object-cover object-top"
          sizes="260px"
        />
      </div>

      {/* RIGHT TOP — stat card (light) */}
      <div className="flex flex-col justify-between p-6 bg-[#f5f5f3]">
        <p className="text-sm text-gray-600 leading-snug max-w-[140px]">
          We have 100+<br />satisfied clients
        </p>
        <span className="text-6xl font-black text-black tracking-tight">
          100<span className="text-4xl font-black">K</span>
        </span>
      </div>

      {/* CENTER BOTTOM — stat card (dark) */}
      <div className="flex flex-col justify-between p-6 bg-[#1a1a1a]" style={{ width: "260px" }}>
        <p className="text-sm text-gray-300 leading-snug max-w-[160px]">
          We helped to get<br />companies with $25M+<br />funding
        </p>
        <span className="text-6xl font-black text-white tracking-tight">
          25<span className="text-4xl font-black">M+</span>
        </span>
      </div>

      {/* RIGHT BOTTOM — office photo */}
      <div className="relative overflow-hidden">
        <Image
          src={images.bottomRight}
          alt="Office desk"
          fill
          className="object-cover"
          sizes="25vw"
        />
      </div>

    </div>
  );
}
