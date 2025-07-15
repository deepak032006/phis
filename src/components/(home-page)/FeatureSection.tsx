'use client'

import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: 'Security Awareness Training',
    image: '/home/online.webp',
    link: '/awareness-training/',
    desc: 'Educate employees with real-life attack simulations.',
  },
  {
    title: 'WhatsApp Phishing',
    image: '/home/52.webp',
    link: '/whatsapp-phishing/',
    desc: 'Test your team’s ability to detect fake WhatsApp messages.',
  },
  {
    title: 'Threat Reporter',
    image: '/home/50.webp',
    link: '/phishing-reporter/',
    desc: 'One-click reporting from email clients to your SOC.',
  },
  {
    title: 'Email Phishing',
    image: '/home/47.webp',
    link: '/email-phishing/',
    desc: 'Send realistic phishing emails to train detection instinct.',
  },
  {
    title: 'Phone Phishing',
    image: '/home/48.webp',
    link: '/voice-phishing/',
    desc: 'Simulate vishing and social engineering via calls.',
  },
  {
    title: 'SMS Phishing',
    image: '/home/49.webp',
    link: '/sms-phishing/',
    desc: 'Test SMS-based phishing defenses with realistic messages.',
  },
]

export default function FeatureSection() {
  return (
    <section className="bg-[#f9fbfc] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Complete Phishing Simulation Suite</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Simulate, train, and harden your organization against phishing in every format — all from one unified platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Link
              key={idx}
              href={feature.link}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 flex flex-col items-start h-full"
              aria-label={`Explore ${feature.title}`}
            >
              <div className="mb-4 w-14 h-14 rounded-full bg-[#e0f2f1] flex items-center justify-center group-hover:bg-[#b2dfdb] transition">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#149c8c]">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
              <span className="mt-auto text-sm text-[#149c8c] font-medium pt-4 group-hover:underline">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#149c8c] hover:bg-[#00796b] text-white font-semibold rounded-full px-10 py-3 text-l shadow-md transition"
          >
            Request a Custom Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
