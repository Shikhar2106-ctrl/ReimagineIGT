import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export default function ProductCard({
  title,
  description,
  features,
  icon: Icon,
}: ProductCardProps) {
  return (
    <Card
      hover
      className="group h-full"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <Icon size={32} />
      </div>

      <Badge className="mt-6">
        Product
      </Badge>

      <h3 className="mt-4 text-2xl font-bold text-text-primary">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-text-secondary">
        {description}
      </p>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="text-brand"
            />

            <span className="text-text-secondary">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className="mt-10"
        variant="primary"
      >
        Learn More

        <ArrowRight
          size={18}
          className="ml-2"
        />
      </Button>
    </Card>
  );
}