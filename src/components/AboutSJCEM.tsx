"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Award, CheckCircle, GraduationCap, Building2, MapPin } from "lucide-react";

const credentials = [
  { label: "NAAC Grade A+", icon: Award },
  { label: "AICTE Approved", icon: CheckCircle },
  { label: "Mumbai Univ. Affiliated", icon: GraduationCap },
  { label: "Est. 2008", icon: Building2 },
  { label: "10-Acre Campus", icon: MapPin },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSJCEM() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax tilt effect for the image placeholder
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section id="about-sjcem" ref={sectionRef} className="relative min-h-[100dvh] w-full flex items-center py-24 lg:py-32 z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 dynamic-scrim p-6 md:p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-4 md:mb-6 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-sky-400"></div>
              <span className="text-sky-300 font-semibold tracking-wider uppercase text-sm dynamic-text-shadow">About SJCEM</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold font-inter text-white mb-6 md:mb-8 leading-tight dynamic-text-shadow">
              A premier autonomous institute.
            </motion.h2>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-200 font-outfit leading-relaxed mb-8 md:mb-10">
              <motion.p variants={itemVariants} className="dynamic-text-shadow">
                Established in 2008 by the Aldel Education Trust, St. John College of Engineering and Management (SJCEM) is a premier private, autonomous institute located in a lush 10-acre campus in Palghar, Maharashtra. Affiliated with the University of Mumbai and approved by AICTE, the college boasts a prestigious NAAC Grade A+ accreditation.
              </motion.p>
              <motion.p variants={itemVariants} className="dynamic-text-shadow">
                SJCEM offers comprehensive undergraduate (B.E./B.Tech), postgraduate (MMS/MCA), and diploma programs, specializing in fields like AI/ML, Data Science, and Computer Engineering. Known for its modern infrastructure, dynamic placement cell, and holistic development approach, it bridges the gap between industry expectations and student talent.
              </motion.p>
            </div>

            {/* Credential Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-8 border-t border-white/10 pt-8">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-sky-950/30 backdrop-blur-md border border-sky-500/20 p-3 md:p-4 rounded-2xl shadow-[0_0_15px_rgba(14,165,233,0.1)] hover:bg-sky-900/40 hover:border-sky-400/40 hover:-translate-y-1 transition-all group">
                  <div className="p-2.5 bg-sky-500/20 rounded-xl text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/30 transition-all shrink-0">
                    <cred.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-200 font-inter leading-tight">{cred.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Parallax Placeholder */}
          <div className="w-full lg:w-1/2" style={{ perspective: "1000px" }}>
            <motion.div 
              style={{ y, rotateX }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-slate-200 flex items-center justify-center group"
            >
              {/* PLACEHOLDER: replace with real campus photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-amber-50 opacity-20 mix-blend-overlay z-10"></div>
              
              <img src="/images/campus_photo.png" alt="SJCEM Campus" className="w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700" />
              
              {/* Decorative elements for the placeholder */}
              <div className="absolute inset-0 border-[8px] md:border-[10px] border-white/20 rounded-3xl z-10 m-4 pointer-events-none"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
