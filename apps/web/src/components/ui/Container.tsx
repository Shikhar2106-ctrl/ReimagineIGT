import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

const sizeClasses = {
  default: "max-w-10xl",
  narrow: "max-w-7xl",
  wide: "max-w-[100rem]",
};

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--container-x)]",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
