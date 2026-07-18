import {
  Building2,
  GraduationCap,
  Factory,
  Hotel,
  Hospital,
  FlaskConical,
} from "lucide-react";

export const industriesContent = {
  badge: "Industries We Serve",

  title: "Air Quality Solutions Designed for Every Environment",

  description:
    "From hospitals to manufacturing plants, IntelliGreen delivers intelligent indoor air quality solutions tailored to each industry's unique requirements.",

  items: [
    {
      title: "Healthcare",
      description:
        "Hospital-grade air purification for clinics, hospitals and diagnostic centers.",
      icon: Hospital,
      size: "large" as const,
    },
    {
      title: "Commercial",
      description:
        "Healthy workplaces that improve employee well-being and productivity.",
      icon: Building2,
      size: "large" as const,
    },
    {
      title: "Education",
      description:
        "Cleaner classrooms that support healthier learning environments.",
      icon: GraduationCap,
      size: "small" as const,
    },
    {
      title: "Manufacturing",
      description:
        "Industrial air filtration for safer production facilities.",
      icon: Factory,
      size: "wide" as const,
    },
    {
      title: "Hospitality",
      description:
        "Comfortable indoor environments for hotels and guest spaces.",
      icon: Hotel,
      size: "wide" as const,
    },
    {
      title: "Laboratories",
      description:
        "Precision-controlled air quality for research and testing facilities.",
      icon: FlaskConical,
      size: "small" as const,
    },
  ],
};