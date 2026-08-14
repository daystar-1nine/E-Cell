"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-ecell" },
  { name: "Blogs & Insights", href: "#blogs-insights" },
  { name: "Team", href: "#team" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Removed scroll-based navBg/navAccent for High-Velocity theme

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-background)] border-b border-hairline py-3" : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold font-inter text-[var(--color-text-main)] tracking-tight flex items-center gap-2 z-50 relative p-2 -ml-2 group">
          <span className="text-[var(--color-primary)] transition-colors duration-300">
            E-Cell
          </span>
          <span className="font-light">SJCEM</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("close-blog-modal"));
                }
              }}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-black hover:bg-[var(--color-primary)] transition-colors py-1.5 px-3 rounded-md"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[var(--color-text-main)] p-3 -mr-3 z-50 relative hover:text-[var(--color-primary)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[var(--color-background)] z-40 flex flex-col justify-center items-center h-[100dvh]"
          >
            <nav 
              className="flex flex-col items-center gap-6 w-full max-w-sm px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("close-blog-modal"));
                    }
                  }}
                  className="text-2xl font-bold font-inter text-[var(--color-text-main)] hover:text-black hover:bg-[var(--color-primary)] transition-colors py-4 px-6 w-full text-center rounded-md"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
