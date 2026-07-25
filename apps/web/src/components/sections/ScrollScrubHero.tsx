import { ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* -------------------------- Videos -------------------------- */

const DESKTOP_VIDEOS = [
  "/media/Video- (3).webm",
  "/media/Video- (2).webm",
  "/media/Video- (1).webm",
];

const MOBILE_VIDEOS = [
  "/media/VideoPhone- (1).webm",
  "/media/Video- (2).webm",
  "/media/Video- (3).webm",
];

/* -------------------------- Taglines -------------------------- */

const TAGLINES = [
  "Air, made intelligent.",
  "Technology that lets spaces breathe.",
  "A healthier future, engineered.",
];

export default function ScrollScrubHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [taglineIndex, setTaglineIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  const currentVideos = isMobile ? MOBILE_VIDEOS : DESKTOP_VIDEOS;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65],
    [48, 18, 0]
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6],
    [0, 0.9, 1]
  );

  const planeX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-120, 0, 120]
  );

  const planeY = useTransform(scrollYProgress, [0, 1], [40, -12]);

  const planeRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-18, 4, 18]
  );

  const planeOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    [0, 0.8, 1]
  );

  /* -------------------------- Tagline Loop -------------------------- */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  /* -------------------------- Mobile/Desktop Detection -------------------------- */

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVideoIndex(0);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------------------------- Reload Video -------------------------- */

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();

      videoRef.current
        .play()
        .catch(() => {});
    }
  }, [videoIndex, isMobile]);

  /* -------------------------- Play Next Video -------------------------- */

  const handleVideoEnd = () => {
    setVideoIndex((prev) => (prev + 1) % currentVideos.length);
  };

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-screen overflow-hidden bg-surface"
    >
      {/* -------------------------- Video -------------------------- */}

      <AnimatePresence mode="wait">
        <motion.video
          key={`${isMobile}-${videoIndex}`}
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={handleVideoEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          aria-label="IntelliGreen product demonstration"
          className={`absolute inset-0 -z-20 h-full w-full ${
            isMobile
              ? "object-cover object-center"
              : "object-cover object-center"
          }`}
        >
          <source
            src={currentVideos[videoIndex]}
            type="video/mp4"
          />
        </motion.video>
      </AnimatePresence>

      {/* Overlay */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-surface/30 via-surface/10 to-surface/90" />

      {/* -------------------------- Content -------------------------- */}

      <div className="mx-auto flex min-h-184 w-full max-w-5xl flex-col justify-end px-(--container-x) pb-10 pt-28 sm:min-h-screen sm:pb-14">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:tracking-[0.35em]">
            IntelliGreen Technologies
          </p>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={TAGLINES[taglineIndex]}
                initial={{
                  opacity: 0,
                  y: 28,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -18,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  y: titleY,
                  opacity: titleOpacity,
                }}
                className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                {TAGLINES[taglineIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Future Card Section */}

          {/* 
          <motion.div
            style={{
              x: planeX,
              y: planeY,
              rotate: planeRotate,
              opacity: planeOpacity,
            }}
            className="mt-16 max-w-md"
          >
            ...
          </motion.div>
          */}

          <motion.a
            href="#products"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-2 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:text-accent"
          >
            Explore the system <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}


















// import { ArrowRight } from "lucide-react";
// import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const HERO_VIDEO = "/media/intelligreen-product2.mp4";
// const TAGLINES = [
//   "Air, made intelligent.",
//   "Technology that lets spaces breathe.",
//   "A healthier future, engineered.",
// ];

// export default function ScrollScrubHero() {
//   const heroRef = useRef<HTMLElement | null>(null);
//   const [taglineIndex, setTaglineIndex] = useState(0);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const titleY = useTransform(scrollYProgress, [0, 0.35, 0.65], [48, 18, 0]);
//   const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [0, 0.9, 1]);
//   const planeX = useTransform(scrollYProgress, [0, 0.5, 1], [-120, 0, 120]);
//   const planeY = useTransform(scrollYProgress, [0, 1], [40, -12]);
//   const planeRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 4, 18]);
//   const planeOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.8, 1]);

//   useEffect(() => {
//     const intervalId = window.setInterval(() => {
//       setTaglineIndex((current) => (current + 1) % TAGLINES.length);
//     }, 3600);

//     return () => window.clearInterval(intervalId);
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative isolate min-h-screen overflow-hidden bg-surface"
//     >
//       <video
//         className="absolute inset-0 -z-20 h-full w-full object-contain md:object-cover object-center"
//         src={HERO_VIDEO}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="metadata"
//         aria-label="IntelliGreen product demonstration"
//       />

//       <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-surface/30 via-surface/10 to-surface/90" />

//       <div className="mx-auto flex min-h-184 w-full max-w-5xl flex-col justify-end px-(--container-x) pb-10 pt-28 sm:min-h-screen sm:pb-14">
//         <div className="max-w-3xl">
//           <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:tracking-[0.35em]">
//             IntelliGreen Technologies
//           </p>

//           <div className="overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={TAGLINES[taglineIndex]}
//                 initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
//                 transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//                 style={{ y: titleY, opacity: titleOpacity }}
//                 className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
//               >
//                 {TAGLINES[taglineIndex]}
//               </motion.h1>
//             </AnimatePresence>
//           </div>


//           {/* card motion */}
//           {/* <motion.div
//             style={{ x: planeX, y: planeY, rotate: planeRotate, opacity: planeOpacity }}
//             className="mt-16 max-w-md"
//           >
//             <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl">
//               <div className="absolute left-0 top-1/2 h-px w-24 -translate-y-1/2 bg-cyan-400/40" />
//               <div className="flex items-center gap-4">
//                 <div className="grid h-16 w-16 place-items-center rounded-full bg-cyan-400/15 text-cyan-300 shadow-[0_0_0_1px_rgba(56,189,248,0.15)]">
//                   <span className="text-2xl">🍃</span>
//                 </div>
//                 <div>
//                   <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/90">
//                     CTFA
//                   </p>
//                   <h2 className="text-2xl font-semibold text-white">
//                     INTELLIGREEN PRODUCT REVEAL
//                   </h2>
//                   <p className="mt-2 text-sm leading-6 text-slate-200/80">
//                     Discover how intelligent airflow, active filtration, and live sensing create cleaner spaces that move with every moment.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div> */}
          

//           <motion.a
//             href="#products"
//             initial={{ opacity: 0, y: 22 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//             className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-2 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:text-accent"
//           >
//             Explore the system <ArrowRight size={16} />
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   );
// }
