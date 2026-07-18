import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

interface PartnerCardProps {
  name: string;
  icon: LucideIcon;
}

export default function PartnerCard({
  name,
  icon: Icon,
}: PartnerCardProps) {
  return (
    <Card
      hover
      className="flex h-40 flex-col items-center justify-center text-center"
    >
      <Icon
        size={42}
        className="text-brand"
      />

      <h3 className="mt-5 font-semibold text-text-primary">
        {name}
      </h3>
    </Card>
  );
}