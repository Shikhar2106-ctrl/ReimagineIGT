import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

interface CoreValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function CoreValueCard({
  title,
  description,
  icon: Icon,
}: CoreValueCardProps) {
  return (
    <Card
      hover
      className="group h-full p-8 transition-all duration-300"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
        <Icon size={30} />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-text-primary">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-text-secondary">
        {description}
      </p>
    </Card>
  );
}