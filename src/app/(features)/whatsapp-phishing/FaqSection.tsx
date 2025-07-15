"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How is WhatsApp Simulation customized for our needs?",
    answer:
      "Tailored to your specifications, reflecting your unique communication scenarios and ensuring a realistic training experience."
  },
  {
    question: "What are the key benefits of Phish Defense's WhatsApp Text Simulation?",
    answer:
      "Enhanced threat awareness, improved response skills, and heightened security consciousness."
  },
  {
    question: "Can administrators customize the WhatsApp Text Simulation content?",
    answer:
      "Yes, administrators can customize content to address specific security concerns and industry requirements."
  },
  {
    question: "What types of phishing scenarios are covered in the WhatsApp Text Simulation?",
    answer:
      "Scenarios including deceptive links, malicious attachments, and social engineering tactics."
  },
  {
    question: "Are there language restrictions based on the user's region?",
    answer:
      "No, Phish Defense supports multiple languages irrespective of the user's region."
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
            Maximize security awareness using WhatsApp Simulation. Discover its impactful features
          </p>
          <Link
            href="contact"
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
