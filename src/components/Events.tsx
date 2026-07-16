"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Image as ImageIcon } from "lucide-react";
import { eventsData, Event } from "@/utils/events";

// 3D Tilt Card Component
function EventCard({ event }: { event: Event }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full rounded-2xl bg-slate-900/40 backdrop-blur-md border border-pink-500/20 shadow-xl overflow-hidden flex flex-col group cursor-pointer hover:dynamic-glow transition-shadow duration-300"
      >
        <div className="h-48 w-full bg-slate-800 relative overflow-hidden flex items-center justify-center">
          {event.imageUrl ? (
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-pink-900/50 flex flex-col items-center justify-center text-pink-300/50">
              <ImageIcon className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-xs uppercase tracking-widest">[ Image Placeholder ]</span>
            </div>
          )}
          {/* Overlay gradient for dusk theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-pink-300 text-sm font-outfit mb-3">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <h3 className="text-xl font-bold font-inter text-white mb-3 group-hover:text-pink-200 transition-colors">
            {event.title}
          </h3>
          <p className="text-slate-300 font-outfit text-sm line-clamp-3 mb-6 flex-1">
            {event.description}
          </p>
          
          <div className="mt-auto flex items-center gap-2 text-pink-400 font-semibold text-sm hover:text-pink-300 transition-colors">
            Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Events() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");

  const filteredEvents = eventsData.filter((e) => e.status === filter);

  return (
    <section id="events" className="relative min-h-screen w-full flex items-center py-32 z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-pink-500"></div>
              <span className="text-pink-400 font-semibold tracking-wider uppercase text-sm dynamic-text-shadow">Events</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-inter text-white dynamic-text-shadow">
              Where ideas meet execution.
            </h2>
          </div>
          
          {/* Tabs */}
          <div className="flex bg-slate-800/50 backdrop-blur-md p-1 rounded-full border border-slate-700 w-full md:w-auto shadow-lg">
            {(["upcoming", "past"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-full flex-1 md:flex-none capitalize transition-colors ${
                  filter === tab ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {filter === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-pink-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[450px]">
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
                className="col-span-full flex items-center justify-center h-48 text-slate-400 font-outfit"
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
