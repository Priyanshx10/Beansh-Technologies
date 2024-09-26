import React from 'react'
import { FaGlobe, FaMobileAlt, FaShoppingCart, FaRobot, FaCogs, FaTools } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
          title: "Website Development",
          icon: <FaGlobe className="text-3xl text-blue-600 mb-4" />,
          description: "Sleek designs and responsive layouts for modern web experiences.",
        },
        {
          title: "Mobile App Development",
          icon: <FaMobileAlt className="text-3xl text-blue-600 mb-4" />,
          description: "iOS and Android app development tailored to your business needs.",
        },
        {
          title: "E-Commerce Solutions",
          icon: <FaShoppingCart className="text-3xl text-blue-600 mb-4" />,
          description: "Complete online store solutions with payment gateways and inventory management.",
        },
        {
          title: "AI Solutions",
          icon: <FaRobot className="text-3xl text-blue-600 mb-4" />,
          description: "Chatbots, recommendation systems, and intelligent data analysis.",
        },
        {
          title: "Custom Software Development",
          icon: <FaCogs className="text-3xl text-blue-600 mb-4" />,
          description: "Tailored software solutions for businesses of all sizes.",
        },
        {
          title: "Maintenance & Support",
          icon: <FaTools className="text-3xl text-blue-600 mb-4" />,
          description: "Ongoing support and maintenance to keep your systems running smoothly.",
        },
      ];
    
  return (
    <div>
         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-4 text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services