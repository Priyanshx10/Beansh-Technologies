import React from 'react'
import { FaGlobe, FaMobileAlt, FaShoppingCart, FaRobot, FaCogs, FaTools } from 'react-icons/fa'

const PricingPage = () => {
  const services = [
    {
      title: "Website Development",
      icon: <FaGlobe className="text-4xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "1-5 Pages", price: "€800 - €2,000" }, // Reduced from $1,000 - $2,500
        { name: "Standard", description: "5-15 Pages", price: "€2,400 - €4,800" }, // Reduced from $3,000 - $6,000
        { name: "Premium", description: "15+ Pages", price: "€5,600+" }, // Reduced from $7,000+
      ],
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-4xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Single Platform", price: "€4,000 - €8,000" }, // Reduced from $5,000 - $10,000
        { name: "Standard", description: "Multi-platform", price: "€9,600 - €20,000" }, // Reduced from $12,000 - $25,000
        { name: "Premium", description: "Custom, Complex Apps", price: "€24,000+" }, // Reduced from $30,000+
      ],
    },
    {
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart className="text-4xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Up to 50 Products", price: "€2,000 - €4,000" }, // Reduced from $2,500 - $5,000
        { name: "Standard", description: "50-500 Products", price: "€4,800 - €9,600" }, // Reduced from $6,000 - $12,000
        { name: "Premium", description: "500+ Products", price: "€12,000+" }, // Reduced from $15,000+
      ],
    },
    {
      title: "AI Solutions",
      icon: <FaRobot className="text-4xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Chatbot Implementation", price: "€2,400 - €4,000" }, // Reduced from $3,000 - $5,000
        { name: "Advanced", description: "AI Integration", price: "€8,000 - €16,000+" }, // Reduced from $10,000 - $20,000+
      ],
    },
    {
      title: "Custom Software Development",
      icon: <FaCogs className="text-4xl text-green-600 mb-4" />,
      plans: [
        { name: "Small", description: "Small Projects", price: "€4,000 - €12,000" }, // Reduced from $5,000 - $15,000
        { name: "Medium", description: "Medium Projects", price: "€16,000 - €40,000" }, // Reduced from $20,000 - $50,000
        { name: "Enterprise", description: "Enterprise-level Projects", price: "€48,000+" }, // Reduced from $60,000+
      ],
    },
    {
      title: "Maintenance & Support",
      icon: <FaTools className="text-4xl text-green-600 mb-4" />,
      plans: [
        { name: "Basic", description: "Up to 5 hours/month", price: "€240 - €400/month" }, // Reduced from $300 - $500/month
        { name: "Standard", description: "Up to 20 hours/month", price: "€800 - €2,000/month" }, // Reduced from $1,000 - $2,500/month
        { name: "Premium", description: "Unlimited", price: "€4,000+/month" }, // Reduced from $5,000+/month
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <h1 className="text-5xl font-bold mb-12 text-center text-green-900">Our Services and Pricing</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <div className="flex justify-center">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">{service.title}</h2>
              <div className="space-y-4">
                {service.plans.map((plan, planIndex) => (
                  <div key={planIndex} className="border-t pt-4">
                    <h3 className="text-lg font-semibold text-gray-700">{plan.name}</h3>
                    <p className="text-gray-700">{plan.description}</p>
                    <p className="text-green-700 font-bold mt-2">{plan.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-2xl mb-8 text-gray-800">Looking for a tailored solution? We&apos;re ready to assist!</p>
        <a 
          href="/contact"
          className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
        >
          Request a Personalized Quote
        </a>
      </div>
    </div>
  )
}

export default PricingPage