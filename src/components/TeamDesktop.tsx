"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";
import { executiveOfficers, departmentCohorts, wings, type TeamMember, type Wing } from "@/utils/teams";

/* ─── Inline SVG Social Icons (lucide-react doesn't include brand icons) ─── */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/* ─── Badge Component ─── */
function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[var(--color-primary)] text-[var(--color-text-inverse)] leading-snug whitespace-nowrap">
      {label}
    </span>
  );
}

/* ─── Social Link Button ─── */
function SocialButton({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-elevated)] transition-all duration-200"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

/* ─── Executive Officer Card (Large, horizontal layout) ─── */
function ExecutiveCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[var(--color-surface)] border border-[var(--color-primary)]/50 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(250,255,105,0.15)] transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent pointer-events-none" />

      {/* Profile Image */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[var(--color-surface-elevated)] flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-[var(--color-primary)]/30 z-10">
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <User className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-primary)] opacity-60" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 text-center sm:text-left min-w-0 z-10">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mb-2">
          {member.badges.map((badge) => (
            <Badge key={badge} label={badge} />
          ))}
        </div>

        <h3 className="text-base sm:text-lg font-bold font-inter text-[var(--color-text-main)] mb-3 uppercase tracking-wide">
          {member.name}
        </h3>

        {/* Social Links */}
        <div className="flex items-center justify-center sm:justify-start gap-1">
          {member.instagramUrl && member.instagramUrl !== "#" && (
            <SocialButton href={member.instagramUrl} icon={InstagramIcon} label={`${member.name} Instagram`} />
          )}
          {member.linkedinUrl && member.linkedinUrl !== "#" && (
            <SocialButton href={member.linkedinUrl} icon={LinkedinIcon} label={`${member.name} LinkedIn`} />
          )}
          {member.githubUrl && member.githubUrl !== "#" && (
            <SocialButton href={member.githubUrl} icon={GithubIcon} label={`${member.name} GitHub`} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Department Cohort Card (Compact, vertical layout) ─── */
function CohortCard({ member, index }: { member: TeamMember; index: number }) {
  const isDirector = member.role.includes("Director");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index % 3 * 0.08 }}
      className={`bg-[var(--color-surface)] border ${isDirector ? 'border-[var(--color-primary)]/20' : 'border-[var(--color-hairline)]'} rounded-xl p-4 sm:p-5 flex flex-col items-center text-center ${isDirector ? 'hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-surface-elevated)]/30' : 'hover:border-[var(--color-hairline-strong)]'} hover:shadow-md transition-all duration-300`}
    >
      {/* Profile Image */}
      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--color-surface-elevated)] mb-3 flex items-center justify-center overflow-hidden border ${isDirector ? 'border-[var(--color-primary)]/20' : 'border-[var(--color-hairline)]'}`}>
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <User className={`w-7 h-7 sm:w-8 sm:h-8 ${isDirector ? 'text-[var(--color-primary)] opacity-60' : 'text-[var(--color-text-muted)] opacity-40'}`} />
        )}
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center justify-center gap-1 mb-2">
        {member.badges.map((badge) => (
          <Badge key={badge} label={badge} />
        ))}
      </div>

      {/* Name */}
      <h4 className="text-sm sm:text-base font-bold font-inter text-[var(--color-text-main)] mb-3 uppercase tracking-wide">
        {member.name}
      </h4>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-1 mt-auto">
        {member.instagramUrl && member.instagramUrl !== "#" && (
          <SocialButton href={member.instagramUrl} icon={InstagramIcon} label={`${member.name} Instagram`} />
        )}
        {member.linkedinUrl && member.linkedinUrl !== "#" && (
          <SocialButton href={member.linkedinUrl} icon={LinkedinIcon} label={`${member.name} LinkedIn`} />
        )}
        {member.githubUrl && member.githubUrl !== "#" && (
          <SocialButton href={member.githubUrl} icon={GithubIcon} label={`${member.name} GitHub`} />
        )}
      </div>
    </motion.div>
  );
}

/* ─── Section Divider with Label ─── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
      <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
      <h3 className="text-sm sm:text-base font-bold font-inter text-[var(--color-text-main)] uppercase tracking-[0.15em]">
        {label}
      </h3>
      <div className="flex-1 h-px bg-[var(--color-hairline)]" />
    </div>
  );
}

/* ─── Wing Filter Tabs ─── */
function WingFilter({
  activeWing,
  onSelect,
}: {
  activeWing: Wing;
  onSelect: (wing: Wing) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
      {wings.map((wing) => (
        <button
          key={wing}
          onClick={() => onSelect(wing)}
          className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold font-inter transition-all duration-200 cursor-pointer border ${
            activeWing === wing
              ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)] border-[var(--color-primary)] shadow-sm"
              : "bg-transparent text-[var(--color-text-muted)] border-[var(--color-hairline)] hover:border-[var(--color-hairline-strong)] hover:text-[var(--color-text-main)]"
          }`}
        >
          {wing}
        </button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function TeamDesktop() {
  const [activeWing, setActiveWing] = useState<Wing>("All Wings");

  const filteredCohorts =
    activeWing === "All Wings"
      ? departmentCohorts
      : departmentCohorts.filter((m) => m.wing === activeWing);

  return (
    <section id="team" className="relative w-full py-16 sm:py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        
        {/* ─── Section Header ─── */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-3 sm:mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]" />
            <span className="text-[var(--color-primary)] text-label-caps">
              People Network
            </span>
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-display-md font-bold font-inter text-[var(--color-text-main)] mb-3 sm:mb-4 uppercase tracking-tight">
            The Team
          </h2>
          <p className="text-[var(--color-text-muted)] font-inter text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Meet the builders, innovators, and leaders driving E-Cell SJCEM forward.
          </p>
        </div>

        {/* ─── Executive Officers ─── */}
        <SectionLabel label="Executive Officers" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-16 sm:mb-20 lg:mb-24">
          {executiveOfficers.map((member) => (
            <ExecutiveCard key={member.name} member={member} />
          ))}
        </div>

        {/* ─── Department Cohorts ─── */}
        <SectionLabel label="Department Cohorts" />
        <WingFilter activeWing={activeWing} onSelect={setActiveWing} />

        {/* Cohort Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWing}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {filteredCohorts.map((member, idx) => (
              <CohortCard key={member.name} member={member} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredCohorts.length === 0 && (
          <div className="text-center py-16 text-[var(--color-text-muted)] font-inter text-sm">
            No members found in this wing.
          </div>
        )}

      </div>
    </section>
  );
}
