import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Trusted from '@/components/Trusted';
import Testimonial from '@/components/Testimonial';

const HomePage = () => {
 
  
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <Services/>
     
      {/* Trusted By Section */}
     <Trusted/>

      {/* Testimonial */}
      <Testimonial/>
    </div>
  );
};

export default HomePage;