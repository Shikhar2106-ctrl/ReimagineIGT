import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const stories = [
  {
    title: "Clean air that works with your space.",
    category: "Inside IntelliGreen",
    image: "/images/hero/frame-2.png",
  },
  {
    title: "Air quality intelligence, in real time.",
    category: "Technology",
    image: "/images/hero/frame-4.png",
  },
  {
    title: "A more resilient indoor environment.",
    category: "Case Study",
    image: "/images/hero/frame-6.png",
  },
  {
    title: "Designed for people. Engineered for performance.",
    category: "Product Story",
    image: "/images/hero/frame-7.png",
  },
  {
    title: "Designed for people. Engineered for performance.",
    category: "Product Story",
    image: "/images/hero/frame-3.png",
  },
  {
    title: "Designed for people. Engineered for performance.",
    category: "Product Story",
    image: "/images/hero/frame-2.png",
  },
];

export default function LatestCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: "previous" | "next") => {
    carouselRef.current?.scrollBy({
      left: direction === "next" ? 390 : -390,
      behavior: "smooth",
    });
  };

  return (
    <Section
      id="latest"
      className="overflow-hidden bg-white py-24 text-slate-950 lg:py-32"
    >
      <Container className="gap-28">
        <div className="flex items-end justify-between gap-[10vw]">
          <div className="max-w-2xl">
            <p className="text-xs inline-flex rounded-full bg-brand/10 px-4 py-2 font-semibold uppercase tracking-[0.32em] text-brand">
              Perspectives
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              New at IntelliGreen
            </h2>
          </div>

          <div className="hidden gap-3 sm:flex">
            <button
              onClick={() => scrollCards("previous")}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => scrollCards("next")}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={carouselRef}
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
        className="
          mt-16
          flex
          gap-7
          overflow-x-auto
          px-[var(--container-x)]
          pb-4
          snap-x
          snap-proximity
          scroll-smooth
          [scrollbar-width:none]
        "
      >
        
        {stories.map((story) => (
          <article
            key={story.title}
            className="
              group
              relative
              h-[24rem]
              w-[21.5rem]
              shrink-0
              snap-start
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-slate-950
              shadow-xl
              shadow-slate-900/10
              transition-all
              duration-500
              ease-out
              hover:w-[24rem]
              hover:-translate-y-2
            "
          >
            <img
              src={story.image}
              alt={story.title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.05]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950/95
                via-slate-900/25
                to-transparent
              "
            />

            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                {story.category}
              </p>

              <h3 className="mt-3 text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.03em]">
                {story.title}
              </h3>

              <button
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-white/90
                  transition-all
                  duration-300
                  group-hover:gap-3
                  group-hover:text-accent
                "
              >
                Explore
                <ArrowRight size={17} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}