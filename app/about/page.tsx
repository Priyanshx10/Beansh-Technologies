import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaLightbulb, FaEye, FaRocket } from 'react-icons/fa'
import { Metadata } from 'next'
import CEO from '../../assets/CEO.jpg'

export const metadata: Metadata = {
  title: 'About Beansh AI Technologies | Leading AI Innovation Company',
  description: 'Discover Beansh AI Technologies: Our mission, vision, and expert team driving AI innovation. Learn how we&apos;re shaping the future of technology.',
  openGraph: {
    title: 'About Beansh AI Technologies | Pioneering AI Solutions',
    description: 'Meet the visionary team behind Beansh AI Technologies. Learn about our mission to democratize AI and our commitment to ethical innovation.',
    images: [
      {
        url: '/images/beansh-ai-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Beansh AI Technologies Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BeanshAI',
    creator: '@BeanshAI',
  },
}

const AboutPage = () => {
  const teamMembers = [
    { 
      name: 'Priyansh Yadav', 
      role: 'CEO & Founder', 
      bio: 'Visionary leader with 4+ years in AI and software development, driving innovation at Beansh AI.', 
      image: CEO,
      linkedin: 'https://www.linkedin.com/in/priyansh10/',
      twitter: 'https://x.com/Priyanshx10_'
    },
    { 
      name: 'Jane Smith', 
      role: 'CTO', 
      bio: 'Former Google AI researcher, passionate about developing ethical and accessible AI solutions.', 
      image: '/images/jane-smith.jpg',
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith'
    },
    { 
      name: 'Mike Johnson', 
      role: 'Lead Developer', 
      bio: 'Full-stack expert specializing in scalable AI architectures and cloud-native solutions.', 
      image: '/images/mike-johnson.jpg',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
      twitter: 'https://twitter.com/mikejohnson'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-16 text-center text-blue-600 leading-tight">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Beansh AI</span>
        </h1>
        
        <section className="mb-24 bg-white p-8 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-6 text-blue-600 flex items-center">
                <FaLightbulb className="mr-4 text-yellow-400" />
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                At Beansh AI Technologies, we&apos;re on a mission to democratize artificial intelligence. We make cutting-edge AI technologies accessible and beneficial for businesses of all sizes, bridging the gap between complex AI systems and practical, real-world applications.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-6 text-blue-600 flex items-center">
                <FaEye className="mr-4 text-purple-500" />
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We envision a future where AI enhances human potential, driving innovation and solving complex challenges across industries. Our goal is to create a world where AI is a trusted partner in progress, fostering creativity, efficiency, and breakthrough discoveries.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-16 text-center text-blue-600">Meet Our Visionary Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <article key={index} className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="relative w-40 h-40 mx-auto mb-8 overflow-hidden rounded-full border-4 border-blue-500">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-blue-600">{member.name}</h3>
                <p className="text-lg mb-4 text-center font-medium text-purple-600">{member.role}</p>
                <p className="text-base text-center mb-8 text-gray-700">{member.bio}</p>
                <div className="flex justify-center space-x-6">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors duration-300" aria-label={`${member.name}&apos;s LinkedIn profile`}>
                    <FaLinkedin size={24} />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-300" aria-label={`${member.name}&apos;s Twitter profile`}>
                    <FaTwitter size={24} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Innovation Journey</h2>
          <p className="text-xl mb-10 text-center leading-relaxed">
            We&apos;re always seeking passionate innovators to join our team. If you&apos;re excited about shaping the future of AI and technology, we&apos;d love to hear from you.
          </p>
          <div className="text-center">
            <a href="/careers" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <FaRocket className="mr-3" />
              Explore Career Opportunities
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage