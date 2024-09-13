import React from 'react'
import { FaRocket, FaGlobe, FaMobileAlt, FaShoppingCart, FaRobot, FaCogs, FaTools, FaQuoteLeft, FaQuoteRight, FaUser, FaBriefcase } from 'react-icons/fa'
import Image from 'next/image'
import Profile from '../assets/CEO.jpg'
import BackgroundImage from '../public/back.jpg' // Make sure to add this image to your assets folder

const HomePage = () => {
  const services = [
    {
      title: "Website Development",
      icon: <FaGlobe className="text-5xl text-green-600 mb-4" />,
      description: "Sleek designs and responsive layouts for modern web experiences.",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-5xl text-green-500 mb-4" />,
      description: "iOS and Android app development tailored to your business needs.",
    },
    {
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart className="text-5xl text-green-600 mb-4" />,
      description: "Complete online store solutions with payment gateways and inventory management.",
    },
    {
      title: "AI Solutions",
      icon: <FaRobot className="text-5xl text-green-500 mb-4" />,
      description: "Chatbots, recommendation systems, and intelligent data analysis.",
    },
    {
      title: "Custom Software Development",
      icon: <FaCogs className="text-5xl text-green-600 mb-4" />,
      description: "Tailored software solutions for businesses of all sizes.",
    },
    {
      title: "Maintenance & Support",
      icon: <FaTools className="text-5xl text-green-500 mb-4" />,
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
    },
  ]

  const clients = [
    { name: "TechCorp", icon: <FaUser className="text-6xl text-green-600" /> },
    { name: "InnovateTech", icon: <FaBriefcase className="text-6xl text-green-500" /> },
    { name: "FutureSystems", icon: <FaCogs className="text-6xl text-green-600" /> },
    { name: "GlobalAI", icon: <FaRobot className="text-6xl text-green-500" /> },
    { name: "SmartSolutions", icon: <FaTools className="text-6xl text-green-600" /> },
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
            <div key={index} className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4 text-green-800">{service.title}</h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 bg-gradient-to-r from-green-100 to-white rounded-3xl mx-6">
        <h2 className="text-6xl font-semibold mb-20 text-center text-green-800">Trusted By Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-20">
          {clients.map((client, index) => (
            <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="w-[200px] h-[100px] flex items-center justify-center mb-6 bg-white rounded-2xl shadow-lg">
                {client.icon}
              </div>
              <p className="text-green-800 font-semibold text-xl">{client.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <a href="/case-studies" className="text-green-600 hover:text-green-800 font-semibold text-2xl inline-flex items-center transition-colors duration-300">
            View Our Case Studies
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-3xl my-24 shadow-2xl mx-6">
        <div className="max-w-5xl mx-auto text-center px-8">
          <div className="mb-16 transform -translate-y-20">
            <div className="bg-white rounded-full p-8 inline-block shadow-xl">
              <FaRocket className="text-8xl text-green-600" />
            </div>
          </div>
          <blockquote className="text-4xl font-light leading-relaxed mb-16 flex items-center">
            <FaQuoteLeft className="text-6xl text-green-300 mr-6" />
            <span>AI Solutions transformed our business, increasing efficiency by 300% and opening new revenue streams we never thought possible.</span>
            <FaQuoteRight className="text-6xl text-green-300 ml-6" />
          </blockquote>
          <div className="flex items-center justify-center">
            <Image src={Profile} alt="Priyansh Yadav" width={100} height={100} className="rounded-full mr-8 border-4 border-white" />
            <div className="text-left">
              <p className="font-bold text-3xl flex items-center">
                <FaUser className="mr-3 text-green-300" /> Priyansh Yadav
              </p>
              <p className="text-2xl text-green-200 flex items-center mt-2">
                <FaBriefcase className="mr-3 text-green-300" /> CEO of Beansh AI Technologies
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage