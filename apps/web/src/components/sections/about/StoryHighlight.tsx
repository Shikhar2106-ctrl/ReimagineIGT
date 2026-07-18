import { CheckCircle2 } from "lucide-react";

interface StoryHighlightProps {
  text: string;
}

export default function StoryHighlight({
  text,
}: StoryHighlightProps) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={20}
        className="text-brand"
      />

      <span className="text-text-secondary">
        {text}
      </span>
    </div>
  );
}