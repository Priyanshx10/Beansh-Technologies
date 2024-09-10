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
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-bold text-blue-700 mb-16 text-center">
        Our Services
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <service.icon className="text-4xl text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-blue-800">{service.title}</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
            <a 
              href={`#case-study-${index + 1}`}
              className="text-green-600 hover:text-green-800 transition-colors duration-300 flex items-center text-lg font-medium"
            >
              View Case Study
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a 
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-flex items-center text-xl font-semibold shadow-lg hover:shadow-xl"
        >
          Explore All Services
          <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ServicesPage