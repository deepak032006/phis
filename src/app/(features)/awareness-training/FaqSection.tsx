"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "How does our training program outshine others?",
    answer:
      "Uniquely tailored and consistently updated, it delivers relevance, ensuring your team stays ahead in recognizing and countering evolving threats.",
  },
  {
    question: "What measurable impact can you expect from our training?",
    answer:
      "Witness heightened awareness, a significant drop in security incidents, and a proactive team. Our training actively elevates your organization's overall security stance.",
  },
  {
    question: "How is content customized for our organization?",
    answer:
      "Tailored content reflects your industry, policies, and specific cybersecurity needs, ensuring relevance and practical application.",
  },
  {
    question: "How often can we update the customized content?",
    answer:
      "Content updates are flexible and can be scheduled based on your evolving needs, ensuring it remains current and aligned with the latest cybersecurity trends.",
  },
  {
    question: "Can we request additional customization after implementation?",
    answer:
      "Yes, our commitment to flexibility means you can request ongoing customization, ensuring that the content and tools consistently align with the evolving needs of your organization.",
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
            Discover how our Security Awareness Training can fortify your organization against cyber threats.
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
