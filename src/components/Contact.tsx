"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail } from "lucide-react";

// Brand Icons
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [signalPos, setSignalPos] = useState({ x: 0, y: 0 });
  const [signalRandomX, setSignalRandomX] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get button position for the signal start point
    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn) {
      const rect = submitBtn.getBoundingClientRect();
      // Relative to the section
      setSignalPos({ 
        x: rect.left + rect.width / 2, 
        y: rect.top 
      });
    }

    setSignalRandomX((Math.random() - 0.5) * 200);
    setStatus("sending");
    
    // Simulate network request
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-[100dvh] w-full flex flex-col py-24 lg:py-32 z-10">
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        
        <div className="text-center mb-10 md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-indigo-500"></div>
            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm dynamic-text-shadow">Contact Us</span>
            <div className="h-[2px] w-12 bg-indigo-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-inter text-white dynamic-text-shadow">
            Send a Signal.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto w-full">
          
          {/* Info Side */}
          <div className="flex flex-col justify-center space-y-8 md:space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-inter">Get in touch</h3>
              <p className="text-slate-400 font-outfit text-base md:text-lg">
                Whether you have an idea, want to partner, or just want to say hi, we're always listening to the stars.
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="mailto:ecell@sjcem.edu.in" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center group-hover:bg-indigo-600 transition-colors border border-slate-700 group-hover:border-indigo-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="font-outfit text-lg">ecell@sjcem.edu.in</div>
              </a>
              
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="font-outfit text-lg">
                  SJCEM Campus, Palghar, Maharashtra
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex gap-4">
              {/* TODO: Add real social media URLs */}
              <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-400 transition-all hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400 font-outfit">Your Name</label>
                  <input required id="name" type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-outfit" placeholder="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400 font-outfit">Email Address</label>
                  <input required id="email" type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-outfit" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400 font-outfit">Message</label>
                  <textarea required id="message" rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-outfit resize-none custom-scrollbar" placeholder="How can we help you?" />
                </div>

                <button 
                  id="submit-btn"
                  disabled={status !== "idle"}
                  type="submit" 
                  className="mt-2 w-full py-4 bg-white text-indigo-950 font-bold font-inter rounded-xl hover:bg-indigo-50 hover:dynamic-glow transition-all flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {status === "idle" && (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                  {status === "sending" && <span>Transmitting...</span>}
                  {status === "sent" && <span>Signal Received!</span>}
                  
                  {/* Hover shine */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent group-hover:animate-shine z-0" />
                </button>
              </form>
            </div>

            {/* Signal Animation */}
            <AnimatePresence>
              {status === "sending" && (
                <motion.div
                  initial={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  animate={{ opacity: 0, scale: 0.2, y: -800, x: signalRandomX }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeIn" }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_30px_10px_rgba(255,255,255,0.8)] z-0 pointer-events-none"
                  style={{
                    filter: "blur(1px)"
                  }}
                >
                  {/* Trail */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-transparent to-white/80" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  );
}
