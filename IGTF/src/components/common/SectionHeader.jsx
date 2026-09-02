import React from 'react';
import Badge from './Badge';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-2xl ${alignmentClasses[align]} ${className}`}>
      {badge && <Badge className="mb-2.5">{badge}</Badge>}
      {title && (
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-1 text-sm font-semibold text-emerald-600">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
