import type { ReactNode } from "react";

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
      className={`text-lg leading-8 text-slate-600 ${className}`}
    >
      {children}
    </p>
  );
}