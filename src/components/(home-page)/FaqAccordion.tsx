'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What makes Phish Defense different?',
    answer:
      'Phish Defense offers multi-channel phishing simulations and fully managed training campaigns, backed by up-to-date cybersecurity education.',
    image: 'https://phishdefense.com/wp-content/uploads/2025/04/6-1-150x150.webp',
  },
  {
    question: 'Can Phish Defense simulate custom scenarios?',
    answer:
      'Yes, with thousands of prebuilt templates and custom scenario creation, simulations can be fully tailored to your organization.',
    image: 'https://phishdefense.com/wp-content/uploads/2025/04/7-300x300.webp',
  },
  {
    question: 'Does it integrate with our systems?',
    answer:
      'Phish Defense integrates with email platforms, HRMS, ticketing systems, and more.',
    image: 'https://phishdefense.com/wp-content/uploads/2025/04/8-300x300.webp',
  },
  {
    question: 'Is content multilingual?',
    answer:
      'Yes, multilingual support ensures training is globally effective across teams.',
    image: 'https://phishdefense.com/wp-content/uploads/2025/04/CarBook-300x300.webp',
  },
  {
    question: 'Is on-premise hosting supported?',
    answer:
      'Yes, we offer both cloud and on-premise hosting options based on your needs.',
    image: 'https://phishdefense.com/wp-content/uploads/2025/04/9-300x300.webp',
  },
  {
    question: 'What does managed service include?',
    answer:
      'It includes full campaign handling, analysis, reporting, and proactive updates.',
    image: 'https://phishdefense.com/wp-content/uploads/2025/04/10-300x300.webp',
  },
];

export default function ModernFaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600 text-base">
            Everything you need to know about Phish Defense.
          </p>
        </div>

        {/* Accordion */}
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center text-left gap-4 p-5 sm:p-6 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <Image
                    src={faq.image}
                    alt={faq.question}
                    width={48}
                    height={48}
                    className="rounded-lg object-cover flex-shrink-0 border"
                    loading="lazy"
                  />
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-[#149c8c]">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="ml-auto w-5 h-5 text-[#149c8c]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-5 text-sm text-gray-700"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
