import ShowcaseCard from "./ShowcaseCard";

interface FloatingColumnProps {
  images: string[];
  direction?: "up" | "down";
  duration?: number;
  offset?: number;
}

const heights = [
  "h-[180px] sm:h-[210px] lg:h-[240px]",
  "h-[230px] sm:h-[260px] lg:h-[310px]",
  "h-[200px] sm:h-[230px] lg:h-[270px]",
  "h-[250px] sm:h-[280px] lg:h-[320px]",
  "h-[190px] sm:h-[220px] lg:h-[230px]",
  "h-[220px] sm:h-[250px] lg:h-[280px]",
];

export default function FloatingColumn({
  images,
  direction = "up",
  duration = 20,
  offset = 0,
}: FloatingColumnProps) {
  // Rotate array so every column starts differently
  const rotated = [
    ...images.slice(offset),
    ...images.slice(0, offset),
  ];

  // Duplicate for seamless loop
  const items = [...rotated, ...rotated];

  return (
    <div
      className="relative h-[480px] overflow-hidden sm:h-[560px] lg:h-[760px]"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className={`flex flex-col gap-7 ${
          direction === "up" ? "scroll-up" : "scroll-down"
        } pause-on-hover`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {items.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={heights[index % heights.length]}
          >
            <ShowcaseCard
              image={image}
              alt={`Technology ${index + 1}`}
              rotate={[-2, 1.5, -1, 2, -1.5, 1][index % 6]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}