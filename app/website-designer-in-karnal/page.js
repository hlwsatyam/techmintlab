// app/website-designer-karnal/page.js
import {
  Globe,
  Search,
  Code,
  Smartphone,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  Award,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  BarChart,
  Zap,
  Eye,
  Target,
  Rocket,
  Layers,
  Settings,
  Palette,
  ShoppingCart,
  BookOpen,
  Briefcase,
  Heart,
  ThumbsUp,
  Sparkles,
  Compass,
  Navigation,
  Zap as ZapIcon,
  Shield,
  Headphones,
  Calendar,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Github
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Metadata for SEO
export const metadata = {
  title: 'Best Website Designer in Karnal 2025 🚀 SEO Friendly Web Design | Call 7027944324',
  description: '✅ Looking for a professional website designer in Karnal? We create stunning, SEO-optimized, and mobile-friendly websites. 200+ projects delivered. Get a free consultation! Call now: 7027944324',
  keywords: 'website designer in Karnal, web designer Karnal, web development Karnal, SEO friendly website design, ecommerce website design Karnal, responsive web design, custom website designer, affordable website designer Karnal, best web designer in Karnal, website design company Karnal, local web designer, SEO services Karnal, digital marketing Karnal, website designer near me, 7027944324',
  openGraph: {
    title: 'Best Website Designer in Karnal 2025 | SEO Friendly Web Design',
    description: 'Professional website design services in Karnal. We build stunning, fast, and SEO-optimized websites that rank on Google. 200+ projects. Call now: 7027944324',
    url: 'https://techmintlab.com/website-designer-karnal',
    siteName: 'TechMintLab',
    images: [
      {
        url: 'https://techmintlab.com/og-website-designer-karnal.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Designer in Karnal - TechMintLab'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Designer in Karnal | SEO Friendly Web Design',
    description: 'Professional website design services in Karnal. Stunning, fast, and SEO-optimized websites. Call 7027944324',
    images: ['https://techmintlab.com/twitter-website-designer-karnal.jpg']
  },
  alternates: {
    canonical: 'https://techmintlab.com/website-designer-karnal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'web design',
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Karnal',
    'geo.position': '29.6857;76.9905',
    'ICBM': '29.6857, 76.9905'
  }
}

// Local Schema for Karnal
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://techmintlab.com/#business',
  name: 'TechMintLab - Website Designer in Karnal',
  description: 'Professional website design and development services in Karnal, Haryana. Specializing in SEO-friendly, responsive, and custom websites.',
  url: 'https://techmintlab.com/website-designer-karnal',
  telephone: '+91-7027944324',
  email: 'hello@techmintlab.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sector 7, Main Market',
    addressLocality: 'Karnal',
    addressRegion: 'Haryana',
    postalCode: '132001',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.6857,
    longitude: 76.9905
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '₹₹',
  image: 'https://techmintlab.com/logo.png',

  areaServed: [
    {
      '@type': 'City',
      name: 'Karnal',
      sameAs: 'https://en.wikipedia.org/wiki/Karnal'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Haryana'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Delhi NCR'
    }
  ],
  serviceType: [
    'Website Design',
    'E-commerce Development',
    'SEO Optimization',
    'Responsive Web Design',
    'Custom Web Development',
    'WordPress Development'
  ],
  founder: {
    '@type': 'Person',
    name: 'Founder Name'
  },
  foundingDate: '2019',
  award: [
    'Best Web Designer in Karnal 2023',
    'Top Digital Agency in Haryana 2023'
  ],
  knowsAbout: [
    'Web Design',
    'SEO',
    'Digital Marketing',
    'E-commerce',
    'Mobile Responsive Design',
    'UI/UX Design'
  ]
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://techmintlab.com/website-designer-karnal#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website designer in Karnal charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website design costs in Karnal vary based on requirements. Basic business websites start from ₹15,000, while e-commerce sites range from ₹35,000 to ₹1,50,000. Contact us for a free, no-obligation quote tailored to your specific needs.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to design a website in Karnal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard business website typically takes 2-4 weeks from concept to launch. E-commerce websites may take 4-8 weeks depending on complexity. We follow an agile process with regular updates to ensure timely delivery.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes a website SEO-friendly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An SEO-friendly website has clean code, fast loading speed, mobile responsiveness, proper heading structure (H1, H2, etc.), optimized images, meta tags, XML sitemaps, and quality content. We build all our websites with these SEO best practices.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide website maintenance services in Karnal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer comprehensive website maintenance packages including security updates, backups, content updates, performance monitoring, and technical support. Monthly maintenance starts from ₹2,000.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you redesign my existing website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We specialize in redesigning outdated websites to make them modern, fast, and mobile-friendly. We preserve your existing content and SEO value while giving your site a fresh new look.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you also provide SEO services in Karnal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer complete SEO services including on-page optimization, technical SEO, local SEO for Karnal businesses, content creation, and link building. Our SEO packages start from ₹8,000 per month.'
      }
    }
  ]
}

// Service areas in and around Karnal
const serviceAreas = [
  'Sector 7, Karnal',
  'Sector 13, Karnal',
  'Model Town, Karnal',
  'Kunjpura Road, Karnal',
  'Gandhi Nagar, Karnal',
  'Ram Nagar, Karnal',
  'New Colony, Karnal',
  'Old Bus Stand, Karnal',
  'Railway Road, Karnal',
  'Sector 6, Karnal',
  'Sector 8, Karnal',
  'Sector 9, Karnal',
  'Sector 12, Karnal',
  'Sector 14, Karnal',
  'Indri Road, Karnal',
  'Assandh, Karnal',
  'Gharaunda, Karnal',
  'Nilokheri, Karnal',
  'Panipat',
  'Kurukshetra',
  'Kaithal',
  'Yamunanagar'
]

// Web design services
const webDesignServices = [
  {
    title: 'Business Website',
    icon: <Briefcase className="w-6 h-6" />,
    description: 'Professional websites for local businesses, startups, and companies.',
    features: [
      'Custom design',
      '5-10 pages',
      'Mobile responsive',
      'SEO optimized',
      'Contact forms',
      'Google Maps integration'
    ],
    startingPrice: '₹15,000',
    timeline: '2-3 weeks',
    emoji: '💼'
  },
  {
    title: 'E-commerce Website',
    icon: <ShoppingCart className="w-6 h-6" />,
    description: 'Online stores to sell products and services 24/7.',
    features: [
      'Product catalog',
      'Shopping cart',
      'Payment gateway',
      'Order management',
      'Inventory system',
      'Customer accounts'
    ],
    startingPrice: '₹35,000',
    timeline: '4-6 weeks',
    emoji: '🛒'
  },
  {
    title: 'WordPress Website',
    icon: <Settings className="w-6 h-6" />,
    description: 'Easy-to-manage websites with WordPress CMS.',
    features: [
      'Custom theme',
      'Plugin integration',
      'User-friendly admin',
      'Blog setup',
      'SEO plugins',
      'Regular updates'
    ],
    startingPrice: '₹18,000',
    timeline: '2-3 weeks',
    emoji: '📝'
  },
  {
    title: 'Landing Page',
    icon: <Target className="w-6 h-6" />,
    description: 'High-converting single pages for campaigns and offers.',
    features: [
      'Conversion-focused',
      'A/B testing ready',
      'Fast loading',
      'Lead capture forms',
      'Analytics integration',
      'Call-to-action buttons'
    ],
    startingPrice: '₹8,000',
    timeline: '1 week',
    emoji: '🎯'
  },
  {
    title: 'Custom Web Application',
    icon: <Code className="w-6 h-6" />,
    description: 'Bespoke web applications with complex functionality.',
    features: [
      'Custom development',
      'Database integration',
      'User authentication',
      'API integration',
      'Scalable architecture',
      'Advanced features'
    ],
    startingPrice: '₹50,000+',
    timeline: '6-12 weeks',
    emoji: '⚙️'
  },
  {
    title: 'Website Redesign',
    icon: <Palette className="w-6 h-6" />,
    description: 'Give your existing website a fresh new look.',
    features: [
      'Modern design',
      'Mobile optimization',
      'Speed improvement',
      'SEO enhancement',
      'Content update',
      'Brand refresh'
    ],
    startingPrice: '₹12,000',
    timeline: '2-3 weeks',
    emoji: '🎨'
  }
]

// SEO packages
const seoPackages = [
  {
    title: 'Local SEO',
    icon: <MapPin className="w-6 h-6" />,
    description: 'Dominate Karnal search results and attract local customers.',
    features: [
      'Google My Business setup',
      'Local keyword research',
      'Local citations',
      'Review management',
      'Map pack optimization',
      'Local content creation'
    ],
    startingPrice: '₹8,000/month',
    emoji: '📍'
  },
  {
    title: 'On-Page SEO',
    icon: <Search className="w-6 h-6" />,
    description: 'Optimize your website structure and content for search engines.',
    features: [
      'Keyword research',
      'Meta tags optimization',
      'Heading structure',
      'Image optimization',
      'URL structure',
      'Internal linking'
    ],
    startingPrice: '₹5,000 one-time',
    emoji: '🔍'
  },
  {
    title: 'Technical SEO',
    icon: <Settings className="w-6 h-6" />,
    description: 'Fix technical issues and improve site performance.',
    features: [
      'Site speed optimization',
      'Mobile responsiveness',
      'XML sitemap',
      'Robots.txt setup',
      'Schema markup',
      'Crawl error fix'
    ],
    startingPrice: '₹7,000 one-time',
    emoji: '⚙️'
  },
  {
    title: 'Complete SEO Package',
    icon: <Rocket className="w-6 h-6" />,
    description: 'All-in-one SEO solution for maximum visibility.',
    features: [
      'Local + On-page + Technical',
      'Content creation',
      'Link building',
      'Monthly reporting',
      'Competitor analysis',
      'Rank tracking'
    ],
    startingPrice: '₹15,000/month',
    emoji: '🚀'
  }
]

// Why choose us - local reasons
const whyChooseUs = [
  {
    title: 'Local Karnal Team',
    icon: <MapPin className="w-6 h-6" />,
    description: 'We\'re based in Sector 7, Karnal. Meet us in person anytime!',
    highlight: 'Sector 7, Karnal'
  },
  {
    title: 'SEO-First Approach',
    icon: <Search className="w-6 h-6" />,
    description: 'Every website we build is optimized to rank on Google from day one.',
    highlight: 'Rank #1 on Google'
  },
  {
    title: 'Mobile Responsive',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Perfect experience on phones, tablets, and desktops.',
    highlight: '100% Mobile Friendly'
  },
  {
    title: 'Fast Loading Speed',
    icon: <Zap className="w-6 h-6" />,
    description: 'Optimized code and images for lightning-fast load times.',
    highlight: 'Under 3 Seconds'
  },
  {
    title: 'Affordable Pricing',
    icon: <Heart className="w-6 h-6" />,
    description: 'Quality websites at prices that won\'t break the bank.',
    highlight: 'Starting ₹15,000'
  },
  {
    title: 'Ongoing Support',
    icon: <Headphones className="w-6 h-6" />,
    description: 'We\'re always here to help, even after your site is live.',
    highlight: '24/7 Support'
  }
]

// Portfolio examples (local businesses)
const portfolioItems = [
  {
    name: 'Karnal Sweet Shop',
    type: 'E-commerce Website',
    industry: 'Food & Restaurant',
    features: ['Online ordering', 'Menu display', 'Location map', 'Customer reviews'],
    image: '/api/placeholder/400/300',
    emoji: '🍬'
  },
  {
    name: 'Sector 7 Dental Clinic',
    type: 'Business Website',
    industry: 'Healthcare',
    features: ['Appointment booking', 'Doctor profiles', 'Services list', 'Patient testimonials'],
    image: '/api/placeholder/400/300',
    emoji: '🦷'
  },
  {
    name: 'Karnal Coaching Center',
    type: 'Educational Website',
    industry: 'Education',
    features: ['Course catalog', 'Online registration', 'Study materials', 'Results display'],
    image: '/api/placeholder/400/300',
    emoji: '📚'
  },
  {
    name: 'Model Town Fashion Store',
    type: 'E-commerce',
    industry: 'Retail',
    features: ['Product catalog', 'Size guide', 'Payment gateway', 'Shipping calculator'],
    image: '/api/placeholder/400/300',
    emoji: '👗'
  }
]

// Client testimonials
const testimonials = [
  {
    name: 'Rajesh Gupta',
    business: 'Karnal Sweet Shop, Sector 7',
    comment: 'TechMintLab designed our e-commerce website and now we get orders from all over Karnal! Sales increased by 200% in just 3 months. Highly recommended!',
    rating: 5,
    emoji: '🍬'
  },
  {
    name: 'Dr. Priya Sharma',
    business: 'Sector 7 Dental Clinic',
    comment: 'Professional, punctual, and patient-friendly team. They understood exactly what we needed for our clinic website. Now we get appointment requests daily!',
    rating: 5,
    emoji: '🦷'
  },
  {
    name: 'Amit Singh',
    business: 'Karnal Coaching Center',
    comment: 'Best website designer in Karnal! They created a beautiful website for our coaching center and also handle our SEO. We\'re ranking #1 for coaching in Karnal!',
    rating: 5,
    emoji: '📚'
  },
  {
    name: 'Sunita Mittal',
    business: 'Model Town Fashion Store',
    comment: 'Our online store looks amazing and works perfectly on mobile. Sales have tripled! Thank you TechMintLab for your excellent service.',
    rating: 5,
    emoji: '👗'
  }
]

// FAQs
const faqs = [
  {
    question: 'How much does a website designer in Karnal charge?',
    answer: 'Website design costs in Karnal vary based on requirements. Basic business websites start from ₹15,000, while e-commerce sites range from ₹35,000 to ₹1,50,000. Contact us for a free, no-obligation quote tailored to your specific needs.',
    category: 'Pricing'
  },
  {
    question: 'How long does it take to design a website in Karnal?',
    answer: 'A standard business website typically takes 2-4 weeks from concept to launch. E-commerce websites may take 4-8 weeks depending on complexity. We follow an agile process with regular updates to ensure timely delivery.',
    category: 'Timeline'
  },
  {
    question: 'What makes a website SEO-friendly?',
    answer: 'An SEO-friendly website has clean code, fast loading speed, mobile responsiveness, proper heading structure (H1, H2, etc.), optimized images, meta tags, XML sitemaps, and quality content. We build all our websites with these SEO best practices.',
    category: 'SEO'
  },
  {
    question: 'Do you provide website maintenance services in Karnal?',
    answer: 'Yes, we offer comprehensive website maintenance packages including security updates, backups, content updates, performance monitoring, and technical support. Monthly maintenance starts from ₹2,000.',
    category: 'Maintenance'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! We specialize in redesigning outdated websites to make them modern, fast, and mobile-friendly. We preserve your existing content and SEO value while giving your site a fresh new look.',
    category: 'Redesign'
  },
  {
    question: 'Do you also provide SEO services in Karnal?',
    answer: 'Yes, we offer complete SEO services including on-page optimization, technical SEO, local SEO for Karnal businesses, content creation, and link building. Our SEO packages start from ₹8,000 per month.',
    category: 'SEO'
  },
  {
    question: 'What areas in Karnal do you serve?',
    answer: 'We serve all areas of Karnal including Sector 7, Sector 13, Model Town, Kunjpura Road, Gandhi Nagar, Ram Nagar, New Colony, Old Bus Stand, Railway Road, and surrounding areas like Panipat, Kurukshetra, Kaithal, and Yamunanagar.',
    category: 'Service Area'
  },
  {
    question: 'Do you create mobile-friendly websites?',
    answer: 'Yes! All our websites are 100% mobile responsive, meaning they look and work perfectly on smartphones, tablets, and desktops. Google prioritizes mobile-friendly websites in search results.',
    category: 'Mobile'
  }
]

// Stats
const stats = [
  { number: '250+', label: 'Websites Designed', icon: <Globe className="w-6 h-6" /> },
  { number: '150+', label: 'Happy Karnal Clients', icon: <Users className="w-6 h-6" /> },
  { number: '50+', label: 'E-commerce Stores', icon: <ShoppingCart className="w-6 h-6" /> },
  { number: '4.9★', label: 'Client Rating', icon: <Star className="w-6 h-6 fill-current" /> },
  { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> },
  { number: '5+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> }
]

export default function WebsiteDesignerKarnal() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Floating Contact Bar - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 lg:hidden safe-bottom">
        <div className="flex divide-x divide-gray-200">
          <a
            href="tel:+917027944324"
            className="flex-1 flex items-center justify-center py-4 bg-blue-500 text-white font-semibold text-sm"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
          <a
            href="https://wa.me/917027944324"
            className="flex-1 flex items-center justify-center py-4 bg-green-500 text-white font-semibold text-sm"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
          <a
            href="#contact"
            className="flex-1 flex items-center justify-center py-4 bg-purple-500 text-white font-semibold text-sm"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get Quote
          </a>
        </div>
      </div>

      {/* Sticky Contact - Desktop */}
      <div className="hidden lg:block fixed right-6 bottom-6 z-50 space-y-3">
        <a
          href="tel:+917027944324"
          className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
        >
          <Phone className="w-5 h-5 mr-2" />
          +91-7027944324
        </a>
        <a
          href="https://wa.me/917027944324"
          className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-pulse">🌐</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 animate-bounce">📱</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Local Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <MapPin className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-sm font-semibold text-gray-700">Based in Sector 7, Karnal • Serving all Haryana</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Website Designer
              </span>{' '}
              in Karnal
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              🚀 We create stunning, <strong>SEO-friendly websites</strong> that help Karnal businesses grow.
              <span className="block mt-2 text-blue-600">250+ websites • 150+ happy clients • 5+ years experience</span>
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm font-semibold">Google Partner</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                <span className="text-sm font-semibold">4.9★ Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/917027944324"
                className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </a>
            </div>

            {/* Local Contact */}
            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-600">
              <a href="tel:+917027944324" className="flex items-center hover:text-blue-600">
                <Phone className="w-4 h-4 mr-1" /> +91-7027944324
              </a>
              <a href="https://wa.me/917027944324" className="flex items-center hover:text-green-600">
                <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp: 7027944324
              </a>
              <a href="mailto:hello@techmintlab.com" className="flex items-center hover:text-blue-600">
                <Mail className="w-4 h-4 mr-1" /> hello@techmintlab.com
              </a>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> Sector 7, Karnal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-2 text-2xl">{stat.icon}</div>
                <div className="text-xl sm:text-2xl font-bold mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="font-semibold">Proudly serving:</span>
            {serviceAreas.slice(0, 12).map((area, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {area}
              </span>
            ))}
            <span className="text-blue-600 font-semibold text-sm">+ more areas</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-sm mb-2 block">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Web Design
              </span>{' '}
              Services in Karnal
            </h2>
            <p className="text-gray-600">
              Custom websites tailored for Karnal businesses at affordable prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webDesignServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg flex items-center justify-center text-blue-600">
                    {service.icon}
                  </div>
                  <span className="text-3xl opacity-50">{service.emoji}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sm text-gray-500">Starting at</span>
                  <span className="text-xl font-bold text-blue-600">{service.startingPrice}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Timeline: {service.timeline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-green-600 font-semibold text-sm mb-2 block">SEO SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rank #1 on{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Google in Karnal
              </span>
            </h2>
            <p className="text-gray-600">
              Get found by local customers with our SEO packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoPackages.map((seo, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-lg flex items-center justify-center text-green-600">
                    {seo.icon}
                  </div>
                  <span className="text-3xl opacity-50">{seo.emoji}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{seo.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{seo.description}</p>
                <ul className="space-y-2 mb-4">
                  {seo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center pt-4 border-t">
                  <span className="text-lg font-bold text-green-600">{seo.startingPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-600 font-semibold text-sm mb-2 block">WHY KARNAL CHOOSES US</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Local{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Website Design Partner
              </span>
            </h2>
            <p className="text-gray-600">
              We're not just designers—we're your neighbors in Karnal who care about your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{reason.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{reason.description}</p>
                  <span className="text-xs font-semibold text-purple-600">{reason.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-sm mb-2 block">OUR WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Websites Designed for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal Businesses
              </span>
            </h2>
            <p className="text-gray-600">
              Real projects for real local clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100">
                <div className="h-40 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-6xl">
                  {item.emoji}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.type} • {item.industry}</p>
                  <ul className="space-y-1 mb-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-blue-600 text-sm font-semibold flex items-center">
                    View Project <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-yellow-600 font-semibold text-sm mb-2 block">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What{' '}
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Karnal Clients
              </span>{' '}
              Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it - hear from local businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-3xl opacity-50">{testimonial.emoji}</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-sm mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-600">
              Everything you need to know about website design in Karnal
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all">
                <div className="flex items-start">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full mr-3">
                    {faq.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 mt-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Website?</h2>
              <p className="text-gray-600">Get a free quote and consultation from Karnal's best website designer</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <a href="tel:+917027944324" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Call us</p>
                      <p className="font-semibold">+91-7027944324</p>
                    </div>
                  </a>

                  <a href="https://wa.me/917027944324" className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100">
                    <MessageCircle className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">WhatsApp</p>
                      <p className="font-semibold">+91-7027944324</p>
                    </div>
                  </a>

                  <a href="mailto:hello@techmintlab.com" className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold">hello@techmintlab.com</p>
                    </div>
                  </a>

                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Visit us</p>
                      <p className="font-semibold">Sector 7, Karnal, Haryana 132001</p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="font-semibold mb-2">🕒 Office Hours</p>
                  <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm">Sunday: Closed (but available on call)</p>
                </div>
              </div>

              {/* Quick Form */}
              <div>
                <h3 className="text-xl font-bold mb-4">Get Free Quote</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>What do you need?</option>
                    <option>Business Website</option>
                    <option>E-commerce Website</option>
                    <option>Website Redesign</option>
                    <option>SEO Services</option>
                    <option>WordPress Website</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="flex items-center mb-3">
              <MapPin className="w-5 h-5 text-red-500 mr-2" />
              <h3 className="font-semibold">Visit Our Office in Sector 7, Karnal</h3>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">📍 Google Maps Location - Sector 7, Karnal</p>
              {/* In production, embed actual Google Map here */}
            </div>
            <p className="text-sm text-gray-600 mt-3">
              <strong>Directions:</strong> Near Main Market, Sector 7, Karnal. Easy to reach from Railway Station (10 min) and Bus Stand (15 min).
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Looking for the Best Website Designer in Karnal?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's talk about your project. Free consultation, no obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917027944324"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-7027944324
            </a>
            <a
              href="https://wa.me/917027944324"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Based in Sector 7, Karnal • Serving all Haryana • 250+ websites delivered
          </p>
        </div>
      </section>
    </>
  )
}