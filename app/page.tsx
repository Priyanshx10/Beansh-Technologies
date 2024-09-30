/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import { FC } from 'react';
import CountUp from 'react-countup';
import { FaGlobe, FaMobileAlt, FaShoppingCart, FaRobot, FaCogs, FaTools, FaQuoteLeft, FaQuoteRight, FaArrowRight } from 'react-icons/fa';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

interface Service {
  title: string;
  icon: JSX.Element;
  description: string;
  background: string;
}

const services: Service[] = [
  {
    title: "Website Development",
    icon: <FaGlobe className="text-5xl text-green-600 mb-4" />,
    description: "Sleek designs and responsive layouts for modern web experiences.",
    background: '/back.jpg',
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-5xl text-green-500 mb-4" />,
    description: "iOS and Android app development tailored to your business needs.",
    background: '/mobile.jpg',
  },
  {
    title: "E-Commerce Solutions",
    icon: <FaShoppingCart className="text-5xl text-green-600 mb-4" />,
    description: "Complete online store solutions with payment gateways and inventory management.",
    background: '/multiple.jpg',
  },
  {
    title: "AI Solutions",
    icon: <FaRobot className="text-5xl text-green-500 mb-4" />,
    description: "Chatbots, recommendation systems, and intelligent data analysis.",
    background: '/music.jpg',
  },
  {
    title: "Custom Software Development",
    icon: <FaCogs className="text-5xl text-green-600 mb-4" />,
    description: "Tailored software solutions for businesses of all sizes.",
    background: '/arm.jpg',
  },
  {
    title: "Maintenance & Support",
    icon: <FaTools className="text-5xl text-green-500 mb-4" />,
    description: "Ongoing support and maintenance to keep your systems running smoothly.",
    background: '/women.jpg',
  },
];

interface CountUpProps {
  end: number;
  suffix: string;
  duration: number;
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="relative bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2 overflow-hidden group">
    <Image
      src={service.background}
      alt={`${service.title} Background`}
      layout="fill"
      objectFit="cover"
      quality={100}
      className="opacity-10 group-hover:opacity-20 transition-opacity duration-300"
    />
    <div className="relative z-10">
      {service.icon}
      <h3 className="text-2xl font-semibold mb-4 text-green-800">{service.title}</h3>
      <p className="text-gray-600 text-lg">{service.description}</p>
    </div>
  </div>
);

const MetricCard: React.FC<{ end: number; suffix: string; label: string }> = ({ end, suffix, label }) => (
  <div className="text-center">
    <div className="text-5xl font-bold text-green-600 mb-4">
      <CountUp {...({ end, suffix, duration: 2.5 } as CountUpProps)} />
    </div>
    <p className="text-xl text-green-800">{label}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/back.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-green-600 opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-7xl font-bold mb-8 animate-pulse">Revolutionize Your Business with AI</h1>
          <p className="text-3xl mb-12 opacity-90">Unlock the power of artificial intelligence for your enterprise</p>
          <button className="bg-white text-green-600 px-10 py-4 rounded-full text-2xl font-semibold hover:bg-green-100 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 container mx-auto px -6">
        <h2 className="text-6xl font-semibold mb-20 text-center text-green-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-24 bg-gradient-to-r from-green-100 to-white rounded-3xl mx-6">
        <h2 className="text-6xl font-semibold mb-20 text-center text-green-800">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <MetricCard end={98} suffix="%" label="Client Satisfaction" />
          <MetricCard end={100} suffix="+" label="Projects Completed" />
          <MetricCard end={2} suffix="M+" label="Data Points Processed" />
          <MetricCard end={10} suffix="+" label="Industries Served" />
        </div>
        <div className="text-center mt-20">
          <Link href="/about" className="text-green-600 hover:text-green-800 font-semibold text-2xl inline-flex items-center transition-colors duration-300">
            Learn More About Our Impact
            <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white rounded-3xl my-24 shadow-2xl mx-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <h2 className="text-5xl font-bold mb-8 leading-tight">What Our Clients Say</h2>
              <blockquote className="text-2xl font-light leading-relaxed mb-8">
                <FaQuoteLeft className="text-4xl text-green-300 mb-4 opacity-50" />
                <p className="italic">AI Solutions transformed our business, increasing efficiency by 300% and opening new revenue streams we never thought possible.</p>
                <FaQuoteRight className="text-4xl text-green-300 mt-4 opacity-50 float-right" />
              </blockquote>
              <div className="flex items-center">
                <Image 
                  src="/CEO.jpg" 
                  alt="Priyansh Yadav" 
                  width={80} 
                  height={80} 
                  className="rounded-full border-4 border-white shadow-lg" 
                />
                <div className="ml-4">
                  <p className="font-bold text-xl">Priyansh Yadav</p>
                  <p className="text-green-300">CEO, Beenasnh AI Technologies</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <Image 
                src="/AI.jpg"
                alt="Team Member 1" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
              <Image 
                src="/mobile.jpg"
                alt="Team Member 2" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
              <Image 
                src="/multiple.jpg"
                alt="Team Member 3" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
              <Image 
                src="/music.jpg"
                alt="Team Member 4" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;