import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-3xl border transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border-border bg-surface-card",

        glass:
          "border-white/20 bg-white/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40",

        outline:
          "border-slate-300 bg-transparent dark:border-slate-700",
      },

      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },

      hover: {
        true: "hover:-translate-y-1 hover:shadow-xl",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "lg",
      hover: true,
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export default function Card({
  className,
  variant,
  padding,
  hover,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          padding,
          hover,
        }),
        className
      )}
      {...props}
    />
  );
}