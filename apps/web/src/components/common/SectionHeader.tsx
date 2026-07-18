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
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {badge && <Badge>{badge}</Badge>}

      <Heading className="mt-6">
        {title}
      </Heading>

      {description && (
        <Text className="mt-6">
          {description}
        </Text>
      )}
    </div>
  );
}