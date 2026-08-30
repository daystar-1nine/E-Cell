"use client";

import { motion, Variants } from "framer-motion";
import { Trophy, Medal, Award, CheckCircle2 } from "lucide-react";

export default function EurekaPitch2026() {
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

  return (
    <section id="eureka-2026" className="relative w-full flex flex-col justify-center py-16 sm:py-24 lg:py-32 z-10 bg-[var(--color-background)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-12 lg:gap-16">
        
        {/* Header Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={textVariants} className="mb-4 flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
            <span className="text-[var(--color-primary)] text-label-caps">Past Event Highlight</span>
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
          </motion.div>
          
          <motion.h2 variants={textVariants} className="text-display-md lg:text-display-lg text-[var(--color-text-main)] mb-6">
            Eureka! Pitching Competition 2026
          </motion.h2>
          
          <motion.p variants={textVariants} className="text-lg text-[var(--color-text-muted)] font-inter mb-6">
            On August 25, 2026, E-Cell SJCEM hosted an incredible showcase of startup ideas and innovations. With a cash prize pool of ₹5,000, teams battled it out in front of an expert jury panel.
          </motion.p>
        </motion.div>

        {/* Winners Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* 2nd Place */}
          <motion.div variants={textVariants} className="order-2 md:order-1 flex flex-col items-center md:pt-12">
            <div className="relative w-full rounded-xl overflow-hidden mb-6 border-2 border-[#C0C0C0] shadow-[0_0_15px_rgba(192,192,192,0.3)]">
              <img src="/event_images/2nd_position_team.JPG" alt="Team Vecna - 2nd Place" className="w-full h-auto object-cover block" />
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-full border border-hairline">
                <Medal className="w-6 h-6 text-[#C0C0C0]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">Team Vecna</h3>
            <p className="text-[var(--color-primary)] font-semibold mb-4">2nd Place</p>
            <div className="text-sm text-[var(--color-text-muted)] text-center space-y-1">
              {/* <p>Parveen Shaikh (Leader)</p>
              <p>Vidhi Jain</p>
              <p>Ankita Jalkote</p> */}
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div variants={textVariants} className="order-1 md:order-2 flex flex-col items-center z-10 relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-[var(--color-primary)]/20 to-transparent blur-xl rounded-full -z-10" />
            <div className="relative w-full rounded-xl overflow-hidden mb-6 border-2 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.4)] md:scale-110">
              <img src="/event_images/winners_team.JPG" alt="Biosense - 1st Place" className="w-full h-auto object-cover block" />
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-full border border-hairline">
                <Trophy className="w-8 h-8 text-[#FFD700]" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-[var(--color-text-main)] mb-2 mt-2">Biosense</h3>
            <p className="text-[#FFD700] font-bold text-lg mb-4">1st Place Winners</p>
            <div className="text-sm text-[var(--color-text-muted)] text-center space-y-1">
              {/* <p>Anand Ambhore (Leader)</p>
              <p>Kunal Bhandarkar</p>
              <p>Keyur Bidawat</p>
              <p>Tejas Bhavthankar</p> */}
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div variants={textVariants} className="order-3 flex flex-col items-center md:pt-16">
            <div className="relative w-full rounded-xl overflow-hidden mb-6 border-2 border-[#CD7F32] shadow-[0_0_15px_rgba(205,127,50,0.3)]">
              <img src="/event_images/3rd_position_team.JPG" alt="Phantom - 3rd Place" className="w-full h-auto object-cover block" />
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-full border border-hairline">
                <Award className="w-6 h-6 text-[#CD7F32]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">Phantom</h3>
            <p className="text-[var(--color-primary)] font-semibold mb-4">3rd Place</p>
            <div className="text-sm text-[var(--color-text-muted)] text-center space-y-1">
              {/* <p>Kundan Yadav (Leader)</p>
              <p>Ankit Rajpurohit</p>
              <p>Mahesh Sharma</p>
              <p>Vivek Mandal</p> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Details & Jury */}
        {/* <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={textVariants} className="bg-[var(--color-surface)] p-6 md:p-8 rounded-xl border border-hairline">
            <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-6">Event Highlights</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <p className="text-[var(--color-text-muted)]">2-minute startup pitching followed by a 3-minute jury Q&amp;A session.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <p className="text-[var(--color-text-muted)]">Live Product Demonstrations allowing juries a practical view of ideas.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <p className="text-[var(--color-text-muted)]">Flexible Presentation Format structure suitable to project nature.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={textVariants} className="bg-[var(--color-surface)] p-6 md:p-8 rounded-xl border border-hairline">
            <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-6">Esteemed Jury Panel</h4>
            <div className="space-y-4 text-base text-[var(--color-text-muted)]">
              <p><strong className="text-white text-lg block mb-1">Kanhayya Gupta</strong> AI Product Manager at Rahi, with a strong engineering and AI background.</p>
              <p><strong className="text-white text-lg block mb-1">Shreyas Magar</strong> SAP BASIS Consultant and Application Administrator with professional experience in enterprise technology.</p>
              <p><strong className="text-white text-lg block mb-1">Satyam Pandey</strong> Product &amp; Business Operations professional at Raahiworks with a background in software and technology.</p>
              <p><strong className="text-white text-lg block mb-1">Samtani Edwin</strong> Founder of Kantascrypt, working in innovation, technology development and IT consulting.</p>
            </div>
          </motion.div>
        </motion.div> */}

        {/* Evaluation & Event Flow */}
        {/* <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={textVariants} className="bg-[var(--color-surface)] p-6 md:p-8 rounded-xl border border-hairline">
            <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-6">Evaluation Criteria (100 Marks)</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[var(--color-surface-elevated)] rounded-lg">
                <span className="font-semibold text-[var(--color-text-main)]">Innovation / Ideation</span>
                <span className="text-[var(--color-primary)] font-bold">20 Marks</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[var(--color-surface-elevated)] rounded-lg">
                <span className="font-semibold text-[var(--color-text-main)]">Study Design and Methodology</span>
                <span className="text-[var(--color-primary)] font-bold">20 Marks</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[var(--color-surface-elevated)] rounded-lg">
                <span className="font-semibold text-[var(--color-text-main)]">Feasibility</span>
                <span className="text-[var(--color-primary)] font-bold">20 Marks</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[var(--color-surface-elevated)] rounded-lg">
                <span className="font-semibold text-[var(--color-text-main)]">Social Relevance</span>
                <span className="text-[var(--color-primary)] font-bold">20 Marks</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[var(--color-surface-elevated)] rounded-lg">
                <span className="font-semibold text-[var(--color-text-main)]">Communication</span>
                <span className="text-[var(--color-primary)] font-bold">20 Marks</span>
              </div>
            </div>
          </motion.div> */}

          {/* <motion.div variants={textVariants} className="bg-[var(--color-surface)] p-6 md:p-8 rounded-xl border border-hairline">
            <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-6">Event Structure and Flow</h4>
            <div className="space-y-3 text-[var(--color-text-muted)]">
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></span> Opening and Event Briefing</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></span> Introduction of Jury Members</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></span> Startup Pitching Round – 2 minutes per team</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></span> Jury Q&amp;A Session – 3 minutes per team</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></span> Jury Feedback &amp; Evaluation</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></span> Score Compilation and Selection of Top 3 Teams</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></span> Winner Announcement</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></span> Certificate Distribution and Cash Prizes</p>
            </div>
          </motion.div>
        </motion.div> */}

        {/* Gallery */}
        {/* <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={textVariants} className="aspect-video rounded-lg overflow-hidden">
            <img src="/event_images/event_photo_1.JPG" alt="Event Moment 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          <motion.div variants={textVariants} className="aspect-video rounded-lg overflow-hidden">
            <img src="/event_images/event_photo_2.JPG" alt="Event Moment 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          <motion.div variants={textVariants} className="aspect-video rounded-lg overflow-hidden">
            <img src="/event_images/event_photo_3.JPG" alt="Event Moment 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
        </motion.div> */}

      </div>
    </section>
  );
}
