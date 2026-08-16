"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, X, Minus, Square, User } from "lucide-react";
import { teamsData, Team } from "@/utils/teams";

export default function TeamDesktop() {
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);

  return (
    <section id="team" className="relative min-h-[100dvh] w-full flex items-center py-16 sm:py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="mb-3 sm:mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
            <span className="text-[var(--color-primary)] text-label-caps">Organization</span>
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
          </div>
          <h2 className="text-display-md font-bold font-inter text-[var(--color-text-main)] mb-2 sm:mb-4">
            Meet the Team
          </h2>
          <p className="text-[var(--color-text-muted)] font-inter text-sm sm:text-base md:text-lg">
            Explore the minds driving the cell. (Tap a folder to open)
          </p>
        </div>

        {/* Desktop & Mobile Interface */}
        <div className="relative w-full max-w-5xl bg-[var(--color-surface)] border border-hairline rounded-lg p-4 sm:p-6 md:p-8 min-h-[380px] md:min-h-[460px] flex flex-col justify-center">
          
          {/* Folders Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {teamsData.map((team) => (
              <motion.button
                key={team.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTeam(team)}
                className="flex flex-col items-center gap-2 group p-3 sm:p-4 rounded-md transition-colors hover:bg-[var(--color-surface-elevated)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] cursor-pointer"
              >
                <div className="relative">
                  <Folder className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[var(--color-primary)] transition-colors fill-[var(--color-primary)] opacity-80 group-hover:opacity-100" strokeWidth={1} />
                  {team.members.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[10px] sm:text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border border-[var(--color-background)]">
                      {team.members.length}
                    </span>
                  )}
                </div>
                <span className="text-xs sm:text-sm font-inter text-[var(--color-text-muted)] font-medium text-center group-hover:text-[var(--color-text-main)] line-clamp-2">
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
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2 } }}
                transition={{ type: "spring", damping: 25, stiffness: 320 }}
                className="fixed inset-3 sm:inset-6 md:absolute md:inset-4 lg:inset-8 bg-[var(--color-surface)] border border-hairline rounded-lg overflow-hidden flex flex-col z-50 cursor-auto shadow-2xl"
              >
                {/* Window Title Bar */}
                <div className="h-12 sm:h-11 bg-[var(--color-surface-elevated)] border-b border-hairline flex items-center justify-between px-4 shrink-0">
                  <div className="flex items-center gap-2 truncate pr-2">
                    <Folder className="w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)] shrink-0" />
                    <span className="text-xs sm:text-sm font-inter text-[var(--color-text-main)] font-medium truncate">{activeTeam.name}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button className="hidden md:block p-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors"><Minus className="w-4 h-4" /></button>
                    <button className="hidden md:block p-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors"><Square className="w-3.5 h-3.5" /></button>
                    <button 
                      onClick={() => setActiveTeam(null)}
                      className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-error)] hover:bg-[var(--color-surface)] rounded-md transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Close folder"
                    >
                      <X className="w-5 h-5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

                {/* Window Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar overscroll-contain bg-[var(--color-background)]">
                  {activeTeam.members.length === 0 ? (
                    <div className="h-full min-h-[160px] flex items-center justify-center text-[var(--color-text-muted)] font-mono italic text-xs sm:text-sm">
                      No members listed in this team yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                      {activeTeam.members.map((member, idx) => (
                        <div key={idx} className="bg-[var(--color-surface)] border border-hairline rounded-md p-3.5 sm:p-4 flex flex-col items-center text-center transition-colors hover:border-hairline-strong shadow-sm">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[var(--color-surface-elevated)] mb-2.5 sm:mb-3 flex items-center justify-center overflow-hidden border-2 border-[var(--color-hairline-strong)]">
                            {member.photoUrl ? (
                              <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover grayscale opacity-80" />
                            ) : (
                              <User className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(--color-text-muted)]" />
                            )}
                          </div>
                          <h4 className="text-[var(--color-text-main)] font-inter font-semibold text-xs sm:text-sm md:text-base mb-1">{member.name}</h4>
                          <p className="text-[var(--color-primary)] text-[11px] sm:text-xs md:text-sm font-mono">{member.role}</p>
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
