import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">Revolutionize Your Business with AI</h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl">Unlock the power of artificial intelligence for your enterprise</p>
          <button className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
}

export default Hero