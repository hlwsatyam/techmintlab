'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Smartphone, Heart, Zap, DollarSign, Plane } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'ShopNest',
      description: 'Vibrant e-commerce platform with AR product preview',
      icon: <Smartphone className="w-6 h-6" />,
      category: 'E-commerce',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'MediCare+',
      description: 'Health tracking with AI diagnostics and telemedicine',
      icon: <Heart className="w-6 h-6" />,
      category: 'Healthcare',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'EduVerse',
      description: 'Interactive learning platform with VR classrooms',
      icon: <Zap className="w-6 h-6" />,
      category: 'Education',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SmartNest',
      description: 'IoT home automation with voice control',
      icon: <Zap className="w-6 h-6" />,
      category: 'IoT',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'FinTrack Pro',
      description: 'AI-powered personal finance dashboard',
      icon: <DollarSign className="w-6 h-6" />,
      category: 'Finance',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'TravelEase',
      description: 'Augmented reality travel planning app',
      icon: <Plane className="w-6 h-6" />,
      category: 'Travel',
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Creative <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our colorful collection of digital masterpieces that have transformed businesses
          </p>
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {['All', 'Web Apps', 'Mobile Apps', 'E-commerce', 'Healthcare', 'Fintech'].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full glass-morphism hover:bg-white/30 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group text-center p-2 relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className="relative glass-card h-full">
              <div className="w-14 h-14 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
  <div className="text-white text-xl">
    {project.icon}
  </div>
</div>

                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex items-center justify-between">
                 
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Tech:</span>
                    <span className="px-2 py-1 bg-white/20 rounded">React</span>
                    <span className="px-2 py-1 bg-white/20 rounded">Node.js</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/portfolio" className="btn-primary inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio