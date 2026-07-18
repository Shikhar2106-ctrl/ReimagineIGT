import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

interface CertificationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function CertificationCard({
  title,
  description,
  icon: Icon,
}: CertificationCardProps) {
  return (
    <Card
      hover
      className="text-center"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-text-primary">
        {title}
      </h3>

      <p className="mt-3 text-text-secondary">
        {description}
      </p>
    </Card>
  );
}