import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use native hardware-accelerated inertia scrolling on mobile/touch devices for zero touch latency
    const isTouchDevice =
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 768);

    if (isTouchDevice) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);
    lenis.scrollTo(0, { immediate: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
