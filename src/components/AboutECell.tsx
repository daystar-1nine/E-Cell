"use client";

import { motion, Variants } from "framer-motion";
import { Users, Rocket, Target, Handshake } from "lucide-react";

const stats = [
  { label: "Founded", value: "2015", icon: Rocket },
  { label: "Students Impacted", value: "5000+", icon: Users },
  { label: "Startups Mentored", value: "25+", icon: Target },
  { label: "Industry Partners", value: "40+", icon: Handshake },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutECell() {
  return (
    <section id="about-ecell" className="relative min-h-screen w-full flex items-center py-32 z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-8 dynamic-scrim p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={textVariants} className="mb-6 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-orange-400"></div>
              <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm dynamic-text-shadow">About Us</span>
            </motion.div>
            
            <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-bold font-inter text-white mb-8 leading-tight dynamic-text-shadow">
              Breaking the shackles of prejudice and inertia.
            </motion.h2>
            
            <div className="space-y-6 text-lg md:text-xl text-slate-200 font-outfit leading-relaxed">
              <motion.p variants={textVariants} className="dynamic-text-shadow">
                We, at the Entrepreneurship Cell, share the common belief that India will only emerge as a world power if the youth breaks the shackles of prejudices and inertia that has kept them from starting up.
              </motion.p>
              <motion.p variants={textVariants} className="dynamic-text-shadow">
                Creating an entrepreneurial ecosystem to provide a platform to individuals with creative minds, ideas and the potential to run a substantial business, is what we strive towards continually.
              </motion.p>
              <motion.p variants={textVariants} className="dynamic-text-shadow">
                We enable smooth and efficient interaction between its principal components spanning students, faculty, working professionals, aspiring and existing entrepreneurs, mentors, angel investors and venture capitalists.
              </motion.p>
            </div>
          </motion.div>

          {/* Stats Sidebar */}
          <motion.div 
            className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={textVariants}
                className="dynamic-scrim backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl flex items-center gap-4 group hover:bg-white/10 hover:dynamic-glow transition-all"
              >
                <div className="p-3 bg-orange-500/20 rounded-xl text-orange-400 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white font-inter dynamic-text-shadow">{stat.value}</div>
                  <div className="text-sm text-slate-300 dynamic-text-shadow">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
