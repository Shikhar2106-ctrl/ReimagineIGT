import React from 'react';
import * as Icons from 'lucide-react';

export default function IconHelper({ name, size = 20, className = '' }) {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent size={size} className={className} />;
}
