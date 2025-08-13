import React, { useState } from "react";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
  title?: string;
}

const FaqSection = ({ faqs, title = "FAQs" }: FaqSectionProps) => {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(faqs.map(() => true)); // All open by default
  const timestamp = Date.now(); // Cache busting

  const toggleFaq = (idx: number) => {
    setOpenIndexes((prev: boolean[]) =>
      prev.map((open: boolean, i: number) => (i === idx ? !open : open))
    );
  };

  return (
    <div className="rounded-2xl p-4 sm:p-8 shadow-sm mb-12 bg-[var(--systemflow-lite--neutral--10)]" key={timestamp}>
      {/* Cache bust: ${timestamp} */}
      <h2 className="section-h2 font-medium text-center mb-16">{title}</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq: Faq, idx: number) => (
          <div key={idx} className={`border-b border-gray-200 pb-6 transition-all ${idx === 0 ? 'mt-8' : ''}`}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={openIndexes[idx]}
            >
              <h3 className="faq-question text-lg font-semibold">{faq.question}</h3>
              <button
                aria-label={openIndexes[idx] ? "Collapse" : "Expand"}
                className="ml-4 focus:outline-none"
                tabIndex={-1}
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openIndexes[idx] ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {openIndexes[idx] && (
              <p className="faq-answer text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection; 