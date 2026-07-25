import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}

export default function Heading({
  children,
  className = "",
  as: Tag = "h1",
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
