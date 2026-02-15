'use client'

import { motion } from 'framer-motion'
import { Smartphone, Globe, Code, Cloud, Palette, Server } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 " />,
      title: 'Mobile App Development',
      description: 'Cross-platform apps using Flutter, React Native, and native technologies',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Apps']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern web applications with React, Next.js, and Angular frameworks',
      features: ['React/Next.js', 'Angular', 'Vue.js', 'Node.js']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Software',
      description: 'Tailor-made solutions for your unique business requirements',
      features: ['CRM/ERP', 'Custom APIs', 'Scalable Systems', 'Integration']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered designs that enhance engagement and conversions',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and CI/CD pipelines',
      features: ['AWS/Azure', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance for your digital products',
      features: ['24/7 Support', 'Updates', 'Security', 'Performance']
    }
  ]

  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card bg-black/10 p-2 !text-center hover:shadow-2xl group"
            >
           <div className="w-14 h-14 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
  <div className="text-white text-xl">
    {service.icon}
  </div>
</div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services