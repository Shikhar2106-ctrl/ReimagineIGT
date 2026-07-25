import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

import FadeIn from "@/components/motion/FadeIn";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const cards = [
  {
    title: "Email Us",
    value: "info@intelligreentech.com",
    description: "Reach us anytime via email.",
    icon: Mail,
  },
  {
    title: "Call Us",
    value: "+91-99710 02858",
    description: "Mon – Fri • 10:00 AM – 6:30 PM",
    icon: Phone,
  },
  {
    title: "Visit Office",
    value: "3rd Floor, Unit No. COS/C/3L/Office/17, M3M Cosmopolitan",
    description: "Corporate Headquarters",
    icon: MapPin,
  },
  {
    title: "Support Hours",
    value: "24/7 Assistance",
    description: "We're here whenever you need us.",
    icon: Clock3,
  },
];

export default function ContactCards() {
  return (
    <Section className="bg-surface-muted py-16 lg:py-20">
      <Container>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <FadeIn
                key={card.title}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-border
                    bg-cyan-950
                    p-7
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-brand/30
                    hover:shadow-xl
                  "
                >
                  {/* Background Glow */}

                  <div
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-32
                      w-32
                      rounded-full
                      bg-brand/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-brand/10
                      text-brand
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon size={24} />
                  </div>

                  {/* Content */}

                  <div className="relative z-10 mt-8">

                    <div className="flex items-center justify-between">

                      <h3 className="text-lg font-semibold text-text-primary">
                        {card.title}
                      </h3>

                      <ArrowUpRight
                        size={18}
                        className="
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          group-hover:opacity-100
                        "
                      />

                    </div>

                    <p className="mt-4 text-base font-medium text-text-primary">
                      {card.value}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-text-secondary">
                      {card.description}
                    </p>

                  </div>
                </motion.div>
              </FadeIn>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}