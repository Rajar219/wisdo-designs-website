"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  plainTextAnswer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What services does WISDO Designs offer?",
      answer: (
        <>
          We offer a full suite of specialized digital services, including premium{" "}
          <Link href="/services" className="text-indigo-600 font-bold hover:underline">
            Web Design & Website Development
          </Link>
          , robust retail billing and POS software, custom mobile app development, performance-driven digital marketing, and reliable web hosting.
        </>
      ),
      plainTextAnswer: "We offer a full suite of specialized digital services, including premium Web Design & Website Development, robust retail billing and POS software, custom mobile app development, performance-driven digital marketing, and reliable web hosting."
    },
    {
      question: "How do you approach web design and website development?",
      answer: (
        <>
          At WISDO Designs, we follow a structured, collaborative process starting from in-depth discovery, wireframing, and custom UI/UX design, to high-performance web engineering. Learn more about{" "}
          <Link href="/about" className="text-indigo-600 font-bold hover:underline">
            our agency philosophy
          </Link>{" "}
          or reach out to discuss your specific requirements.
        </>
      ),
      plainTextAnswer: "At WISDO Designs, we follow a structured, collaborative process starting from in-depth discovery, wireframing, and custom UI/UX design, to high-performance web engineering. Learn more about our agency philosophy or reach out to discuss your specific requirements."
    },
    {
      question: "Can you build custom billing & POS software?",
      answer: (
        <>
          Yes, we build tailor-made retail billing & POS systems, automated reservation portals, CRM systems, and custom workflow dashboards to streamline daily operations. Feel free to explore our{" "}
          <Link href="/services" className="text-indigo-600 font-bold hover:underline">
            business systems capabilities
          </Link>{" "}
          to see how we can assist you.
        </>
      ),
      plainTextAnswer: "Yes, we build tailor-made retail billing & POS systems, automated reservation portals, CRM systems, and custom workflow dashboards to streamline daily operations. Feel free to explore our business systems capabilities to see how we can assist you."
    },
    {
      question: "Is your software development agency startup-friendly?",
      answer: (
        <>
          Absolutely. We partner with startups across India and globally to build custom solutions at competitive prices. You can check out{" "}
          <Link href="/pricing" className="text-indigo-600 font-bold hover:underline">
            our pricing plans
          </Link>{" "}
          or view open roles on our{" "}
          <Link href="/careers" className="text-indigo-600 font-bold hover:underline">
            careers page
          </Link>{" "}
          if you are looking to join our growing engineering team.
        </>
      ),
      plainTextAnswer: "Absolutely. We partner with startups across India and globally to build custom solutions at competitive prices. You can check out our pricing plans or view open roles on our careers page if you are looking to join our growing engineering team."
    },
    {
      question: "How long does a website development project take?",
      answer: (
        <>
          Timelines vary depending on complexity. A standard business website can take 2-4 weeks, while larger custom platforms or mobile apps may take 6-12 weeks. To get an accurate timeline, feel free to{" "}
          <Link href="/contact" className="text-indigo-600 font-bold hover:underline">
            contact us for a free consultation
          </Link>
          .
        </>
      ),
      plainTextAnswer: "Timelines vary depending on complexity. A standard business website can take 2-4 weeks, while larger custom platforms or mobile apps may take 6-12 weeks. To get an accurate timeline, feel free to contact us for a free consultation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured data for SEO Google rich snippets
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.plainTextAnswer
      }
    }))
  };

  return (
    <section className="py-16 sm:py-20 lg:py-40 bg-slate-50/50 relative z-10 border-t border-slate-100 overflow-hidden">
      {/* Schema injection for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12 sm:mb-16 lg:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-slate-200/60 mb-6">
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-bold tracking-wide text-slate-700 uppercase">Questions & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
            Find answers to common questions about our custom web design, software engineering services, workflows, and how we support startups.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:border-slate-200 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left font-bold text-slate-800 text-base sm:text-lg lg:text-xl tracking-tight focus:outline-none transition-colors duration-300 hover:text-indigo-600"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-400 shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-indigo-500" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-slate-50 text-slate-500 leading-relaxed font-light text-sm sm:text-base lg:text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
