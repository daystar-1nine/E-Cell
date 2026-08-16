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
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutSJCEM() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for desktop, lighter on mobile
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section id="about-sjcem" ref={sectionRef} className="relative min-h-[100dvh] w-full flex items-center py-16 sm:py-24 lg:py-32 z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row-reverse gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 bg-[var(--color-surface)] p-5 sm:p-7 md:p-8 rounded-lg border border-hairline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-3 sm:mb-5 flex items-center gap-3 sm:gap-4">
              <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
              <span className="text-[var(--color-primary)] text-label-caps">About SJCEM</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-display-md lg:text-display-lg font-bold font-inter text-[var(--color-text-main)] mb-4 sm:mb-6 leading-tight">
              A premier autonomous institute.
            </motion.h2>
            
            <div className="space-y-3 sm:space-y-5 text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] font-inter leading-relaxed mb-6 sm:mb-8">
              <motion.p variants={itemVariants}>
                Established in 2008 by the Aldel Education Trust, St. John College of Engineering and Management (SJCEM) is a premier private, autonomous institute located in a lush 10-acre campus in Palghar, Maharashtra. Affiliated with the University of Mumbai and approved by AICTE, the college boasts a prestigious NAAC Grade A+ accreditation.
              </motion.p>
              <motion.p variants={itemVariants}>
                SJCEM offers comprehensive undergraduate (B.E./B.Tech), postgraduate (MMS/MCA), and diploma programs, specializing in fields like AI/ML, Data Science, and Computer Engineering. Known for its modern infrastructure, dynamic placement cell, and holistic development approach, it bridges the gap between industry expectations and student talent.
              </motion.p>
            </div>

            {/* Credential Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 mt-6 sm:mt-8 border-t border-hairline pt-6 sm:pt-8">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-3 sm:gap-4 bg-[var(--color-surface-elevated)] border border-hairline p-2.5 sm:p-3.5 rounded-md transition-colors hover:border-hairline-strong group">
                  <div className="p-2 sm:p-2.5 bg-[var(--color-background)] rounded-md text-[var(--color-primary)] transition-colors shrink-0 border border-hairline">
                    <cred.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-[var(--color-text-main)] font-inter leading-tight">{cred.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Parallax Placeholder */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              style={{ y, rotateX }}
              className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden border border-hairline bg-[var(--color-surface)] flex items-center justify-center group shadow-sm"
            >
              <img src="/images/campus_photo.png" alt="SJCEM Campus" className="w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 opacity-85 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-[var(--color-primary)] mix-blend-color opacity-10"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
