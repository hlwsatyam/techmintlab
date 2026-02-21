// app/tools/page.js
import Link from 'next/link'
import {
  Image as ImageIcon,
  Zap,
  Search,
  ChevronRight,
  CheckCircle,
  Clock,
  Shield,
  Server,
  Cloud,
  Smartphone,
  DownloadCloud,
  Wifi,
  WifiOff,
  Copy,
  Share2,
  Eye,
  History,
  Settings,
  RefreshCw,
  Link as LinkIcon,
  FileImage,
  Upload,
  Download,
  Globe
} from 'lucide-react'

export const metadata = {
  title: 'TechMintLab Free Tools - Image to URL Converter, Developer Tools & Utilities',
  description: '🚀 Free online tools by TechMintLab. Image to URL converter, developer utilities, and more. No signup, 100% free, instant results.',
  keywords: 'techmintlab tools, free online tools, image to url converter, developer tools, web utilities',
  
  openGraph: {
    title: 'TechMintLab Free Tools',
    description: 'Free online tools by TechMintLab. Image to URL converter and more.',
    images: ['https://techmintlab.com/logo.png'],
  }
}

// Only actual tools that exist
const tools = [
  {
    name: 'Image to URL Converter',
    slug: 'free-image-to-url-converter',
    description: 'Convert images to instant shareable URLs. Drag & drop, paste from clipboard, or upload any image (JPG, PNG, GIF, WebP). Get shareable link in seconds.',
    icon: <ImageIcon className="w-6 h-6" />,
    category: 'Image Tools',
    color: 'from-blue-500 to-purple-500',
    features: [
      'Drag & drop upload',
      'Paste from clipboard (Ctrl+V)',
      'All formats supported',
      '50MB max file size',
      'Instant URL generation',
      'Copy to clipboard',
      'Upload history',
      'Dark mode support',
      'Server status monitor',
      'Auto-copy option'
    ],
    stats: {
      users: '50,000+',
      uploads: '100,000+',
      rating: '4.9/5'
    },
    popular: true,
    new: true,
    updated: '2024',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express']
  }
]

const categories = [
  {
    name: 'Image Tools',
    icon: <ImageIcon className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    tools: tools.filter(t => t.category === 'Image Tools')
  }
]

// All tools are popular since only one exists
const popularTools = tools

export default function ToolsPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": tools.map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": tool.name,
              "url": `https://techmintlab.com/tools/${tool.slug}`,
              "description": tool.description
            }))
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
                <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold">⚡ TechMintLab Free Tools • No Signup • Instant Results</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                TechMintLab{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Free Tools
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Professional free tools for developers, designers, and everyday users. 
                <strong> 100% free</strong>, <strong>no signup</strong>, <strong>instant results</strong>.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search tools..."
                    defaultValue="image to url converter"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Popular Tools Quick Access */}
              <div className="flex flex-wrap gap-3 justify-center">
                {popularTools.map((tool, index) => (
                  <Link
                    key={index}
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <span className="mr-2">{tool.icon}</span>
                    <span className="font-medium">{tool.name}</span>
                    {tool.new && (
                      <span className="ml-2 px-2 py-0.5 bg-yellow-400 text-gray-900 text-xs rounded-full">NEW</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid - Only showing actual tools */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {categories.map((category, index) => (
              <div key={index} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-gray-600">Professional image processing tools by TechMintLab</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-3xl mx-auto">
                  {category.tools.map((tool, toolIndex) => (
                    <Link
                      key={toolIndex}
                      href={`/tools/${tool.slug}`}
                      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-blue-200"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          {tool.icon}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-3 mb-2">
                            <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                              {tool.name}
                            </h3>
                            {tool.new && (
                              <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">New</span>
                            )}
                            {tool.popular && (
                              <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-sm rounded-full">Popular</span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 mb-4 text-lg">{tool.description}</p>
                          
                          {/* Features List */}
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {tool.features.slice(0, 6).map((feature, i) => (
                              <div key={i} className="flex items-center text-sm text-gray-500">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Stats */}
                          <div className="flex items-center gap-6 mb-6 text-sm">
                            <div className="flex items-center">
                              <span className="font-semibold text-blue-600">{tool.stats.users}</span>
                              <span className="text-gray-500 ml-1">users</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-semibold text-purple-600">{tool.stats.uploads}</span>
                              <span className="text-gray-500 ml-1">uploads</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-semibold text-yellow-600">{tool.stats.rating}</span>
                              <span className="text-gray-500 ml-1">rating</span>
                            </div>
                          </div>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {tool.technologies.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* CTA */}
                          <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                            <span>Use Tool Now</span>
                            <ChevronRight className="w-5 h-5 ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Coming Soon Section */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold mb-4">More Tools Coming Soon!</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We're actively developing new tools. Follow us for updates on new releases.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/50 rounded-xl p-4 px-6">
                  <span className="text-sm font-medium text-gray-500">Image Compressor</span>
                </div>
                <div className="bg-white/50 rounded-xl p-4 px-6">
                  <span className="text-sm font-medium text-gray-500">PDF to Image</span>
                </div>
                <div className="bg-white/50 rounded-xl p-4 px-6">
                  <span className="text-sm font-medium text-gray-500">QR Code Generator</span>
                </div>
                <div className="bg-white/50 rounded-xl p-4 px-6">
                  <span className="text-sm font-medium text-gray-500">JSON Formatter</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose TechMintLab */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose TechMintLab Tools?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Lightning Fast',
                  description: 'Optimized for speed. Get results in seconds.'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Secure & Private',
                  description: 'Your data is encrypted and automatically deleted.'
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: '99.9% Uptime',
                  description: 'Reliable service you can count on.'
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: 'Cloud Powered',
                  description: 'Powered by modern cloud infrastructure.'
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: 'Mobile Friendly',
                  description: 'Works perfectly on all devices.'
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: 'Worldwide Access',
                  description: 'Access your tools from anywhere.'
                }
              ].map((feature, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: 'Is the Image to URL Converter really free?',
                  a: 'Yes! 100% free with no hidden charges. No signup required.'
                },
                {
                  q: 'What image formats are supported?',
                  a: 'JPG, PNG, GIF, WebP, SVG, BMP, TIFF, and more.'
                },
                {
                  q: 'What is the maximum file size?',
                  a: '50MB per upload. Perfect for most use cases.'
                },
                {
                  q: 'How long are images stored?',
                  a: 'By default, 24 hours. You can choose different expiry options.'
                },
                {
                  q: 'Are there more tools coming?',
                  a: 'Yes! We\'re actively developing new tools. Follow us for updates.'
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Try TechMintLab Tools Now
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Convert images to URLs instantly. No signup, no credit card, just free tools.
            </p>
            <Link
              href="/tools/free-image-to-url-converter"
              className="inline-block px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Try Image to URL Converter →
            </Link>
            <p className="text-white/80 text-sm mt-4">
              ⚡ 50,000+ users • 100,000+ uploads • 4.9/5 rating
            </p>
          </div>
        </section>

  
      </div>
    </>
  )
}