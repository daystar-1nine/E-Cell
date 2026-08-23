"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, X, User } from "lucide-react";
import { teamsData, Team } from "@/utils/teams";

export default function TeamDesktop() {
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveTeam(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="team" className="relative w-full py-16 sm:py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
        
        {/* Section Header */}
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
            Explore the minds driving the cell. (Tap any folder to view members)
          </p>
        </div>

        {/* Desktop & Mobile Folder Workspace */}
        <div className="relative w-full max-w-5xl bg-[var(--color-surface)] border border-hairline rounded-xl p-5 sm:p-8 md:p-10 shadow-sm">
          
          {/* Folders Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {teamsData.map((team) => (
              <motion.button
                key={team.id}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTeam(team)}
                className="flex flex-col items-center gap-2.5 sm:gap-3 group p-4 rounded-xl transition-all duration-200 hover:bg-[var(--color-surface-elevated)] border border-transparent hover:border-hairline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] cursor-pointer text-center"
              >
                <div className="relative">
                  <Folder 
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 text-[var(--color-primary)] transition-transform duration-200 group-hover:scale-105 fill-[var(--color-primary)] opacity-85 group-hover:opacity-100" 
                    strokeWidth={1.2} 
                  />
                  {team.members.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[10px] sm:text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border border-[var(--color-background)] shadow-sm">
                      {team.members.length}
                    </span>
                  )}
                </div>
                <span className="text-xs sm:text-sm font-inter text-[var(--color-text-main)] font-semibold leading-snug line-clamp-2">
                  {team.name}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors">
                  {team.members.length} {team.members.length === 1 ? "member" : "members"}
                </span>
              </motion.button>
            ))}
          </div>

        </div>

        {/* Global Smooth Folder Window Modal rendered directly to body via Portal */}
        {mounted && createPortal(
          <AnimatePresence>
            {activeTeam && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveTeam(null)}
                className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[9999] flex items-center justify-center p-3 sm:p-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-3xl max-h-[88vh] bg-[var(--color-surface)] border border-hairline rounded-xl overflow-hidden flex flex-col shadow-2xl relative"
                >
                  {/* Window Title Bar */}
                  <div className="h-12 sm:h-14 bg-[var(--color-surface-elevated)] border-b border-hairline flex items-center justify-between px-4 sm:px-6 shrink-0">
                    <div className="flex items-center gap-2.5 truncate pr-2">
                      <Folder className="w-5 h-5 text-[var(--color-primary)] fill-[var(--color-primary)] shrink-0" />
                      <span className="text-sm sm:text-base font-inter text-[var(--color-text-main)] font-bold truncate">
                        {activeTeam.name}
                      </span>
                      <span className="text-xs font-mono text-[var(--color-text-muted)] hidden sm:inline-block">
                        ({activeTeam.members.length} {activeTeam.members.length === 1 ? "member" : "members"})
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveTeam(null)}
                      className="p-1.5 sm:p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-surface)] rounded-md transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Window Content */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 custom-scrollbar overscroll-contain bg-[var(--color-background)]">
                    {activeTeam.members.length === 0 ? (
                      <div className="h-40 flex items-center justify-center text-[var(--color-text-muted)] font-mono italic text-xs sm:text-sm">
                        No members listed in this team yet.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                        {activeTeam.members.map((member, idx) => (
                          <div 
                            key={idx} 
                            className="bg-[var(--color-surface)] border border-hairline rounded-lg p-4 flex flex-col items-center text-center transition-all duration-200 hover:border-hairline-strong hover:shadow-sm"
                          >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--color-surface-elevated)] mb-3 flex items-center justify-center overflow-hidden border-2 border-[var(--color-hairline-strong)]">
                              {member.photoUrl ? (
                                <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover grayscale opacity-85" />
                              ) : (
                                <User className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-text-muted)]" />
                              )}
                            </div>
                            <h4 className="text-[var(--color-text-main)] font-inter font-bold text-sm sm:text-base mb-1">
                              {member.name}
                            </h4>
                            <p className="text-[var(--color-primary)] text-xs sm:text-sm font-mono font-semibold">
                              {member.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Window Footer */}
                  <div className="py-2.5 px-4 sm:px-6 bg-[var(--color-surface-elevated)] border-t border-hairline text-center text-xs font-mono text-[var(--color-text-muted)]">
                    Press Escape or tap outside to close
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      </div>
    </section>
  );
}
