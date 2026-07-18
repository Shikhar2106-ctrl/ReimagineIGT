import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

import Card from "@/components/ui/Card";

interface MissionVisionCardProps {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

export default function MissionVisionCard({
  title,
  description,
  points,
  icon: Icon,
}: MissionVisionCardProps) {
  return (
    <Card
      hover
      className="h-full p-8"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <Icon size={30} />
      </div>

      <h3 className="mt-8 text-3xl font-bold text-text-primary">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-text-secondary">
        {description}
      </p>

      <div className="mt-8 space-y-4">
        {points.map((point) => (
          <div
            key={point}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="text-brand"
            />

            <span className="text-text-secondary">
              {point}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}