'use client'

import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaLightbulb, FaEye, FaUsers, FaProjectDiagram, FaGlobeAmericas } from 'react-icons/fa'
import CEO from '../../assets/CEO.jpg'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const AboutPage = () => {
  const teamMembers = [
    { 
      name: 'Priyansh Yadav', 
      role: 'CEO & Founder', 
      bio: 'Visionary leader with 4+ years in AI and software development, driving innovation at Beenasnhnh AI.', 
      image: CEO,
      linkedin: 'https://www.linkedin.com/in/priyansh10/',
      twitter: 'https://x.com/Priyanshx10_'
    }
  ]
  const stats = [
    { icon: FaUsers, value: 40, label: 'Clients Served' },
    { icon: FaProjectDiagram, value: 100, label: 'Projects Completed' },
    { icon: FaGlobeAmericas, value: 10, label: 'Countries Reached' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-green-800 pt-20">
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-6xl font-bold mb-16 text-center text-green-600 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">Beenasnhnh AI</span>
        </motion.h1>
        
        <motion.section 
          className="mb-24 bg-white p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-6 text-green-600 flex items-center">
                <FaLightbulb className="mr-4 text-yellow-400" />
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                At Beenasnhnh AI Technologies, we&apos;re on a mission to democratize artificial intelligence. We make cutting-edge AI technologies accessible and beneficial for businesses of all sizes, bridging the gap between complex AI systems and practical, real-world applications.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-6 text-green-600 flex items-center">
                <FaEye className="mr-4 text-green-500" />
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We envision a future where AI enhances human potential, driving innovation and solving complex challenges across industries. Our goal is to create a world where AI is a trusted partner in progress, fostering creativity, efficiency, and breakthrough discoveries.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-16 text-center text-green-600">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl text-center">
                <stat.icon className="text-5xl mb-4 text-green-500 mx-auto" />
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  className="text-4xl font-bold text-green-600"
                />
                <p className="text-xl mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-16 text-center text-green-600">Meet Our Visionary Team</h2>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <article key={index} className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 max-w-md">
                <div className="relative w-40 h-40 mx-auto mb-8 overflow-hidden rounded-full border-4 border-green-500">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-green-600">{member.name}</h3>
                <p className="text-lg mb-4 text-center font-medium text-green-500">{member.role}</p>
                <p className="text-base text-center mb-8 text-gray-700">{member.bio}</p>
                <div className="flex justify-center space-x-6">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition-colors duration-300" aria-label={`${member.name}&apos;s LinkedIn profile`}>
                    <FaLinkedin size={24} />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 transition-colors duration-300" aria-label={`${member.name}&apos;s Twitter profile`}>
                    <FaTwitter size={24} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="bg-gradient-to-r from-green-600 to-green-700 text-white p-12 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Innovative Team</h2>
          <p className="text-xl mb-10 text-center leading-relaxed">
            Are you passionate about shaping the future of AI and technology? We&apos;re always looking for talented individuals to join our team. If you&apos;re ready to make an impact, we want to hear from you!
          </p>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/priyansh10/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <FaLinkedin className="mr-3" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default AboutPage