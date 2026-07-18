import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function SolutionCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <Card className="group cursor-pointer">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-transform duration-300 group-hover:scale-110 dark:bg-teal-900/30 dark:text-teal-300">

        <Icon size={30} />

      </div>

      <h3 className="mt-8 text-2xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-medium text-teal-700 dark:text-teal-400">

        Learn More

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />

      </div>

    </Card>
  );
}