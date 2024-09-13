'use client'

import React from 'react'
import { FaGlobe, FaMobileAlt, FaShoppingCart, FaRobot, FaCogs, FaTools } from 'react-icons/fa'
import { motion } from 'framer-motion'

const PricingPage = () => {
  const services = [
    {
      title: "Website Development",
      icon: <FaGlobe className="text-5xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "1-5 Pages", price: "€1,000 - €2,500" },
        { name: "Standard", description: "5-15 Pages", price: "€2,500 - €5,000" },
        { name: "Premium", description: "15+ Pages", price: "€5,000+" },
      ],
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-5xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Single Platform", price: "€5,000 - €10,000" },
        { name: "Standard", description: "Multi-platform", price: "€10,000 - €25,000" },
        { name: "Premium", description: "Custom, Complex Apps", price: "€25,000+" },
      ],
    },
    {
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart className="text-5xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Up to 50 Products", price: "€2,500 - €5,000" },
        { name: "Standard", description: "50-500 Products", price: "€5,000 - €10,000" },
        { name: "Premium", description: "500+ Products", price: "€10,000+" },
      ],
    },
    {
      title: "AI Solutions",
      icon: <FaRobot className="text-5xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Chatbot Implementation", price: "€3,000 - €5,000" },
        { name: "Advanced", description: "AI Integration", price: "€10,000 - €20,000+" },
      ],
    },
    {
      title: "Custom Software Development",
      icon: <FaCogs className="text-5xl text-green-600 mb-4" />,
      plans: [
        { name: "Small", description: "Small Projects", price: "€5,000 - €15,000" },
        { name: "Medium", description: "Medium Projects", price: "€15,000 - €50,000" },
        { name: "Enterprise", description: "Enterprise-level Projects", price: "€50,000+" },
      ],
    },
    {
      title: "Maintenance & Support",
      icon: <FaTools className="text-5xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Up to 5 hours/month", price: "€300 - €500/month" },
        { name: "Standard", description: "Up to 20 hours/month", price: "€1,000 - €2,500/month" },
        { name: "Premium", description: "Unlimited", price: "€5,000+/month" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 py-20">
        <motion.h1 
          className="text-6xl font-extrabold mb-16 text-center text-green-800 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services and Pricing
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-green-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex justify-center">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-6 text-center text-green-800">{service.title}</h2>
                <div className="space-y-6">
                  {service.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="border-t border-green-200 pt-4">
                      <h3 className="text-xl font-semibold text-green-700">{plan.name}</h3>
                      <p className="text-gray-600 mt-2">{plan.description}</p>
                      <p className="text-2xl font-bold mt-3 text-green-600">{plan.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-3xl mb-10 text-green-800 font-semibold">Looking for a tailored solution? We&apos;re ready to assist!</p>
          <a 
            href="/contact"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 text-xl font-bold shadow-lg hover:shadow-xl inline-block"
          >
            Request a Personalized Quote
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default PricingPage