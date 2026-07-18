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
      className="relative ml-10"
    >
      <div className="absolute -left-16 top-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg">
        <Icon size={22} />
      </div>

      <span className="inline-block rounded-full bg-brand/10 px-4 py-1 text-sm font-semibold text-brand">
        {year}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-text-primary">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-text-secondary">
        {description}
      </p>
    </Card>
  );
}