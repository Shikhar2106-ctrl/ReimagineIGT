import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { ChevronDown } from 'lucide-react';
import contactData from '../../data/contact.json';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#F5F5F5] relative border-t border-slate-200">
      <Container className="space-y-16 max-w-4xl">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find quick answers about installation, IAQ metrics, and warranty terms."
          align="center"
        />

        <div className="space-y-4">
          {contactData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
