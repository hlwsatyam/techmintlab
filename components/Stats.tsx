'use client'

import { motion } from 'framer-motion'
import { Smartphone, Globe, Users, Award } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      value: '30+',
      label: 'Mobile App Projects',
      description: 'Built with Flutter, React Native, and native technologies'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: '120+',
      label: 'Web Development Projects',
      description: 'Developed using modern frameworks like React and Angular'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '95%',
      label: 'Client Retention',
      description: 'Our commitment to quality keeps clients coming back'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '50+',
      label: 'Awards & Recognition',
      description: 'Industry recognition for excellence in development'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform your business with our <span className="gradient-text">Tech Solutions</span> & Digital Expertise
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              TechMintLab is a premier IT development company specializing in creating cutting-edge mobile apps, websites, and desktop software solutions tailored to your business needs.
            </p>
            <a href="/about" className="btn-primary inline-flex items-center space-x-2">
              <span>Learn More About Us</span>
            </a>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats