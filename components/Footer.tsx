 










'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Github, Code, Palette, Cloud, TrendingUp, Users, FileText, Shield, Briefcase, Brain, Blocks, Group, PhoneCall, Search } from 'lucide-react'

// Define types for our footer configuration
type FooterLink = {
  label: string
  href: string
  icon?: React.ReactNode
  description?: string
}

type FooterSection = {
  title: string
  type: 'links' | 'services' | 'contact' | 'social' | 'newsletter'
  items: FooterLink[]
  layout?: 'grid' | 'list' | 'icons'
  columns?: number
}

type SocialLink = FooterLink & {
  icon: React.ReactNode
}

const Footer = () => {
  const [email, setEmail] = useState('')

  // Social media configuration
  const socialLinks: SocialLink[] = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/p/Techmintlab-61561513780706/', label: 'Facebook', description: 'Follow us on Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/techmintlab', label: 'Twitter', description: 'Follow us on Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/techmintlab_/', label: 'Instagram', description: 'Follow us on Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/techmintlab', label: 'LinkedIn', description: 'Connect on LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/techmintlab', label: 'GitHub', description: 'Check our GitHub' }
  ]

  // Dynamic footer sections configuration
  const footerSections: FooterSection[] = [
    {
      title: 'Our Services',
      type: 'services',
      layout: 'list',
      items: [
        { label: 'Software Development Karnal', href: '/software-development-karnal', icon: <Code className="w-4 h-4" /> },
        { label: 'Web Designer Karnal', href: '/website-designer-in-karnal', icon: <Code className="w-4 h-4" /> },
        { label: 'digital-marketing karnal', href: '/digital-marketing-karnal', icon: <Code className="w-4 h-4" /> },
        { label: 'digital-marketing panipat', href: '/digital-marketing-panipat', icon: <Palette className="w-4 h-4" /> },
       
      ]
    },
    {
      title: 'Company',
      type: 'links',
      layout: 'list',
      items: [
        { label: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { label: 'Trust', href: '/hi', icon: <Group className="w-4 h-4" /> },
      
        { label: 'Our Technologies', href: '/our-technologies', icon: <Code className="w-4 h-4" /> },
        { label: 'Searchs', href: '/search', icon: <Search className="w-4 h-4" /> },
        { label: 'Portfolio', href: '/portfolio', icon: <Users className="w-4 h-4" />, description: 'Join our team' },
        { label: 'Videos', href: '/videos', icon: <FileText className="w-4 h-4" /> },
        { label: 'Contact', href: '/contact', icon: <PhoneCall className="w-4 h-4" /> },
     
      ]
    },
    {
      title: 'Tools',
      type: 'links',
      layout: 'grid',
      columns: 2,
      items: [
        { label: 'Image To Url', href: '/tools/free-image-to-url-converter' },
   
      ]
    },
    
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  // Helper function to render different section types
  const renderSectionContent = (section: FooterSection) => {
    switch (section.type) {
      case 'services':
      case 'links':
        if (section.layout === 'grid') {
          return (
            <div className={`grid grid-cols-${section.columns || 2} gap-3`}>
              {section.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2"
                >
                  {item.icon && <span className="text-blue-500">{item.icon}</span>}
                  {item.label}
                </Link>
              ))}
            </div>
          )
        }
        return (
          <ul className="space-y-3">
            {section.items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.icon && <span className="mr-2 text-blue-500">{item.icon}</span>}
                  <span>{item.label}</span>
                  {item.description && (
                    <span className="ml-2 text-xs text-gray-400">{item.description}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )
      
      default:
        return null
    }
  }

  return (
    <footer className="!bg-gradient-to-b !from-white !to-blue-500 border-t !border-gray-100 mt-20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {/* Company Info - Always first */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechMintLab
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Premium IT solutions with cutting-edge technology. We transform businesses through innovative digital solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300"
                  aria-label={social.label}
                  title={social.description}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              {renderSectionContent(section)}
            </div>
          ))}

          {/* Newsletter Section - Can be dynamic or static */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Get Tech Insights</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to our newsletter for tech trends and updates
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+917027944324" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 text-sm group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+91-7027944324</span>
              </a>
              <a href="mailto:info@techmintlab.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 text-sm group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>info@techmintlab.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Karnal, Haryana, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              Copyright © {new Date().getFullYear()} TechMintLab. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer