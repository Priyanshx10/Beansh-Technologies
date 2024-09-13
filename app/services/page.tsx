'use client'

import React from 'react'
import { FaGlobe, FaMobileAlt, FaRobot, FaShoppingCart, FaCogs, FaTools } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WebsiteBg from '../../public/AI.jpg'
import MobileBg from '../../public/mobile.jpg'
import EcomBg from '../../public/multiple.jpg'
import AISolBg from '../../public/music.jpg'
import CustomBg from '../../public/arm.jpg'
import MaintenanceBg from '../../public/women.jpg'

const ServicesPage = () => {
  const services = [
    {
      title: "Website Development",
      icon: FaGlobe,
      description: "Sleek designs and responsive layouts for modern web experiences.",
      background: WebsiteBg,
    },
    {
      title: "Mobile App Development",
      icon: FaMobileAlt,
      description: "iOS and Android app development tailored to your business needs.",
      background: MobileBg,
    },
    {
      title: "E-Commerce Solutions",
      icon: FaShoppingCart,
      description: "Complete online store solutions with payment gateways and inventory management.",
      background: EcomBg,
    },
    {
      title: "AI Solutions",
      icon: FaRobot,
      description: "Chatbots, recommendation systems, and intelligent data analysis.",
      background: AISolBg,
    },
    {
      title: "Custom Software Development",
      icon: FaCogs,
      description: "Tailored software solutions for businesses of all sizes.",
      background: CustomBg,
    },
    {
      title: "Maintenance & Support",
      icon: FaTools,
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
      background: MaintenanceBg,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-28">
      <div className="container mx-auto px-6 ">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-green-600 mb-16 text-center leading-tight "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-green-700 ">Services</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={service.background}
                alt={`${service.title} Background`}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-5 group-hover:opacity-10 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <service.icon className="text-4xl text-green-600 mb-4" />
                <h2 className="text-2xl font-bold mb-3 text-green-800">{service.title}</h2>
                <p className="text-gray-700 text-base mb-4">{service.description}</p>
                <motion.a 
                  href={`#case-study-${index + 1}`}
                  className="inline-block text-green-600 hover:text-green-800 transition-colors duration-300 text-lg font-semibold group"
                  whileHover={{ x: 5 }}
                >
                  View Case Study
                  <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a 
            href="/contact"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 inline-flex items-center text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Services
            <svg className="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage