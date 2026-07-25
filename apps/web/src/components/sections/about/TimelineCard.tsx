import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function TimelineCard({
  year,
  title,
  description,
  icon: Icon,
}: TimelineCardProps) {
  return (
    <Card
      hover
      className="relative ml-8 p-6 sm:ml-10 sm:p-8"
    >
      <div className="absolute -left-12 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-lg sm:-left-16 sm:top-10 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
      </div>

      <span className="inline-block rounded-full bg-brand/10 px-4 py-1 text-sm font-semibold text-brand">
        {year}
      </span>

      <h3 className="mt-4 text-xl font-bold text-text-primary sm:text-2xl">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-text-secondary">
        {description}
      </p>
    </Card>
  );
}
