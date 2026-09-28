import React from 'react';

export default function SectionHeader({
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
      {title && (
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-1 text-xs sm:text-sm font-semibold text-emerald-600">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
