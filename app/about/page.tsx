'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {  Twitter, Lightbulb, Eye, Users, GitBranch, Globe, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import CEO from '../../assets/CEO.jpg';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Priyansh Yadav',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 4+ years in AI and software development, driving innovation at Beenansh AI.',
      image: CEO,
      linkedin: 'https://www.linkedin.com/in/priyansh10/',
      twitter: 'https://x.com/Priyanshx10_'
    }
  ]

  const stats = [
    { icon: Users, value: 40, label: 'Clients Served' },
    { icon: GitBranch, value: 100, label: 'Projects Completed' },
    { icon: Globe, value: 10, label: 'Countries Reached' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl font-serif font-bold mb-16 text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-amber-600">Beenansh AI</span>
        </motion.h1>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-semibold mb-6 flex items-center text-gray-800">
                <Lightbulb className="mr-4 text-amber-600" />
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                At Beenansh AI Technologies, we are committed to democratizing artificial intelligence. Our cutting-edge technologies are designed to empower businesses of all sizes, driving innovation and growth across industries.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-semibold mb-6 flex items-center text-gray-800">
                <Eye className="mr-4 text-amber-600" />
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We envision a future where AI enhances human potential and drives innovation across industries. By making advanced AI technologies accessible and user-friendly, we aim to catalyze a new era of technological progress and societal advancement.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center text-gray-900">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="w-12 h-12 mb-4 text-amber-600 mx-auto" />
                <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
                <p className="text-xl mt-2 text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center text-gray-900">Meet Our Visionary Team</h2>
          <div className="flex justify-center flex-wrap gap-8">
            {teamMembers.map((member, index) => (
              <motion.article
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-amber-600">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-center text-gray-900">{member.name}</h3>
                <p className="text-lg mb-4 text-center font-medium text-gray-700">{member.role}</p>
                <p className="text-base text-center mb-6 text-gray-600">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn profile`}>
                    <Instagram className="w-6 h-6 text-amber-600 hover:text-amber-700 transition-colors duration-300" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Twitter profile`}>
                    <Twitter className="w-6 h-6 text-amber-600 hover:text-amber-700 transition-colors duration-300" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-amber-500 to-amber-600 p-16 rounded-xl shadow-lg">
          <h2 className="text-center text-white text-4xl font-serif font-bold mb-6">Join Our Innovative Team</h2>
          <p className="text-xl mb-8 text-center leading-relaxed text-white max-w-3xl mx-auto">
            Are you passionate about shaping the future of AI and technology? We are always looking for talented individuals to join our team and contribute to groundbreaking innovations.
          </p>
          <div className="text-center">
            <Button asChild className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <Link href="https://www.linkedin.com/company/Beenansh-ai" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}