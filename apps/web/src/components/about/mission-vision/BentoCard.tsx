import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";
import type {LucideIcon} from "lucide-react"

import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  large?: boolean;
  compact?: boolean;
  horizontal?: boolean;
}

export default function BentoCard({
  title,
  description,
  icon: Icon,
  features = [],
  large = false,
  compact = false,
  horizontal = false,
}: BentoCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.35,
      }}
      className={cn(
        "group relative h-full overflow-hidden rounded-[32px]",
        "border border-white/10",
        "bg-white/[0.04]",
        "backdrop-blur-xl",
        "transition-all duration-500",
        "hover:border-brand/40",

        large && "p-10",

        compact && "p-7",

        horizontal && "p-10"
      )}
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-brand/10
          blur-[80px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Border Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-[32px]
          bg-gradient-to-br
          from-brand/10
          via-transparent
          to-cyan-400/10
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex h-full flex-col">

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 12,
            scale: 1.1,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-brand/10
            text-brand
          "
        >
          <Icon size={28} />
        </motion.div>

        {/* Title */}

        <div className="mt-8 flex items-center justify-between">

          <h3
            className={cn(
              "font-bold text-text-primary",

              large
                ? "text-3xl"
                : compact
                ? "text-xl"
                : "text-2xl"
            )}
          >
            {title}
          </h3>

          <ArrowUpRight
            className="
              opacity-0
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:opacity-100
            "
            size={18}
          />

        </div>

        {/* Description */}

        <p
          className={cn(
            "mt-5 leading-8 text-text-secondary",

            compact
              ? "text-sm leading-7"
              : "text-base"
          )}
        >
          {description}
        </p>

        {/* Feature List */}

        {features.length > 0 && (

          <div className="mt-auto pt-8">

            <div className="grid gap-4">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-brand/10
                    "
                  >
                    <Check
                      size={14}
                      className="text-brand"
                    />
                  </div>

                  <span className="text-sm text-text-secondary">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>
    </motion.div>
  );
}