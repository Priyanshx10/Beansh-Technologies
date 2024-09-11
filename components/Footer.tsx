import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300">
              Beansh AI Technologies
            </h3>
            <p className="text-sm text-gray-200">
              Revolutionizing the future with state-of-the-art AI solutions.
            </p>
            <p className="text-xs text-gray-300">
              © {currentYear} Beansh AI Technologies. All rights reserved.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-pink-300">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-200 hover:text-pink-300 transition duration-300 ease-in-out">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-pink-300">Connect With Us</h4>
            <div className="flex space-x-5">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-200 hover:text-pink-300 transition duration-300 ease-in-out"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3 text-gray-200">Stay updated with our newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-indigo-800 text-white px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-400 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-r-md transition duration-300 ease-in-out"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
