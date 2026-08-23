"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("close-blog-modal"));
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-background)]/90 backdrop-blur-md border-b border-hairline py-2.5 sm:py-3 shadow-sm"
          : "bg-transparent py-4 sm:py-5 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-lg sm:text-xl md:text-2xl font-bold font-inter text-[var(--color-text-main)] tracking-tight flex items-center gap-2.5 z-50 relative p-1 -ml-1 group"
        >
          <img
            src="/images/logo.png"
            alt="E-Cell Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
          />
          <div className="flex items-center gap-1">
            <span className="text-[var(--color-primary)] transition-colors duration-300">
              E-Cell
            </span>
            <span className="font-light text-[var(--color-text-main)]">SJCEM</span>
          </div>
        </a>

        {/* Desktop Nav & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <nav className="flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-inverse)] hover:bg-[var(--color-primary)] transition-colors py-1.5 px-3 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="h-4 w-[1px] bg-[var(--color-hairline)] mx-1" />
          <ThemeToggle />
        </div>

        {/* Mobile Header Controls */}
        <div className="lg:hidden flex items-center gap-2 z-50 relative">
          <ThemeToggle />
          <button
            className="text-[var(--color-text-main)] p-2 rounded-md hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-elevated)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[var(--color-background)]/98 backdrop-blur-xl z-40 flex flex-col justify-between items-center h-[100dvh] pt-24 pb-8 px-6 overflow-y-auto overscroll-contain"
          >
            <nav 
              className="flex flex-col items-center gap-3 w-full max-w-sm my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-lg sm:text-xl font-bold font-inter text-[var(--color-text-main)] hover:text-[var(--color-text-inverse)] hover:bg-[var(--color-primary)] transition-colors py-3.5 px-6 w-full text-center rounded-lg border border-transparent hover:border-hairline min-h-[48px] flex items-center justify-center"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="w-full text-center text-xs text-[var(--color-text-muted)] font-mono border-t border-hairline pt-4 mt-auto">
              Entrepreneurship Cell • SJCEM
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
