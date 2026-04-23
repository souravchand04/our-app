"use client";
import Image from "next/image";
import CircularAnimation from "@/providers/CircularAnimation";
import { motion } from "framer-motion";

const team = [
  { name: "Tuya Terekh", role: "Mid-Level Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", offset: "mt-10" },
  { name: "Oliver Kugar", role: "Mid-Level Web Designer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", offset: "mt-0" },
  { name: "Fedor Chalov", role: "Senior Developer", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80", offset: "mt-10" },
  { name: "Yudai Kunar", role: "Lead Developer", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80", offset: "mt-0" },
];

export default function ContactTeam() {
  return (
    <section className="w-full min-h-screen bg-black py-20 px-8 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Content Area */}
      <div className="z-10 flex flex-col justify-center w-full lg:w-1/2">
        <div className="mb-14">
          <h2 className="text-white text-5xl font-black mb-4">Quality team</h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            We deploy world-class creative design, team on demand, that can design surest measure&apos;s
            of success is when a client partner with more than once.
          </p>
        </div>

        {/* Team Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
          {team.map((member) => (
            <div key={member.name} className={`flex flex-col gap-3 ${member.offset}`}>
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="20vw"
                />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">{member.name}</p>
                <p className="text-gray-500 text-[10px]">{member.role}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Right Side: Circular Animation with increased container size */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
        {/* Instead of scale, we increase width/height. 
            Adjust w-[500px] h-[500px] or larger to fit your preference.
            The 'text-2xl' ensures that if the component uses 'em' units, 
            the text will grow along with the container.
        */}
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] text-2xl flex items-center justify-center bg-black">
          <CircularAnimation />
        </div>
      </div>
      
    </section>
  );
}