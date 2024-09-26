import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialMedia = [
    { name: 'Facebook', url: 'https://facebook.com/aisolutions', icon: <FaFacebook /> },
    { name: 'Twitter', url: 'https://twitter.com/aisolutions', icon: <FaTwitter /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/aisolutions', icon: <FaLinkedin /> },
    { name: 'Instagram', url: 'https://instagram.com/aisolutions', icon: <FaInstagram /> },
  ]

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' },
  ]

  const termsAndPolicies = [
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Cookie Policy', url: '/cookies' },
  ]

  return (
    <footer className="bg-blue-700 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-white w-full my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Beenansh AI Solutions</h2>
            <p className="mb-4 text-blue-100">Empowering businesses with cutting-edge AI technologies.</p>
            <div className="flex space-x-4">
              {socialMedia.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition duration-300"
                  aria-label={`Visit our ${platform.name} page`}
                >
                  <div className="w-6 h-6">{platform.icon}</div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="hover:text-blue-200 transition duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {termsAndPolicies.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="hover:text-blue-200 transition duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2 flex-shrink-0" />
                <span>+91 (7000) 566-395</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 flex-shrink-0" />
                <a href="mailto:contact@aisolutions.com" className="hover:text-blue-200 transition duration-300 break-all">
                  PriyanshYadav1012@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                <span>123 AI Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400 text-center">
          <p className="text-blue-100">&copy; {currentYear} AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer