"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What are the key features of Vishing Simulation?",
    answer:
    "Realistic voice scenarios, customizable content, multi-device access, global availability, and user-friendly reporting."
  },
  {
    question: "Is Vishing Simulation accessible worldwide?",
    answer:
    "Yes, it is designed for global accessibility, ensuring organizations worldwide can benefit from our vishing awareness training."
  },
  {
    question: "Can administrators customize simulation content?",
    answer:
    "Absolutely. Administrators have the flexibility to tailor scenarios to address specific security concerns within their organization."
  },
  {
    question: "Does Vishing Simulation support multiple languages?",
    answer:
    "Yes, our tool is adaptable to diverse linguistic needs, promoting global accessibility and understanding."
  },
  {
    question: "Is user data secure during simulations?",
    answer:
    "Yes, we prioritize data security with stringent measures to ensure user privacy and confidentiality during the simulation process."
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 md:flex gap-10">
        {/* Left content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="inline-block bg-teal-600 text-white rounded-full px-8 py-2 font-semibold mb-4">
            FAQs
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-6">
            Explore how our Vishing Simulation strengthens your security against voice-based phishing threats.
          </p>
          <Link
            href="/contact"
            rel="noopener noreferrer"
            className="inline-block bg-[#45c2a4] text-white  px-6 py-2 rounded hover:bg-[#3db194]  transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Right FAQ accordion */}
        <div className="md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
