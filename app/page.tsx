"use client";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import WhoWeAre from "./components/WhoWeAre";
import TakeCharge from "./components/TakeCharge";
import EmpoweringSkills from "./components/EmpoweringSkills";
import TechStack from "./components/TechStack";
import CaseStudy from "./components/CaseStudy";
import PremiumService from "./components/PremiumService";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import {useEffect,useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {ReactLenis} from "lenis/react";


gsap.registerPlugin(ScrollTrigger);



export default function Home() {

 const lenisRef = useRef<any>(null);
const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    function update(time: number){
      (lenisRef.current as any)?.lenis?.raf(time * 1000);
    }

    (lenisRef.current as any)?.lenis?.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  },[]);

  useGSAP(()=>{
    const sections=document.querySelectorAll("section");
    sections.forEach((section,index)=>{
      const container=section.querySelector(".container");

      gsap.to(container,{
        rotation:0,
        skew:1,
        ease:"none",
        scrollTrigger:{
          trigger:section,
          start:"top bottom",
          end:"top 30%",
          scrub:1,
        }
      })

      
    })
  },{scope:containerRef})

  return  (
    <ReactLenis root options={{autoRaf:false}} ref={lenisRef}>
    <main ref={containerRef} className="flex flex-col flex-1 overflow-x-hidden  bg-center bg-no-repeat"
    style={{
    backgroundImage:
      "url('https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-geometric-patterned-wallpaper-with-fluid-lines-in-dark-blue-and-yellow-image_3852525.jpg')",
  }}
    >
      
     
         <Hero />
      
      
     
        <Brands />
      
      
      
        <WhoWeAre />
      
      
      
        <TakeCharge />
      
      
      <section className="five">
         <EmpoweringSkills />
      </section>
     
      
        <TechStack />
      
      
      <CaseStudy />
      <PremiumService />
      <Testimonial />
      <FAQ />
      <CTA />
      <Journal />
      <Footer />
    </main>
    </ReactLenis>
  );
  
}
