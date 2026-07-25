import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
        align === "center" && "[&>p]:mx-auto",
        align === "left" && "text-left",
        className
      )}
    >
      {badge ? <Badge>{badge}</Badge> : null}

      <Heading as="h2" className="mt-8 text-text-primary">
        {title}
      </Heading>

      {description ? (
        <Text className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          {description}
        </Text>
      ) : null}
    </div>
  );
}
