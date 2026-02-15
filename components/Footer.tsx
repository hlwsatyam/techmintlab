'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed with email:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  const services = [
    'Mobile App Development',
    'Web Application Development',
    'Custom Software Solutions',
    'UI/UX Design Services',
    'Cloud & DevOps',
    'Digital Transformation'
  ]

  const quickLinks = [
    'Case Studies',
    'Our Technologies',
    'Development Process',
    'Careers',
    'Blog',
    'Privacy Policy',
    'Terms of Service'
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/p/Techmintlab-61561513780706/', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/techmintlab', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/techmintlab_/', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/techmintlab', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/techmintlab', label: 'GitHub' }
  ]

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 mt-20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold gradient-text">TechMintLab</span>
            </div>
            <p className="text-gray-600 mb-6">
              Premium IT solutions with cutting-edge technology. We transform businesses through innovative digital solutions.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services" 
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get Tech Insights</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for tech trends and updates
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-l-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-r-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
              
                </button>
              </div>
            </form>

            <div className="space-y-4">
              <a href="tel:+917027944324" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
                <Phone className="w-5 h-5" />
                <span>+91-7027944324</span>
              </a>
              <a href="mailto:info@techmintlab.com" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5" />
                <span>info@techmintlab.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Karnal, Haryana, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-center md:text-left mb-4 md:mb-0">
              Copyright © 2026 TechMintLab. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer