'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Globe, Smartphone, ShoppingCart, Bot, Cog, Wrench, ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Website Development",
    icon: Globe,
    description: "Crafting sleek, responsive designs for modern web experiences that engage and convert.",
    background: '/AI.jpg',
    caseStudy: "Increased client's online presence by 200% through an intuitive, mobile-first design."
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Building powerful iOS and Android applications tailored to your unique business needs.",
    background: '/mobile.jpg',
    caseStudy: "Developed a fitness app with over 1 million downloads and 4.8 star rating."
  },
  {
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    description: "Comprehensive online store solutions with secure payment gateways and smart inventory management.",
    background: '/multiple.jpg',
    caseStudy: "Boosted client's online sales by 150% with an optimized e-commerce platform."
  },
  {
    title: "AI Solutions",
    icon: Bot,
    description: "Implementing cutting-edge AI: chatbots, recommendation systems, and intelligent data analysis.",
    background: '/music.jpg',
    caseStudy: "Reduced customer service costs by 40% with an AI-powered chatbot solution."
  },
  {
    title: "Custom Software Development",
    icon: Cog,
    description: "Delivering bespoke software solutions to streamline operations for businesses of all sizes.",
    background: '/arm.jpg',
    caseStudy: "Increased operational efficiency by 60% with a custom ERP system."
  },
  {
    title: "Maintenance & Support",
    icon: Wrench,
    description: "Providing robust, ongoing support and maintenance to ensure your systems run flawlessly.",
    background: '/women.jpg',
    caseStudy: "Achieved 99.99% uptime for client's mission-critical applications."
  },
]

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-amber-800 mb-8 sm:mb-16 text-center leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Premium <span className="text-amber-600">Services</span>
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Card className="relative overflow-hidden group h-full">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={service.background}
                    alt={`${service.title} Background`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900 opacity-70"></div>
                </div>
                <CardContent className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                  <service.icon className="w-12 h-12 text-amber-400 mb-4" />
                  <h2 className="text-xl sm:text-2xl font-serif font-bold mb-3 text-white">{service.title}</h2>
                  <p className="text-amber-100 text-sm sm:text-base mb-4 flex-grow">{service.description}</p>
                  <AnimatePresence>
                    {hoveredService === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg"
                      >
                        <h3 className="text-lg font-serif font-semibold text-white mb-2">Case Study</h3>
                        <p className="text-amber-100 text-sm">{service.caseStudy}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Link href="/contact">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}