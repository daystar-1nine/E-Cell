"use client";

import { useEffect, useRef } from "react";
import { motion, Variants, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, Rocket, Target, Handshake, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Founded", numericValue: 2015, suffix: "", icon: Rocket, featured: false },
  { label: "Students Impacted", numericValue: 5000, suffix: "+", icon: Users, featured: true },
  { label: "Startups Mentored", numericValue: 25, suffix: "+", icon: Target, featured: true },
  { label: "Industry Partners", numericValue: 40, suffix: "+", icon: Handshake, featured: false },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
        // If it's a year like 2015, don't use commas
        const formatted = value > 3000 && value < 3000 ? Math.floor(latest).toString() : Intl.NumberFormat("en-US").format(Math.floor(latest));
        // Actually, just format based on value
        const displayVal = value >= 2000 && value <= 2100 ? Math.floor(latest).toString() : Intl.NumberFormat("en-US").format(Math.floor(latest));
        ref.current.textContent = displayVal + suffix;
      }
    });
  }, [springValue, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function AboutECell() {
  return (
    <section id="about-ecell" className="relative min-h-[100dvh] w-full flex flex-col justify-center py-24 lg:py-32 z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-12 lg:gap-20">
        
        {/* Top: Scannable Text Content */}
        <motion.div 
          className="max-w-4xl dynamic-scrim p-8 md:p-10 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={textVariants} className="mb-4 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-orange-400"></div>
            <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm dynamic-text-shadow">Our Mission</span>
          </motion.div>
          
          <motion.h2 variants={textVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold font-inter text-white mb-8 leading-tight dynamic-text-shadow">
            We turn student ideas into real startups.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-base md:text-lg text-slate-200 font-outfit">
            <motion.p variants={textVariants} className="leading-relaxed dynamic-text-shadow">
              We believe India's future depends on the youth breaking free from conventional career paths. At E-Cell SJCEM, we don't just talk about entrepreneurship—we build an ecosystem that makes it possible.
            </motion.p>
            <motion.div variants={textVariants} className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
                <span className="dynamic-text-shadow">Bridging the gap between students, faculty, and working professionals.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
                <span className="dynamic-text-shadow">Connecting aspiring founders with mentors, angel investors, and VCs.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
                <span className="dynamic-text-shadow">Providing a safe platform to test, fail, and rebuild ideas.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom: High-Impact Animated Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={textVariants}
              className={`p-6 md:p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-2
                ${stat.featured 
                  ? 'bg-orange-500/20 border-orange-500/40 backdrop-blur-xl shadow-[0_0_30px_rgba(249,115,22,0.2)] hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:bg-orange-500/30' 
                  : 'dynamic-scrim border-white/20 backdrop-blur-xl hover:bg-slate-900/60'
                }
              `}
            >
              <div className={`mb-4 md:mb-6 inline-flex p-3 rounded-2xl transition-transform group-hover:scale-110 shadow-inner
                ${stat.featured ? 'bg-orange-500/30 text-orange-200' : 'bg-slate-800/80 text-slate-200'}
              `}>
                <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              <div className={`text-4xl md:text-5xl lg:text-6xl font-extrabold font-inter mb-2 tracking-tighter drop-shadow-md
                ${stat.featured ? 'text-white' : 'text-slate-100'}
              `}>
                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
              </div>
              
              <div className={`text-sm md:text-base font-medium font-outfit uppercase tracking-wider
                ${stat.featured ? 'text-orange-100' : 'text-slate-300'}
              `}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
