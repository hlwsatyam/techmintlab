'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, CheckCircle } from 'lucide-react'

const ContactForm = () => {
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState<number | null>(null)

  const handleSEOScore = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // Generate a random score for demo
      const randomScore = Math.floor(Math.random() * 30) + 70
      setScore(randomScore)
      
      // Reset after 10 seconds
      setTimeout(() => {
        setScore(null)
        setUrl('')
        setEmail('')
      }, 10000)
    }, 1500)
  }

  const handleWhatsApp = () => {
    const message = `Hi TechMintLab,\n\nI want to check my website SEO score.\nWebsite: ${url}\nEmail: ${email}`
    const whatsappUrl = `https://wa.me/917027944324?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* SEO Score Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Know Your Website SEO Score</h2>
                <p className="text-gray-600">Get instant SEO analysis via WhatsApp</p>
              </div>
            </div>

            <form onSubmit={handleSEOScore} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Website URL</label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <span>Check SEO Score</span>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Get on WhatsApp</span>
                </button>
              </div>
            </form>

            {score !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <div>
                      <h3 className="font-bold">SEO Score: {score}/100</h3>
                      <p className="text-sm text-gray-600">
                        {score >= 90 ? 'Excellent!' : score >= 70 ? 'Good' : 'Needs Improvement'}
                      </p>
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${score >= 90 ? 'bg-green-500' : score >= 70 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h2 className="text-2xl font-bold mb-6">Get in touch with our Tech Experts</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <a 
                  href="tel:+917027944324" 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20">
                    <span className="text-blue-600 font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-lg font-bold">+91-7027944324</p>
                    <p className="text-gray-600">+91-8571994258 (Sales)</p>
                  </div>
                </a>

                <a 
                  href="mailto:support@techmintlab.com" 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20">
                    <span className="text-purple-600 font-bold">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-lg font-bold">support@techmintlab.com</p>
                    <p className="text-gray-600">sales@techmintlab.com</p>
                  </div>
                </a>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/10">
                <h3 className="font-bold text-lg mb-4">Quick Contact via WhatsApp</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30"
                  />
                  <button
                    onClick={() => window.open('https://wa.me/917027944324', '_blank')}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Send to WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 rounded-xl bg-white/10">
                <h3 className="font-bold mb-2">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-600">Monday - Friday</div>
                  <div className="font-semibold">9:00 AM - 6:00 PM</div>
                  <div className="text-gray-600">Saturday</div>
                  <div className="font-semibold">10:00 AM - 4:00 PM</div>
                  <div className="text-gray-600">Sunday</div>
                  <div className="font-semibold">Emergency Support Only</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm