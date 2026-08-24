"use client";

import { useEffect, useRef } from "react";
import { motion, Variants, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, Rocket, Target, Handshake, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Founded", numericValue: 2018, suffix: "", icon: Rocket, featured: false },
  { label: "Students Impacted", numericValue: 1500, suffix: "+", icon: Users, featured: true },
  { label: "Startups Mentored", numericValue: 15, suffix: "+", icon: Target, featured: true },
  { label: "Industry Partners", numericValue: 35, suffix: "+", icon: Handshake, featured: false },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function AnimatedCounter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const displayVal = value >= 2000 && value <= 2100 ? Math.floor(latest).toString() : Intl.NumberFormat("en-US").format(Math.floor(latest));
        ref.current.textContent = displayVal + suffix;
      }
    });
  }, [springValue, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function AboutECell() {
  return (
    <section id="about-ecell" className="relative min-h-[100dvh] w-full flex flex-col justify-center py-16 sm:py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-8 sm:gap-12 lg:gap-16">
        
        {/* Top: Scannable Text Content */}
        <motion.div 
          className="max-w-4xl bg-[var(--color-surface)] p-5 sm:p-8 md:p-10 rounded-lg border border-hairline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={textVariants} className="mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
            <span className="text-[var(--color-primary)] text-label-caps">Our Mission</span>
          </motion.div>
          
          <motion.h2 variants={textVariants} className="text-display-md lg:text-display-lg text-[var(--color-text-main)] mb-6 sm:mb-8">
            We turn student ideas into real startups.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-10 text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] font-inter">
            <motion.p variants={textVariants} className="leading-relaxed">
              We believe India's future depends on the youth breaking free from conventional career paths. At E-Cell SJCEM, we don't just talk about entrepreneurship—we build an ecosystem that makes it possible.
            </motion.p>
            <motion.div variants={textVariants} className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Bridging the gap between students, faculty, and working professionals.</span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Connecting aspiring founders with mentors, angel investors, and VCs.</span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Providing a safe platform to test, fail, and rebuild ideas.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom: High-Impact Animated Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={textVariants}
              className="p-4 sm:p-6 md:p-8 rounded-lg bg-[var(--color-surface)] border border-hairline transition-colors hover:border-hairline-strong hover:bg-[var(--color-surface-elevated)] group flex flex-col items-start"
            >
              <div className="mb-3 sm:mb-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>
              
              <div className="text-stat-display text-[var(--color-primary)] mb-1 sm:mb-2">
                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
              </div>
              
              <div className="text-label-caps text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors text-[10px] sm:text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
