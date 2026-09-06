"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";

function HashScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.querySelector(hash);
      if (target) {
        if (lenis) {
          lenis.scrollTo(target as HTMLElement, {
            offset: -80,
            immediate: false,
            duration: 1.0,
          });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Run on initial mount and when DOM settles
    scrollToHash();
    const t1 = setTimeout(scrollToHash, 100);
    const t2 = setTimeout(scrollToHash, 300);
    const t3 = setTimeout(scrollToHash, 600);

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("hashchange", scrollToHash);
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
