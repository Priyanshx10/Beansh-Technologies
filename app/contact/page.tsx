'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Newspaper, Mail, User, Send, MapPin, Phone } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import LiveChat from '@/components/LiveChat'
import Newsletter from '@/components/Newsletter'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [statusMessage, setStatusMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatusMessage('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatusMessage('Failed to send the message. Please try again later.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatusMessage('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 text-gray-900">
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          className="text-6xl font-serif font-bold mb-8 text-center text-amber-800 tracking-tight pt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let&apos;s Connect
        </motion.h1>

        <motion.p
          className="text-2xl text-center mb-16 text-gray-700 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We&apos;re excited to hear from you. Reach out and let&apos;s create something extraordinary together.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-10 text-amber-800">Send Us a Message</h2>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <div className="relative">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Your name"
                    required
                  />
                  <User className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="your@email.com"
                    required
                  />
                  <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Your message here..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-8 rounded-xl text-xl font-semibold transition duration-300 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
            {statusMessage && <p className="mt-4 text-center text-amber-600">{statusMessage}</p>}
          </motion.div>

          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-serif font-bold mb-6 text-amber-800 flex items-center">
                <MessageSquare className="mr-3 h-8 w-8" /> Live Chat
              </h3>
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl">
                <LiveChat />
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-serif font-bold mb-6 text-amber-800 flex items-center">
                <Newspaper className="mr-3 h-8 w-8" /> Newsletter Signup
              </h3>
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl">
                <Newsletter />
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-serif font-bold mb-6 text-amber-800">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-lg">
                  <MapPin className="text-amber-600 mr-4 h-6 w-6" />
                  <span>Nexus Treasure Island Mall, Indore, India</span>
                </li>
                <li className="flex items-center text-lg">
                  <Phone className="text-amber-600 mr-4 h-6 w-6" />
                  <span>+91 (700) 056-6395</span>
                </li>
                <li className="flex items-center text-lg">
                  <Mail className="text-amber-600 mr-4 h-6 w-6" />
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