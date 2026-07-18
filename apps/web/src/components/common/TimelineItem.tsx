import type { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({
  icon: Icon,
  title,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">

      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-teal-600
            text-white
            shadow-lg
            transition-transform
            duration-300
            hover:scale-110
          "
        >
          <Icon size={24} />
        </div>

        {!isLast && (
          <div className="mt-2 h-24 w-px bg-slate-300 dark:bg-slate-700" />
        )}
      </div>

      {/* Content */}

      <div className="pb-12">

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>

      </div>

    </div>
  );
}