"use client";

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-tr from-[#eaf8f5] to-[#f0faff] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 leading-tight tracking-tight">
          Security Awareness: <span className="text-[#45c2a4]">Mindful Training</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Interactive Content · SCORM Modules · Multilingual · Custom Training ·
          Auto Reminders · Escalation · Smart Assignments · Certificates
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#149c8c] hover:bg-[#0e8f7e] text-white text-base font-semibold rounded-full shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#149c8c] transition"
          >
            Request A Demo
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=61468728920&text=Hello+Umang%2C&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition shadow"
          >
            <FaWhatsapp className="text-lg" />
            Message Us
          </Link>
        </div>
      </div>
    </section>
  );
}
