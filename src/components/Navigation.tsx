"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  
  const { scrollYProgress } = useScroll();
  
  // Map scroll progress to the day-night cycle background tint
  const navBg = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.75, 1],
    [
      "rgba(56, 189, 248, 0.2)",  // Dawn - sky tint
      "rgba(255, 255, 255, 0.1)", // Day - light tint
      "rgba(245, 158, 11, 0.3)",  // Golden Hour - amber tint
      "rgba(15, 23, 42, 0.6)",    // Dusk - dark slate tint
      "rgba(2, 6, 23, 0.8)",      // Night - deeper slate
    ]
  );
  
  // Dynamic accent color for hover underlines
  const navAccent = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#f97316", "#0ea5e9", "#eab308", "#ec4899", "#6366f1"] // orange, sky, yellow, pink, indigo
  );

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
    <motion.header
      style={{ backgroundColor: scrolled ? navBg : "transparent" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md py-3 border-b border-white/10 shadow-lg" : "py-5 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold font-inter text-white tracking-wide flex items-center gap-2 z-50 relative p-2 -ml-2 group">
          <motion.span 
            style={{ color: navAccent }}
            className="transition-colors duration-300"
          >
            E-Cell
          </motion.span>
          <span className="font-light">SJCEM</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <motion.span 
                style={{ backgroundColor: navAccent }}
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full rounded-full" 
              />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-3 -mr-3 z-50 relative"
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
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center h-[100dvh]"
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
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold font-outfit text-white hover:text-orange-400 transition-colors py-4 w-full text-center border-b border-white/5 last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
