import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary:
      'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-900/15 hover:shadow-md hover:-translate-y-0.5',
    secondary:
      'bg-white hover:bg-emerald-50/80 text-slate-800 hover:text-emerald-700 border border-slate-200/90 hover:border-emerald-400 shadow-2xs hover:-translate-y-0.5',
    cyan:
      'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold shadow-sm hover:-translate-y-0.5',
    outline:
      'border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 bg-transparent',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-xs sm:text-[13px] gap-2',
    lg: 'px-5 py-2.5 text-xs sm:text-sm gap-2',
  };

  const combinedClass = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass} {...props}>
      {children}
    </button>
  );
}
