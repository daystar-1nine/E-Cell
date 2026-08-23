"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight, X, Sparkles, Trophy, CheckCircle2, Phone, User, Award } from "lucide-react";
import { useLenis } from "lenis/react";
import { eventsData, Event } from "@/utils/events";

export default function Events() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [mounted, setMounted] = useState(false);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Control body scroll & Lenis when modal opens/closes
  useEffect(() => {
    if (selectedEvent) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [selectedEvent, lenis]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredEvents = eventsData.filter((e) => e.status === filter);

  return (
    <section id="events" className="relative w-full py-12 sm:py-20 lg:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-10 md:mb-16 gap-4 sm:gap-6 md:gap-8">
          <div>
            <div className="mb-2 sm:mb-4 flex items-center gap-3 sm:gap-4">
              <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
              <span className="text-[var(--color-primary)] text-label-caps">Events & Initiatives</span>
            </div>
            <h2 className="text-display-md lg:text-display-lg font-bold font-inter text-[var(--color-text-main)]">
              Where ideas meet execution.
            </h2>
          </div>
          
          {/* Tabs */}
          <div className="flex bg-[var(--color-surface)] p-1 rounded-lg border border-hairline w-full sm:w-auto shadow-sm">
            {(["upcoming", "past"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-5 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-bold font-inter rounded-md flex-1 sm:flex-none capitalize transition-colors min-h-[38px] sm:min-h-[40px] cursor-pointer ${
                  filter === tab ? "text-[var(--color-text-inverse)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                }`}
              >
                {filter === tab && (
                  <motion.div
                    layoutId="activeEventTab"
                    className="absolute inset-0 bg-[var(--color-primary)] rounded-md shadow-sm"
                    transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 justify-center">
                  {tab === "upcoming" ? "Upcoming" : "Past Events"}
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10 font-bold">
                    {eventsData.filter((e) => e.status === tab).length}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Events Cards */}
        <div className="w-full">
          <div
            className={
              filter === "upcoming"
                ? "max-w-3xl mx-auto"
                : "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto"
            }
          >
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group relative bg-[var(--color-surface)] hover:bg-[var(--color-surface-elevated)] border border-hairline hover:border-[var(--color-primary)] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col cursor-pointer"
              >
                {/* Poster Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--color-surface-elevated)] border-b border-hairline">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10">
                    <span className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-md">
                      {event.status === "upcoming" ? "Registration Open" : "Completed"}
                    </span>
                  </div>

                  {/* Prize Badge if applicable */}
                  {event.prizePool && (
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-black/80 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/40 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                      <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Prize Pool: {event.prizePool}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6 md:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date & Time Row */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[var(--color-text-muted)] font-mono mb-2">
                      <div className="flex items-center gap-1 sm:gap-1.5 text-[var(--color-primary)] font-bold">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{event.date}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.venue && (
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{event.venue}</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-inter text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors mb-1.5 sm:mb-2 leading-snug">
                      {event.title}
                    </h3>

                    {event.tagline && (
                      <p className="text-xs sm:text-sm font-inter text-[var(--color-primary)] font-semibold mb-2 sm:mb-3">
                        "{event.tagline}"
                      </p>
                    )}

                    {/* Speaker Badge if available */}
                    {event.speaker && (
                      <div className="bg-[var(--color-surface-elevated)] border border-hairline px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-[var(--color-text-main)] font-inter mb-2.5 sm:mb-3 flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)] shrink-0" />
                        <span className="font-semibold">{event.speaker}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-inter line-clamp-3 leading-relaxed mb-3 sm:mb-4">
                      {event.description}
                    </p>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-3 sm:pt-4 border-t border-hairline flex items-center justify-between mt-auto">
                    <span className="text-xs sm:text-sm text-[var(--color-primary)] font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      View Full Details <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono text-[var(--color-text-muted)]">
                      Tap to open
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rich Event Details Spotlight Modal rendered via React Portal directly into body */}
        {mounted && createPortal(
          <AnimatePresence>
            {selectedEvent && (
              <div
                data-lenis-prevent="true"
                data-lenis-prevent-wheel="true"
                data-lenis-prevent-touch="true"
                onWheel={(e) => e.stopPropagation()}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-4 md:p-6"
              >
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedEvent(null)}
                  className="fixed inset-0 bg-black/85 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-2xl lg:max-w-3xl max-h-[92dvh] sm:max-h-[88vh] bg-[var(--color-surface)] border border-hairline rounded-2xl overflow-hidden flex flex-col shadow-2xl z-10"
                >
                  {/* Modal Header */}
                  <div className="h-12 sm:h-14 bg-[var(--color-surface-elevated)] border-b border-hairline flex items-center justify-between px-4 sm:px-6 shrink-0 z-20">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)]" />
                      <span className="text-xs sm:text-sm font-mono text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                        Event Details
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="p-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-surface)] rounded-md transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Modal Scrollable Body */}
                  <div 
                    ref={modalScrollRef}
                    data-lenis-prevent="true"
                    data-lenis-prevent-wheel="true"
                    data-lenis-prevent-touch="true"
                    onWheel={(e) => e.stopPropagation()}
                    className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 custom-scrollbar space-y-4 sm:space-y-6 bg-[var(--color-background)]"
                    style={{ 
                      WebkitOverflowScrolling: "touch", 
                      overscrollBehavior: "contain" 
                    }}
                  >
                    {/* Poster Image */}
                    <div className="w-full rounded-xl overflow-hidden border border-hairline bg-[var(--color-surface-elevated)] shadow-sm max-h-[220px] sm:max-h-[320px] md:max-h-[380px] flex items-center justify-center">
                      <img
                        src={selectedEvent.imageUrl}
                        alt={selectedEvent.title}
                        className="w-full h-full object-contain max-h-[220px] sm:max-h-[320px] md:max-h-[380px]"
                      />
                    </div>

                    {/* Title & Key Badges */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                        <span className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                          {selectedEvent.status === "upcoming" ? "Upcoming" : "Past Event"}
                        </span>
                        {selectedEvent.prizePool && (
                          <span className="bg-[var(--color-surface-elevated)] border border-[var(--color-primary)]/40 text-[var(--color-primary)] text-[10px] sm:text-xs font-mono font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                            Prize Pool: {selectedEvent.prizePool}
                          </span>
                        )}
                        {selectedEvent.entryFee && (
                          <span className="bg-[var(--color-surface-elevated)] border border-hairline text-[var(--color-text-muted)] text-[10px] sm:text-xs font-mono px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                            Entry: {selectedEvent.entryFee}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-inter text-[var(--color-text-main)] mb-1 leading-snug">
                        {selectedEvent.title}
                      </h3>
                      {selectedEvent.tagline && (
                        <p className="text-xs sm:text-sm font-inter text-[var(--color-primary)] font-semibold mb-3 sm:mb-4">
                          "{selectedEvent.tagline}"
                        </p>
                      )}

                      {/* Info Grid (Date, Time, Venue) */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 bg-[var(--color-surface)] border border-hairline rounded-xl text-xs sm:text-sm font-inter mb-4 sm:mb-5">
                        <div className="flex items-center gap-2 sm:gap-2.5">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)] shrink-0" />
                          <div>
                            <span className="text-[10px] text-[var(--color-text-muted)] block uppercase font-mono">Date</span>
                            <span className="font-semibold text-[var(--color-text-main)]">{selectedEvent.date}</span>
                          </div>
                        </div>

                        {selectedEvent.time && (
                          <div className="flex items-center gap-2 sm:gap-2.5">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)] shrink-0" />
                            <div>
                              <span className="text-[10px] text-[var(--color-text-muted)] block uppercase font-mono">Time</span>
                              <span className="font-semibold text-[var(--color-text-main)]">{selectedEvent.time}</span>
                            </div>
                          </div>
                        )}

                        {selectedEvent.venue && (
                          <div className="flex items-center gap-2 sm:gap-2.5">
                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)] shrink-0" />
                            <div>
                              <span className="text-[10px] text-[var(--color-text-muted)] block uppercase font-mono">Venue</span>
                              <span className="font-semibold text-[var(--color-text-main)]">{selectedEvent.venue}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Speaker info if available */}
                      {selectedEvent.speaker && (
                        <div className="p-3 sm:p-4 bg-[var(--color-surface)] border border-hairline rounded-xl mb-4 sm:mb-5 flex items-start gap-2.5 sm:gap-3">
                          <User className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] text-[var(--color-text-muted)] block uppercase font-mono">Distinguished Speaker</span>
                            <h4 className="text-xs sm:text-base font-bold text-[var(--color-text-main)]">{selectedEvent.speaker}</h4>
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                        <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                          Overview
                        </h4>
                        <p className="text-xs sm:text-sm md:text-base text-[var(--color-text-muted)] font-inter leading-relaxed bg-[var(--color-surface)] p-3 sm:p-4 rounded-xl border border-hairline">
                          {selectedEvent.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      {selectedEvent.highlights && (
                        <div className="space-y-2 mb-4 sm:mb-5">
                          <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                            Highlights & Opportunities
                          </h4>
                          <div className="bg-[var(--color-surface)] p-3 sm:p-4 rounded-xl border border-hairline space-y-2">
                            {selectedEvent.highlights.map((hl, i) => (
                              <div key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[var(--color-text-muted)] font-inter">
                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Coordinators */}
                      {selectedEvent.coordinators && (
                        <div className="space-y-2">
                          <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                            Student Coordinators
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            {selectedEvent.coordinators.map((c, i) => (
                              <div key={i} className="p-2.5 sm:p-3 bg-[var(--color-surface)] border border-hairline rounded-lg flex items-center justify-between">
                                <div>
                                  <span className="text-xs font-bold text-[var(--color-text-main)] block">{c.name}</span>
                                  {c.phone && (
                                    <a href={`tel:${c.phone}`} className="text-xs text-[var(--color-primary)] font-mono hover:underline flex items-center gap-1 mt-0.5 min-h-[28px] items-center">
                                      <Phone className="w-3 h-3" />
                                      {c.phone}
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="p-3 sm:p-4 bg-[var(--color-surface-elevated)] border-t border-hairline flex items-center justify-between shrink-0">
                    <span className="text-[10px] sm:text-xs font-mono text-[var(--color-text-muted)] truncate mr-2">
                      E-Cell SJCEM
                    </span>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="px-4 sm:px-5 py-1.5 sm:py-2 bg-[var(--color-primary)] text-[var(--color-text-inverse)] font-bold text-xs sm:text-sm rounded-md hover:bg-[var(--color-primary-hover)] transition-colors cursor-pointer min-h-[36px] flex items-center justify-center shrink-0"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}

      </div>
    </section>
  );
}
