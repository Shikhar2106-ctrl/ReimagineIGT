interface KPIBadgeProps {
  value: string;
}

export default function KPIBadge({
  value,
}: KPIBadgeProps) {
  return (
    <span
      className="
      rounded-full
      bg-teal-100
      px-4
      py-2
      text-sm
      font-semibold
      text-teal-700

      dark:bg-teal-900/30
      dark:text-teal-300
    "
    >
      {value}
    </span>
  );
}