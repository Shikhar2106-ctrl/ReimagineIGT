import type { ReactNode } from "react";

import Card from "./Card";

interface StatCardProps {
  value: ReactNode;
  label: ReactNode;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <Card className="border-border-subtle bg-surface-card">
      <h3 className="text-5xl font-bold text-accent">{value}</h3>
      <p className="mt-3 text-text-secondary">{label}</p>
    </Card>
  );
}
