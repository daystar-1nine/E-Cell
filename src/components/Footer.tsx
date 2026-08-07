"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/60 backdrop-blur-md w-full relative z-20">
      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col gap-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Brand & Socials */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xl font-bold font-inter text-white">E-Cell </span>
              <span className="text-xl font-light font-inter text-slate-300">SJCEM</span>
            </div>
            <p className="text-sm text-slate-400 font-outfit max-w-xs">
              Sparking ideas, fueling ambition, and building India's next generation of founders.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500 hover:bg-pink-600/20 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400 hover:bg-sky-500/20 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-inter font-medium mb-1">Navigation</h4>
              <Link href="#home" className="text-sm text-slate-400 hover:text-white transition-colors font-outfit">Home</Link>
              <Link href="#about-ecell" className="text-sm text-slate-400 hover:text-white transition-colors font-outfit">About Us</Link>
              <Link href="#blogs-insights" className="text-sm text-slate-400 hover:text-white transition-colors font-outfit">Blogs & Insights</Link>
              <Link href="#team" className="text-sm text-slate-400 hover:text-white transition-colors font-outfit">Team</Link>
              <Link href="#events" className="text-sm text-slate-400 hover:text-white transition-colors font-outfit">Events</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-inter font-medium mb-1">Legal</h4>
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-outfit">Privacy Policy</Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-outfit">Terms of Service</Link>
              <Link href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors font-outfit">Contact</Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 font-outfit text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Entrepreneurship Cell, SJCEM. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-outfit text-sm">
            Built with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> for the future of India.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
