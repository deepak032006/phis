'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/(home-page)/SectionTitle'

const services = [
  {
    title: 'Simulate Phishing',
    image: 'https://phishdefense.com/wp-content/uploads/2025/05/41-1024x576.png',
    description: 'Send realistic phishing simulations and identify weak points in your organization.',
  },
  {
    title: 'Train Employees',
    image: 'https://phishdefense.com/wp-content/uploads/2025/05/42-1024x576.png',
    description: 'Empower your team with tailored phishing training that actually sticks.',
  },
  {
    title: 'Monitor Threats',
    image: 'https://phishdefense.com/wp-content/uploads/2025/05/43-1024x576.png',
    description: 'Get real-time insights into campaign performance and employee behavior.',
  },
]

export default function ServiceCards() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f9fbfc] to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <SectionTitle overline="What can we do for you?" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={512}
                  height={288}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="object-cover w-full h-full rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#149c8c] transition">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-3 bg-[#149c8c] hover:bg-[#00796b] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z" />
            </svg>
            See our free and paid plans
          </Link>
        </div>
      </div>
    </section>
  )
}
