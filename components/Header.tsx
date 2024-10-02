/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Settings, Tag, Info, Mail, Menu, X } from 'lucide-react'
import { SignInButton, useAuth, UserButton } from '@clerk/nextjs'
import { useMediaQuery } from 'react-responsive'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { isSignedIn } = useAuth()
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const navItems = [
    { href: '/', text: 'Home', icon: Home },
    { href: '/services', text: 'Services', icon: Settings },
    { href: '/pricing', text: 'Pricing', icon: Tag },
    { href: '/about', text: 'About', icon: Info },
    { href: '/contact', text: 'Contact', icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClass = `fixed w-full z-50 transition-all duration-500 ${
    scrolled ? 'bg-amber-50/80 backdrop-blur-md shadow-lg' : 'bg-amber-50'
  } ${isHovered ? 'bg-opacity-90' : 'bg-opacity-70'}`

  return (
    <motion.header 
      className={headerClass}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center p-2 text-amber-800 hover:text-amber-600 transition-colors duration-300"
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.text}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-2xl sm:text-3xl font-serif font-bold hover:text-amber-600 transition-all duration-300 flex items-center">
              <span className="text-amber-800">Beenansh AI</span>
            </Link>
          </motion.div>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href={item.href} className="text-amber-800 hover:text-amber-600 transition-colors duration-300">
                {item.text}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <Button variant="outline" className="text-amber-800 border-amber-800 hover:bg-amber-100">
                Sign In
              </Button>
            </SignInButton>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
    </motion.header>
  )
}

export default Header