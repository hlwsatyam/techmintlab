'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FaqContent() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItems, setOpenItems] = useState({})

  // Check for dark mode preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // FAQ Categories
  const categories = [
    { id: 'all', name: 'All Questions', icon: '📋', count: 42 },
    { id: 'general', name: 'General', icon: '❓', count: 6 },
    { id: 'compressor', name: 'Image Compressor', icon: '📦', count: 10 },
    { id: 'image-to-url', name: 'Image to URL', icon: '🔗', count: 6 },
    { id: 'privacy', name: 'Privacy & Security', icon: '🔒', count: 5 },
    { id: 'technical', name: 'Technical', icon: '⚙️', count: 5 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧', count: 4 },
    { id: 'support', name: 'Support', icon: '💬', count: 4 },
    { id: 'legal', name: 'Legal', icon: '⚖️', count: 2 }
  ]

  // FAQ Items
  const faqItems = [
    // General
    {
      id: 1,
      category: 'general',
      question: 'What is TechMintLab?',
      answer: 'TechMintLab is a free online platform offering powerful tools for image processing. Our flagship tools include Image Compressor (reduce file size while maintaining quality) and Image to URL Converter (get instant shareable links for your images). All tools are 100% free, require no signup, and prioritize user privacy with client-side processing.',
      tags: ['about', 'intro']
    },
    {
      id: 2,
      category: 'general',
      question: 'Are TechMintLab tools really free?',
      answer: 'Yes! All TechMintLab tools are completely free with no hidden charges. You can use them unlimited times, there are no premium tiers, and no signup is required. We believe in providing accessible, high-quality tools for everyone.',
      tags: ['free', 'pricing']
    },
    {
      id: 3,
      category: 'general',
      question: 'Do I need to create an account?',
      answer: 'No account or signup is required. All our tools are designed for instant use. Just visit the tool page and start using it immediately.',
      tags: ['account', 'signup']
    },
    {
      id: 4,
      category: 'general',
      question: 'Is there a limit on how many times I can use the tools?',
      answer: 'No limits whatsoever! You can use our tools as many times as you need. There are no daily, monthly, or usage caps. We believe in unlimited access for all users.',
      tags: ['limits', 'usage']
    },
    {
      id: 5,
      category: 'general',
      question: 'Can I use TechMintLab for commercial purposes?',
      answer: 'Absolutely! Our tools are free for both personal and commercial use. Many businesses use our image compressor and image to URL converter for their daily operations. No attribution is required.',
      tags: ['commercial', 'business']
    },
    {
      id: 6,
      category: 'general',
      question: 'How do you make money if everything is free?',
      answer: 'We currently run minimal, non-intrusive ads to cover server costs. In the future, we may offer premium features for business users (like API access, priority support, longer URL expiry). Our goal is to keep the core tools free forever.',
      tags: ['business model', 'ads']
    },

    // Image Compressor
    {
      id: 7,
      category: 'compressor',
      question: 'How does the image compressor work?',
      answer: 'Our image compressor uses advanced algorithms to reduce file size while maintaining visual quality. It works entirely in your browser - your images never leave your device. You can choose between smart mode (AI-optimized), lossless mode (no quality loss), or custom mode (manual quality control).',
      tags: ['how it works', 'compression']
    },
    {
      id: 8,
      category: 'compressor',
      question: 'How much can I compress my images?',
      answer: 'Our smart compression algorithm can reduce image file sizes by up to 80% while maintaining excellent visual quality. On average, JPG images compress by 50-70%, PNG by 60-80%, and GIF by 40-60%. The actual reduction depends on the image content, format, and compression settings you choose.',
      tags: ['reduction', 'savings']
    },
    {
      id: 9,
      category: 'compressor',
      question: 'Do you upload my images to your server?',
      answer: 'No! All image compression happens entirely in your browser using JavaScript. Your images never leave your device, ensuring complete privacy and security. This is why we can offer unlimited compressions with no signup required.',
      tags: ['privacy', 'upload']
    },
    {
      id: 10,
      category: 'compressor',
      question: 'What image formats are supported for compression?',
      answer: 'We support all major image formats including: JPG/JPEG, PNG, GIF, WebP, SVG, BMP, TIFF, ICO, and HEIC/HEIF. You can compress them in their original format or convert between formats during compression.',
      tags: ['formats', 'supported']
    },
    {
      id: 11,
      category: 'compressor',
      question: 'What is the maximum file size for compression?',
      answer: 'Since compression happens in your browser, the maximum file size depends on your device\'s memory. Generally, you can compress images up to 100MB. For optimal performance, we recommend compressing images under 50MB. For larger files, try our "progressive" compression mode.',
      tags: ['size limit', 'max file']
    },
    {
      id: 12,
      category: 'compressor',
      question: 'Can I compress multiple images at once?',
      answer: 'Yes! Our batch compression feature allows you to compress up to 20 images simultaneously. You can apply the same settings to all images or customize per image. After compression, you can download them individually or as a ZIP file.',
      tags: ['batch', 'multiple']
    },
    {
      id: 13,
      category: 'compressor',
      question: 'Does compression reduce image quality?',
      answer: 'Our smart compression algorithm balances file size reduction with visual quality. You can choose between lossless compression (no quality loss, smaller reduction) or lossy compression (some quality loss, larger reduction). The visual difference is often imperceptible, especially for web use. You can preview the result before downloading.',
      tags: ['quality', 'lossy', 'lossless']
    },
    {
      id: 14,
      category: 'compressor',
      question: 'What compression settings should I use?',
      answer: 'For websites: Use 70-80% quality for JPG, PNG-8 for simple graphics. For photography: Use 85-90% quality to maintain detail. For email: Use 50-60% quality. For social media: Use 80% quality. Our "Smart" mode automatically selects optimal settings based on your image type and intended use.',
      tags: ['settings', 'recommendations']
    },
    {
      id: 15,
      category: 'compressor',
      question: 'Can I resize images while compressing?',
      answer: 'Yes! You can resize your images during compression. Specify maximum width/height, or enter custom dimensions. This is perfect for creating thumbnails, optimizing for specific platforms, or reducing both dimensions and file size simultaneously.',
      tags: ['resize', 'dimensions']
    },
    {
      id: 16,
      category: 'compressor',
      question: 'Do you preserve metadata like EXIF?',
      answer: 'By default, we preserve important metadata like copyright information and color profiles. However, you can choose to remove metadata for maximum compression. In advanced settings, you can select exactly which metadata to keep (EXIF, IPTC, XMP, etc.).',
      tags: ['metadata', 'exif']
    },

    // Image to URL
    {
      id: 17,
      category: 'image-to-url',
      question: 'What is an image to URL converter?',
      answer: 'An image to URL converter is a tool that uploads your image to a server and provides you with a unique, shareable URL (link) that you can use to access or share your image online. This is useful for sharing images on social media, forums, websites, or any platform where you need a direct link to your image.',
      tags: ['definition', 'what is']
    },
    {
      id: 18,
      category: 'image-to-url',
      question: 'How do I paste an image from clipboard?',
      answer: 'To paste an image from clipboard: 1) Copy any image (press Ctrl+C or right-click + copy) 2) Click on our upload area or press Ctrl+V anywhere on the page 3) The image will automatically upload and generate a URL. This works with screenshots, copied images from websites, and images from design tools.',
      tags: ['paste', 'clipboard']
    },
    {
      id: 19,
      category: 'image-to-url',
      question: 'How long do the image URLs last?',
      answer: 'By default, image URLs last for 24 hours. However, you can choose different expiry times in advanced options: 1 hour, 24 hours, 7 days, 30 days, or never expire (premium feature). The countdown starts from the moment of upload.',
      tags: ['expiry', 'duration']
    },
    {
      id: 20,
      category: 'image-to-url',
      question: 'Are my images private when using Image to URL?',
      answer: 'Yes! All uploads are private by default. Only people with the exact URL can access your images. We use HTTPS encryption for all transfers, and images are automatically deleted after their expiry time. We never share or sell your data.',
      tags: ['privacy', 'security']
    },
    {
      id: 21,
      category: 'image-to-url',
      question: 'What is the maximum file size for upload?',
      answer: 'The maximum file size is 50MB per upload for the Image to URL converter. This limit ensures fast upload speeds and optimal performance. For larger files, we recommend compressing them first using our Image Compressor tool.',
      tags: ['size limit', 'max file']
    },
    {
      id: 22,
      category: 'image-to-url',
      question: 'What image formats are supported for URL conversion?',
      answer: 'We support all major image formats including: JPG/JPEG, PNG, GIF, WebP, SVG, BMP, TIFF, ICO, and HEIC. Our tool automatically handles format conversion and optimization while maintaining the original quality as much as possible.',
      tags: ['formats', 'supported']
    },

    // Privacy & Security
    {
      id: 23,
      category: 'privacy',
      question: 'How do you protect my privacy?',
      answer: 'We take privacy seriously. Our Image Compressor works entirely in your browser - no uploads. For Image to URL, files are encrypted during transfer and automatically deleted after expiry. We never share or sell your data. No signup means no personal information collection.',
      tags: ['privacy', 'protection']
    },
    {
      id: 24,
      category: 'privacy',
      question: 'Do you use cookies?',
      answer: 'We use only essential cookies for basic functionality and analytics to improve our service. No tracking cookies for advertising. You can check our detailed Privacy Policy for more information.',
      tags: ['cookies', 'tracking']
    },
    {
      id: 25,
      category: 'privacy',
      question: 'Is my data encrypted?',
      answer: 'Yes! All connections to our site use HTTPS encryption. For Image to URL uploads, files are encrypted during transfer. Files stored on our servers are encrypted at rest. Your privacy and security are our top priorities.',
      tags: ['encryption', 'security']
    },
    {
      id: 26,
      category: 'privacy',
      question: 'Do you sell my data?',
      answer: 'Never. We do not sell, rent, or share your personal data with third parties. Your images and information are yours alone. For Image to URL, images are automatically deleted after expiry.',
      tags: ['data selling', 'third party']
    },
    {
      id: 27,
      category: 'privacy',
      question: 'Where can I find your privacy policy?',
      answer: 'Our Privacy Policy is available at /privacy. It details exactly what data we collect, how we use it, and your rights regarding your information.',
      tags: ['privacy policy']
    },

    // Technical
    {
      id: 28,
      category: 'technical',
      question: 'What browsers are supported?',
      answer: 'Our tools work on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. For the best experience, especially with large files, we recommend using the latest version of Chrome or Firefox.',
      tags: ['browsers', 'compatibility']
    },
    {
      id: 29,
      category: 'technical',
      question: 'Is there a mobile app?',
      answer: 'While we don\'t have a dedicated mobile app yet, our website is fully responsive and works perfectly on mobile devices. You can use all tools from your phone or tablet\'s browser with full functionality.',
      tags: ['mobile', 'app']
    },
    {
      id: 30,
      category: 'technical',
      question: 'Do you offer an API?',
      answer: 'Yes! We offer RESTful APIs for developers who want to integrate our tools into their applications. The APIs support all formats and features. Check our API documentation at /api/docs for more information.',
      tags: ['api', 'integration']
    },
    {
      id: 31,
      category: 'technical',
      question: 'Can I self-host your tools?',
      answer: 'Currently, we don\'t offer self-hosted versions. However, our tools are open-source and available on GitHub. You can fork the repositories and host them yourself following the MIT license.',
      tags: ['self-host', 'open source']
    },
    {
      id: 32,
      category: 'technical',
      question: 'Do you have a status page?',
      answer: 'Yes! Check our status page at status.techmintlab.com for real-time information about service availability, uptime, and any ongoing incidents.',
      tags: ['status', 'uptime']
    },

    // Troubleshooting
    {
      id: 33,
      category: 'troubleshooting',
      question: 'Why is my image not uploading?',
      answer: 'Common reasons: File size may exceed 50MB, unsupported format, or network issues. Try compressing the image first, ensure it\'s a supported format (JPG, PNG, GIF, WebP, etc.), and check your internet connection.',
      tags: ['upload issues', 'not working']
    },
    {
      id: 34,
      category: 'troubleshooting',
      question: 'Why is compression not working?',
      answer: 'Compression issues are usually browser-related. Make sure you\'re using a modern browser, JavaScript is enabled, and you have sufficient memory. Try clearing your browser cache or using incognito mode.',
      tags: ['compression issues', 'not compressing']
    },
    {
      id: 35,
      category: 'troubleshooting',
      question: 'The tool is slow. What should I do?',
      answer: 'Since processing happens in your browser, speed depends on your device. Close other tabs/applications, use a modern browser, and ensure your device has enough memory. For large files, consider using our "progressive" mode.',
      tags: ['slow', 'performance']
    },
    {
      id: 36,
      category: 'troubleshooting',
      question: 'I get an error message. What does it mean?',
      answer: 'Error messages are designed to be helpful. Common errors: "File too large" (exceeds 50MB), "Unsupported format" (try a different format), "Browser out of memory" (close other tabs). If you need help, contact support with the exact error message.',
      tags: ['errors', 'error messages']
    },

    // Support
    {
      id: 37,
      category: 'support',
      question: 'How do I contact support?',
      answer: 'You can reach us through multiple channels: Email at support@techmintlab.com, Twitter @techmintlab, or use the contact form on our website. We typically respond within 24 hours on business days.',
      tags: ['contact', 'support']
    },
    {
      id: 38,
      category: 'support',
      question: 'Do you offer priority support?',
      answer: 'Yes! For business users and API customers, we offer priority support with faster response times (usually within 4 hours). Contact us for more information about our support plans.',
      tags: ['priority', 'business support']
    },
    {
      id: 39,
      category: 'support',
      question: 'How do I report a bug?',
      answer: 'You can report bugs through our GitHub repository, email us at bugs@techmintlab.com, or use the feedback button on any tool page. Please include details about your browser, OS, and steps to reproduce the issue.',
      tags: ['bug report', 'issues']
    },
    {
      id: 40,
      category: 'support',
      question: 'Can I suggest a new feature?',
      answer: 'Absolutely! We love feature suggestions. Email us at feedback@techmintlab.com or open an issue on GitHub. We review all suggestions and prioritize based on user demand.',
      tags: ['feature request', 'suggestions']
    },

    // Legal
    {
      id: 41,
      category: 'legal',
      question: 'What is your copyright policy?',
      answer: 'Users are responsible for ensuring they have the right to upload and share images. We comply with DMCA takedown requests. If you believe your copyright has been infringed, please contact copyright@techmintlab.com.',
      tags: ['copyright', 'dmca']
    },
    {
      id: 42,
      category: 'legal',
      question: 'Do you have a terms of service?',
      answer: 'Yes, our Terms of Service are available at /terms. They outline acceptable use, limitations of liability, and other legal information. By using our tools, you agree to these terms.',
      tags: ['terms', 'tos']
    }
  ]

  // Filter FAQs based on search and category
  const filteredFaqs = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📚 Help Center
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our tools, privacy, features, and more.
              <span className="block mt-2 text-sm text-gray-500 dark:text-gray-400">
                ⚡ 40+ questions • 8 categories • Updated daily
              </span>
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for questions, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 pr-12 text-lg border border-gray-300 rounded-full focus:ring-4 focus:ring-blue-200 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-900"
              />
              <svg className="absolute left-5 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
                <span className={`ml-1 text-xs ${
                  activeCategory === category.id ? 'text-blue-200' : 'text-gray-400'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-600 dark:text-gray-400">
            Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 gap-4 mb-12">
            {filteredFaqs.map((item, index) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-6 focus:outline-none group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{categories.find(c => c.id === item.category)?.icon}</span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {categories.find(c => c.id === item.category)?.name}
                        </span>
                        <span className="text-xs text-gray-400">#{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white pr-8">
                        {item.question}
                      </h3>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      openItems[item.id] ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer */}
                {openItems[item.id] && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <div className="prose prose-blue max-w-none dark:prose-invert">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                    
                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 transition-colors"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>

                    {/* Helpful? */}
                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                      <span>Was this helpful?</span>
                      <button className="hover:text-green-600 transition-colors">
                        👍 Yes
                      </button>
                      <button className="hover:text-red-600 transition-colors">
                        👎 No
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                No questions found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any questions matching "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Still Need Help? */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help 24/7.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📧 Contact Support
              </Link>
              <a
                href="mailto:support@techmintlab.com"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/image-compressor"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📦</div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Image Compressor</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Reduce image size without losing quality</p>
            </Link>
            
            <Link
              href="/image-to-url-converter"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🔗</div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Image to URL</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Get instant shareable links for your images</p>
            </Link>
            
            <Link
              href="/privacy"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🔒</div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Privacy Policy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Learn how we protect your data</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}