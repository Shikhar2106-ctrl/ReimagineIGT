import {
  Cpu,
  Wind,
  BrainCircuit,
  Activity,
} from "lucide-react";

export const technologyContent = {
  badge: "Our Technology",

  title: "How IntelliGreen Continuously Improves Indoor Air",

  description:
    "A connected ecosystem of intelligent sensors, AI-powered analytics, and smart purification working together in real time.",

  steps: [
    {
      title: "Air Quality Sensors",
      description:
        "IoT sensors monitor particulate matter, CO₂, VOCs, humidity and temperature.",
      icon: Activity,
    },

    {
      title: "AI Processing",
      description:
        "Collected data is analyzed to detect patterns and changing environmental conditions.",
      icon: BrainCircuit,
    },

    {
      title: "Smart Decision Engine",
      description:
        "Optimization algorithms determine the most efficient purification strategy.",
      icon: Cpu,
    },

    {
      title: "Clean Air Delivery",
      description:
        "Purification and ventilation systems automatically respond to improve indoor air quality.",
      icon: Wind,
    },
  ],
};