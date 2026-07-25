import { NavLink } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Logo() {
  return (
    <NavLink
      to="/"
      aria-label="IntelliGreen Technologies home"
      className="group inline-flex shrink-0 items-center gap-2.5 rounded-full px-1 py-1 transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white shadow-[0_0_20px_rgb(34_197_94/0.35)] transition-transform duration-300 group-hover:rotate-12">
        <Leaf size={19} strokeWidth={2.5} />
      </span>
      <span className="hidden text-lg font-semibold tracking-[-0.04em] text-text-primary sm:block">
        Intelli<span className="text-brand-light">Green</span>
      </span>
    </NavLink>
  );
}
