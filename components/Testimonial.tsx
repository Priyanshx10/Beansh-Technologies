/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    content: "Beenansh AI has revolutionized our business processes. Their AI solutions have increased our efficiency by 300% and significantly reduced operational costs.",
    author: "Emily Johnson",
    role: "CTO, TechInnovate Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5
  },
  {
    id: 2,
    content: "The custom AI model developed by Beenansh AI for our customer service has dramatically improved our response times and customer satisfaction scores.",
    author: "Michael Chen",
    role: "Head of Customer Experience, GlobalServe",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5
  },
  {
    id: 3,
    content: "Working with Beenansh AI was a game-changer for our startup. Their AI-driven market analysis tool helped us identify key opportunities and scale rapidly.",
    author: "Sarah Patel",
    role: "Founder & CEO, NexGen Solutions",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5
  }
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif font-bold text-amber-800 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover how Beenansh AI is transforming businesses across industries
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                    <AvatarFallback>{testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0">
            <div className="flex justify-between">
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-md hover:bg-amber-50"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-md hover:bg-amber-50"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center space-x-8"
        >
          <Image src="/placeholder.svg?height=40&width=120" alt="Client logo" className="h-8 sm:h-10" />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client logo" className="h-8 sm:h-10" />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client logo" className="h-8 sm:h-10" />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client logo" className="h-8 sm:h-10" />
        </motion.div>
      </div>
    </section>
  )
}