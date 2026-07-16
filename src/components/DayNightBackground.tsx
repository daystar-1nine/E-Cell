"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DayNightBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Layer refs
  const dawnRef = useRef<HTMLDivElement>(null);
  const noonRef = useRef<HTMLDivElement>(null);
  const goldenRef = useRef<HTMLDivElement>(null);
  const duskRef = useRef<HTMLDivElement>(null);
  const nightRef = useRef<HTMLDivElement>(null);
  
  // Celestial bodies refs
  const sunRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // We create a single timeline that scrubs from top of page to bottom
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // 0.5s smoothing
      }
    });

    // Timeline phases (0 to 1 progress)
    // 0.0 - 0.2: Dawn to Morning/Noon
    // 0.2 - 0.5: Noon
    // 0.5 - 0.7: Noon to Golden Hour
    // 0.7 - 0.85: Golden Hour to Dusk
    // 0.85 - 1.0: Dusk to Night

    // Initial state (Dawn)
    gsap.set(dawnRef.current, { opacity: 1 });
    gsap.set([noonRef.current, goldenRef.current, duskRef.current, nightRef.current], { opacity: 0 });
    
    // Sun starts low, left
    gsap.set(sunRef.current, { x: "-20vw", y: "60vh", scale: 0.8, backgroundColor: "#f97316", boxShadow: "0 0 60px 20px rgba(249, 115, 22, 0.4)" });
    
    // Moon hidden
    gsap.set(moonRef.current, { x: "20vw", y: "80vh", opacity: 0 });
    gsap.set(starsRef.current, { opacity: 0 });

    // Phase 1: Dawn -> Noon (0 -> 0.25)
    tl.to(dawnRef.current, { opacity: 0, duration: 0.25 }, 0)
      .to(noonRef.current, { opacity: 1, duration: 0.25 }, 0)
      .to(sunRef.current, { 
        x: "30vw", 
        y: "20vh", 
        scale: 1, 
        backgroundColor: "#fef08a",
        boxShadow: "0 0 100px 40px rgba(254, 240, 138, 0.6)",
        duration: 0.4
      }, 0);

    // Phase 2: Noon -> Golden Hour (0.4 -> 0.6)
    tl.to(noonRef.current, { opacity: 0, duration: 0.2 }, 0.4)
      .to(goldenRef.current, { opacity: 1, duration: 0.2 }, 0.4)
      .to(sunRef.current, {
        x: "70vw",
        y: "40vh",
        scale: 1.2,
        backgroundColor: "#fb923c",
        boxShadow: "0 0 80px 30px rgba(251, 146, 60, 0.5)",
        duration: 0.3
      }, 0.4);

    // Phase 3: Golden Hour -> Dusk (0.6 -> 0.8)
    tl.to(goldenRef.current, { opacity: 0, duration: 0.2 }, 0.6)
      .to(duskRef.current, { opacity: 1, duration: 0.2 }, 0.6)
      .to(sunRef.current, {
        x: "90vw",
        y: "70vh",
        scale: 1.5,
        backgroundColor: "#f43f5e",
        boxShadow: "0 0 60px 20px rgba(244, 63, 94, 0.4)",
        opacity: 0,
        duration: 0.2
      }, 0.6);

    // Phase 4: Dusk -> Night (0.8 -> 1.0)
    tl.to(duskRef.current, { opacity: 0, duration: 0.2 }, 0.8)
      .to(nightRef.current, { opacity: 1, duration: 0.2 }, 0.8)
      .to(moonRef.current, {
        x: "70vw",
        y: "20vh",
        opacity: 1,
        duration: 0.2
      }, 0.8)
      .to(starsRef.current, { opacity: 1, duration: 0.2 }, 0.8);

    // Dynamic CSS variables for UI sync
    const themeProxy = {
      scrollbarColor: "rgba(251, 146, 60, 0.5)", // Dawn amber
      glowColor: "rgba(251, 146, 60, 0.3)",
      textShadow: "0px 2px 10px rgba(0,0,0,0.5)", 
      scrimOpacity: 0.3
    };

    const tlTheme = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      }
    });
    
    const applyTheme = () => {
      document.documentElement.style.setProperty('--theme-scrollbar', themeProxy.scrollbarColor);
      document.documentElement.style.setProperty('--theme-glow', themeProxy.glowColor);
      document.documentElement.style.setProperty('--theme-text-shadow', themeProxy.textShadow);
      document.documentElement.style.setProperty('--theme-scrim-opacity', themeProxy.scrimOpacity.toString());
    };

    tlTheme.to(themeProxy, {
      scrollbarColor: "rgba(14, 165, 233, 0.5)", // Noon blue
      glowColor: "rgba(14, 165, 233, 0.3)",
      textShadow: "0px 4px 20px rgba(0,0,0,0.8)", // Heavy shadow for noon bright sky
      scrimOpacity: 0.6,
      duration: 0.25,
      onUpdate: applyTheme
    }, 0)
    .to(themeProxy, {
      scrollbarColor: "rgba(252, 211, 77, 0.5)", // Golden yellow
      glowColor: "rgba(252, 211, 77, 0.3)",
      textShadow: "0px 4px 15px rgba(0,0,0,0.6)",
      scrimOpacity: 0.4,
      duration: 0.35,
      onUpdate: applyTheme
    }, 0.25)
    .to(themeProxy, {
      scrollbarColor: "rgba(244, 63, 94, 0.5)", // Dusk pink
      glowColor: "rgba(244, 63, 94, 0.3)",
      textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
      scrimOpacity: 0.3,
      duration: 0.2,
      onUpdate: applyTheme
    }, 0.6)
    .to(themeProxy, {
      scrollbarColor: "rgba(99, 102, 241, 0.5)", // Night indigo
      glowColor: "rgba(99, 102, 241, 0.3)",
      textShadow: "0px 2px 10px rgba(0,0,0,0.8)", // Darker shadow for night readability
      scrimOpacity: 0.5,
      duration: 0.2,
      onUpdate: applyTheme
    }, 0.8);

    applyTheme(); // Set initial

    return () => {
      tl.kill();
      tlTheme.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Sky Layers */}
      <div 
        ref={dawnRef} 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #1e1b4b 0%, #312e81 40%, #9f1239 70%, #fda4af 100%)' }}
      />
      <div 
        ref={noonRef} 
        className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-200 to-sky-100"
      />
      <div 
        ref={goldenRef} 
        className="absolute inset-0 bg-gradient-to-b from-blue-900 via-amber-600 to-yellow-400"
      />
      <div 
        ref={duskRef} 
        className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900 to-pink-800"
      />
      <div 
        ref={nightRef} 
        className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900 to-indigo-950"
      />

      {/* Stars Layer */}
      <div 
        ref={starsRef}
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Celestial Bodies */}
      <div 
        ref={sunRef}
        className="absolute top-0 left-0 w-32 h-32 rounded-full blur-[2px] transition-none"
      />
      
      <div 
        ref={moonRef}
        className="absolute top-0 left-0 w-24 h-24 rounded-full bg-slate-200 shadow-[0_0_50px_10px_rgba(226,232,240,0.5)] blur-[1px] transition-none"
      />

      {/* Ambient Overlay (optional, for unified color tinting) */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
    </div>
  );
}
