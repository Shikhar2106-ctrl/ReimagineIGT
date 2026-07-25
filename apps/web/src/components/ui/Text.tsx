import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({
  children,
  className = "",
}: TextProps) {
  return (
    <p
      className={cn(
        "text-lg leading-8 text-text-secondary",
        className
      )}
    >
      {children}
    </p>
  );
}
