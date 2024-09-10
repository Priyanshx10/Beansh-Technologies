import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const socialMedia = [
    { name: 'Facebook', url: 'https://facebook.com/aisolutions', icon: <FaFacebook /> },
    { name: 'Twitter', url: 'https://twitter.com/aisolutions', icon: <FaTwitter /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/aisolutions', icon: <FaLinkedin /> },
    { name: 'Instagram', url: 'https://instagram.com/aisolutions', icon: <FaInstagram /> },
  ];

  const termsAndPolicies = [
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Cookie Policy', url: '/cookies' },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
            <p className="mb-4">Empowering businesses with cutting-edge AI technologies.</p>
            <div className="flex space-x-4">
              {socialMedia.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-200 transition duration-300"
                >
                  <span className="sr-only">{platform.name}</span>
                  <div className="w-6 h-6">{platform.icon}</div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-indigo-200 transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-indigo-200 transition duration-300">About</a></li>
              <li><a href="/services" className="hover:text-indigo-200 transition duration-300">Services</a></li>
              <li><a href="/contact" className="hover:text-indigo-200 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {termsAndPolicies.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="hover:text-indigo-200 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:contact@aisolutions.com" className="hover:text-indigo-200 transition duration-300">contact@aisolutions.com</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 AI Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-400 text-center">
          <p>&copy; {new Date().getFullYear()} AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer