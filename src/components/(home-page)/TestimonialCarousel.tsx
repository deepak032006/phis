'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';

const testimonials = [
  {
    quote: 'Phish Defense makes employee training both effective and engaging. The real-world phishing simulations are a game-changer.',
    author: 'Jane M',
    role: 'IT Manager',
    company: 'Company with 51–200 Employees',
  },
  {
    quote: 'What I love about Phish Defense is how intuitive it is. We rolled out phishing simulations in minutes and saw immediate awareness improvements.',
    author: 'Raj K',
    role: 'Head of Security',
    company: 'Startup with 10–25 Employees',
  },
  {
    quote: 'We saw an immediate drop in risky clicks after the first training cycle. Incredible results.',
    author: 'John P',
    role: 'Founder and CEO',
    company: 'AI Startup with 25 Employees',
  },
  {
    quote: 'Working with Phish Defense gave us peace of mind. Their phishing simulation campaigns helped us reduce click rates in just two months.',
    author: 'Omar F',
    role: 'Head of IT Ops',
    company: '245 Employees',
  },
  {
    quote: 'Phish Defense made cybersecurity training easy and actually fun for our team.',
    author: 'Meera V',
    role: 'Compliance Officer',
    company: 'SAAS Startup 50 Employees',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slightly longer for less distraction
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-[#f8fafc] to-[#ecfdf5]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle overline="WHAT CUSTOMERS SAY" center />

        <div className="relative mt-12 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-md text-center"
            >
              <p className="text-gray-800 text-lg sm:text-xl italic max-w-3xl mx-auto leading-relaxed">
                “{testimonials[current].quote}”
              </p>
              <div className="mt-6 text-sm sm:text-base text-gray-700 font-semibold">
                — {testimonials[current].author}
                <div className="text-gray-500 font-normal mt-1">
                  {testimonials[current].role}
                  <br />
                  {testimonials[current].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${
                  index === current ? 'bg-[#149c8c]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
