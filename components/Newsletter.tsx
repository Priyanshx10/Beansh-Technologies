"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail('')
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-serif font-bold text-white mb-4">Stay Informed</h2>
      <p className="text-amber-100 mb-6">Subscribe to our newsletter for the latest AI insights and updates.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="pl-10 py-6 rounded-md bg-white text-amber-900 placeholder-amber-300 focus:ring-2 focus:ring-amber-300 focus:border-transparent"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-amber-600 px-6 py-6 rounded-md font-semibold hover:bg-amber-100 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send className="mr-2 h-4 w-4" />
              </motion.div>
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Subscribe
          </Button>
        </div>
      </form>
    </motion.div>
  )
}