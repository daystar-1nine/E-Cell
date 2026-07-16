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
    const particleCount = Math.floor(width / 15); // responsive count
    const connectionDistance = 150;

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

      // Draw connections
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
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Constellation Canvas Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <span className="bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-medium text-slate-300 uppercase tracking-[0.2em]">
            St. John College of Engineering and Management
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-xl md:text-2xl font-medium text-white/60 tracking-[0.2em] uppercase mb-4 font-inter">
            IIC's
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold font-inter leading-[0.9] tracking-tighter">
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
          className="mt-10 text-lg md:text-xl text-slate-300/80 max-w-2xl font-light font-outfit"
        >
          Sparking ideas, fueling ambition, and building India's next generation of founders. Join the movement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-14"
        >
          <a
            href="#team"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full overflow-hidden transition-all hover:bg-white/20 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2 font-inter tracking-wide">
              Explore the Vision
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine z-0" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium font-inter">Scroll</span>
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
