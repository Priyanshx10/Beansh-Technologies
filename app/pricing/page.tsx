'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, ShoppingCart, Bot, Cog, Wrench } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const services = [
  {
    title: "Website Development",
    icon: <Globe className="h-12 w-12 text-amber-600 mb-4" />,
    plans: [
      { name: "Basic", description: "1-5 Pages", price: "€800 - €2,000" },
      { name: "Standard", description: "5-15 Pages", price: "€2,400 - €4,800" },
      { name: "Premium", description: "15+ Pages", price: "€5,600+" },
    ],
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="h-12 w-12 text-amber-600 mb-4" />,
    plans: [
      { name: "Basic", description: "Single Platform", price: "€4,000 - €8,000" },
      { name: "Standard", description: "Multi-platform", price: "€9,600 - €20,000" },
      { name: "Premium", description: "Custom, Complex Apps", price: "€24,000+" },
    ],
  },
  {
    title: "E-Commerce Solutions",
    icon: <ShoppingCart className="h-12 w-12 text-amber-600 mb-4" />,
    plans: [
      { name: "Basic", description: "Up to 50 Products", price: "€2,000 - €4,000" },
      { name: "Standard", description: "50-500 Products", price: "€4,800 - €9,600" },
      { name: "Premium", description: "500+ Products", price: "€12,000+" },
    ],
  },
  {
    title: "AI Solutions",
    icon: <Bot className="h-12 w-12 text-amber-600 mb-4" />,
    plans: [
      { name: "Basic", description: "Chatbot Implementation", price: "€2,400 - €4,000" },
      { name: "Advanced", description: "AI Integration", price: "€8,000 - €16,000+" },
    ],
  },
  {
    title: "Custom Software Development",
    icon: <Cog className="h-12 w-12 text-amber-600 mb-4" />,
    plans: [
      { name: "Small", description: "Small Projects", price: "€4,000 - €12,000" },
      { name: "Medium", description: "Medium Projects", price: "€16,000 - €40,000" },
      { name: "Enterprise", description: "Enterprise-level Projects", price: "€48,000+" },
    ],
  },
  {
    title: "Maintenance & Support",
    icon: <Wrench className="h-12 w-12 text-amber-600 mb-4" />,
    plans: [
      { name: "Basic", description: "Up to 5 hours/month", price: "€240 - €400/month" },
      { name: "Standard", description: "Up to 20 hours/month", price: "€800 - €2,000/month" },
      { name: "Premium", description: "Unlimited", price: "€4,000+/month" },
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      <div className="container mx-auto px-6 py-20">
        <motion.h1
          className="text-5xl font-serif font-bold mb-12 mt-10 text-center text-amber-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Premium Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8 text-center">
                <div className="flex justify-center">{service.icon}</div>
                <h2 className="text-2xl font-serif font-semibold text-amber-800 mt-4">{service.title}</h2>
                <div className="mt-6 space-y-6">
                  {service.plans.map((plan) => (
                    <div key={plan.name} className="border-t border-amber-200 pt-4">
                      <h3 className="text-lg font-medium text-gray-800">{plan.name}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                      <p className="text-amber-600 font-bold text-lg mt-2">{plan.price}</p>
                    </div>
                  ))}
                </div>
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
          <p className="text-xl text-gray-700 mb-8 font-light">
            Not sure what you need? We offer bespoke solutions tailored to your business requirements.
          </p>
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-full text-lg shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Link href="/contact">
              Get a Custom Quote
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}