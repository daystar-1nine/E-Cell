"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DayNightBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Sky Background refs
  const dawnRef = useRef<HTMLDivElement>(null);
  const noonRef = useRef<HTMLDivElement>(null);
  const goldenRef = useRef<HTMLDivElement>(null);
  const duskRef = useRef<HTMLDivElement>(null);
  const nightRef = useRef<HTMLDivElement>(null);

  // Global Color Grading Overlays
  const gradingDawnRef = useRef<HTMLDivElement>(null);
  const gradingNoonRef = useRef<HTMLDivElement>(null);
  const gradingGoldenRef = useRef<HTMLDivElement>(null);
  const gradingDuskRef = useRef<HTMLDivElement>(null);
  const gradingNightRef = useRef<HTMLDivElement>(null);

  // Atmosphere refs
  const cloudLayer1Ref = useRef<HTMLDivElement>(null);
  const cloudLayer2Ref = useRef<HTMLDivElement>(null);
  const milkyWayRef = useRef<HTMLDivElement>(null);
  
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

    // Initial state (Dawn)
    gsap.set(dawnRef.current, { opacity: 1 });
    gsap.set([noonRef.current, goldenRef.current, duskRef.current, nightRef.current], { opacity: 0 });
    
    gsap.set(gradingDawnRef.current, { opacity: 1 });
    gsap.set([gradingNoonRef.current, gradingGoldenRef.current, gradingDuskRef.current, gradingNightRef.current], { opacity: 0 });

    gsap.set([cloudLayer1Ref.current, cloudLayer2Ref.current], { opacity: 0.7 });
    gsap.set(milkyWayRef.current, { opacity: 0 });
    
    // Sun starts low, left
    gsap.set(sunRef.current, { x: "-20vw", y: "60vh", scale: 1 });
    
    // Moon hidden below horizon
    gsap.set(moonRef.current, { x: "20vw", y: "120vh", scale: 0.8 });
    gsap.set(starsRef.current, { opacity: 0 });

    // Phase 1: Dawn -> Noon (0 -> 0.25)
    tl.to(dawnRef.current, { opacity: 0, duration: 0.25 }, 0)
      .to(noonRef.current, { opacity: 1, duration: 0.25 }, 0)
      .to(gradingDawnRef.current, { opacity: 0, duration: 0.25 }, 0)
      .to(gradingNoonRef.current, { opacity: 1, duration: 0.25 }, 0)
      .to(sunRef.current, { 
        x: "30vw", 
        y: "20vh", 
        scale: 0.8, 
        duration: 0.4
      }, 0);

    // Phase 2: Noon -> Golden Hour (0.4 -> 0.6)
    tl.to(noonRef.current, { opacity: 0, duration: 0.2 }, 0.4)
      .to(goldenRef.current, { opacity: 1, duration: 0.2 }, 0.4)
      .to(gradingNoonRef.current, { opacity: 0, duration: 0.2 }, 0.4)
      .to(gradingGoldenRef.current, { opacity: 1, duration: 0.2 }, 0.4)
      .to(sunRef.current, {
        x: "70vw",
        y: "40vh",
        scale: 1.1,
        duration: 0.3
      }, 0.4);

    // Phase 3: Golden Hour -> Dusk (0.6 -> 0.8)
    tl.to(goldenRef.current, { opacity: 0, duration: 0.2 }, 0.6)
      .to(duskRef.current, { opacity: 1, duration: 0.2 }, 0.6)
      .to(gradingGoldenRef.current, { opacity: 0, duration: 0.2 }, 0.6)
      .to(gradingDuskRef.current, { opacity: 1, duration: 0.2 }, 0.6)
      .to(sunRef.current, {
        x: "90vw",
        y: "120vh", // Sun sets below horizon
        scale: 1.5,
        duration: 0.2
      }, 0.6)
      .to([cloudLayer1Ref.current, cloudLayer2Ref.current], { opacity: 0, duration: 0.2 }, 0.6); // Fade clouds

    // Phase 4: Dusk -> Night (0.8 -> 1.0)
    tl.to(duskRef.current, { opacity: 0, duration: 0.2 }, 0.8)
      .to(nightRef.current, { opacity: 1, duration: 0.2 }, 0.8)
      .to(gradingDuskRef.current, { opacity: 0, duration: 0.2 }, 0.8)
      .to(gradingNightRef.current, { opacity: 1, duration: 0.2 }, 0.8)
      .to(moonRef.current, {
        x: "70vw",
        y: "20vh", // Moon rises from horizon
        scale: 1,
        duration: 0.2
      }, 0.8)
      .to(milkyWayRef.current, { opacity: 1, duration: 0.2 }, 0.8)
      .to(starsRef.current, { opacity: 1, duration: 0.2 }, 0.8);

    // Dynamic CSS variables for UI sync & Sun styles
    const themeProxy = {
      scrollbarColor: "rgba(251, 146, 60, 0.5)", // Dawn amber
      glowColor: "rgba(251, 146, 60, 0.3)",
      textShadow: "0px 2px 10px rgba(0,0,0,0.5)", 
      scrimOpacity: 0.3,
      sunColor: "#f97316", // Dawn
      sunBloomOpacity: 0.8,
      sunHaloOpacity: 0.6
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
      document.documentElement.style.setProperty('--sun-color', themeProxy.sunColor);
      document.documentElement.style.setProperty('--sun-bloom-opacity', themeProxy.sunBloomOpacity.toString());
      document.documentElement.style.setProperty('--sun-halo-opacity', themeProxy.sunHaloOpacity.toString());
    };

    tlTheme.to(themeProxy, {
      scrollbarColor: "rgba(14, 165, 233, 0.5)", // Noon blue
      glowColor: "rgba(14, 165, 233, 0.3)",
      textShadow: "0px 4px 20px rgba(0,0,0,0.8)",
      scrimOpacity: 0.6,
      sunColor: "#fef08a",
      sunBloomOpacity: 0.4,
      sunHaloOpacity: 0.2,
      duration: 0.25,
      onUpdate: applyTheme
    }, 0)
    .to(themeProxy, {
      scrollbarColor: "rgba(252, 211, 77, 0.5)", // Golden yellow
      glowColor: "rgba(252, 211, 77, 0.3)",
      textShadow: "0px 4px 15px rgba(0,0,0,0.6)",
      scrimOpacity: 0.4,
      sunColor: "#fb923c",
      sunBloomOpacity: 0.9,
      sunHaloOpacity: 0.7,
      duration: 0.35,
      onUpdate: applyTheme
    }, 0.25)
    .to(themeProxy, {
      scrollbarColor: "rgba(244, 63, 94, 0.5)", // Dusk pink
      glowColor: "rgba(244, 63, 94, 0.3)",
      textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
      scrimOpacity: 0.3,
      sunColor: "#f43f5e",
      sunBloomOpacity: 1.0,
      sunHaloOpacity: 0.9,
      duration: 0.2,
      onUpdate: applyTheme
    }, 0.6)
    .to(themeProxy, {
      scrollbarColor: "rgba(99, 102, 241, 0.5)", // Night indigo
      glowColor: "rgba(99, 102, 241, 0.3)",
      textShadow: "0px 2px 10px rgba(0,0,0,0.8)",
      scrimOpacity: 0.5,
      sunColor: "#1e1b4b", // Hidden
      sunBloomOpacity: 0,
      sunHaloOpacity: 0,
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
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
      {/* -------------------- SKY BASE LAYERS -------------------- */}
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

      {/* -------------------- ATMOSPHERIC DEPTH -------------------- */}
      <div 
        ref={milkyWayRef}
        className="absolute inset-0 mix-blend-screen opacity-0"
        style={{
          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(125, 211, 252, 0.15) 45%, rgba(167, 139, 250, 0.2) 50%, rgba(125, 211, 252, 0.15) 55%, transparent 70%)',
          filter: 'contrast(1.2) brightness(1.1)',
        }}
      />

      <div 
        ref={starsRef}
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Cloud Layers (using mix-blend-overlay to catch sky color) */}
      <div 
        ref={cloudLayer1Ref}
        className="absolute inset-0 opacity-70 mix-blend-overlay animate-[drift_60s_linear_infinite]"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 20%), radial-gradient(ellipse at 70% 40%, rgba(255,255,255,0.3) 0%, transparent 30%), radial-gradient(circle at 40% 70%, rgba(255,255,255,0.2) 0%, transparent 15%)',
          backgroundSize: '200vw 100vh',
        }}
      />
      <div 
        ref={cloudLayer2Ref}
        className="absolute inset-0 opacity-50 mix-blend-overlay animate-[drift_90s_linear_infinite_reverse]"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 25%), radial-gradient(circle at 30% 80%, rgba(255,255,255,0.3) 0%, transparent 20%)',
          backgroundSize: '250vw 120vh',
        }}
      />

      {/* -------------------- CELESTIAL BODIES -------------------- */}
      <div 
        ref={sunRef}
        className="absolute top-0 left-0 w-40 h-40 flex items-center justify-center transition-none"
      >
        {/* Core */}
        <div className="w-16 h-16 rounded-full bg-white shadow-[0_0_20px_10px_rgba(255,255,255,0.8)] z-10" />
        {/* Inner Bloom */}
        <div className="absolute inset-0 rounded-full bg-[var(--sun-color)] mix-blend-screen blur-[15px]" style={{ opacity: "var(--sun-bloom-opacity)" }} />
        {/* Outer Halo */}
        <div className="absolute -inset-10 rounded-full bg-[var(--sun-color)] mix-blend-screen blur-[40px]" style={{ opacity: "var(--sun-halo-opacity)" }} />
      </div>
      
      <div 
        ref={moonRef}
        className="absolute top-0 left-0 w-24 h-24 transition-none"
      >
        {/* Twinkle Stars near moon */}
        <div className="absolute -top-10 -left-10 w-2 h-2 bg-white rounded-full blur-[1px] animate-pulse" />
        <div className="absolute top-20 -right-8 w-1.5 h-1.5 bg-sky-200 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute -bottom-6 left-1/2 w-2 h-2 bg-white rounded-full blur-[1px] animate-pulse" />

        <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden relative shadow-[0_0_60px_15px_rgba(186,230,253,0.3)]">
          {/* Moon Base */}
          <div className="absolute inset-0 bg-slate-200" />
          {/* Craters via radial gradient */}
          <div className="absolute inset-0 opacity-40 mix-blend-multiply" 
               style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, transparent 0%, #94a3b8 10%, transparent 15%), radial-gradient(circle at 70% 60%, transparent 0%, #94a3b8 15%, transparent 20%), radial-gradient(circle at 40% 80%, transparent 0%, #94a3b8 8%, transparent 12%)' }} />
          {/* 3D Sphere shading */}
          <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),inset_10px_10px_20px_rgba(255,255,255,0.8)]" />
        </div>
      </div>

      {/* -------------------- GLOBAL COLOR GRADING OVERLAYS -------------------- */}
      {/* Placed above celestial bodies but below the z-10 UI sections so it tints everything behind UI, and UI's backdrop-blur picks it up without ruining text contrast */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay">
        <div ref={gradingDawnRef} className="absolute inset-0 bg-orange-300/30" />
        <div ref={gradingNoonRef} className="absolute inset-0 bg-white/10 mix-blend-soft-light" />
        <div ref={gradingGoldenRef} className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(217,119,6,0.3)_100%)]" />
        <div ref={gradingDuskRef} className="absolute inset-0 bg-indigo-900/40" />
        <div ref={gradingNightRef} className="absolute inset-0 bg-blue-950/50" />
      </div>
    </div>
  );
}
