"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-[var(--color-surface)] w-full relative z-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 flex flex-col gap-6 sm:gap-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Brand & Socials */}
          <div className="flex flex-col gap-3 sm:gap-4 max-w-sm">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo.png"
                alt="E-Cell Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              />
              <div>
                <span className="text-lg sm:text-xl font-bold font-inter text-[var(--color-text-main)]">E-Cell </span>
                <span className="text-lg sm:text-xl font-light font-inter text-[var(--color-text-muted)]">SJCEM</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-mono leading-relaxed">
              Sparking ideas, fueling ambition, and building India's next generation of founders.
            </p>
            
            <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
              <a 
                href="https://www.instagram.com/ecell_sjcem?igsi=a3B4NDFsOWhhajZ5" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[var(--color-background)] border border-hairline flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/ecell-sjcem?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[var(--color-background)] border border-hairline flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-16 w-full sm:w-auto">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h4 className="text-[var(--color-text-main)] font-inter font-semibold text-xs sm:text-sm uppercase tracking-wider mb-0.5">Navigation</h4>
              <Link href="#home" className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors font-mono py-0.5">Home</Link>
              <Link href="#about-ecell" className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors font-mono py-0.5">About Us</Link>
              <Link href="#blogs-insights" className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors font-mono py-0.5">Blogs & Insights</Link>
              <Link href="#team" className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors font-mono py-0.5">Team</Link>
              <Link href="#events" className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors font-mono py-0.5">Events</Link>
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h4 className="text-[var(--color-text-main)] font-inter font-semibold text-xs sm:text-sm uppercase tracking-wider mb-0.5">Legal</h4>
              <Link href="#" className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors font-mono py-0.5">Privacy Policy</Link>
              <Link href="#" className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors font-mono py-0.5">Terms of Service</Link>
              <Link href="#contact" className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors font-mono py-0.5">Contact</Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="text-[var(--color-text-muted)] font-mono text-[11px] sm:text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Entrepreneurship Cell, SJCEM. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[var(--color-text-muted)] font-mono text-[11px] sm:text-xs md:text-sm">
            Built with <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)] fill-[var(--color-primary)]" /> for the future of India.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
