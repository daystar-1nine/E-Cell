"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";

function HashScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = (immediate = false) => {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.querySelector(hash);
      if (target) {
        if (lenis) {
          lenis.scrollTo(target as HTMLElement, {
            offset: -75,
            immediate,
            duration: immediate ? 0 : 0.9,
          });
        } else {
          target.scrollIntoView({ behavior: immediate ? "instant" : "smooth" });
        }
      }
    };

    // Immediate jump on direct deep link load (e.g. #events)
    scrollToHash(true);
    const t1 = setTimeout(() => scrollToHash(true), 60);
    const t2 = setTimeout(() => scrollToHash(true), 250);
    const t3 = setTimeout(() => scrollToHash(false), 600);

    const onHashChange = () => scrollToHash(false);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        syncTouch: false,
      }}
    >
      <HashScrollHandler />
      {children}
    </ReactLenis>
  );
}
