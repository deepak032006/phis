'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Phishing Simulation <br />
            <span className="text-[#18b39e]">& Employee Training</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-xl"
          >
            Simulate Phishing, SMShing, Voice Call & WhatsApp Attacks – Train Your Team, Minimize Human Error, and Strengthen Your Security Posture
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="px-6 py-3 text-white bg-[#18b39e] hover:bg-[#149b89] rounded-md font-semibold transition shadow"
            >
              Request a Demo
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=61468728920&text=Hello+Umang%2C&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition shadow"
            >
              <FaWhatsapp className="text-lg" />
              Message Us
            </Link>

          </motion.div>
        </div>

        {/* Visual Element / Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full"
        >
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Laptop Frame */}
            <Image
              src="/home/laptop.webp"
              alt="Laptop Frame"
              width={1200}
              height={800}
              className="w-full h-auto pointer-events-none select-none"
            />

            {/* Video inside laptop screen */}
            <div className="absolute top-[10.5%] left-[8.2%] w-[83.6%] h-[71.5%] rounded-md overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/TbwVFIhXR2g?mute=1&loop=1&controls=0&rel=0&modestbranding=1&playsinline=1"
                title="Phish Defense Demo"
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </motion.div>


      </div>
    </section>
  )
}
