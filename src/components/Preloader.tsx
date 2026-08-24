"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";

interface WordStep {
  step: string;
  word: string;
  highlight: string;
  sub: string;
}

const steps: WordStep[] = [
  {
    step: "01",
    word: "Think",
    highlight: "It.",
    sub: "Ideation & Problem Discovery",
  },
  {
    step: "02",
    word: "Pitch",
    highlight: "It.",
    sub: "Validation & Storytelling",
  },
  {
    step: "03",
    word: "Launch",
    highlight: "It.",
    sub: "Ventures • Scale • Impact",
  },
];

export default function Preloader() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [phase, setPhase] = useState<"words" | "climax" | "exit">("words");
  const [isMounted, setIsMounted] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    setIsMounted(true);
    lenis?.stop();
    document.body.style.overflow = "hidden";

    // Step durations
    const thinkDuration = 1200;  // "Think It." holds for 1.2s
    const pitchDuration = 1500;  // "Pitch It." holds for 3s
    const launchDuration = 1500; // "Launch It." holds for 3s
    const logoDuration = 1800;   // E-Cell logo holds for 1.8s

    const step1Timer = setTimeout(() => setCurrentStepIndex(1), thinkDuration);
    const step2Timer = setTimeout(() => setCurrentStepIndex(2), thinkDuration + pitchDuration);

    // Switch to clean Brand Reveal after Launch It completes its 3s hold
    const climaxTimer = setTimeout(() => {
      setPhase("climax");
    }, thinkDuration + pitchDuration + launchDuration);

    // Smooth curtain exit
    const exitTimer = setTimeout(() => {
      setPhase("exit");
      lenis?.start();
      document.body.style.overflow = "";
    }, thinkDuration + pitchDuration + launchDuration + logoDuration);

    return () => {
      clearTimeout(step1Timer);
      clearTimeout(step2Timer);
      clearTimeout(climaxTimer);
      clearTimeout(exitTimer);
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [lenis]);

  if (!isMounted) return null;

  const current = steps[currentStepIndex];

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.77, 0, 0.175, 1],
            },
          }}
          className="fixed inset-0 z-[999999] bg-[#0a0a0a] text-white flex flex-col justify-between p-6 sm:p-12 md:p-16 select-none pointer-events-auto"
        >
          {/* Top Header */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px] sm:text-xs text-neutral-400 tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-white font-medium">E-CELL SJCEM</span>
            </div>
            <span className="hidden sm:inline-block text-neutral-400">
              PALGHAR, MH // 19.6967° N, 72.7699° E
            </span>
            <span className="text-[var(--color-primary)] font-mono uppercase tracking-widest text-[10px] sm:text-xs font-semibold">
              2026
            </span>
          </div>

          {/* Center Stage: Masked Typography Reveal */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4">
            <AnimatePresence mode="wait">
              {phase === "words" ? (
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="flex flex-col items-center space-y-4 max-w-3xl"
                >
                  {/* Step Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04]">
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
                      Stage {current.step} / 03
                    </span>
                  </div>

                  {/* Main Editorial Typography with website yellow */}
                  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-inter tracking-tight text-white leading-none">
                    {current.word}{" "}
                    <span className="text-[var(--color-primary)]">{current.highlight}</span>
                  </h1>

                  {/* Clean Subtitle */}
                  <p className="font-inter text-xs sm:text-sm md:text-base text-neutral-400 tracking-wide">
                    {current.sub}
                  </p>
                </motion.div>
              ) : (
                /* Phase 2: Refined Brand Reveal */
                <motion.div
                  key="climax"
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="flex flex-col items-center space-y-6 max-w-2xl"
                >
                  {/* Big Circular Seal */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden p-2 border border-white/20 bg-white/[0.03] shadow-2xl flex items-center justify-center">
                    <img
                      src="/images/logo.png"
                      alt="E-Cell SJCEM"
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>

                  {/* Clean Brand Typography */}
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-inter tracking-tight text-white">
                      Entrepreneurship <span className="text-[var(--color-primary)]">Cell</span>
                    </h2>
                    <p className="font-mono text-xs sm:text-sm text-neutral-400 tracking-wider uppercase">
                      St. John College of Engineering and Management (Autonomous)
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Minimal Bottom Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] sm:text-xs text-neutral-400 tracking-wider gap-3">
            <div className="tracking-widest uppercase">
              Innovation • Incubation • Enterprise
            </div>

            {/* Clean Segment Indicator */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${phase === "climax"
                      ? "w-8 bg-[var(--color-primary)]"
                      : idx === currentStepIndex
                        ? "w-8 bg-[var(--color-primary)]"
                        : idx < currentStepIndex
                          ? "w-4 bg-white/40"
                          : "w-2 bg-white/15"
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
