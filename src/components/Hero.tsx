"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import SplashCursor from "./SplashCursor";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16">
      
      <SplashCursor 
        COLOR={theme === "dark" ? "#faff69" : "#d97706"}
        RAINBOW_MODE={false}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-5 sm:mb-8 inline-block max-w-full"
        >
          <span className="bg-[var(--color-surface)] border border-hairline px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-label-caps text-[var(--color-text-muted)] tracking-wider sm:tracking-widest inline-block text-[10px] sm:text-xs">
            St. John College of Engineering and Management
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full max-w-full pointer-events-auto"
        >
          <span className="text-label-caps text-[var(--color-primary)] mb-3 sm:mb-4 text-xs sm:text-sm">
            Institution's Innovation Council
          </span>
          <h1 className="text-display-xl text-[var(--color-text-main)] w-full max-w-full break-words">
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 sm:mt-8 text-sm sm:text-base md:text-xl text-[var(--color-text-muted)] max-w-2xl font-normal font-inter pointer-events-auto px-2 leading-relaxed"
        >
          Transforming student ideas into real-world startups through dedicated mentorship, intensive ideation, and comprehensive ecosystem support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="mt-8 sm:mt-10 md:mt-14 pointer-events-auto w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#events"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[var(--color-primary)] text-[var(--color-text-inverse)] font-bold rounded-md transition-colors hover:bg-[var(--color-primary-hover)] min-h-[48px]"
          >
            <span className="relative z-10 flex items-center gap-2 font-inter tracking-wide text-sm sm:text-base">
              See Upcoming Events
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors cursor-pointer pointer-events-auto"
      >
        <span className="text-label-caps text-[10px] sm:text-xs">Discover</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
