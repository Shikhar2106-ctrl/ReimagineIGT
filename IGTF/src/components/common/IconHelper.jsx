import React from 'react';
import {
  ShieldCheck,
  Leaf,
  Cpu,
  Award,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Wind,
  Zap,
  Activity,
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  HeartPulse,
  GraduationCap,
  Factory,
  Layers,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

const ICON_MAP = {
  ShieldCheck,
  Leaf,
  Cpu,
  Award,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Wind,
  Zap,
  Activity,
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  HeartPulse,
  GraduationCap,
  Factory,
  Layers,
  Sparkles,
  HelpCircle,
};

export default function IconHelper({ name, size = 20, className = '' }) {
  const IconComponent = ICON_MAP[name] || HelpCircle;
  return <IconComponent size={size} className={className} />;
}
