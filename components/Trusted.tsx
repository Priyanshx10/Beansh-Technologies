import React from 'react'
import { FaUser, FaBriefcase, FaCogs, FaRobot, FaTools } from 'react-icons/fa'

const Trusted = () => {
    const clients = [
        { name: "TechCorp", icon: <FaUser className="text-4xl text-gray-600" /> },
        { name: "InnovateTech", icon: <FaBriefcase className="text-4xl text-gray-600" /> },
        { name: "FutureSystems", icon: <FaCogs className="text-4xl text-gray-600" /> },
        { name: "GlobalAI", icon: <FaRobot className="text-4xl text-gray-600" /> },
        { name: "SmartSolutions", icon: <FaTools className="text-4xl text-gray-600" /> },
      ];
    
  return (
    <div>
         <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-gray-800">Trusted By Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 flex items-center justify-center mb-4 mx-auto">
                  {client.icon}
                </div>
                <p className="text-gray-700 font-medium">{client.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/case-studies" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
              View Our Case Studies
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trusted