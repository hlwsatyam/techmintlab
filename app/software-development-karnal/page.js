// app/software-development-karnal/page.js
import { 
  Code,
  Smartphone,
  Globe,
  Cloud,
  Database,
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  Rocket,
  Heart,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Headphones,
  Calendar,
  ArrowRight,
  ChevronRight,
  Building2,
  ShoppingCart,
  Hospital,
  GraduationCap,
  Briefcase,
  Layout,
  Cpu,
  GanttChartSquare,
  Workflow,
  Palette,
  TestTube,
  GitBranch,
  Rocket as RocketIcon
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Enhanced metadata for maximum SEO
export const metadata = {
  title: 'Best Software Development Company in Karnal (2024) 🚀 TechMintLab - Custom Software, Mobile Apps & Website Development | Call 📞 7027944324',
  description: '✅ Top-rated software development company in Karnal. Expert custom software development, mobile app development, website design & development. 50+ successful projects. Get free consultation! Call now: 7027944324',
  keywords: 'software development company Karnal, mobile app development Karnal, website development Karnal, custom software development Karnal, android app development Karnal, iOS app development Karnal, web development company Karnal, ecommerce website development Karnal, software company Karnal, IT company Karnal, best software developers Karnal, mobile application development Karnal, software development services Karnal, web design company Karnal, software solutions Karnal, TechMintLab software development, 7027944324, 8571994258, software development near me, app development near me, website developers Karnal, software programmers Karnal, IT solutions Karnal',
  
  openGraph: {
    title: 'Best Software Development Company in Karnal | TechMintLab - Custom Software & Mobile Apps | Call 7027944324',
    description: 'Transform your business with Karnals best software development company. Expert custom software, mobile apps, and website development. 50+ successful projects. Get free consultation!',
    url: 'https://techmintlab.com/software-development-karnal',
    siteName: 'TechMintLab',
    images: [
      {
        url: 'https://techmintlab.com/og-software-development-karnal.jpg',
        width: 1200,
        height: 630,
        alt: 'TechMintLab - Best Software Development Company in Karnal'
      }
    ],
    locale: 'en_IN',
    type: 'website',
    publishedTime: '2024-01-15T00:00:00+05:30',
    authors: ['TechMintLab Team'],
    phoneNumbers: ['+917027944324', '+918571994258']
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Development Company in Karnal | TechMintLab',
    description: 'Transform your business with Karnals best software development company. Expert custom software, mobile apps, and website development. Call 7027944324',
    images: ['https://techmintlab.com/twitter-software-development-karnal.jpg'],
    creator: '@techmintlab',
    site: '@techmintlab'
  },
  
  alternates: {
    canonical: 'https://techmintlab.com/software-development-karnal',
    languages: {
      'en-IN': 'https://techmintlab.com/software-development-karnal',
      'hi-IN': 'https://techmintlab.com/hi/software-development-karnal'
    }
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
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
    baidu: 'your-baidu-verification-code'
  },
  
  category: 'software development',
  
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Karnal',
    'geo.position': '29.6857;76.9905',
    'ICBM': '29.6857, 76.9905',
    'format-detection': 'telephone=yes'
  }
}

// Enhanced Schema.org structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://techmintlab.com/#business',
      name: 'TechMintLab - Software Development Company Karnal',
      description: 'Premier software development company in Karnal offering custom software development, mobile app development, and website development services.',
      url: 'https://techmintlab.com/software-development-karnal',
      telephone: '+91-7027944324',
      email: 'support@techmintlab.com',
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
        latitude: '29.6857',
        longitude: '76.9905'
      },
      openingHours: 'Mo-Su 09:00-20:00',
      priceRange: '₹₹',
      image: 'https://techmintlab.com/logo.png',
      logo: 'https://techmintlab.com/logo.png',
      foundingDate: '2019',
      founders: [
        {
          '@type': 'Person',
          name: 'Founder Name'
        }
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-7027944324',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['Hindi', 'English']
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91-8571994258',
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['Hindi', 'English']
        }
      ],
      sameAs: [
        'https://facebook.com/techmintlab',
        'https://instagram.com/techmintlab',
        'https://linkedin.com/company/techmintlab',
        'https://twitter.com/techmintlab',
        'https://youtube.com/techmintlab',
        'https://wa.me/917027944324'
      ],
      areaServed: {
        '@type': 'City',
        name: 'Karnal'
      },
      hasMap: 'https://goo.gl/maps/your-location',
      award: [
        'Best Software Development Company Karnal 2023',
        'Top IT Company Haryana 2023'
      ]
    },
    {
      '@type': 'Product',
      name: 'Software Development Services Karnal',
      description: 'Comprehensive software development solutions for Karnal businesses',
      brand: {
        '@type': 'Brand',
        name: 'TechMintLab'
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '25000',
        highPrice: '500000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        offerCount: '8'
      },
     
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://techmintlab.com/software-development-karnal#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does software development cost in Karnal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Software development costs in Karnal vary based on project complexity. Basic websites start from ₹25,000, mobile apps from ₹50,000, and custom software from ₹1,00,000. Contact us at 7027944324 for a free quote.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I contact TechMintLab in Karnal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact TechMintLab by calling +91-7027944324, WhatsApp us at +91-7027944324, email support@techmintlab.com, or visit our office in Sector 7, Karnal.'
          }
        }
      ]
    }
  ]
}

