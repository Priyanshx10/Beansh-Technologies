'use client'

import React from 'react'
import { FaComments, FaNewspaper, FaEnvelope, FaUser, FaPaperPlane, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import LiveChat from '../../components/LiveChat'
import Newsletter from '../../components/Newsletter'
import { motion } from 'framer-motion'

const ContactPage = () => {
  // Remove the unused fadeIn object
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-indigo-600">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-6xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in Touch
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-16 text-indigo-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We&apos;re here to help! Reach out to us for any inquiries or support.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-indigo-600">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-indigo-600">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" placeholder="Your name" required />
                <FaUser className="absolute top-3 right-3 text-indigo-400" />
              </div>
              <div className="relative">
                <label htmlFor="email" className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-indigo-600">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" placeholder="your@email.com" required />
                <FaEnvelope className="absolute top-3 right-3 text-indigo-400" />
              </div>
              <div className="relative">
                <label htmlFor="message" className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-indigo-600">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" placeholder="Your message here..." required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center">
                <FaComments className="mr-2" /> Live Chat
              </h3>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg">
                <LiveChat />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center">
                <FaNewspaper className="mr-2" /> Newsletter Signup
              </h3>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg">
                <Newsletter />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-indigo-500 mr-3" />
                  <span>123 AI Street, Tech City, 12345</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-indigo-500 mr-3" />
                  <span>+1 (123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-indigo-500 mr-3" />
                  <span>contact@beansh.ai</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage