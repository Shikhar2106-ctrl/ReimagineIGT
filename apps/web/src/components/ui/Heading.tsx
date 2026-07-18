import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className = "",
}: HeadingProps) {
  return (
    <h1
      className={`text-5xl font-bold leading-tight text-slate-900 lg:text-7xl ${className}`}
    >
      {children}
    </h1>
  );
}