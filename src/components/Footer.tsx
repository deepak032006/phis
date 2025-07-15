'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'
import { ReactNode } from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#d9f0ff] to-[#e6f3ff] border-t border-gray-300 pt-10 pb-6 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Brand Section */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" aria-label="Go to homepage" className="inline-block">
            <Image
              src="http://phishdefense.com/wp-content/uploads/2023/08/pd_blue_logo_v1.gif"
              alt="PhishDefense Logo"
              className="h-12 w-auto"
              width={150}
              height={50}
              priority
            />
          </Link>
          <p className="text-gray-800 leading-relaxed text-[15px]">
            Elevate your defenses with real-world simulations and comprehensive security training.
          </p>
          <div className="flex gap-4 pt-4 text-gray-600">
            <SocialIcon href="https://www.facebook.com/share/16QHUQztaD/?mibextid=wwXIfr" label="Facebook" icon={<FaFacebookF />} hoverColor="hover:text-blue-600" />
            <SocialIcon href="https://www.instagram.com/phishdefense?igsh=MWtpNXduMWRleXowdA==" label="Instagram" icon={<FaInstagram />} hoverColor="hover:text-pink-500" />
            <SocialIcon href="https://www.linkedin.com/company/phish-defense/?originalSubdomain=au" label="LinkedIn" icon={<FaLinkedinIn />} hoverColor="hover:text-blue-700" />
            <SocialIcon href="https://x.com/phishdefense?s=11&t=K7ypjeR8t0U7URuERIpVpQ" label="Twitter" icon={<FaTwitter />} hoverColor="hover:text-black" />
          </div>
        </div>

        {/* Features */}
        <FooterSection title="Features" links={[
          { label: "Email Phishing", href: "/email-phishing/" },
          { label: "SMShing", href: "/sms-phishing/" },
          { label: "Vishing", href: "/voice-phishing/" },
          { label: "WhatsApp", href: "/whatsapp-phishing/" },
          { label: "Phishing Reporter", href: "/phishing-reporter/" },
          { label: "Awareness Training", href: "/awareness-training/" },
        ]} />

        {/* Company */}
        <FooterSection title="Company" links={[
          { label: "About Us", href: "/about-us/" },
          { label: "Partners", href: "/partner/" },
          { label: "Blogs", href: "/blogs/" },
        ]} />

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 text-lg">Contact</h4>
          <address className="not-italic text-[15px] leading-relaxed">
            <strong>Address:</strong><br />
            Sydney, Australia
          </address>
          <a
            href="mailto:hello@phishdefense.com"
            className="text-blue-600 hover:underline"
          >
            hello@phishdefense.com
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} PhishDefense. All rights reserved.
      </div>
    </footer>
  )
}

/* ===== Reusable Components ===== */

function FooterSection({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 text-lg mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="hover:underline hover:text-blue-600 transition"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({
  href,
  icon,
  label,
  hoverColor,
}: {
  href: string
  icon: ReactNode
  label: string
  hoverColor: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`text-[18px] transition ${hoverColor}`}
    >
      {icon}
    </Link>
  )
}
