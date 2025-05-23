'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleDropdown = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdownName)
    }
  }

  const mainMenuItems1 = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
    { href: '/rates-and-quotes', label: 'Rates & Quotes' },
    { href: '/services', label: 'Services' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/links', label: 'Links' },
    { href: '/blog', label: 'Blog' },
    { href: '/style-guide', label: 'Style Guide' },
  ]

  const legalMenuItems = [
    { href: '/terms', label: 'Terms and Conditions' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-950/60 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`flex justify-between items-start ${isScrolled ? 'h-20' : 'h-16'}`}>
          {/* Logo - reduced by 30% and with no gap at top */}
          <Link href="/" className="flex items-start pt-0 mt-0">
            <div className="w-[126px] md:w-[140px] lg:w-[168px] h-auto">
              <Image 
                src="/images/logos/Logo Banner TOP.png" 
                alt="Angel Gabriel Aeronautics" 
                width={168}
                height={34}
                className={`opacity-90 ${isScrolled ? 'brightness-200' : ''}`}
                style={{
                  filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5))',
                  width: '100%',
                  height: 'auto',
                  marginTop: 0
                }}
                priority
              />
            </div>
          </Link>

          {/* Empty space to maintain flex layout */}
          <div className="flex-grow"></div>

          {/* Hamburger Menu Button - 100% larger and black */}
          <button
            className="p-2 mt-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-12 h-12 flex flex-col justify-around">
              <span className={`block h-1 w-full transform transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-black'} ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block h-1 w-full transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-black'} ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-1 w-full transform transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-black'} ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ag-neutral-900/80 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-ag-cream shadow-xl overflow-y-auto z-50"
            >
              <div className="p-5 border-b border-ag-neutral-200 flex justify-between items-center">
                <h2 className="text-xl font-light font-heading text-text-black">Menu</h2>
                <button
                  className="p-2"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-5">
                <div className="flex flex-col space-y-0">
                  {mainMenuItems1.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-text-black hover:text-secondary-dark transition-colors duration-300 py-3 border-b border-ag-neutral-100 font-sans"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {/* Legal Dropdown */}
                  <div className="border-b border-ag-neutral-100">
                    <button 
                      className="w-full text-left flex items-center justify-between text-text-black hover:text-secondary-dark py-3 font-sans"
                      onClick={() => toggleDropdown('legal')}
                    >
                      <span>Legal</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'legal' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'legal' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="py-2 pl-4"
                        >
                          {legalMenuItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-sm text-text-black hover:text-secondary-dark font-sans"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="pt-6 pb-2">
                    <Link
                      href="/rates-and-quotes"
                      className="bg-black text-white px-8 py-4 rounded-md block text-center hover:bg-gray-900 transition-colors duration-300 font-medium font-sans"
                      onClick={() => setIsOpen(false)}
                    >
                      Request a Quote
                    </Link>
                  </div>
                  
                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-ag-neutral-100">
                    <a href="https://www.facebook.com/AngelGabrielAeronautics" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="Facebook">
                      <FaFacebook size={24} />
                    </a>
                    <a href="https://x.com/AngelGabrielAir" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="X (formerly Twitter)">
                      <FaXTwitter size={24} />
                    </a>
                    <a href="https://www.instagram.com/angel_gabriel_air" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="Instagram">
                      <FaInstagram size={24} />
                    </a>
                    <a href="https://www.youtube.com/user/AngelGabrielAero" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="YouTube">
                      <FaYoutube size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/angel-gabriel-aeronautics/" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="LinkedIn">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://za.pinterest.com/angelgabrielaeronautics" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="Pinterest">
                      <FaPinterest size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation 