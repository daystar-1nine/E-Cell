"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import SplashCursor from "./SplashCursor";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-40 pb-16">
      
      <SplashCursor 
        COLOR="#faff69"
        RAINBOW_MODE={false}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 md:mb-8 inline-block"
        >
          <span className="bg-[var(--color-surface)] border border-hairline px-3 md:px-5 py-2 rounded-md text-label-caps text-[var(--color-text-muted)] tracking-widest">
            St. John College of Engineering and Management
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full pointer-events-auto"
        >
          <span className="text-label-caps text-[var(--color-primary)] mb-4">
            Institution's Innovation Council
          </span>
          <h1 className="text-display-xl text-[var(--color-text-main)] w-full max-w-full overflow-hidden">
            Entrepreneurship
            <br />
            <span className="text-[var(--color-primary)]">
              Cell
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 text-base md:text-xl text-[var(--color-text-muted)] max-w-2xl font-normal font-inter pointer-events-auto"
        >
          Transforming student ideas into real-world startups through dedicated mentorship, intensive ideation, and comprehensive ecosystem support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-10 md:mt-14 pointer-events-auto"
        >
          <a
            href="#events"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-[var(--color-text-inverse)] font-bold rounded-md transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            <span className="relative z-10 flex items-center gap-2 font-inter tracking-wide text-sm md:text-base">
              See Upcoming Events
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-white transition-colors cursor-pointer pointer-events-auto"
      >
        <span className="text-label-caps">Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
