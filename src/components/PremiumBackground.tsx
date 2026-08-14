"use client";

import { motion } from "framer-motion";

export default function PremiumBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#14174C]">
      {/* 1. Subtle Radial Vignette (darkens corners to focus center) */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(5, 5, 20, 0.6) 100%)"
        }}
      />

      {/* 2. Soft, slow-moving glow blobs */}
      <motion.div
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "-5%", "5%", "0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#1E22AA] rounded-full mix-blend-screen filter blur-[120px] opacity-20"
      />
      <motion.div
        animate={{
          x: ["0%", "-5%", "5%", "0%"],
          y: ["0%", "5%", "-5%", "0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-[#3A147C] rounded-full mix-blend-screen filter blur-[120px] opacity-20"
      />
      <motion.div
        animate={{
          x: ["0%", "8%", "-3%", "0%"],
          y: ["0%", "-8%", "8%", "0%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] bg-[#0A4D9B] rounded-full mix-blend-screen filter blur-[150px] opacity-15"
      />

      {/* 3. Faint Cinematic Film Grain */}
      <div 
        className="absolute inset-0 z-20 mix-blend-overlay opacity-30"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* 4. Very faint grid overlay for structural tech feel (optional, but looks premium) */}
      <div 
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
    </div>
  );
}
