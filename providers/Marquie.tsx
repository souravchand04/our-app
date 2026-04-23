import { motion } from "framer-motion";

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap py-4 border-y border-gray-200 bg-white">
      <motion.div
        animate={{ x: ["0%", "-50%"] }} // Slides half the width
        transition={{
          ease: "linear",
          duration: 20, // Adjust speed here (higher = slower)
          repeat: Infinity,
        }}
        className="flex"
      >
        {/* We repeat the text multiple times to fill the width */}
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-gray-700 text-base font-medium px-8 flex items-center
          px-10 [word-spacing:1rem]
              font-[family-name:var(--font-syne)] 
              font-extrabold 
              uppercase 
              tracking-[-0.02em] 
              text-[#b00303]
              text-7xl md:text-3xl 
              [--stroke-color:rgba(176,5,3,0.3)] 
              [-webkit-text-stroke:4px_var(--stroke-color)]">
            {text} <span className="ml-8 text-gray-300">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;