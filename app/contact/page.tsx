import React from 'react'
import { FaComments, FaNewspaper } from 'react-icons/fa'
import LiveChat from '../../components/LiveChat'
import Newsletter from '../../components/Newsletter'

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-indigo-600">
      <h1 className="text-6xl font-extrabold mb-16 text-center text-indigo-600 tracking-tight">Get in Touch</h1>
      
      <div className="mb-16">
        <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold mb-8 text-indigo-600">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-105">Send Message</button>
          </form>
        </div>
      </div>
      
      {/* Separate LiveChat and Newsletter sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold mb-6 text-indigo-600 flex items-center">
            <FaComments className="mr-2" /> Live Chat
          </h3>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <LiveChat />
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold mb-6 text-indigo-600 flex items-center">
            <FaNewspaper className="mr-2" /> Newsletter Signup
          </h3>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage