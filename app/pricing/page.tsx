import React from 'react'
import { FaGlobe, FaMobileAlt, FaShoppingCart, FaRobot, FaCogs, FaTools } from 'react-icons/fa'

const PricingPage = () => {
  const services = [
    {
      title: "Website Development",
      icon: <FaGlobe className="text-5xl text-indigo-600 mb-4" />,
      plans: [
        { name: "Basic", description: "1-5 Pages", price: "€800 - €2,000" },
        { name: "Standard", description: "5-15 Pages", price: "€2,400 - €4,800" },
        { name: "Premium", description: "15+ Pages", price: "€5,600+" },
      ],
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-5xl text-teal-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Single Platform", price: "€4,000 - €8,000" },
        { name: "Standard", description: "Multi-platform", price: "€9,600 - €20,000" },
        { name: "Premium", description: "Custom, Complex Apps", price: "€24,000+" },
      ],
    },
    {
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart className="text-5xl text-pink-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Up to 50 Products", price: "€2,000 - €4,000" },
        { name: "Standard", description: "50-500 Products", price: "€4,800 - €9,600" },
        { name: "Premium", description: "500+ Products", price: "€12,000+" },
      ],
    },
    {
      title: "AI Solutions",
      icon: <FaRobot className="text-5xl text-orange-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Chatbot Implementation", price: "€2,400 - €4,000" },
        { name: "Advanced", description: "AI Integration", price: "€8,000 - €16,000+" },
      ],
    },
    {
      title: "Custom Software Development",
      icon: <FaCogs className="text-5xl text-amber-600 mb-4" />,
      plans: [
        { name: "Small", description: "Small Projects", price: "€4,000 - €12,000" },
        { name: "Medium", description: "Medium Projects", price: "€16,000 - €40,000" },
        { name: "Enterprise", description: "Enterprise-level Projects", price: "€48,000+" },
      ],
    },
    {
      title: "Maintenance & Support",
      icon: <FaTools className="text-5xl text-cyan-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Up to 5 hours/month", price: "€240 - €400/month" },
        { name: "Standard", description: "Up to 20 hours/month", price: "€800 - €2,000/month" },
        { name: "Premium", description: "Unlimited", price: "€4,000+/month" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-extrabold mb-16 text-center text-indigo-900 tracking-tight">Our Services and Pricing</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-8">
                <div className="flex justify-center">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">{service.title}</h2>
                <div className="space-y-6">
                  {service.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="border-t border-gray-200 pt-4">
                      <h3 className="text-xl font-semibold text-indigo-700">{plan.name}</h3>
                      <p className="text-gray-600 mt-2">{plan.description}</p>
                      <p className="text-2xl font-bold mt-3 text-indigo-600">{plan.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-3xl mb-10 text-indigo-900 font-semibold">Looking for a tailored solution? We&apos;re ready to assist!</p>
          <a 
            href="/contact"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-xl font-bold shadow-lg hover:shadow-xl inline-block"
          >
            Request a Personalized Quote
          </a>
        </div>
      </div>
    </div>
  )
}

export default PricingPage