import { NavLink } from "react-router-dom";

interface SmartNavLinkProps {
  label: string;
  href: string;
  onClick?: () => void;
}

export default function SmartNavLink({
  label,
  href,
  onClick,
}: SmartNavLinkProps) {
  const isSectionLink = href.startsWith("#");

  if (isSectionLink) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="text-sm font-medium text-slate-700 transition-colors hover:text-teal-700"
      >
        {label}
      </a>
    );
  }

  return (
    <NavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors ${
          isActive
            ? "text-teal-700"
            : "text-slate-700 hover:text-teal-700"
        }`
      }
    >
      {label}
    </NavLink>
  );
}