// BreadcrumbList Schema
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://techmintlab.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Software Development',
      item: 'https://techmintlab.com/software-development'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Software Development Karnal',
      item: 'https://techmintlab.com/software-development-karnal'
    }
  ]
}

// Blog posts data
const blogPosts = [
  {
    title: 'Top 10 Software Development Trends in Karnal for 2024',
    excerpt: 'Discover the latest software development trends shaping Karnal businesses. From AI integration to cloud computing, learn what works in 2024.',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Trends',
    url: '/blog/software-development-trends-karnal-2024'
  },
  {
    title: 'How to Choose the Best Software Development Company in Karnal',
    excerpt: 'Looking for software development services in Karnal? This comprehensive guide helps you choose the right development partner for your business.',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Guide',
    url: '/blog/choose-best-software-company-karnal'
  },
  {
    title: 'Mobile App Development Cost in Karnal: Complete Guide 2024',
    excerpt: 'Understand mobile app development costs in Karnal. Budget planning, features pricing, and tips for maximizing your investment.',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Pricing',
    url: '/blog/mobile-app-development-cost-karnal'
  },
  {
    title: 'Website Design Trends for Karnal Businesses in 2024',
    excerpt: 'Stay ahead with the latest website design trends. Learn how Karnal businesses can create stunning websites that convert visitors into customers.',
    date: '2023-12-28',
    readTime: '5 min read',
    category: 'Web Design',
    url: '/blog/website-design-trends-karnal-2024'
  },
  {
    title: 'E-commerce Development Guide for Karnal Retailers',
    excerpt: 'Complete guide to building an e-commerce website for your Karnal business. From platform selection to payment integration.',
    date: '2023-12-20',
    readTime: '8 min read',
    category: 'E-commerce',
    url: '/blog/ecommerce-development-guide-karnal'
  },
  {
    title: 'Custom Software vs Off-the-Shelf Solutions for Karnal Businesses',
    excerpt: 'Compare custom software development and ready-made solutions. Find the best fit for your Karnal business needs.',
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Software',
    url: '/blog/custom-software-vs-off-shelf-karnal'
  }
]

// Industry insights
const industryInsights = [
  {
    title: 'Software Solutions for Karnal Real Estate',
    content: 'Custom property management software, real estate websites, and mobile apps for Karnal real estate agents and developers.',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: 'E-commerce Development for Karnal Retailers',
    content: 'Custom e-commerce websites and mobile apps for Karnal retailers. From small shops to large retail chains.',
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    title: 'Healthcare Software Development in Karnal',
    content: 'Custom software solutions for clinics, hospitals, and healthcare providers in Karnal. Patient management systems, EMR, and more.',
    icon: <Hospital className="w-6 h-6" />
  },
  {
    title: 'Educational Software for Karnal Institutes',
    content: 'Learning management systems, school management software, and educational apps for Karnal schools and coaching centers.',
    icon: <GraduationCap className="w-6 h-6" />
  }
]

