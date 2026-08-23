"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight, X, Sparkles, Trophy, CheckCircle2, Phone, User, Award } from "lucide-react";
import { eventsData, Event } from "@/utils/events";

export default function Events() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredEvents = eventsData.filter((e) => e.status === filter);

  return (
    <section id="events" className="relative w-full py-16 sm:py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-5 sm:gap-6 md:gap-8">
          <div>
            <div className="mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
              <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
              <span className="text-[var(--color-primary)] text-label-caps">Events & Initiatives</span>
            </div>
            <h2 className="text-display-md lg:text-display-lg font-bold font-inter text-[var(--color-text-main)]">
              Where ideas meet execution.
            </h2>
          </div>
          
          {/* Tabs */}
          <div className="flex bg-[var(--color-surface)] p-1.5 rounded-lg border border-hairline w-full sm:w-auto shadow-sm">
            {(["upcoming", "past"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-6 sm:px-8 py-2.5 text-xs sm:text-sm font-bold font-inter rounded-md flex-1 sm:flex-none capitalize transition-colors min-h-[40px] cursor-pointer ${
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
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  {tab === "upcoming" ? "Upcoming" : "Past Events"}
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/10 font-bold">
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
                : "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
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
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <span className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {event.status === "upcoming" ? "Registration Open" : "Completed"}
                    </span>
                  </div>

                  {/* Prize Badge if applicable */}
                  {event.prizePool && (
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/40 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                      <Trophy className="w-3.5 h-3.5" />
                      Prize Pool: {event.prizePool}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date & Time Row */}
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--color-text-muted)] font-mono mb-2.5">
                      <div className="flex items-center gap-1.5 text-[var(--color-primary)] font-bold">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.venue && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{event.venue}</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-inter text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors mb-2 leading-snug">
                      {event.title}
                    </h3>

                    {event.tagline && (
                      <p className="text-xs sm:text-sm font-inter text-[var(--color-primary)] font-semibold mb-3">
                        "{event.tagline}"
                      </p>
                    )}

                    {/* Speaker Badge if available */}
                    {event.speaker && (
                      <div className="bg-[var(--color-surface-elevated)] border border-hairline px-3 py-2 rounded-lg text-xs sm:text-sm text-[var(--color-text-main)] font-inter mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                        <span className="font-semibold">{event.speaker}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-inter line-clamp-3 leading-relaxed mb-4">
                      {event.description}
                    </p>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-hairline flex items-center justify-between mt-auto">
                    <span className="text-xs sm:text-sm text-[var(--color-primary)] font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      View Full Details <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-[var(--color-text-muted)]">
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedEvent(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-3 sm:p-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-3xl max-h-[90vh] bg-[var(--color-surface)] border border-hairline rounded-2xl overflow-hidden flex flex-col shadow-2xl relative"
                >
                  {/* Modal Header */}
                  <div className="h-14 bg-[var(--color-surface-elevated)] border-b border-hairline flex items-center justify-between px-5 sm:px-6 shrink-0">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
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

                  {/* Modal Content */}
                  <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 custom-scrollbar overscroll-contain space-y-6 bg-[var(--color-background)]">
                    {/* Poster Image */}
                    <div className="w-full rounded-xl overflow-hidden border border-hairline bg-[var(--color-surface-elevated)] shadow-sm max-h-[380px] flex items-center justify-center">
                      <img
                        src={selectedEvent.imageUrl}
                        alt={selectedEvent.title}
                        className="w-full h-full object-contain max-h-[380px]"
                      />
                    </div>

                    {/* Title & Key Badges */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {selectedEvent.status === "upcoming" ? "Upcoming" : "Past Event"}
                        </span>
                        {selectedEvent.prizePool && (
                          <span className="bg-[var(--color-surface-elevated)] border border-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-mono font-bold px-3 py-1 rounded-full">
                            Prize Pool: {selectedEvent.prizePool}
                          </span>
                        )}
                        {selectedEvent.entryFee && (
                          <span className="bg-[var(--color-surface-elevated)] border border-hairline text-[var(--color-text-muted)] text-xs font-mono px-3 py-1 rounded-full">
                            Entry: {selectedEvent.entryFee}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold font-inter text-[var(--color-text-main)] mb-1">
                        {selectedEvent.title}
                      </h3>
                      {selectedEvent.tagline && (
                        <p className="text-sm font-inter text-[var(--color-primary)] font-semibold mb-4">
                          "{selectedEvent.tagline}"
                        </p>
                      )}

                      {/* Info Grid (Date, Time, Venue) */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[var(--color-surface)] border border-hairline rounded-xl text-xs sm:text-sm font-inter mb-5">
                        <div className="flex items-center gap-2.5">
                          <Calendar className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                          <div>
                            <span className="text-[10px] text-[var(--color-text-muted)] block uppercase font-mono">Date</span>
                            <span className="font-semibold text-[var(--color-text-main)]">{selectedEvent.date}</span>
                          </div>
                        </div>

                        {selectedEvent.time && (
                          <div className="flex items-center gap-2.5">
                            <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                            <div>
                              <span className="text-[10px] text-[var(--color-text-muted)] block uppercase font-mono">Time</span>
                              <span className="font-semibold text-[var(--color-text-main)]">{selectedEvent.time}</span>
                            </div>
                          </div>
                        )}

                        {selectedEvent.venue && (
                          <div className="flex items-center gap-2.5">
                            <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                            <div>
                              <span className="text-[10px] text-[var(--color-text-muted)] block uppercase font-mono">Venue</span>
                              <span className="font-semibold text-[var(--color-text-main)]">{selectedEvent.venue}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Speaker info if available */}
                      {selectedEvent.speaker && (
                        <div className="p-4 bg-[var(--color-surface)] border border-hairline rounded-xl mb-5 flex items-start gap-3">
                          <User className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] text-[var(--color-text-muted)] block uppercase font-mono">Distinguished Speaker</span>
                            <h4 className="text-sm sm:text-base font-bold text-[var(--color-text-main)]">{selectedEvent.speaker}</h4>
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <div className="space-y-2 mb-5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                          Overview
                        </h4>
                        <p className="text-sm sm:text-base text-[var(--color-text-muted)] font-inter leading-relaxed bg-[var(--color-surface)] p-4 rounded-xl border border-hairline">
                          {selectedEvent.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      {selectedEvent.highlights && (
                        <div className="space-y-2.5 mb-5">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                            Highlights & Opportunities
                          </h4>
                          <div className="bg-[var(--color-surface)] p-4 rounded-xl border border-hairline space-y-2">
                            {selectedEvent.highlights.map((hl, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text-muted)] font-inter">
                                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Coordinators */}
                      {selectedEvent.coordinators && (
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                            Student Coordinators
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                            {selectedEvent.coordinators.map((c, i) => (
                              <div key={i} className="p-3 bg-[var(--color-surface)] border border-hairline rounded-lg flex items-center justify-between">
                                <div>
                                  <span className="text-xs font-bold text-[var(--color-text-main)] block">{c.name}</span>
                                  {c.phone && (
                                    <a href={`tel:${c.phone}`} className="text-xs text-[var(--color-primary)] font-mono hover:underline flex items-center gap-1 mt-0.5">
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
                  <div className="p-4 bg-[var(--color-surface-elevated)] border-t border-hairline flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--color-text-muted)]">
                      E-Cell SJCEM • Institution's Innovation Council
                    </span>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="px-5 py-2 bg-[var(--color-primary)] text-[var(--color-text-inverse)] font-bold text-xs sm:text-sm rounded-md hover:bg-[var(--color-primary-hover)] transition-colors cursor-pointer"
                    >
                      Close
                    </button>
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
