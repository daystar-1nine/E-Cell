"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Constellation network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number, y: number, vx: number, vy: number, radius: number }[] = [];
    const particleCount = Math.floor(width / (width < 768 ? 30 : 15)); // fewer particles on mobile
    const connectionDistance = width < 768 ? 100 : 150;

    let mouseX = width / 2;
    let mouseY = height / 2;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update & Draw particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        // Slight parallax towards mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          p.x += dx * 0.005;
          p.y += dy * 0.005;
        } else {
          p.x += p.vx;
          p.y += p.vy;
        }

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
      }

      // Draw connections - Skip connections on mobile for performance if needed
      if (width >= 768) {
        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              const opacity = 1 - dist / connectionDistance;
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-40 pb-16">
      {/* Constellation Canvas Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 md:mb-8 inline-block"
        >
          <span className="bg-white/5 border border-white/10 backdrop-blur-md px-3 md:px-5 py-2 rounded-full text-[10px] md:text-xs font-medium text-slate-300 uppercase tracking-[0.1em] md:tracking-[0.2em]">
            St. John College of Engineering and Management
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full"
        >
          <span className="text-sm md:text-xl font-medium text-amber-200/80 tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 md:mb-4 font-inter">
            Institution's Innovation Council
          </span>
          <h1 className="text-[3.5rem] leading-[1.1] md:text-7xl lg:text-[7.5rem] font-extrabold font-inter md:leading-[1] tracking-tighter w-full max-w-full overflow-hidden">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              Entrepreneurship
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-500 pr-4">
              Cell
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 text-base md:text-xl text-slate-300 max-w-2xl font-light font-outfit"
        >
          Transforming student ideas into real-world startups through dedicated mentorship, intensive ideation, and comprehensive ecosystem support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-10 md:mt-14"
        >
          <a
            href="#events"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:bg-orange-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2 font-inter tracking-wide text-sm md:text-base">
              See Upcoming Events
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine z-0" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium font-inter">Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