export default function SoftwareDevelopmentKarnal() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions for Karnal businesses. From inventory management to CRM systems, we build software that streamlines your operations.',
      features: ['Business Process Automation', 'CRM Software', 'ERP Systems', 'Inventory Management', 'Accounting Software', 'Custom Applications'],
      price: 'Starting ₹1,00,000'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android. Engage your Karnal customers with powerful mobile experiences.',
      features: ['Android Apps', 'iOS Apps', 'Cross-Platform Apps', 'Hybrid Apps', 'App Maintenance', 'App Store Optimization'],
      price: 'Starting ₹50,000'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Development',
      description: 'Professional, responsive websites for Karnal businesses. From simple brochures to complex web applications.',
      features: ['Business Websites', 'E-commerce Sites', 'Landing Pages', 'Web Portals', 'CMS Websites', 'Custom Web Apps'],
      price: 'Starting ₹25,000'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud-based software solutions for Karnal businesses. Reduce costs and improve accessibility.',
      features: ['Cloud Migration', 'SaaS Development', 'Cloud Integration', 'Data Backup', 'Cloud Security', 'Remote Access'],
      price: 'Starting ₹75,000'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      description: 'Efficient database design and management for Karnal businesses. Secure, fast, and reliable data solutions.',
      features: ['Database Design', 'Data Migration', 'Database Optimization', 'Data Security', 'Backup Solutions', 'Data Analytics'],
      price: 'Starting ₹40,000'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Software Security',
      description: 'Protect your business with robust software security solutions. Keep your data and applications safe.',
      features: ['Security Audits', 'Penetration Testing', 'Data Encryption', 'Secure Authentication', 'Compliance', 'Security Monitoring'],
      price: 'Starting ₹30,000'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: '5+ Years Experience',
      description: 'Proven track record of delivering quality software solutions for Karnal businesses.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Skilled developers, designers, and project managers dedicated to your success.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Fast Delivery',
      description: 'Agile development methodology ensures quick turnaround without compromising quality.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Client Satisfaction',
      description: '95% client retention rate. We prioritize your business needs and goals.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures bug-free, high-performance software solutions.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Ongoing Support',
      description: '24/7 maintenance and support for all our software solutions.'
    }
  ]

  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: <Rocket className="w-6 h-6" /> },
    { number: '50+', label: 'Happy Clients in Karnal', icon: <Users className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '95%', label: 'Client Retention', icon: <Heart className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: 'Rajesh Gupta',
      position: 'Owner, Karnal Electronics',
      content: 'TechMintLab developed our inventory management software. It streamlined our operations and increased efficiency by 200%. Best software company in Karnal!',
      rating: 5,
      phone: '7027944324'
    },
    {
      name: 'Priya Agarwal',
      position: 'Director, Karnal Fashion Hub',
      content: 'They built an amazing e-commerce website for our fashion store. Sales have doubled since launch. Highly recommended for website development in Karnal!',
      rating: 5,
      phone: '7027944324'
    },
    {
      name: 'Amit Sharma',
      position: 'CEO, Karnal Real Estate',
      content: 'The property management software they created transformed our business. Professional team with excellent technical knowledge.',
      rating: 5,
      phone: '7027944324'
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic Website',
      price: '₹25,000',
      period: 'one-time',
      features: [
        '5 Pages Website',
        'Responsive Design',
        'Contact Form',
        'Basic SEO',
        '1 Year Domain',
        '1 Year Hosting'
      ],
      popular: false
    },
    {
      name: 'Business Website',
      price: '₹50,000',
      period: 'one-time',
      features: [
        '10 Pages Website',
        'CMS Integration',
        'E-commerce Ready',
        'Advanced SEO',
        'Social Media Integration',
        'Analytics Setup',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Custom Software',
      price: '₹1,00,000+',
      period: 'starting',
      features: [
        'Custom Features',
        'Database Design',
        'Admin Panel',
        'API Integration',
        'Security Features',
        'Scalable Architecture',
        '24/7 Support'
      ],
      popular: false
    }
  ]

  const technologies = [
    { name: 'React.js', icon: '/tech/react.png' },
    { name: 'Node.js', icon: '/tech/node.png' },
    { name: 'Python', icon: '/tech/python.png' },
    { name: 'PHP', icon: '/tech/php.png' },
    { name: 'Laravel', icon: '/tech/laravel.png' },
    { name: 'MySQL', icon: '/tech/mysql.png' },
    { name: 'MongoDB', icon: '/tech/mongodb.png' },
    { name: 'AWS', icon: '/tech/aws.png' }
  ]

  const developmentProcess = [
    {
      step: '1',
      title: 'Requirement Analysis',
      description: 'We understand your business needs and project requirements in detail.'
    },
    {
      step: '2',
      title: 'Planning & Design',
      description: 'Create project roadmap, wireframes, and design prototypes for your approval.'
    },
    {
      step: '3',
      title: 'Development',
      description: 'Agile development with regular updates and feedback sessions.'
    },
    {
      step: '4',
      title: 'Testing & QA',
      description: 'Rigorous testing to ensure bug-free, high-performance software.'
    },
    {
      step: '5',
      title: 'Deployment',
      description: 'Smooth deployment and migration to production environment.'
    },
    {
      step: '6',
      title: 'Maintenance',
      description: 'Ongoing support, updates, and maintenance for long-term success.'
    }
  ]

  const localAreas = [
    'Sector 7 Karnal', 'Sector 12 Karnal', 'Sector 13 Karnal', 'Sector 14 Karnal',
    'Old Karnal', 'New Karnal', 'Kunjpura Road', 'Gharunda', 'Assandh',
    'Indri', 'Nilokheri', 'Gharaunda', 'Madhuban', 'Karnal City',
    'Model Town', 'Urban Estate', 'Railway Road', 'Gita Colony', 'Prem Nagar'
  ]

  const faqs = [
    {
      question: 'How much does software development cost in Karnal?',
      answer: 'Software development costs in Karnal vary by project type: Basic websites start from ₹25,000, e-commerce websites from ₹50,000, mobile apps from ₹50,000, and custom software from ₹1,00,000. Call us at 7027944324 for a free quote based on your specific requirements.'
    },
    {
      question: 'How long does it take to develop a website in Karnal?',
      answer: 'Website development time depends on complexity: Basic websites take 2-3 weeks, business websites 4-6 weeks, and e-commerce sites 6-8 weeks. We provide timeline estimates during consultation. Contact 7027944324 to discuss your project timeline.'
    },
    {
      question: 'Do you provide app development services in Karnal?',
      answer: 'Yes! We provide comprehensive mobile app development services in Karnal including Android apps, iOS apps, and cross-platform apps. Our apps are feature-rich, user-friendly, and optimized for performance. WhatsApp 7027944324 to discuss your app idea.'
    },
    {
      question: 'What technologies do you use for development?',
      answer: 'We use modern technologies including React.js, Node.js, Python, PHP, Laravel, MySQL, MongoDB, and cloud platforms like AWS. Our tech stack ensures scalable, secure, and high-performance solutions. Call 7027944324 for technical consultation.'
    },
    {
      question: 'Do you provide maintenance after project delivery?',
      answer: 'Absolutely! We provide comprehensive maintenance and support packages for all our projects. This includes bug fixes, security updates, feature additions, and performance optimization. Contact 7027944324 for maintenance plans.'
    },
    {
      question: 'Can you build e-commerce websites for Karnal businesses?',
      answer: 'Yes, we specialize in e-commerce website development for Karnal businesses. We build feature-rich online stores with payment integration, inventory management, and marketing tools. WhatsApp 7027944324 to discuss your e-commerce project.'
    },
    {
      question: 'How can I contact TechMintLab?',
      answer: 'You can reach TechMintLab through multiple channels: 📞 Call/WhatsApp: 7027944324 (Sales) or 8571994258, 📧 Email: support@techmintlab.com, 📍 Visit: Sector 7, Karnal, Haryana. We respond within 1 hour during business hours.'
    },
    {
      question: 'Do you offer custom software development for businesses in Karnal?',
      answer: 'Yes! We specialize in custom software development for Karnal businesses including CRM systems, ERP solutions, inventory management, and business automation tools. Call 7027944324 to discuss your custom software requirements.'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      {/* Floating Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 lg:hidden">
        <div className="flex divide-x divide-gray-200">
          <a 
            href="tel:+917027944324" 
            className="flex-1 flex items-center justify-center py-4 bg-blue-600 text-white font-semibold"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
          <a 
            href="https://wa.me/917027944324" 
            className="flex-1 flex items-center justify-center py-4 bg-green-600 text-white font-semibold"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Sticky Contact for Desktop */}
      <div className="hidden lg:block fixed right-6 bottom-6 z-50 space-y-3">
        <a 
          href="tel:+917027944324" 
          className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          <Phone className="w-5 h-5 mr-2" />
          +91-7027944324
        </a>
        <a 
          href="https://wa.me/917027944324" 
          className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp Now
        </a>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-gray-700">#1 Rated Software Development Company in Karnal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Best Software Development Company in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              🚀 Transform Your Business with <strong>Custom Software, Mobile Apps & Websites</strong> • 
              <span className="text-blue-600"> 100+ Projects</span> • 
              <span className="text-purple-600"> 50+ Clients</span> • 
              <span className="text-green-600"> 24/7 Support</span>
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-2 font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="ml-2 font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="ml-2 font-semibold">50+ Local Clients</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <a 
                href="https://wa.me/917027944324"
                className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </a>
            </div>
            
            {/* Quick contact options */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-gray-600">
              <a href="tel:+917027944324" className="flex items-center hover:text-blue-600 font-semibold">
                <Phone className="w-4 h-4 mr-1" /> +91-7027944324
              </a>
              <a href="https://wa.me/917027944324" className="flex items-center hover:text-green-600 font-semibold">
                <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp: 7027944324
              </a>
              <a href="tel:+918571994258" className="flex items-center hover:text-blue-600">
                <Phone className="w-4 h-4 mr-1" /> +91-8571994258 (Sales)
              </a>
              <a href="mailto:support@techmintlab.com" className="flex items-center hover:text-blue-600">
                <Mail className="w-4 h-4 mr-1" /> support@techmintlab.com
              </a>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> Sector 7, Karnal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Software Development Services in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              We offer end-to-end software development solutions tailored for Karnal businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600">{service.price}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-2">
                  <Link 
                    href={`/contact?service=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full text-center py-2 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Get Quote
                  </Link>
                  <a 
                    href="https://wa.me/917027944324"
                    className="block w-full text-center py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 inline mr-1" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">TECHNOLOGIES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modern Technologies We Use
            </h2>
            <p className="text-gray-600 text-lg">
              We leverage cutting-edge technologies to build robust software solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Build Software for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal Businesses
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              A systematic approach to deliver high-quality software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">PRICING PLANS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Affordable Software Development Packages in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                  plan.popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2">
                  <Link
                    href={`/contact?plan=${plan.name.toLowerCase()}`}
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    Get Started
                  </Link>
                  <a
                    href="https://wa.me/917027944324"
                    className="block w-full text-center py-2 text-green-600 border border-green-600 rounded-xl hover:bg-green-50 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 inline mr-1" />
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Karnal Businesses Choose{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechMintLab
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              We combine technical expertise with business understanding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">INDUSTRY SOLUTIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Software Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Tailored software solutions for different industries in Karnal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                  {insight.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                <p className="text-gray-600 mb-4">{insight.content}</p>
                <a 
                  href="https://wa.me/917027944324"
                  className="text-blue-600 font-semibold inline-flex items-center hover:translate-x-2 transition-transform"
                >
                  Get Industry-Specific Advice <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">BLOG</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights & Guides for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software Development
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Expert advice, tips, and strategies for your software projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                key={index}
                href={post.url}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-blue-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              View All Articles <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local Areas We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">COVERAGE AREA</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas We Serve in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              We provide software development services across Karnal and nearby areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {localAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow flex items-center">
                <MapPin className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Karnal{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real feedback from local businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg relative">
                <div className="absolute top-6 right-6 text-6xl text-gray-200">"</div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 relative z-10">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about software development in Karnal
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 
                  className="font-semibold text-lg mb-2 cursor-pointer"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div 
                  className="text-gray-600"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TechMintLab
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Contact us today for a free consultation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a href="tel:+917027944324" className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Call / WhatsApp</p>
                      <p className="font-semibold text-lg">+91-7027944324</p>
                    </div>
                  </a>

                  <a href="tel:+918571994258" className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-all">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Sales Enquiry</p>
                      <p className="font-semibold text-lg">+91-8571994258</p>
                    </div>
                  </a>

                  <a href="https://wa.me/917027944324" className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">WhatsApp</p>
                      <p className="font-semibold text-lg">+91-7027944324</p>
                    </div>
                  </a>

                  <a href="mailto:support@techmintlab.com" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold">support@techmintlab.com</p>
                    </div>
                  </a>

                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Visit Us</p>
                      <p className="font-semibold">Sector 7, Karnal, Haryana - 132001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Quick Message</h3>
                
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                  
                  <p className="text-center text-sm text-gray-500">
                    Or contact us directly on{' '}
                    <a href="https://wa.me/917027944324" className="text-green-600 font-semibold">
                      WhatsApp
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Software Solution in Karnal?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and project estimate today. Limited slots available!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <a 
              href="https://wa.me/917027944324"
              className="inline-block px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Now
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-white/80 text-sm">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" /> No Contract
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" /> Money-Back Guarantee
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" /> 24/7 Support
            </span>
            <span className="flex items-center">
              <Headphones className="w-4 h-4 mr-1" /> Call: 7027944324
            </span>
          </div>
        </div>
      </section>
    </>
  )
}