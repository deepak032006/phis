"use client";

import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-28 bg-gradient-to-tr from-[#eef7ff] to-[#e0f2f1]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">
          Phishing Reporter Plugin: {' '}
          <span className="text-[#45c2a4]">Swiftly Report Scams</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
          Compatible with o365, Exchange, G-Suite, Integration with ATP, One Click Installation,Email Analysis, Block Sender Domain
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#45c2a4] text-white hover:bg-[#3db194] px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300"
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
