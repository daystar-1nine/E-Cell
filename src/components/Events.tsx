"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Image as ImageIcon, X, MapPin, Sparkles } from "lucide-react";
import { eventsData, Event } from "@/utils/events";

// Helper to parse date string and get relative days
const getDaysAway = (dateStr: string) => {
  try {
    const firstDatePart = dateStr.split("-")[0].trim();
    const yearMatch = dateStr.match(/\d{4}/);
    const year = yearMatch ? yearMatch[0] : new Date().getFullYear().toString();
    
    const parseable = firstDatePart.includes(year) ? firstDatePart : `${firstDatePart}, ${year}`;
    const d = new Date(parseable);
    
    if (!isNaN(d.getTime())) {
      const diff = Math.ceil((d.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
      if (diff > 0) return `In ${diff} Days`;
      if (diff === 0) return "Today!";
      return "Happening Now";
    }
  } catch(e) {}
  return "Coming Soon";
};

// Flat Rigid Card Component
function EventCard({ event, onSelect }: { event: Event; onSelect: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="h-full"
      onClick={onSelect}
    >
      <div
        className="w-full h-full rounded-xl bg-[var(--color-surface)] border border-hairline overflow-hidden flex flex-col group cursor-pointer hover:border-[var(--color-primary)] transition-all duration-300 relative shadow-sm hover:shadow-md"
      >
        {/* Urgency Badge */}
        {event.status === "upcoming" && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[var(--color-primary)] border border-hairline text-[var(--color-text-inverse)] text-label-caps px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full z-20 flex items-center gap-1.5 shadow-md text-[10px] sm:text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
            {getDaysAway(event.date)}
          </div>
        )}

        <div className="h-48 sm:h-56 w-full bg-[var(--color-surface-elevated)] relative overflow-hidden flex items-center justify-center border-b border-hairline group-hover:border-[var(--color-primary)] transition-colors">
          {event.imageUrl ? (
            <img 
              src={event.imageUrl} 
              alt={event.title} 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-text-muted)]">
              <ImageIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
              <span className="text-label-caps text-[10px] sm:text-xs">[ Image Placeholder ]</span>
            </div>
          )}
        </div>
        
        <div className="p-5 sm:p-6 flex-1 flex flex-col relative z-10 bg-[var(--color-surface)]">
          <div className="flex items-center gap-2 text-[var(--color-primary)] text-xs sm:text-sm font-mono mb-2.5">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-semibold">{event.date}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold font-inter text-[var(--color-text-main)] mb-2.5 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {event.title}
          </h3>
          <p className="text-[var(--color-text-muted)] font-inter text-xs sm:text-sm line-clamp-3 mb-5 flex-1 leading-relaxed">
            {event.description}
          </p>
          
          <div className="mt-auto flex items-center gap-2 text-[var(--color-primary)] font-bold text-xs sm:text-sm pt-3 border-t border-hairline">
            View Event Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = eventsData.filter((e) => e.status === filter);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when event modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

  return (
    <section id="events" className="relative min-h-[100dvh] w-full flex items-center py-16 sm:py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-5 sm:gap-6 md:gap-8">
          <div>
            <div className="mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
              <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
              <span className="text-[var(--color-primary)] text-label-caps">Events</span>
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
                <span className="relative z-10 flex items-center gap-1.5 justify-center">
                  {tab === "upcoming" ? "Upcoming" : "Past Events"}
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10">
                    {eventsData.filter((e) => e.status === tab).length}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[350px]">
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} onSelect={() => setSelectedEvent(event)} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="col-span-full flex items-center justify-center h-48 text-[var(--color-text-muted)] font-mono text-sm sm:text-base bg-[var(--color-surface)] border border-hairline rounded-xl"
              >
                No {filter} events found.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Event Details Fullscreen Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl max-h-[90vh] bg-[var(--color-surface)] border border-hairline rounded-2xl overflow-hidden flex flex-col shadow-2xl relative"
              >
                {/* Modal Header */}
                <div className="h-14 bg-[var(--color-surface-elevated)] border-b border-hairline flex items-center justify-between px-5 shrink-0">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                    <span className="text-xs sm:text-sm font-mono text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                      Event Spotlight
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

                {/* Modal Body */}
                <div className="flex-1 overflow-y-auto p-5 sm:p-7 custom-scrollbar overscroll-contain space-y-5 bg-[var(--color-background)]">
                  {/* Poster Image */}
                  {selectedEvent.imageUrl && (
                    <div className="w-full rounded-xl overflow-hidden border border-hairline bg-[var(--color-surface-elevated)] shadow-sm max-h-[380px] flex items-center justify-center">
                      <img
                        src={selectedEvent.imageUrl}
                        alt={selectedEvent.title}
                        className="w-full h-full object-contain max-h-[380px]"
                      />
                    </div>
                  )}

                  {/* Title & Metadata */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {selectedEvent.status}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[var(--color-primary)] font-mono font-semibold">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] font-inter">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        <span>MMS Hall, SJCEM</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-inter text-[var(--color-text-main)] mb-3">
                      {selectedEvent.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[var(--color-text-muted)] font-inter leading-relaxed bg-[var(--color-surface)] p-4 rounded-xl border border-hairline">
                      {selectedEvent.description}
                    </p>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-[var(--color-surface-elevated)] border-t border-hairline flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--color-text-muted)]">
                    E-Cell SJCEM
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
        </AnimatePresence>

      </div>
    </section>
  );
}
