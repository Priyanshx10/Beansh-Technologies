import React from 'react'
import { FaGlobe, FaMobileAlt, FaRobot, FaShoppingCart, FaCogs, FaTools } from 'react-icons/fa'

const ServicesPage = () => {
  const services = [
    {
      title: "Website Development",
      icon: FaGlobe,
      description: "Sleek designs and responsive layouts for modern web experiences.",
    },
    {
      title: "Mobile App Development",
      icon: FaMobileAlt,
      description: "iOS and Android app development tailored to your business needs.",
    },
    {
      title: "E-Commerce Solutions",
      icon: FaShoppingCart,
      description: "Complete online store solutions with payment gateways and inventory management.",
    },
    {
      title: "AI Solutions",
      icon: FaRobot,
      description: "Chatbots, recommendation systems, and intelligent data analysis.",
    },
    {
      title: "Custom Software Development",
      icon: FaCogs,
      description: "Tailored software solutions for businesses of all sizes.",
    },
    {
      title: "Maintenance & Support",
      icon: FaTools,
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-extrabold text-indigo-800 mb-20 text-center leading-tight">
          Our <span className="text-purple-600">Services</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4 group-hover:bg-indigo-200 transition-colors duration-300">
                  <service.icon className="text-3xl text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-indigo-800 group-hover:text-purple-700 transition-colors duration-300">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
              <a 
                href={`#case-study-${index + 1}`}
                className="text-purple-600 hover:text-purple-800 transition-colors duration-300 flex items-center text-lg font-semibold group"
              >
                View Case Study
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a 
            href="/contact"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center text-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Services
            <svg className="w-6 h-6 ml-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage