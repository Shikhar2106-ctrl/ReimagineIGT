import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export default function ContactInfoCard({
  icon: Icon,
  title,
  value,
}: ContactInfoCardProps) {
  return (
    <Card hover className="flex items-start gap-4">
      <div className="rounded-xl bg-brand/10 p-3 text-brand">
        <Icon size={24} />
      </div>

      <div>
        <h4 className="font-semibold text-text-primary">
          {title}
        </h4>

        <p className="mt-1 text-text-secondary">
          {value}
        </p>
      </div>
    </Card>
  );
}