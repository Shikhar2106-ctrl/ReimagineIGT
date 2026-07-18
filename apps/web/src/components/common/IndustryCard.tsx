import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  size?: "small" | "large" | "wide";
}

export default function IndustryCard({
  title,
  description,
  icon: Icon,
  size = "small",
}: IndustryCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden",
        size === "large" && "md:row-span-2 min-h-80",
        size === "wide" && "md:col-span-2",
        size === "small" && "min-h-45"
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
          <Icon size={30} />
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-text-primary">
          {title}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-text-secondary">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-2 font-medium text-brand">
          Learn More
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </Card>
  );
}