'use client'

import React from 'react'
import CountUp from 'react-countup'
import { FaGlobe, FaMobileAlt, FaShoppingCart, FaRobot, FaCogs, FaTools, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Profile from '../assets/CEO.jpg'
import BackgroundImage from '../public/back.jpg' 
import WebsiteBg from '../public/AI.jpg'
import MobileBg from '../public/mobile.jpg'
import EcomBg from '../public/multiple.jpg'
import AISolBg from '../public/music.jpg'
import CustomBg from '../public/arm.jpg'
import MaintenanceBg from '../public/women.jpg'

const HomePage = () => {
  const services = [
    {
      title: "Website Development",
      icon: <FaGlobe className="text-5xl text-green-600 mb-4" />,
      description: "Sleek designs and responsive layouts for modern web experiences.",
      background: WebsiteBg,
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-5xl text-green-500 mb-4" />,
      description: "iOS and Android app development tailored to your business needs.",
      background: MobileBg,
    },
    {
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart className="text-5xl text-green-600 mb-4" />,
      description: "Complete online store solutions with payment gateways and inventory management.",
      background: EcomBg,
    },
    {
      title: "AI Solutions",
      icon: <FaRobot className="text-5xl text-green-500 mb-4" />,
      description: "Chatbots, recommendation systems, and intelligent data analysis.",
      background: AISolBg,
    },
    {
      title: "Custom Software Development",
      icon: <FaCogs className="text-5xl text-green-600 mb-4" />,
      description: "Tailored software solutions for businesses of all sizes.",
      background: CustomBg,
    },
    {
      title: "Maintenance & Support",
      icon: <FaTools className="text-5xl text-green-500 mb-4" />,
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
      background: MaintenanceBg,
    },
  ]


  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={BackgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-green-600 opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-7xl font-bold mb-8 animate-pulse">Revolutionize Your Business with AI</h1>
          <p className="text-3xl mb-12 opacity-90">Unlock the power of artificial intelligence for your enterprise</p>
          <button className="bg-white text-green-600 px-10 py-4 rounded-full text-2xl font-semibold hover:bg-green-100 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-6xl font-semibold mb-20 text-center text-green-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2 overflow-hidden group">
              <Image
                src={service.background}
                alt={`${service.title} Background`}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-10 group-hover:opacity-20 transition-opacity duration-300"
              />
              <div className="relative z-10">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-4 text-green-800">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-24 bg-gradient-to-r from-green-100 to-white rounded-3xl mx-6">
        <h2 className="text-6xl font-semibold mb-20 text-center text-green-800">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-4">
              <CountUp end={98} suffix="%" duration={2.5} />
            </div>
            <p className="text-xl text-green-800">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-4">
              <CountUp end={100} suffix="+" duration={2.5} />
            </div>
            <p className="text-xl text-green-800">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-4">
              <CountUp end={2} suffix="M+" duration={2.5} />
            </div>
            <p className="text-xl text-green-800">Data Points Processed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-4">
              <CountUp end={10} suffix="+" duration={2.5} />
            </div>
            <p className="text-xl text-green-800">Industries Served</p>
          </div>
        </div>
        <div className="text-center mt-20">
          <Link href="/about" className="text-green-600 hover:text-green-800 font-semibold text-2xl inline-flex items-center transition-colors duration-300">
            Learn More About Our Impact
            <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white rounded-3xl my-24 shadow-2xl mx-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <h2 className="text-5xl font-bold mb-8 leading-tight">What Our Clients Say</h2>
              <blockquote className="text-2xl font-light leading-relaxed mb-8">
                <FaQuoteLeft className="text-4xl text-green-300 mb-4 opacity-50" />
                <p className="italic">AI Solutions transformed our business, increasing efficiency by 300% and opening new revenue streams we never thought possible.</p>
                <FaQuoteRight className="text-4xl text-green-300 mt-4 opacity-50 float-right" />
              </blockquote>
              <div className="flex items-center">
                <Image 
                  src={Profile} 
                  alt="Priyansh Yadav" 
                  width={80} 
                  height={80} 
                  className="rounded-full border-4 border-white shadow-lg" 
                />
                <div className="ml-4">
                  <p className="font-bold text-xl">Priyansh Yadav</p>
                  <p className="text-green-300">CEO, Beansh AI Technologies</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <Image 
                src={WebsiteBg}
                alt="Team Member 1" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
              <Image 
                src={MobileBg}
                alt="Team Member 2" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
              <Image 
                src={EcomBg}
                alt="Team Member 3" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
              <Image 
                src={AISolBg}
                alt="Team Member 4" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 to-green-500"></div>
      </section>
    </div>
  )
}

export default HomePage