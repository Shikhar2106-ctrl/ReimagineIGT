import {
  Wind,
  Cpu,
  Activity,
} from "lucide-react";

export const productsContent = {
  badge: "Our Products",

  title: "Smart Solutions for Every Indoor Environment",

  description:
    "A complete ecosystem of intelligent air quality products designed to monitor, analyze, and improve indoor environments.",

  items: [
    {
      title: "WALL MOUNTED CTFA",
      description:
        "Fresh Air Solution For The HVAC/Non HVAC Premises.",

      features: [
        "Fresh Air Mode",
        "Air Purification Mode",
        "Light Weight",
      ],

      icon: Wind,
    },

    {
      title: "IAQ Smart Sensor",
      description:
        "Monitor PM2.5, CO₂, humidity, temperature, and VOC levels in real time.",

      features: [
        "Live Dashboard",
        "Cloud Connected",
        "Mobile Alerts",
      ],

      icon: Activity,
    },

    {
      title: "IntelliGreen Hub",
      description:
        "Central AI platform to automate monitoring, reporting, and predictive maintenance.",

      features: [
        "Predictive Analytics",
        "Remote Control",
        "IoT Integration",
      ],

      icon: Cpu,
    },
  ],
};