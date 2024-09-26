'use client'

import React, { useState } from 'react'
import { FaGlobe, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Link from 'next/link'

const PricingPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      title: "Website Development",
      icon: <FaGlobe className="text-3xl text-blue-600" />,
      plans: [
        { name: "Basic", description: "1-5 Pages", price: "€800 - €2,000" },
        { name: "Standard", description: "5-15 Pages", price: "€2,400 - €4,800" },
        { name: "Premium", description: "15+ Pages", price: "€5,600+" },
      ],
    },
    // ... (other services remain the same)
  ]

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-900">Our Services and Pricing</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our range of services tailored to meet your business needs. Choose the plan that best fits your project requirements.
        </p>
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggleService(index)}
                className="w-full p-6 flex items-center justify-between hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="flex items-center">
                  <div className="mr-4">{service.icon}</div>
                  <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
                </div>
                {expandedService === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
              </button>
              {expandedService === index && (
                <div className="p-6 bg-blue-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="bg-white p-6 rounded-lg shadow transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <p className="text-2xl font-bold text-blue-900">{plan.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl mb-8 text-gray-800">Looking for a tailored solution?</p>
          <Link 
            href="/contact"
            className="bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl inline-block"
          >
            Request a Personalized Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PricingPage