"use client"

import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Subscribing...')
    
    // Here you would typically send the email to your backend or newsletter service
    // This is a mock API call
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('Thank you for subscribing!')
      setEmail('')
    } catch (error) {
      setStatus('An error occurred. Please try again.')
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
      <p className="text-indigo-100 mb-6">Subscribe to our newsletter for the latest AI insights and updates.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-indigo-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Subscribe
          </button>
        </div>
        {status && <p className="text-white text-sm mt-2">{status}</p>}
      </form>
    </div>
  )
}

export default Newsletter