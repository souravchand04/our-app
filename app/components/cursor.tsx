"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  // DOM Elements ke liye refs (TypeScript types ke saath)
  const smallCursorRef = useRef<HTMLDivElement | null>(null);
  const shadowCursorRef = useRef<HTMLDivElement | null>(null);
  
  // Mouse positions aur Animation tracking ke liye mutable refs
  const mousePos = useRef({ x: 0, y: 0 });
  const shadowPos = useRef({ x: 0, y: 0 });
  const animationId = useRef<number | null>(null);

  useEffect(() => {
    const smallCursor = smallCursorRef.current;
    const shadowCursor = shadowCursorRef.current;

    if (!smallCursor || !shadowCursor) return;

    const animateShadowCursor = () => {
      // Linear Interpolation (LERP) logic for smoothness
      // Distance ka 10% (0.1) har frame mein cover hoga
      const distanceX = mousePos.current.x - shadowPos.current.x;
      const distanceY = mousePos.current.y - shadowPos.current.y;

      shadowPos.current.x += distanceX * 0.1;
      shadowPos.current.y += distanceY * 0.1;

      // Transform use karna performance ke liye 'left/top' se behtar hai
      shadowCursor.style.transform = `translate3d(${shadowPos.current.x}px, ${shadowPos.current.y}px, 0)`;
      
      animationId.current = requestAnimationFrame(animateShadowCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Small cursor instant move karega
      smallCursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      // Agar animation start nahi hui hai, toh start karein
      if (animationId.current === null) {
        animationId.current = requestAnimationFrame(animateShadowCursor);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function: Component unmount hone par memory leaks rokne ke liye
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationId.current) cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <>
      {/* Pointer-events-none zaroori hai taaki cursor buttons ko block na kare */}
      <div
        ref={smallCursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] will-change-transform"
      />
      <div
        ref={shadowCursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-black/30 rounded-full pointer-events-none z-[9998] will-change-transform"
      />
    </>
  );
};

export default CustomCursor;