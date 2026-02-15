'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Smartphone, Building } from 'lucide-react'

const Packages = () => {
  const packages = [
    {
      name: 'Basic Development',
      price: '₹5,000',
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        'Landing Page',
        'Responsive Website Design',
        'Up to 20 Custom Pages',
        'Basic SEO Optimization',
        'Contact Form Integration',
        '1 Month Support'
      ],
      highlighted: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Mobile App Package',
      price: '₹25,000',
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        'Android/iOS App',
        'Cross-Platform Development',
        'UI/UX Design',
        'Backend API Integration',
        'Basic Features Set',
        '3 Months Support'
      ],
      highlighted: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise Solution',
      price: '₹50,000',
      icon: <Building className="w-8 h-8" />,
      features: [
        'Custom CRM/ERP',
        'Custom Business Software',
        'Multi-user Dashboard',
        'Database Integration',
        'Advanced Security',
        '6 Months Support'
      ],
      highlighted: false,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose the perfect solution for your <span className="gradient-text">digital transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible packages designed to meet your specific business needs and budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-amber-300/30 p-2 ${pkg.highlighted ? 'transform md:scale-105' : ''}`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`glass-card h-full ${pkg.highlighted ? ' -2  ' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${pkg.color} rounded-xl flex items-center justify-center`}>
                    <div className="text-white">{pkg.icon}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{pkg.price}</div>
                    <div className="text-gray-600">Starting from</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{pkg.name}</h3>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    : 'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30'
                }`}>
                  {pkg.highlighted ? 'Build Your App' : 'Start Project'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Have specific requirements? Contact us for a tailored quote that fits your exact needs.
            </p>
            <a href="/contact" className="text-white bg-amber-600 rounded-full p-2  inline-flex items-center space-x-2">
              <span>Get Custom Quote</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages