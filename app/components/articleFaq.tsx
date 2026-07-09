"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleFaqProps {
  faqs: FAQItem[];
}

export default function ArticleFaq({ faqs }: ArticleFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-16 pt-12 border-t border-slate-100">
      <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-indigo-600" />
        Frequently Asked Questions
      </h3>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 text-base sm:text-lg tracking-tight focus:outline-none hover:text-indigo-600 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 ml-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0 border-t border-slate-50 text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
