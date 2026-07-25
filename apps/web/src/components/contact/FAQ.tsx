import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import FadeIn from "@/components/motion/FadeIn";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "Our team typically responds to all enquiries within one business day. For urgent requests, please contact us by phone.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes. We provide end-to-end assistance including consultation, installation, commissioning, and after-sales support.",
  },
  {
    question: "Can IntelliGreen solutions be customized?",
    answer:
      "Absolutely. Every project is different, and we tailor our solutions according to your building, industry, and environmental requirements.",
  },
  {
    question: "Do you work with commercial and residential projects?",
    answer:
      "Yes. Our intelligent air quality systems are suitable for commercial buildings, hospitals, educational institutions, industries, hospitality spaces, and residential environments.",
  },
  {
    question: "How can I schedule a product demonstration?",
    answer:
      "Simply submit the contact form or reach out via email. Our team will schedule a demonstration at your convenience.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <Section
      size="spacious"
      className="bg-white"
    >
      <Container>

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              FAQ
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-primary lg:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              Everything you need to know before getting started with
              IntelliGreen.
            </p>

          </div>

        </FadeIn>

        <div className="mx-auto mt-16 max-w-4xl">

          {faqs.map((faq, index) => {

            const isOpen = activeIndex === index;

            return (

              <div
                key={faq.question}
                className="border-b border-border"
              >

                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    py-7
                    text-left
                  "
                >

                  <span className="text-lg font-semibold text-text-primary">
                    {faq.question}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-brand/10
                      text-brand
                    "
                  >
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>

                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <p className="max-w-3xl leading-8 text-text-secondary">
                      {faq.answer}
                    </p>

                  </div>
                </div>

              </div>

            );

          })}

        </div>

      </Container>
    </Section>
  );
}