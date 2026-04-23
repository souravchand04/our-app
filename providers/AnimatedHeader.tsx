"use client"
import React, { useRef, ReactElement, HTMLAttributes } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import type { SplitText as SplitTextType } from "gsap/all";
import { useGSAP } from "@gsap/react";
import "./AnimatedHeader.css"

gsap.registerPlugin(SplitText, ScrollTrigger);

type Props = {
  children: ReactElement<HTMLAttributes<HTMLElement>>;
  animateOnScroll?: boolean; // Added
  scrub?: boolean;           // Added
  delay?: number;
  stagger?: number;
  duration?: number;
};

export default function AnimatedHeader({ 
  children, 
  animateOnScroll = false,
  scrub = false,
  delay = 0, 
  stagger = 0.08, 
  duration = 1.2 
}: Props) {
  
  const containerRef = useRef<HTMLElement | null>(null);
  const splitRef = useRef<SplitTextType | null>(null);
  
  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    splitRef.current = new SplitText(el, {
      type: "lines,words,chars",
      linesClass: "line",
      wordsClass: "word",
      charsClass: "char",
    });

    const { chars, lines } = splitRef.current;

    gsap.set(chars, {
      x: 100,
      opacity: 0,
      skewX: 20,
    });

    const tl = gsap.timeline({
      delay: delay,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });

    lines.forEach((line) => {
      const lineChars = chars.filter((c) => line.contains(c));
      
      tl.to(lineChars, {
        x: 0,
        opacity: 1,
        skewX: 0,
        ease: "power3.out",
        duration: duration,
        stagger: stagger,
      }, "<0.3");
    });

    if(animateOnScroll){
        const t1 = gsap.timeline({paused: true, delay});
        t1.play(); // Fixed: Changed animate(t1) to t1.play()

        ScrollTrigger.create({
            trigger: el,
            start: "top 100%",
            onEnter: () => t1.pause(0),
        });
        return;
    }

    if(scrub){
        const t1 = gsap.timeline({paused: true});
        t1.play(); // Fixed: Changed animate(t1) to t1.play()

        ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            end: "top 45%",
            scrub: true,
            animation: tl,
        })
        return
    }

    return () => {
      splitRef.current?.revert();
    };
  }, { scope: containerRef });

  return React.cloneElement(children, {
    ref: containerRef,
    className: [children.props.className, "animated-header"]
      .filter(Boolean)
      .join(" "),
  } as React.Attributes & { ref: React.Ref<any> });
}