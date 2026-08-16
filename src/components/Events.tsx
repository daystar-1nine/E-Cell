"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Image as ImageIcon } from "lucide-react";
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
function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div
        className="w-full h-full rounded-lg bg-[var(--color-surface)] border border-hairline overflow-hidden flex flex-col group cursor-pointer hover:border-[var(--color-primary)] transition-colors relative shadow-sm"
      >
        {/* Urgency Badge */}
        {event.status === "upcoming" && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[var(--color-primary)] border border-hairline text-[var(--color-text-inverse)] text-label-caps px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full z-20 flex items-center gap-1.5 shadow-sm text-[10px] sm:text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
            {getDaysAway(event.date)}
          </div>
        )}

        <div className="h-40 sm:h-48 w-full bg-[var(--color-surface-elevated)] relative overflow-hidden flex items-center justify-center border-b border-hairline group-hover:border-[var(--color-primary)] transition-colors">
          {event.imageUrl ? (
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-text-muted)]">
              <ImageIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
              <span className="text-label-caps text-[10px] sm:text-xs">[ Image Placeholder ]</span>
            </div>
          )}
        </div>
        
        <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10 bg-[var(--color-surface)]">
          <div className="flex items-center gap-2 text-[var(--color-primary)] text-xs sm:text-sm font-mono mb-2.5 sm:mb-3">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{event.date}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold font-inter text-[var(--color-text-main)] mb-2 sm:mb-3 group-hover:text-[var(--color-primary)] transition-colors">
            {event.title}
          </h3>
          <p className="text-[var(--color-text-muted)] font-inter text-xs sm:text-sm line-clamp-3 mb-5 sm:mb-6 flex-1 leading-relaxed">
            {event.description}
          </p>
          
          <div className="mt-auto flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs sm:text-sm">
            Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");

  const filteredEvents = eventsData.filter((e) => e.status === filter);

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
          <div className="flex bg-[var(--color-surface)] p-1 rounded-md border border-hairline w-full sm:w-auto">
            {(["upcoming", "past"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold font-inter rounded-md flex-1 sm:flex-none capitalize transition-colors min-h-[40px] ${
                  filter === tab ? "text-[var(--color-text-inverse)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                }`}
              >
                {filter === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[var(--color-primary)] rounded-md"
                    transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 min-h-[350px]">
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="col-span-full flex items-center justify-center h-48 text-[var(--color-text-muted)] font-mono text-sm sm:text-base"
              >
                No {filter} events found.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
