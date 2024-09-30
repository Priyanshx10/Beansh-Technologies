import React from 'react';
import { FaGlobe, FaMobileAlt, FaShoppingCart, FaRobot, FaCogs, FaTools } from 'react-icons/fa';

const PricingPage = () => {
  const services = [
    {
      title: "Website Development",
      icon: <FaGlobe className="text-5xl text-blue-500 mb-4" />,
      plans: [
        { name: "Basic", description: "1-5 Pages", price: "€800 - €2,000" },
        { name: "Standard", description: "5-15 Pages", price: "€2,400 - €4,800" },
        { name: "Premium", description: "15+ Pages", price: "€5,600+" },
      ],
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-5xl text-purple-500 mb-4" />,
      plans: [
        { name: "Basic", description: "Single Platform", price: "€4,000 - €8,000" },
        { name: "Standard", description: "Multi-platform", price: "€9,600 - €20,000" },
        { name: "Premium", description: "Custom, Complex Apps", price: "€24,000+" },
      ],
    },
    {
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart className="text-5xl text-orange-500 mb-4" />,
      plans: [
        { name: "Basic", description: "Up to 50 Products", price: "€2,000 - €4,000" },
        { name: "Standard", description: "50-500 Products", price: "€4,800 - €9,600" },
        { name: "Premium", description: "500+ Products", price: "€12,000+" },
      ],
    },
    {
      title: "AI Solutions",
      icon: <FaRobot className="text-5xl text-green-500 mb-4" />,
      plans: [
        { name: "Basic", description: "Chatbot Implementation", price: "€2,400 - €4,000" },
        { name: "Advanced", description: "AI Integration", price: "€8,000 - €16,000+" },
      ],
    },
    {
      title: "Custom Software Development",
      icon: <FaCogs className="text-5xl text-teal-500 mb-4" />,
      plans: [
        { name: "Small", description: "Small Projects", price: "€4,000 - €12,000" },
        { name: "Medium", description: "Medium Projects", price: "€16,000 - €40,000" },
        { name: "Enterprise", description: "Enterprise-level Projects", price: "€48,000+" },
      ],
    },
    {
      title: "Maintenance & Support",
      icon: <FaTools className="text-5xl text-red-500 mb-4" />,
      plans: [
        { name: "Basic", description: "Up to 5 hours/month", price: "€240 - €400/month" },
        { name: "Standard", description: "Up to 20 hours/month", price: "€800 - €2,000/month" },
        { name: "Premium", description: "Unlimited", price: "€4,000+/month" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-10 mt-10 text-center text-gray-800">Explore Our Services and Pricing</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div 
            key={service.title} 
            className="bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="p-8 text-center">
              <div>{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">{service.title}</h2>
              <div className="mt-6 space-y-6">
                {service.plans.map((plan) => (
                  <div key={plan.name} className="border-t pt-4">
                    <h3 className="text-lg font-medium text-gray-700">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                    <p className="text-blue-600 font-bold text-lg mt-2">{plan.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700 mb-8">Not sure what you need? We offer personalized solutions for every business!</p>
        <a 
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 hover:-translate-y-1"
        >
          Get a Custom Quote
        </a>
      </div>
    </div>
  );
};

export default PricingPage;
