import { NavLink } from "react-router-dom";
import type { MouseEvent } from "react";

import { cn } from "@/lib/utils";

interface SmartNavLinkProps {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function SmartNavLink({
  label,
  href,
  external = false,
  onClick,
  className,
}: SmartNavLinkProps) {
  const isSectionLink = href.startsWith("#");

  const linkClass = cn(
    "text-sm font-medium text-text-secondary transition-colors hover:text-accent",
    className
  );

  if (external) {
    return (
      <a
        href={href}
        // target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={linkClass}
      >
        {label}
      </a>
    );
  }

  if (isSectionLink) {
    const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>) => {
      const target = document.querySelector(href);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      onClick?.();
    };

    return (
      <a href={href} onClick={handleSectionClick} className={linkClass}>
        {label}
      </a>
    );
  }

  return (
    <NavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          linkClass,
          isActive && "text-accent"
        )
      }
    >
      {label}
    </NavLink>
  );
}
