import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'

export default function CTASection() {
  return (
    <section className="py-28 bg-gradient-to-tr from-[#eef7ff] to-[#e0f2f1]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">
          WhatsApp Simulation:{' '}
          <span className="text-[#45c2a4]"> GuardText, Shielded Chats</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
          Customized Sender Numbers, Chat Messages, Landing Pages, Capture Replies, Clicks, Scheduled Reporting, Easy Integration
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
