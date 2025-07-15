"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Can my organization benefit from this?",
    answer:
    "Yes, it's tailored for organizations, seamlessly integrating into your security infrastructure, providing enhanced protection against evolving threats."
  },
  {
    question: "How easy is the installation?",
    answer:
    "Effortless. Follow simple instructions for download or activation, tailored to your email platform, and start reinforcing your security instantly."
  },
  {
    question: "Can I monitor my report's progress?",
    answer:
    "Yes, enjoy peace of mind with a tracking feature that keeps you in the loop, providing transparency on the status of your reported emails."
  },
  {
    question: "What's the advantage of reporting?",
    answer:
    "Your reports empower Phish Defense to analyze and proactively protect you, creating a dynamic shield against evolving phishing threats. "
  },
  {
    question: "Is my data safe during reporting?",
    answer:
    "Absolutely. Your privacy is paramount; the plugin handles sensitive information securely, guaranteeing utmost confidentiality."
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
            Feel free to reach out for an in-depth exploration of how the Phishing Reporter Plugin can strengthen your organization's email security.
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
