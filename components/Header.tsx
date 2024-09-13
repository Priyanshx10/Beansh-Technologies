'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaCog, FaTag, FaInfoCircle, FaEnvelope, FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa'
import { BsCircleFill } from 'react-icons/bs'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/0 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } ${isHovered ? 'bg-opacity-20' : 'bg-opacity-0'}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <motion.button
            className="text-white hover:text-red-400 transition-colors duration-300 mr-4 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-3xl font-bold hover:text-green-400 transition-all duration-300 flex items-center">
              <BsCircleFill className="mr-4 text-4xl text-white" />
              <span className="text-white">
                Beansh AI
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="flex items-center space-x-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-green-800 border-2 border-green-500 rounded-full py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full py-3 px-8 flex items-center transition-colors duration-300"
          >
            <FaUser className="mr-3" />
            Login
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-gradient-to-br from-green-400 to-green-600 shadow-2xl overflow-y-auto"
          >
            <div className="container mx-auto px-8 py-16 h-full flex flex-col justify-between">
              <nav className="flex-grow mt-16">
                <ul className="space-y-10">
                  {navItems.map((item, index) => (
                    <motion.li key={index} 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href} 
                        className="text-white hover:text-green-200 transition-colors duration-300 flex items-center text-2xl font-medium group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="mr-5 text-3xl group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative">
                          {item.text}
                          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="text-center text-white text-xl mt-16">
                © 2023 Beansh AI. All rights reserved.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
    </motion.header>
  )
}

export default Header