'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const toggleMenu = () => setMenuOpen(prev => !prev)

  const isActive = (href: string) => pathname === href

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 backdrop-blur-sm bg-opacity-95 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" prefetch={false} className="flex items-center gap-3">
          <Image
            src="/logo.gif"
            alt="PhishDefense Logo"
            width={140}
            height={45}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 font-semibold text-sm text-gray-700 select-none">
          <NavItem href="/" label="Home" active={isActive('/')} />
          <Dropdown label="Features" active={pathname.startsWith('/awareness-training') || pathname.startsWith('/whatsapp-phishing') || pathname.startsWith('/email-phishing') || pathname.startsWith('/sms-phishing') || pathname.startsWith('/voice-phishing') || pathname.startsWith('/phishing-reporter')}>
            <DropdownLink href="/awareness-training" label="Security Awareness Training" />
            <DropdownLink href="/whatsapp-phishing" label="WhatsApp Phishing" />
            <DropdownLink href="/email-phishing" label="Email Phishing" />
            <DropdownLink href="/sms-phishing" label="SMShing" />
            <DropdownLink href="/voice-phishing" label="Vishing" />
            <DropdownLink href="/phishing-reporter" label="Phishing Reporter" />
          </Dropdown>
          <NavItem href="/partner" label="Partner" active={isActive('/partner')} />
          <Dropdown label="Resources" active={pathname.startsWith('/blogs') || isActive('/about-us')}>
            <DropdownLink href="/blogs" label="Blogs" />
            <DropdownLink href="/about-us" label="About Us" />
          </Dropdown>

        </nav>

        {/* CTA Button */}
        <Link
          href="/pricing"
          prefetch={false}
          className="hidden lg:inline-block text-sm bg-[#45c2a4] hover:bg-[#3db194] text-white px-6 py-2 rounded-md font-semibold transition-shadow shadow-md hover:shadow-lg"
          aria-label="Pricing page"
        >
          Pricing
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#45c2a4] rounded"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`lg:hidden fixed top-[64px] left-0 w-full bg-white shadow-lg border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out z-40 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col px-6 py-6 gap-5 font-semibold text-gray-700">
          <MobileNavItem href="/" label="Home" onClick={() => setMenuOpen(false)} active={isActive('/')} />
          <MobileDropdown label="Features" onClose={() => setMenuOpen(false)} active={pathname.startsWith('/awareness-training')}>
            <DropdownLinkMobile href="/awareness-training" label="Security Awareness Training" onClick={() => setMenuOpen(false)} />
            <DropdownLinkMobile href="/whatsapp-phishing" label="WhatsApp Phishing" onClick={() => setMenuOpen(false)} />
            <DropdownLinkMobile href="/email-phishing" label="Email Phishing" onClick={() => setMenuOpen(false)} />
            <DropdownLinkMobile href="/sms-phishing" label="SMShing" onClick={() => setMenuOpen(false)} />
            <DropdownLinkMobile href="/voice-phishing" label="Vishing" onClick={() => setMenuOpen(false)} />
            <DropdownLinkMobile href="/phishing-reporter" label="Phishing Reporter" onClick={() => setMenuOpen(false)} />
          </MobileDropdown>
          <MobileNavItem href="/partner" label="Partner" onClick={() => setMenuOpen(false)} active={isActive('/partner')} />
          <MobileDropdown label="Resources" onClose={() => setMenuOpen(false)} active={pathname.startsWith('/blogs') || isActive('/about-us')}>
            <DropdownLinkMobile href="/blogs" label="Blogs" onClick={() => setMenuOpen(false)} />
            <DropdownLinkMobile href="/about-us" label="About Us" onClick={() => setMenuOpen(false)} />
          </MobileDropdown>
          <Link
            href="/pricing"
            prefetch={false}
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#45c2a4] hover:bg-[#3db194] text-white px-6 py-2 rounded-md font-semibold text-center block shadow-md transition-shadow"
          >
            Pricing
          </Link>
        </div>
      </nav>
    </header>
  )
}

/* ============ Desktop Nav Items ============ */

function NavItem({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={`relative px-2 py-1 transition-colors hover:text-[#45c2a4] ${active ? 'text-[#45c2a4]' : 'text-gray-700'
        }`}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#45c2a4] rounded-full"></span>
      )}
    </Link>
  )
}

function Dropdown({
  label,
  children,
  active,
}: {
  label: string
  children: React.ReactNode
  active?: boolean
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
      onBlur={closeMenu}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 px-2 py-1 transition-colors hover:text-[#45c2a4] focus:outline-none ${active ? 'text-[#45c2a4]' : 'text-gray-700'
          }`}
      >
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>

      <div
        className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg p-3 transition-opacity duration-200 ease-in-out z-50 ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {children}
      </div>
    </div>
  )
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-3 py-1 rounded hover:bg-[#45c2a4] hover:text-white transition"
      prefetch={false}
    >
      {label}
    </Link>
  )
}

/* ============ Mobile Nav Items ============ */

function MobileNavItem({ href, label, onClick, active }: { href: string; label: string; onClick: () => void; active?: boolean }) {
  return (
    <Link
      href={href}
      prefetch={false}
      onClick={onClick}
      className={`block py-3 px-2 rounded transition-colors ${active ? 'bg-[#45c2a4] text-white' : 'hover:bg-gray-100 text-gray-700'
        }`}
    >
      {label}
    </Link>
  )
}

function MobileDropdown({ label, children, onClose, active }: { label: string; children: React.ReactNode; onClose: () => void; active?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <button
        className={`flex justify-between items-center w-full py-3 px-2 font-semibold transition-colors rounded focus:outline-none ${active ? 'bg-[#45c2a4] text-white' : 'hover:bg-gray-100 text-gray-700'
          }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`${label}-mobile-submenu`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transform transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        id={`${label}-mobile-submenu`}
        className={`pl-4 mt-1 space-y-2 overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        {children}
      </div>
    </div>
  )
}

function DropdownLinkMobile({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      prefetch={false}
      onClick={onClick}
      className="block py-2 px-2 rounded hover:bg-[#45c2a4] hover:text-white transition"
    >
      {label}
    </Link>
  )
}
