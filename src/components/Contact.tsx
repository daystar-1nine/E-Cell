"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Globe, Link as LinkIcon, Heart } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [signalPos, setSignalPos] = useState({ x: 0, y: 0 });

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

    setStatus("sending");
    
    // Simulate network request
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-[100dvh] w-full flex flex-col pt-24 md:pt-32 pb-8 z-10">
      <div className="container mx-auto px-4 md:px-12 flex-1 flex flex-col justify-center">
        
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
              <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
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
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors">
                <LinkIcon className="w-4 h-4" />
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
                  animate={{ opacity: 0, scale: 0.2, y: -800, x: (Math.random() - 0.5) * 200 }}
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

      {/* Footer */}
      <footer className="mt-20 md:mt-32 border-t border-slate-800/50 bg-slate-950/30 backdrop-blur-md w-full relative z-20">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 font-outfit text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Entrepreneurship Cell, SJCEM. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-outfit text-sm">
            Built with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> for the future of India.
          </div>
        </div>
      </footer>
    </section>
  );
}
