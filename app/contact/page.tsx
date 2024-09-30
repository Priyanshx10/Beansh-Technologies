/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react';
import { FaComments, FaNewspaper, FaEnvelope, FaUser, FaPaperPlane, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import LiveChat from '../../components/LiveChat';
import Newsletter from '../../components/Newsletter';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatusMessage('Failed to send the message. Try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 text-green-800">
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          className="text-7xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 tracking-tight pt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let&apos;s Connect
        </motion.h1>

        <motion.p
          className="text-2xl text-center mb-16 text-green-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We&apos;re excited to hear from you. Reach out and let&apos;s create something amazing together.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-10 text-green-700">Send Us a Message</h2>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="relative">
                <label htmlFor="name" className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-green-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  placeholder="Your name"
                  required
                />
                <FaUser className="absolute top-4 right-4 text-green-400" />
              </div>
              <div className="relative">
                <label htmlFor="email" className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-green-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  placeholder="your@email.com"
                  required
                />
                <FaEnvelope className="absolute top-4 right-4 text-green-400" />
              </div>
              <div className="relative">
                <label htmlFor="message" className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-green-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-6 py-4 border-2 border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-5 px-8 rounded-xl text-xl font-semibold hover:from-green-700 hover:to-green-800 transition duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane className="mr-3" />
                Send Message
              </motion.button>
            </form>
            {statusMessage && <p className="mt-4 text-center text-green-600">{statusMessage}</p>}
          </motion.div>

          <motion.div 
            className="space-y-10"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 flex items-center">
                <FaComments className="mr-3" /> Live Chat
              </h3>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl">
                <LiveChat />
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 flex items-center">
                <FaNewspaper className="mr-3" /> Newsletter Signup
              </h3>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl">
                <Newsletter />
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-lg">
                  <FaMapMarkerAlt className="text-green-600 mr-4 text-2xl" />
                  <span>Nexus Treasure Island Mall, Indore, India</span>
                </li>
                <li className="flex items-center text-lg">
                  <FaPhone className="text-green-600 mr-4 text-2xl" />
                  <span>+91 (700) 056-6395</span>
                </li>
                <li className="flex items-center text-lg">
                  <FaEnvelope className="text-green-600 mr-4 text-2xl" />
                  <span>priyanshyadav1012@gmail.com</span>
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