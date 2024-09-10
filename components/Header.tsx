'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaCog, FaTag, FaInfoCircle, FaEnvelope, FaRocket, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { href: '/', text: 'Home', icon: FaHome },
    { href: '/services', text: 'Services', icon: FaCog },
    { href: '/pricing', text: 'Pricing', icon: FaTag },
    { href: '/about', text: 'About', icon: FaInfoCircle },
    { href: '/contact', text: 'Contact', icon: FaEnvelope },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition-colors duration-300 flex items-center">
            <FaRocket className="mr-2 text-3xl" />
            AI Solutions
          </Link>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href={item.href} className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center text-lg font-medium">
                  <item.icon className="mr-2" />
                  {item.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          className="md:hidden text-blue-700 hover:text-blue-900 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="container mx-auto px-6 py-6">
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href={item.href} className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center text-xl font-medium">
                      <item.icon className="mr-3 text-2xl" />
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header