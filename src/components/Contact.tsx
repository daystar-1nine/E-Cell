"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

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

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate network request
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-[100dvh] w-full flex flex-col py-16 sm:py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex-1 flex flex-col justify-center">
        
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="mb-3 sm:mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
            <span className="text-[var(--color-primary)] text-label-caps">Contact Us</span>
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
          </div>
          <h2 className="text-display-md lg:text-display-lg font-bold font-inter text-[var(--color-text-main)]">
            Send a Signal.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 max-w-5xl mx-auto w-full">
          
          {/* Info Side */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 md:space-y-10">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-main)] mb-3 sm:mb-4 font-inter">Get in touch</h3>
              <p className="text-[var(--color-text-muted)] font-inter text-sm sm:text-base md:text-lg leading-relaxed">
                Whether you have an idea, want to partner, or just want to say hi, we're always listening to the stars.
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <a href="mailto:edcell@sjcem.edu.in" className="flex items-center gap-3 sm:gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-[var(--color-surface)] flex items-center justify-center transition-colors border border-hairline group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs sm:text-sm md:text-base truncate">edcell@sjcem.edu.in</div>
              </a>

              <a href="tel:+917218757424" className="flex items-center gap-3 sm:gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-[var(--color-surface)] flex items-center justify-center transition-colors border border-hairline group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs sm:text-sm md:text-base truncate">+91 721 875 7424 (President)</div>
              </a>
              
              <div className="flex items-center gap-3 sm:gap-4 text-[var(--color-text-muted)] group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-[var(--color-surface)] flex items-center justify-center border border-hairline shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div className="font-inter text-xs sm:text-sm md:text-base">
                  SJCEM Campus, Palghar, Maharashtra
                </div>
              </div>
            </div>

            <div className="pt-5 sm:pt-6 border-t border-hairline flex gap-3 sm:gap-4">
              <a 
                href="https://www.instagram.com/ecell_sjcem?igsi=a3B4NDFsOWhhajZ5" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-[var(--color-surface)] border border-hairline flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ecell-sjcem?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-[var(--color-surface)] border border-hairline flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="bg-[var(--color-surface)] border border-hairline rounded-lg p-5 sm:p-7 md:p-8 relative z-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 flex flex-col">
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="name" className="text-label-caps text-[var(--color-text-muted)] text-[10px] sm:text-xs">Your Name</label>
                  <input required id="name" type="text" className="w-full bg-[var(--color-surface)] border-b border-hairline-strong px-0 py-2.5 sm:py-3 text-[var(--color-text-main)] text-base focus:outline-none focus:border-[var(--color-primary)] transition-colors font-inter rounded-none placeholder:text-[var(--color-text-muted)]/60" placeholder="John Doe" />
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="email" className="text-label-caps text-[var(--color-text-muted)] text-[10px] sm:text-xs">Email Address</label>
                  <input required id="email" type="email" className="w-full bg-[var(--color-surface)] border-b border-hairline-strong px-0 py-2.5 sm:py-3 text-[var(--color-text-main)] text-base focus:outline-none focus:border-[var(--color-primary)] transition-colors font-inter rounded-none placeholder:text-[var(--color-text-muted)]/60" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="message" className="text-label-caps text-[var(--color-text-muted)] text-[10px] sm:text-xs">Message</label>
                  <textarea required id="message" rows={4} className="w-full bg-[var(--color-surface)] border border-hairline-strong rounded-md px-3.5 sm:px-4 py-2.5 sm:py-3 text-[var(--color-text-main)] text-base focus:outline-none focus:border-[var(--color-primary)] transition-colors font-inter resize-none custom-scrollbar mt-1 placeholder:text-[var(--color-text-muted)]/60" placeholder="How can we help you?" />
                </div>

                <button 
                  id="submit-btn"
                  disabled={status !== "idle"}
                  type="submit" 
                  className="mt-2 w-full py-3.5 sm:py-4 bg-[var(--color-primary)] text-[var(--color-text-inverse)] font-bold font-inter text-sm sm:text-base rounded-md hover:bg-[var(--color-primary-hover)] transition-colors flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed min-h-[48px]"
                >
                  {status === "idle" && (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {status === "sending" && <span>Transmitting...</span>}
                  {status === "sent" && <span>Signal Received!</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
