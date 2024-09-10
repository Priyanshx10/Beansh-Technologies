import React from 'react'
import { FaRocket, FaGlobe, FaMobileAlt, FaShoppingCart, FaRobot, FaCogs, FaTools, FaQuoteLeft, FaQuoteRight, FaUser, FaBriefcase } from 'react-icons/fa'
import Image from 'next/image'
import Profile from '../assets/CEO.jpg'

const HomePage = () => {
  const services = [
    {
      title: "Website Development",
      icon: <FaGlobe className="text-4xl text-blue-600 mb-4" />,
      description: "Sleek designs and responsive layouts for modern web experiences.",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-4xl text-green-600 mb-4" />,
      description: "iOS and Android app development tailored to your business needs.",
    },
    {
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart className="text-4xl text-purple-600 mb-4" />,
      description: "Complete online store solutions with payment gateways and inventory management.",
    },
    {
      title: "AI Solutions",
      icon: <FaRobot className="text-4xl text-red-600 mb-4" />,
      description: "Chatbots, recommendation systems, and intelligent data analysis.",
    },
    {
      title: "Custom Software Development",
      icon: <FaCogs className="text-4xl text-yellow-600 mb-4" />,
      description: "Tailored software solutions for businesses of all sizes.",
    },
    {
      title: "Maintenance & Support",
      icon: <FaTools className="text-4xl text-gray-600 mb-4" />,
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
    },
  ]

  const clients = [
    { name: "TechCorp", icon: <FaUser className="text-5xl text-blue-600" /> },
    { name: "InnovateTech", icon: <FaBriefcase className="text-5xl text-green-600" /> },
    { name: "FutureSystems", icon: <FaCogs className="text-5xl text-purple-600" /> },
    { name: "GlobalAI", icon: <FaRobot className="text-5xl text-red-600" /> },
    { name: "SmartSolutions", icon: <FaTools className="text-5xl text-yellow-600" /> },
  ]

  return (
    <div className="container mx-auto px-4 bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-800">Revolutionize Your Business with AI</h1>
        <p className="text-2xl mb-10 text-gray-600">Unlock the power of artificial intelligence for your enterprise</p>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <h2 className="text-4xl font-semibold mb-12 text-center text-blue-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">{service.title}</h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-100 rounded-3xl">
        <h2 className="text-4xl font-semibold mb-12 text-center text-blue-800">Trusted By Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="w-[150px] h-[75px] flex items-center justify-center mb-4">
                {client.icon}
              </div>
              <p className="text-gray-600 font-semibold">{client.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/case-studies" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
            View Our Case Studies
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl my-20 shadow-2xl">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="mb-8 transform -translate-y-12">
            <div className="bg-white rounded-full p-4 inline-block shadow-lg">
              <FaRocket className="text-6xl text-blue-600" />
            </div>
          </div>
          <blockquote className="text-3xl font-light leading-relaxed mb-10 flex items-center">
            <FaQuoteLeft className="text-4xl text-blue-300 mr-4" />
            <span>AI Solutions transformed our business, increasing efficiency by 300% and opening new revenue streams we never thought possible.</span>
            <FaQuoteRight className="text-4xl text-blue-300 ml-4" />
          </blockquote>
          <div className="flex items-center justify-center">
            <Image src={Profile} alt="Jane Doe" className="w-16 h-16 rounded-full mr-4 border-2 border-white" />
            <div className="text-left">
              <p className="font-bold text-xl flex items-center">
                <FaUser className="mr-2 text-blue-300" /> Priyansh Yadav
              </p>
              <p className="text-blue-200 flex items-center">
                <FaBriefcase className="mr-2 text-blue-300" /> CEO of AstroAI
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage