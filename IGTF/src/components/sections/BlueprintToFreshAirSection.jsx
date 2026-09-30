import React, { useEffect, useRef } from 'react';
import { getAssetUrl } from '../../utils/assetHelper';

const TOTAL_FRAMES = 140; // frame-000.webp through frame-139.webp (1280x720 HD @ 20fps)

export default function BlueprintToFreshAirSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const decodedFramesRef = useRef(new Array(TOTAL_FRAMES).fill(null));
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const lastDrawnIndexRef = useRef(-1);
  const rafIdRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    const decoded = decodedFramesRef.current;

    // Draw a single 100% pre-decoded HD frame (zero alpha-blending blur, zero decode flicker)
    const drawExactFrame = (index) => {
      const canvas = canvasRef.current;
      if (!canvas) return false;

      const targetIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index)));

      // Find exact pre-decoded frame, or closest already-decoded neighbor
      let actualIdx = -1;
      if (decoded[targetIdx]) {
        actualIdx = targetIdx;
      } else {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          if (targetIdx - offset >= 0 && decoded[targetIdx - offset]) {
            actualIdx = targetIdx - offset;
            break;
          }
          if (targetIdx + offset < TOTAL_FRAMES && decoded[targetIdx + offset]) {
            actualIdx = targetIdx + offset;
            break;
          }
        }
      }

      if (actualIdx === -1 || actualIdx === lastDrawnIndexRef.current) {
        return false;
      }

      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return false;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.globalAlpha = 1;
      ctx.drawImage(decoded[actualIdx], 0, 0, canvas.width, canvas.height);

      lastDrawnIndexRef.current = actualIdx;
      return true;
    };

    // Preload and GPU-decode all 140 HD frames so drawImage never stutters or flickers
    const loadFrame = (i) => {
      const img = new Image();
      const num = String(i).padStart(3, '0');
      img.src = getAssetUrl(`/images/blueprint-scroll/frame-${num}.webp`);

      const markReady = () => {
        if (!mounted) return;
        decoded[i] = img;
        if (i === 0 && lastDrawnIndexRef.current === -1) {
          drawExactFrame(0);
        } else if (Math.round(currentFrameRef.current) === i) {
          drawExactFrame(i);
        }
      };

      img.onload = () => {
        if (!mounted) return;
        if (typeof img.decode === 'function') {
          img.decode().then(markReady).catch(markReady);
        } else {
          markReady();
        }
      };
    };

    // Load keyframe stride first (0, 4, 8...) for instant scrubbing, then fill all intermediate frames
    for (let i = 0; i < TOTAL_FRAMES; i += 4) {
      loadFrame(i);
    }
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i % 4 !== 0) loadFrame(i);
    }

    // Smooth damped frame interpolation loop for 60fps cinema scrubbing
    const tick = () => {
      if (!mounted) return;
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.04) {
        currentFrameRef.current += diff * 0.24;
        drawExactFrame(currentFrameRef.current);
        rafIdRef.current = window.requestAnimationFrame(tick);
      } else {
        currentFrameRef.current = targetFrameRef.current;
        drawExactFrame(currentFrameRef.current);
        rafIdRef.current = null;
      }
    };

    const startTick = () => {
      if (!rafIdRef.current) {
        rafIdRef.current = window.requestAnimationFrame(tick);
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
      startTick();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      mounted = false;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="blueprint-to-fresh-air"
      className="relative w-full h-[420vh] bg-[#0b1015] select-none"
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#0b1015] flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="w-full h-full object-contain sm:object-cover block"
        />
      </div>
    </section>
  );
}
