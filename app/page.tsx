'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, ShoppingCart, Bot, Cog, Wrench, ArrowRight, Quote, LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CountUp from 'react-countup'
import CEO from '../assets/CEO.jpg'

interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
  background: string;
}


const services = [
  {
    title: "Website Development",
    icon: Globe,
    description: "Sleek designs and responsive layouts for modern web experiences.",
    background: '/back.jpg',
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "iOS and Android app development tailored to your business needs.",
    background: '/mobile.jpg',
  },
  {
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    description: "Complete online store solutions with payment gateways and inventory management.",
    background: '/multiple.jpg',
  },
  {
    title: "AI Solutions",
    icon: Bot,
    description: "Chatbots, recommendation systems, and intelligent data analysis.",
    background: '/music.jpg',
  },
  {
    title: "Custom Software Development",
    icon: Cog,
    description: "Tailored software solutions for businesses of all sizes.",
    background: '/arm.jpg',
  },
  {
    title: "Maintenance & Support",
    icon: Wrench,
    description: "Ongoing support and maintenance to keep your systems running smoothly.",
    background: '/women.jpg',
  },
]

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <Card className="relative overflow-hidden group h-full">
    <Image
      src={service.background}
      alt={`${service.title} Background`}
      layout="fill"
      objectFit="cover"
      quality={100}
      className="opacity-10 group-hover:opacity-20 transition-opacity duration-300"
    />
    <CardContent className="relative z-10 p-6">
      <service.icon className="w-12 h-12 text-amber-600 mb-4" />
      <h3 className="text-2xl font-serif font-semibold mb-4 text-amber-800">{service.title}</h3>
      <p className="text-gray-600 text-lg">{service.description}</p>
    </CardContent>
  </Card>
)

interface MetricCardProps {
  end: number;
  suffix: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ end, suffix, label }) => (
  <Card>
    <CardContent className="p-6 text-center">
      <div className="text-5xl font-bold text-amber-600 mb-4">
        <CountUp end={end} suffix={suffix} duration={2.5} />
      </div>
      <p className="text-xl text-amber-800 font-serif">{label}</p>
    </CardContent>
  </Card>
)
export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/back.jpg"
          alt="Background image of a cityscape"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-amber-900 opacity-50 z-10"></div>
        <motion.div 
          className="relative z-20 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl font-serif font-bold mb-8">Revolutionize Your Business with AI</h1>
          <p className="text-2xl sm:text-3xl mb-12 opacity-90 font-light">Unlock the power of artificial intelligence for your enterprise</p>
          <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-amber-100 px-10 py-6 rounded-full text-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl">
            <Link href="/about">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <h2 className="text-5xl sm:text-6xl font-serif font-semibold mb-20 text-center text-amber-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-amber-100 to-white rounded-3xl mx-6">
        <h2 className="text-5xl sm:text-6xl font-serif font-semibold mb-20 text-center text-amber-800">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <MetricCard end={98} suffix="%" label="Client Satisfaction" />
          <MetricCard end={100} suffix="+" label="Projects Completed" />
          <MetricCard end={2} suffix="M+" label="Data Points Processed" />
          <MetricCard end={10} suffix="+" label="Industries Served" />
        </div>
        <div className="text-center mt-20">
          <Button asChild variant="link" size="lg" className="text-amber-600 hover:text-amber-800 font-semibold text-2xl">
            <Link href="/about">
              Learn More About Our Impact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 text-white rounded-3xl my-24 shadow-2xl mx-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-8 leading-tight">What Our Clients Say</h2>
              <blockquote className="text-xl sm:text-2xl font-light leading-relaxed mb-8">
                <Quote className="h-8 w-8 text-amber-300 mb-4 opacity-50" />
                <p className="italic">AI Solutions transformed our business, increasing efficiency by 300% and opening new revenue streams we never thought possible.</p>
                <Quote className="h-8 w-8 text-amber-300 mt-4 opacity-50 float-right" />
              </blockquote>
              <div className="flex items-center">
                <Image 
                  src={CEO}
                  alt="Priyansh Yadav" 
                  width={80} 
                  height={80} 
                  className="rounded-full border-4 border-white shadow-lg" 
                />
                <div className="ml-4">
                  <p className="font-bold text-xl">Priyansh Yadav</p>
                  <p className="text-amber-300">CEO, Beenansh AI Technologies</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <Image 
                src='/AI.jpg'
                alt="AI visualization" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
              <Image 
                src="/mobile.jpg"
                alt="Mobile app development" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
              <Image 
                src="/multiple.jpg"
                alt="Multiple devices" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
              <Image 
                src="/music.jpg"
                alt="AI in music" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}