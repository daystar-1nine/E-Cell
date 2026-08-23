"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, GraduationCap } from "lucide-react";
import {
  facultyCoordinators,
  coreTeam,
  departmentMembers,
  wings,
  getMembersByWing,
  type TeamMember,
  type FacultyCoordinator,
  type Wing,
} from "@/utils/teams";

/* ─── Inline SVG Social Icons ─── */
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

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/* ─── Badge Component ─── */
function Badge({ label, variant = "default" }: { label: string; variant?: "default" | "core" | "director" | "faculty" }) {
  const styles = {
    default: "bg-[var(--color-primary)] text-[var(--color-text-inverse)]",
    core: "bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900",
    director: "bg-gradient-to-r from-cyan-400 to-sky-400 text-gray-900",
    faculty: "bg-gradient-to-r from-amber-300/80 to-yellow-200/80 text-gray-900",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider leading-snug whitespace-nowrap ${styles[variant]}`}>
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

/* ─── Faculty Coordinator Card (Largest images — centered vertical layout) ─── */
function FacultyCard({ coordinator }: { coordinator: FacultyCoordinator }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glow-faculty bg-[var(--color-surface)] rounded-xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden group cursor-pointer"
    >
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent pointer-events-none" />

      {/* Profile Image — LARGEST */}
      <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full bg-[var(--color-surface-elevated)] mb-5 flex items-center justify-center overflow-hidden border-3 border-[var(--color-primary)]/35 z-10">
        {coordinator.photoUrl ? (
          <img
            src={coordinator.photoUrl}
            alt={coordinator.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <GraduationCap className="w-16 h-16 sm:w-20 sm:h-20 text-[var(--color-primary)] opacity-60" />
        )}
      </div>

      {/* Info */}
      <div className="z-10">
        <Badge label={coordinator.title} variant="faculty" />

        <h3 className="text-lg sm:text-xl font-bold font-inter text-[var(--color-text-main)] mt-2 mb-1 uppercase tracking-wide">
          {coordinator.name}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-3">
          {coordinator.department}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-1">
          {coordinator.linkedinUrl && coordinator.linkedinUrl !== "#" && (
            <SocialButton href={coordinator.linkedinUrl} icon={LinkedinIcon} label={`${coordinator.name} LinkedIn`} />
          )}
          {coordinator.emailUrl && coordinator.emailUrl !== "#" && (
            <SocialButton href={coordinator.emailUrl} icon={MailIcon} label={`${coordinator.name} Email`} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Core Team Card (Large portrait images with gold glow) ─── */
function CoreCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
      className="glow-core bg-[var(--color-surface)] rounded-xl overflow-hidden transition-all duration-300 relative group cursor-pointer"
    >
      {/* Gold shimmer gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-yellow-400/5 pointer-events-none z-[1]" />

      {/* Large Portrait Image */}
      <div className="w-full aspect-[3/4] bg-[var(--color-surface-elevated)] overflow-hidden relative">
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-16 h-16 text-amber-400 opacity-40" />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 sm:p-5 text-center relative z-10">
        <Badge label={member.role} variant="core" />

        <h4 className="text-sm sm:text-base font-bold font-inter text-[var(--color-text-main)] mt-2 mb-3 uppercase tracking-wide">
          {member.name}
        </h4>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-1">
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

/* ─── Department Member Card (Large portrait images) ─── */
function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const isDirector = member.role === "Director";
  const isDyDirector = member.role === "Dy. Director";
  const glowClass = isDirector ? "glow-director" : isDyDirector ? "glow-dy-director" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index % 4 * 0.08 }}
      className={`${glowClass} bg-[var(--color-surface)] ${!isDirector && !isDyDirector ? 'border border-[var(--color-hairline)]' : ''} rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer`}
    >
      {/* Large Portrait Image */}
      <div className="w-full aspect-[3/4] bg-[var(--color-surface-elevated)] overflow-hidden">
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className={`w-14 h-14 ${isDirector || isDyDirector ? 'text-cyan-400 opacity-40' : 'text-[var(--color-text-muted)] opacity-30'}`} />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 sm:p-5 text-center">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1 mb-2">
          {member.badges.map((badge) => (
            <Badge
              key={badge}
              label={badge}
              variant={isDirector || isDyDirector ? "director" : "default"}
            />
          ))}
        </div>

        {/* Name */}
        <h4 className="text-sm sm:text-base font-bold font-inter text-[var(--color-text-main)] mb-3 uppercase tracking-wide">
          {member.name}
        </h4>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-1">
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

/* ─── Wing Capsule Tabs ─── */
function WingCapsules({
  activeWing,
  onSelect,
}: {
  activeWing: Wing;
  onSelect: (wing: Wing) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
      {wings.map((wing) => {
        const isActive = activeWing === wing;
        const isCore = wing === "Core Team";
        return (
          <button
            key={wing}
            onClick={() => onSelect(wing)}
            className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold font-inter transition-all duration-200 cursor-pointer border ${
              isActive && isCore
                ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 border-amber-400 shadow-[0_0_12px_rgba(250,255,105,0.3)]"
                : isActive
                ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)] border-[var(--color-primary)] shadow-sm"
                : "bg-transparent text-[var(--color-text-muted)] border-[var(--color-hairline)] hover:border-[var(--color-hairline-strong)] hover:text-[var(--color-text-main)]"
            }`}
          >
            {wing}
          </button>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function TeamDesktop() {
  const [activeWing, setActiveWing] = useState<Wing>("Core Team");

  const activeMembers = getMembersByWing(activeWing);
  const isCore = activeWing === "Core Team";

  return (
    <section id="team" className="relative w-full py-16 sm:py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">

        {/* ─── Section Header ─── */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-3 sm:mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]" />
            <span className="text-[var(--color-primary)] text-label-caps">
              People Behind ITSA
            </span>
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-display-md font-bold font-inter text-[var(--color-text-main)] mb-3 sm:mb-4 uppercase tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-[var(--color-text-muted)] font-inter text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Our dedicated faculty coordinator and student department members who drive ITSA forward.
          </p>
        </div>

        {/* ─── Faculty Coordinators ─── */}
        <SectionLabel label="Faculty Co-ordinators" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-16 sm:mb-20 lg:mb-24">
          {facultyCoordinators.map((coordinator) => (
            <FacultyCard key={coordinator.name} coordinator={coordinator} />
          ))}
        </div>

        {/* ─── Student Teams with Capsule Filters ─── */}
        <SectionLabel label="Student Team" />
        <WingCapsules activeWing={activeWing} onSelect={setActiveWing} />

        {/* Team Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWing}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {isCore
              ? coreTeam.map((member, idx) => (
                  <CoreCard key={member.name} member={member} index={idx} />
                ))
              : activeMembers.map((member, idx) => (
                  <MemberCard key={member.name} member={member} index={idx} />
                ))}
          </motion.div>
        </AnimatePresence>

        {activeMembers.length === 0 && !isCore && (
          <div className="text-center py-16 text-[var(--color-text-muted)] font-inter text-sm">
            No members found in this wing.
          </div>
        )}

      </div>
    </section>
  );
}
