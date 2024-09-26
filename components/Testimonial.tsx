import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'
import Profile from '../assets/CEO.jpg'

const Testimonial = () => {
  return (
    <div>
      <section className="bg-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FaQuoteLeft className="text-5xl text-blue-300 mb-8 mx-auto" />
          <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed mb-10">
            AI Solutions transformed our business, increasing efficiency by 300% and opening new revenue streams we never thought possible.
          </blockquote>
          <div className="flex items-center justify-center mb-12">
            <Image src={Profile} alt="Priyansh Yadav" className="w-20 h-20 rounded-full mr-4 border-2 border-white" layout="fixed" width={80} height={80} />
            <div className="text-left ml-4">
              <p className="font-bold text-2xl">Priyansh Yadav</p>
              <p className="text-blue-200 text-lg">CEO of AstroAI</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
              Read More Success Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial