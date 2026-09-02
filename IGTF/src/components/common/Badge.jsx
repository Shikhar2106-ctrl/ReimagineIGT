import React from 'react';

export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-emerald-700 backdrop-blur-sm ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
      {children}
    </span>
  );
}
