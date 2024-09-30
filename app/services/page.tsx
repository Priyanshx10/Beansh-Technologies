'use client'

import React, { useState } from 'react'
import { FaGlobe, FaMobileAlt, FaRobot, FaShoppingCart, FaCogs, FaTools } from 'react-icons/fa'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: "Website Development",
      icon: FaGlobe,
      description: "Crafting sleek, responsive designs for modern web experiences that engage and convert.",
      background: '/AI.jpg',
      caseStudy: "Increased client's online presence by 200% through an intuitive, mobile-first design."
    },
    {
      title: "Mobile App Development",
      icon: FaMobileAlt,
      description: "Building powerful iOS and Android applications tailored to your unique business needs.",
      background: '/mobile.jpg',
      caseStudy: "Developed a fitness app with over 1 million downloads and 4.8 star rating."
    },
    {
      title: "E-Commerce Solutions",
      icon: FaShoppingCart,
      description: "Comprehensive online store solutions with secure payment gateways and smart inventory management.",
      background: '/multiple.jpg',
      caseStudy: "Boosted client's online sales by 150% with an optimized e-commerce platform."
    },
    {
      title: "AI Solutions",
      icon: FaRobot,
      description: "Implementing cutting-edge AI: chatbots, recommendation systems, and intelligent data analysis.",
      background: '/music.jpg',
      caseStudy: "Reduced customer service costs by 40% with an AI-powered chatbot solution."
    },
    {
      title: "Custom Software Development",
      icon: FaCogs,
      description: "Delivering bespoke software solutions to streamline operations for businesses of all sizes.",
      background: '/arm.jpg',
      caseStudy: "Increased operational efficiency by 60% with a custom ERP system."
    },
    {
      title: "Maintenance & Support",
      icon: FaTools,
      description: "Providing robust, ongoing support and maintenance to ensure your systems run flawlessly.",
      background: '/women.jpg',
      caseStudy: "Achieved 99.99% uptime for client's mission-critical applications."
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-600 mb-8 sm:mb-16 text-center leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-green-700">Services</span>
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group"
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={service.background}
                  alt={`${service.title} Background`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900 opacity-70"></div>
              </div>
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                <service.icon className="text-4xl sm:text-5xl text-green-400 mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white">{service.title}</h2>
                <p className="text-green-100 text-sm sm:text-base mb-4 flex-grow">{service.description}</p>
                <AnimatePresence>
                  {hoveredService === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">Case Study</h3>
                      <p className="text-green-100 text-sm">{service.caseStudy}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 inline-flex items-center text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Services
            <svg className="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage
