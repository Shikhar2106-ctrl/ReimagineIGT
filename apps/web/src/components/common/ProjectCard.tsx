import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import KPIBadge from "@/components/ui/KPIBadge";

interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  metrics: string[];
  icon: LucideIcon;
}

export default function ProjectCard({
  title,
  category,
  summary,
  metrics,
  icon: Icon,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden">

      {/* Image Placeholder */}

      <div
        className="
        flex
        aspect-video
        items-center
        justify-center
        rounded-2xl
        bg-linear-to-br
        from-teal-500/10
        via-cyan-500/10
        to-blue-500/10
      "
      >
        <Icon
          size={80}
          className="
            text-brand
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      <div className="mt-8">

        <Badge>{category}</Badge>

        <h3 className="mt-5 text-2xl font-bold text-text-primary">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-text-secondary">
          {summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {metrics.map((metric) => (
            <KPIBadge
              key={metric}
              value={metric}
            />
          ))}

        </div>

        <Button
          className="mt-10"
          variant="primary"
        >
          Read Case Study

          <ArrowRight
            size={18}
            className="ml-2"
          />
        </Button>

      </div>

    </Card>
  );
}