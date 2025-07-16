'use client'
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "How secure is user data during simulations?",
    answer:
      "Participant data is securely handled with the best possible industry followed practices"
  },
  {
    question: "Is there support for multiple languages?",
    answer:
      "Yes, our Email Phishing Simulation supports multiple languages for a global user base."
  },
  {
    question: "What makes it unique compared to other solutions?",
    answer:
      "Tailored content diverse phishing scenarios and a user-centric approach for effective training."
  },
  {
    question: "Can it be accessed on various devices?",
    answer:
      "Yes, the simulation is designed for seamless access on desktops, laptops, tablets, and mobile phones."
  },
  {
    question: "What the pricing model for the service?",
    answer:
      "We offer transparent, competitive pricing globally, ensuring value for organizations prioritizing cybersecurity awareness."
  },
];
;

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
            Feel free to reach out for an in-depth exploration of how the Email Phishing Simulation can fortify your organizations resilience.
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
