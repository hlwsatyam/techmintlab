'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold gradient-text">
              Premium IT Solutions Provider
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            We Deliver{' '}
            <span className="gradient-text">Premium IT Solutions</span>{' '}
            With Cutting-edge Technology
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            Transform your business with our expert software development, mobile apps, 
            and custom digital solutions. Innovation meets excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="/contact" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="/portfolio" 
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>View Our Work</span>
            </a>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Projects Completed', value: '150+' },
              { label: 'Happy Clients', value: '95%' },
              { label: 'Expert Team', value: '25+' },
              { label: 'Support Hours', value: '24/7' },
            ].map((item, index) => (
              <div key={index} className="glass-card text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{item.value}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero