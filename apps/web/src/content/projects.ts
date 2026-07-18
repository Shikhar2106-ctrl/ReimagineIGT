import { Building2, Building, Factory } from "lucide-react";

export const projectsContent = {
  badge: "Featured Projects",

  title: "Real Results Across Multiple Industries",

  description:
    "Explore how IntelliGreen has helped organizations improve indoor air quality, reduce operational costs, and create healthier environments.",

  items: [
    {
      title: "Apollo Hospital Air Quality Upgrade",

      category: "Healthcare",

      summary:
        "Hospital-wide intelligent air purification and real-time IAQ monitoring system.",

      metrics: [
        "82% PM2.5 Reduction",
        "28% Energy Savings",
        "24×7 Monitoring",
      ],

      icon: Building2,
    },

    {
      title: "Corporate Office Smart IAQ",

      category: "Commercial",

      summary:
        "Smart monitoring solution improving employee comfort and productivity.",

      metrics: [
        "31% Productivity",
        "CO₂ Optimization",
        "IoT Enabled",
      ],

      icon: Building,
    },

    {
      title: "Manufacturing Facility",

      category: "Industrial",

      summary:
        "Industrial filtration and ventilation optimization for safer production.",

      metrics: [
        "45% Cleaner Air",
        "18% Energy Saved",
        "AI Controlled",
      ],

      icon: Factory,
    },
  ],
};