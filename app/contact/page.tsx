'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate email sending
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setFormData({ name: '', phone: '', email: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    }, 2000)
  }

  const handleWhatsApp = () => {
    const message = `Hi TechMintLab,\n\nI'm interested in your services.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const url = `https://wa.me/917027944324?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-card">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <a href="tel:+917027944324" className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600">+91-7027944324</p>
                    <p className="text-gray-600">+91-8571994258 (Sales)</p>
                  </div>
                </a>

                <a href="mailto:support@techmintlab.com" className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600">support@techmintlab.com</p>
                    <p className="text-gray-600">sales@techmintlab.com</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <p className="text-gray-600">Karnal, Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact Card */}
            <div className="glass-card bg-gradient-to-r p-3 !text-center from-green-500/5 to-emerald-500/5">
            
              
<div className="flex flex-col items-center text-center space-y-4 mb-6">

  {/* Icon */}
  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center animate-bounce">
    <MessageSquare className="w-8 h-8 text-white" />
  </div>

  {/* Text */}
  <div className="space-y-2">
    <h3 className="text-2xl font-bold animate-fadeIn">
      Message on WhatsApp
    </h3>
    <p className="text-gray-600 animate-fadeIn delay-200">
      Get instant response
    </p>
  </div>

</div>



              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-white rounded-xl bg-red-500 backdrop-blur-sm border border-white/30"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full text-white rounded-xl bg-red-500 px-4 py-3 rounded-xl   backdrop-blur-sm border border-white/30"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send to WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card"
          >
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder='Name'
                    className="w-full px-4 py-3 rounded-xl text-white rounded-xl bg-green-500 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder='Phone'
                    required
                    className="w-full px-4 py-3 rounded-xl text-white rounded-xl bg-blue-500 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder='email'
                  className="w-full px-4 py-3 rounded-xl text-white rounded-xl bg-green-500 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder='Message'
                  className="w-full px-4 py-3 rounded-xl text-white rounded-xl bg-red-500 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary bg-amber-400 rounded cursor-pointer py-4 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {success && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}