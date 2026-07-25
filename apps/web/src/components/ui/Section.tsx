import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionSize = "default" | "compact" | "spacious" | "none";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: SectionSize;
}

const sizeClasses: Record<SectionSize, string> = {
  none: "",
  compact: "py-12 md:py-16",
  default: "py-[var(--section-y)]",
  spacious: "py-[var(--section-y-lg)]",
};

export default function Section({
  children,
  className,
  id,
  size = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </section>
  );
}
