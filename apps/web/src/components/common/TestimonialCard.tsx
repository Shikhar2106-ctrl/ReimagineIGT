import { Quote, Star } from "lucide-react";

import Card from "@/components/ui/Card";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
 review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  review,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="group h-full">

      <Quote
        className="text-brand"
        size={40}
      />

      <div className="mt-6 flex gap-1">

        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      <p className="mt-6 leading-8 text-text-secondary">
        "{review}"
      </p>

      <div className="mt-8 border-t border-border pt-6">

        <h4 className="font-semibold text-text-primary">
          {name}
        </h4>

        <p className="mt-1 text-sm text-text-secondary">
          {role}
        </p>

        <p className="text-sm text-brand">
          {company}
        </p>

      </div>

    </Card>
  );
}