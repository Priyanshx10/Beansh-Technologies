import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaLightbulb, FaEye } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About AI Solutions | Leading AI Technology Company',
  description: 'Learn about AI Solutions, our mission, vision, and the expert team driving innovation in artificial intelligence and software development.',
  openGraph: {
    title: 'About AI Solutions | Leading AI Technology Company',
    description: 'Discover the team and vision behind AI Solutions, your partner in cutting-edge AI technologies.',
    images: ['/images/ai-solutions-team.jpg'],
  },
}

const AboutPage = () => {
  const teamMembers = [
    { 
      name: 'John Doe', 
      role: 'CEO', 
      bio: 'Visionary leader with 15+ years in AI and software development.', 
      image: '/images/john-doe.jpg',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe'
    },
    { 
      name: 'Jane Smith', 
      role: 'CTO', 
      bio: 'AI researcher and former Google engineer, passionate about ethical AI.', 
      image: '/images/jane-smith.jpg',
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith'
    },
    { 
      name: 'Mike Johnson', 
      role: 'Lead Developer', 
      bio: 'Full-stack expert with a focus on scalable AI solutions.', 
      image: '/images/mike-johnson.jpg',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
      twitter: 'https://twitter.com/mikejohnson'
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <h1 className="text-6xl font-bold mb-16 text-center text-indigo-700 tracking-tight">About AI Solutions</h1>
      
      <section className="mb-24 bg-white p-10 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <FaLightbulb className="text-4xl text-indigo-600 mr-4" />
              <h2 className="text-4xl font-semibold text-indigo-600">Our Mission</h2>
            </div>
            <p className="text-xl mb-10 leading-relaxed text-gray-700">
              At AI Solutions, we strive to democratize artificial intelligence, making cutting-edge AI technologies accessible and beneficial for businesses of all sizes. We&apos;re committed to bridging the gap between complex AI systems and practical, real-world applications.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <FaEye className="text-4xl text-indigo-600 mr-4" />
              <h2 className="text-4xl font-semibold text-indigo-600">Our Vision</h2>
            </div>
            <p className="text-xl mb-10 leading-relaxed text-gray-700">
              We envision a future where AI enhances human potential, driving innovation and solving complex challenges across industries. Our goal is to create a world where AI is a trusted partner in progress, fostering creativity, efficiency, and breakthrough discoveries.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a href="/our-approach" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 text-lg font-semibold">
            Learn More About Our Approach
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-5xl font-semibold mb-16 text-center text-indigo-700">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-10 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl">
              <div className="relative w-64 h-64 mx-auto mb-8">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-indigo-500"
                />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-center text-indigo-700">{member.name}</h3>
              <p className="text-indigo-500 text-xl mb-6 text-center font-medium">{member.role}</p>
              <p className="text-gray-600 text-lg text-center leading-relaxed mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-white p-10 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl">
        <h2 className="text-4xl font-semibold mb-8 text-indigo-600 text-center">Join Our Journey</h2>
        <p className="text-xl mb-10 leading-relaxed text-gray-700 text-center">
          We&apos;re always looking for talented individuals passionate about AI and innovation. 
          If you&apos;re excited about shaping the future of technology, we&apos;d love to hear from you.
        </p>
        <div className="text-center">
          <a href="/careers" className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 text-lg font-semibold">
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  )
}

export default AboutPage