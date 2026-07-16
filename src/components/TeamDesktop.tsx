"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, X, Minus, Square, User } from "lucide-react";
import { teamsData, Team } from "@/utils/teams";

export default function TeamDesktop() {
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);

  return (
    <section id="team" className="relative min-h-[100dvh] w-full flex items-center py-20 lg:py-32 z-10">
      <div className="container mx-auto px-4 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-inter text-white mb-4 dynamic-text-shadow">
            Meet the Team
          </h2>
          <p className="text-amber-100/80 font-outfit text-base md:text-lg dynamic-text-shadow">
            Explore the minds driving the cell. (Tap a folder to open)
          </p>
        </div>

        {/* Desktop & Mobile Interface */}
        <div className="relative w-full max-w-5xl aspect-square md:aspect-video bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl p-4 md:p-6 overflow-hidden">
          
          {/* Folders Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {teamsData.map((team) => (
              <motion.button
                key={team.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTeam(team)}
                className="flex flex-col items-center gap-2 group p-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="relative">
                  <Folder className="w-12 h-12 md:w-16 md:h-16 text-amber-400 drop-shadow-md group-hover:text-amber-300 transition-colors fill-amber-400/50" strokeWidth={1} />
                </div>
                <span className="text-xs md:text-sm font-inter text-slate-100 font-medium text-center drop-shadow-sm group-hover:text-white">
                  {team.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Window Modal */}
          <AnimatePresence>
            {activeTeam && (
              <motion.div
                layoutId={`folder-${activeTeam.id}`}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2 } }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                drag
                dragConstraints={{ left: -100, right: 100, top: -50, bottom: 100 }}
                dragMomentum={false}
                dragElastic={0.1}
                className="absolute top-4 left-4 right-4 bottom-4 md:top-10 md:left-10 lg:left-1/4 md:right-10 lg:right-1/4 md:bottom-10 bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl rounded-lg overflow-hidden flex flex-col z-50 cursor-auto"
                // Stop drag propagation when interacting with content inside
                onPointerDownCapture={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.closest('.no-drag')) {
                    e.stopPropagation();
                  }
                }}
              >
                {/* Window Title Bar (Drag handle) */}
                <div className="h-12 md:h-10 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-4 cursor-grab active:cursor-grabbing">
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-xs md:text-sm font-inter text-slate-300 font-medium">{activeTeam.name}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-3 no-drag">
                    <button className="hidden md:block p-2 text-slate-400 hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
                    <button className="hidden md:block p-2 text-slate-400 hover:text-white transition-colors"><Square className="w-3.5 h-3.5" /></button>
                    <button 
                      onClick={() => setActiveTeam(null)}
                      className="p-2 -mr-2 text-slate-400 hover:text-red-400 transition-colors"
                      aria-label="Close folder"
                    >
                      <X className="w-5 h-5 md:w-4 md:h-4" />
                    </button>
                  </div>
                </div>

                {/* Window Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 no-drag custom-scrollbar overscroll-contain">
                  {activeTeam.members.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-slate-500 font-outfit italic text-sm md:text-base">
                      No members added yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {activeTeam.members.map((member, idx) => (
                        <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-700 mb-3 md:mb-4 flex items-center justify-center overflow-hidden border-2 border-amber-500/30">
                            {member.photoUrl ? (
                              <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                              <User className="w-6 h-6 md:w-8 md:h-8 text-slate-500" />
                            )}
                          </div>
                          <h4 className="text-slate-200 font-inter font-semibold text-sm md:text-base mb-1">{member.name}</h4>
                          <p className="text-amber-400/80 text-xs md:text-sm font-outfit">{member.role}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
