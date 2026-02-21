'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Sparkles } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/', color: 'from-red-500 to-orange-500' },
    { name: 'Services', path: '/services', color: 'from-blue-500 to-cyan-500' },
    { name: 'About', path: '/about', color: 'from-green-500 to-emerald-500' },
    { name: 'Portfolio', path: '/portfolio', color: 'from-purple-500 to-pink-500' },
    { name: 'Videos', path: '/videos', color: 'from-yellow-500 to-amber-500' },
    { name: 'Contact', path: '/contact', color: 'from-indigo-500 to-violet-500' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white border-b shadow-xl py-2' 
        : 'bg-white border-b  py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with gradient animation */}
          <Link href="/" className="flex items-center space-x-2 group">
            
              
              <img src="https://i.ibb.co/C5hp2XLh/logo.png" alt="" />
            
           
          </Link>

          {/* Desktop Navigation with colorful indicators */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.path}
                  className={`font-semibold px-3 py-2 rounded-lg !text-black duration-300 ${
                    pathname === item.path
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-105`
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                >
                  {item.name}
                </Link>
                {pathname === item.path && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button with colorful effect */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+917027944324" 
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="relative">
                <Phone className="w-5 h-5 text-white" />
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
              </div>
              <span className="font-semibold text-black group-hover:text-cyan-200 transition-colors">
                +91-7027944324
              </span>
            </a>
            <Link 
              href="/contact" 
              className="relative overflow-hidden group"
            >
              <div className="absolute inset-0 !bg-green-500 bg-gradient-to-r  animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative !bg-green-500  text-gray-800 px-6 py-3 rounded-full font-semibold hover:text-black transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                Contact Us Now
                <div className="absolute -right-2 -top-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-shadow"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white animate-spin-once" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with gradient cards */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-xl rounded-2xl p-6 animate-slideDown shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
                    pathname === item.path
                      ? `bg-gradient-to-r ${item.color} shadow-lg scale-[1.02]`
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={`relative z-10 font-semibold flex items-center justify-between ${
                    pathname === item.path ? 'text-white' : 'text-white/90'
                  }`}>
                    {item.name}
                    <div className={`w-2 h-2 rounded-full ${
                      pathname === item.path ? 'bg-yellow-300 animate-pulse' : 'bg-white/30'
                    }`}></div>
                  </span>
                </Link>
              ))}
              <a
                href="tel:+917027944324"
                className="relative overflow-hidden group mt-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300 flex items-center justify-center space-x-3 py-3 px-4 rounded-xl font-semibold text-white">
                  <Phone className="w-5 h-5 animate-phone" />
                  <span>Call Now</span>
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                </div>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header