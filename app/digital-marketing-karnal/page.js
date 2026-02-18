// app/digital-marketing-karnal/page.js
import { 
 
  Target, 
  Users, 
  Search, 
  BarChart, 
  Smartphone,
  Facebook,
  
  Globe,
  Award,
  Clock,
  Zap,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Star,
  TrendingUp as TrendingIcon,
   
  Rocket,
  Shield,
  Heart,
 
  MessageCircle,
 
  Headphones,
  Calendar,
 
  ArrowRight,
  Quote,
  ChevronRight,
  Building2,
  GraduationCap,
  ShoppingCart
} from 'lucide-react'
import Link from 'next/link'
 
// Enhanced metadata for maximum SEO
export const metadata = {
  title: 'Best Digital Marketing Agency in Karnal (2024) 🚀 TechMintLab - #1 SEO, SMO, PPC Services | Call 📞 7027944324',
  description: '✅ Top-rated digital marketing agency in Karnal. Expert SEO, social media marketing, PPC, and web development. 50+ happy clients. Get 100% ROI-focused strategies. Free consultation! Call now: 7027944324',
  keywords: 'digital marketing agency Karnal, best SEO services Karnal, social media marketing company Karnal, PPC management Karnal, web development Karnal, online marketing Karnal, local SEO Karnal, ecommerce marketing Karnal, digital marketing company near me, affordable digital marketing Karnal, TechMintLab digital marketing, top digital marketing agency Karnal, internet marketing Karnal, Google Ads Karnal, Facebook Ads Karnal, Instagram marketing Karnal, content marketing Karnal, email marketing Karnal, mobile marketing Karnal, video marketing Karnal, branding agency Karnal, website design Karnal, digital marketing consultant Karnal, ROI focused marketing Karnal, small business marketing Karnal, startup marketing Karnal, local business marketing Karnal, best marketing company Karnal, digital marketing experts Karnal, digital marketing services Karnal, online marketing company Karnal, seo company Karnal, smo services Karnal, whatsapp marketing Karnal, 7027944324, 8571994258',
  
  openGraph: {
    title: 'Best Digital Marketing Agency in Karnal | TechMintLab - #1 SEO & SMO Services | Call 7027944324',
    description: 'Transform your business with Karnals best digital marketing agency. Expert SEO, social media, PPC & web development. 100+ projects delivered. Get free audit! Call now: 7027944324',
    url: 'https://techmintlab.com/digital-marketing-karnal',
    siteName: 'TechMintLab',
    images: [
      {
        url: 'https://techmintlab.com/og-digital-marketing-karnal.jpg',
        width: 1200,
        height: 630,
        alt: 'TechMintLab - Best Digital Marketing Agency in Karnal'
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
    title: 'Best Digital Marketing Agency in Karnal | TechMintLab',
    description: `Transform your business with Karnal's best digital marketing agency. Expert SEO, social media, PPC & web development. Call 7027944324`,
    images: ['https://techmintlab.com/twitter-digital-marketing-karnal.jpg'],
    creator: '@techmintlab',
    site: '@techmintlab'
  },
  
  alternates: {
    canonical: 'https://techmintlab.com/digital-marketing-karnal',
    languages: {
      'en-IN': 'https://techmintlab.com/digital-marketing-karnal',
      'hi-IN': 'https://techmintlab.com/hi/digital-marketing-karnal'
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
  
  category: 'digital marketing',
  
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Karnal',
    'geo.position': '29.6857;76.9905',
    'ICBM': '29.6857, 76.9905',
    'format-detection': 'telephone=yes'
  }
}

// Enhanced Schema.org structured data with more details
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://techmintlab.com/#business',
      name: 'TechMintLab - Digital Marketing Agency Karnal',
      description: 'Premier digital marketing agency in Karnal offering expert SEO, social media marketing, PPC, and web development services with proven ROI.',
      url: 'https://techmintlab.com/digital-marketing-karnal',
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
        'Best Digital Marketing Agency Karnal 2023',
        'Top SEO Company Haryana 2023',
        'Best Social Media Agency Karnal 2023'
      ]
    },
    {
      '@type': 'Product',
      name: 'Digital Marketing Services Karnal',
      description: 'Comprehensive digital marketing solutions for Karnal businesses',
      brand: {
        '@type': 'Brand',
        name: 'TechMintLab'
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '15000',
        highPrice: '100000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        offerCount: '6'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '50',
        bestRating: '5',
        worstRating: '1'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://techmintlab.com/digital-marketing-karnal#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is digital marketing important for Karnal businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Digital marketing helps Karnal businesses reach local customers effectively, compete with larger brands, and establish a strong online presence in the growing Karnal market. With increasing internet penetration in Haryana, digital marketing has become essential for business growth.'
          }
        },
        {
          '@type': 'Question',
          name: 'How much do digital marketing services cost in Karnal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our digital marketing packages in Karnal start from ₹15,000/month, customized based on your specific needs and goals. We offer flexible pricing plans suitable for small businesses, startups, and large enterprises in Karnal.'
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
      name: 'Digital Marketing',
      item: 'https://techmintlab.com/digital-marketing-karnal'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Digital Marketing Karnal',
      item: 'https://techmintlab.com/digital-marketing-karnal'
    }
  ]
}

// Blog posts data
const blogPosts = [
  {
    title: 'Top 10 Digital Marketing Trends in Karnal for 2024',
    excerpt: 'Discover the latest digital marketing trends shaping Karnal businesses. From voice search optimization to AI-powered marketing, learn what works in 2024.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Trends',
    image: '/blog/trends-2024.jpg',
    url: '/blog/digital-marketing-trends-karnal-2024'
  },
  {
    title: 'How to Choose the Best SEO Company in Karnal: Complete Guide',
    excerpt: 'Looking for SEO services in Karnal? This comprehensive guide helps you choose the right SEO company for your business with tips, questions to ask, and red flags to avoid.',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'SEO Guide',
    image: '/blog/seo-guide.jpg',
    url: '/blog/choose-best-seo-company-karnal'
  },
  {
    title: 'Local SEO Strategies for Karnal Small Businesses',
    excerpt: 'Boost your local presence with these proven local SEO strategies. Learn how to dominate Karnal search results and attract more local customers.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Local SEO',
    image: '/blog/local-seo.jpg',
    url: '/blog/local-seo-strategies-karnal'
  },
  {
    title: 'Social Media Marketing Success Stories from Karnal',
    excerpt: 'Real case studies of Karnal businesses that transformed their online presence through social media marketing. Learn from their success.',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Social Media',
    image: '/blog/social-media-success.jpg',
    url: '/blog/social-media-success-stories-karnal'
  },
  {
    title: 'Google My Business Optimization Guide for Karnal Businesses',
    excerpt: 'Complete guide to optimizing your Google My Business profile for Karnal local search. Get more visibility in local map packs.',
    date: '2023-12-20',
    readTime: '6 min read',
    category: 'Local SEO',
    image: '/blog/gmb-guide.jpg',
    url: '/blog/google-my-business-optimization-karnal'
  },
  {
    title: 'PPC Advertising Cost in Karnal: Complete Pricing Guide 2024',
    excerpt: 'Understand PPC advertising costs in Karnal. Budget planning, ROI expectations, and tips for maximizing your ad spend.',
    date: '2023-12-15',
    readTime: '5 min read',
    category: 'PPC',
    image: '/blog/ppc-cost.jpg',
    url: '/blog/ppc-advertising-cost-karnal'
  }
]

// Industry insights
const industryInsights = [
  {
    title: 'Digital Marketing for Karnal Real Estate Agents',
    content: 'Learn how real estate agents in Karnal can leverage digital marketing to generate more leads and close deals faster. Includes SEO strategies for property listings, social media marketing for showcasing properties, and PPC campaigns for targeted lead generation.',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: 'E-commerce Marketing Strategies for Karnal Retailers',
    content: 'Comprehensive guide for Karnal retailers moving online. From setting up your e-commerce store to driving traffic and converting visitors into customers.',
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    title: 'Healthcare Digital Marketing in Karnal',
    content: 'Specialized digital marketing strategies for doctors, clinics, and hospitals in Karnal. Includes patient acquisition, reputation management, and local visibility.',
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: 'Educational Institute Marketing in Karnal',
    content: 'How schools, colleges, and coaching centers in Karnal can attract more students through effective digital marketing campaigns.',
    icon: <GraduationCap className="w-6 h-6" />
  }
]

export default function DigitalMarketingKarnal() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Services Karnal',
      description: 'Dominate Karnal search results with our proven SEO strategies. We optimize your website for local and national keywords.',
      features: ['Local SEO Karnal', 'On-page SEO', 'Off-page SEO', 'Technical SEO', 'E-commerce SEO', 'Voice Search Optimization'],
      price: 'Starting ₹15,000/mo'
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description: 'Engage with Karnal audience through strategic social media campaigns on Facebook, Instagram, and LinkedIn.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting', 'Influencer Marketing', 'Video Marketing'],
      price: 'Starting ₹12,000/mo'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'PPC Advertising Karnal',
      description: 'Targeted Google Ads and social media campaigns to drive immediate traffic and conversions in Karnal.',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Retargeting', 'Display Advertising', 'YouTube Advertising'],
      price: 'Starting ₹10,000/mo'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development Karnal',
      description: 'Custom websites designed for Karnal businesses with SEO-friendly structure and responsive design.',
      features: ['E-commerce Sites', 'Business Websites', 'Landing Pages', 'Web Applications', 'CMS Development', 'Website Maintenance'],
      price: 'Starting ₹25,000'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to track your ROI and optimize campaigns for better results.',
      features: ['Google Analytics', 'Conversion Tracking', 'Custom Reports', 'ROI Analysis', 'Competitor Analysis', 'Market Research'],
      price: 'Starting ₹8,000/mo'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Marketing Karnal',
      description: 'Reach Karnal customers on their mobile devices with SMS marketing and mobile-optimized campaigns.',
      features: ['SMS Campaigns', 'App Marketing', 'Mobile SEO', 'QR Code Campaigns', 'WhatsApp Marketing', 'Mobile Advertising'],
      price: 'Starting ₹7,000/mo'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Local Market Experts',
      description: 'Deep understanding of Karnal market dynamics and consumer behavior. We know what works in Karnal.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '5+ Years Experience',
      description: 'Proven track record of delivering results for Karnal businesses across various industries.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dedicated Team',
      description: 'Expert strategists, designers, and marketers working 24/7 for your success.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Results',
      description: 'Quick turnaround times with data-driven strategies. See results in as little as 30 days.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'ROI Focused',
      description: 'Every strategy is designed to maximize your return on investment with measurable results.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'White Hat Techniques',
      description: 'We use only ethical, Google-approved SEO and marketing techniques for sustainable growth.'
    }
  ]

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '50+', label: 'Happy Clients in Karnal', icon: <Users className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '95%', label: 'Client Retention', icon: <Heart className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Owner, Karnal Electronics',
      content: 'TechMintLab transformed our online presence. Our website traffic increased by 300% in just 3 months! They are truly the best digital marketing agency in Karnal.',
      rating: 5,
      image: '/testimonials/client1.jpg',
      phone: '7027944324'
    },
    {
      name: 'Priya Sharma',
      position: 'Director, Karnal Fashion Hub',
      content: 'Best digital marketing agency in Karnal. Their social media strategies doubled our sales within 6 months. Highly recommended for fashion businesses!',
      rating: 5,
      image: '/testimonials/client2.jpg',
      phone: '7027944324'
    },
    {
      name: 'Amit Singh',
      position: 'CEO, Karnal Real Estate',
      content: 'Professional team with excellent local market knowledge. They understand Karnal real estate market perfectly. Got us 50+ qualified leads in first month.',
      rating: 5,
      image: '/testimonials/client3.jpg',
      phone: '7027944324'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹15,000',
      period: '/month',
      features: [
        'Local SEO (10 keywords)',
        'Social Media Management (2 platforms)',
        'Monthly Reports',
        'Basic Content Creation',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹30,000',
      period: '/month',
      features: [
        'Advanced SEO (25 keywords)',
        'Social Media Management (4 platforms)',
        'Google Ads Management',
        'Premium Content Creation',
        'Weekly Reports',
        'Priority Support',
        'Conversion Optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹50,000+',
      period: '/month',
      features: [
        'Comprehensive SEO (50+ keywords)',
        'Full Social Media Suite',
        'PPC & Display Advertising',
        'Video Marketing',
        'Custom Web Development',
        'Dedicated Account Manager',
        '24/7 Priority Support'
      ],
      popular: false
    }
  ]

  const faqs = [
    {
      question: 'Why is digital marketing important for Karnal businesses?',
      answer: 'Digital marketing is crucial for Karnal businesses because: 1) 80% of Karnal consumers search online before purchasing, 2) It helps compete with larger brands, 3) Provides measurable ROI, 4) Targets local customers effectively, 5) Builds brand credibility in the local market. Call us at 7027944324 for personalized guidance.'
    },
    {
      question: 'How much do digital marketing services cost in Karnal?',
      answer: 'Our digital marketing packages in Karnal start from ₹15,000/month. We offer customized plans based on your business size, goals, and competition level. Small businesses can start with basic packages, while larger enterprises may need comprehensive solutions starting from ₹50,000/month. WhatsApp us at 7027944324 for a custom quote.'
    },
    {
      question: 'How soon will I see results from SEO in Karnal?',
      answer: 'SEO results typically appear in 3-6 months for local Karnal keywords. However, some improvements like Google My Business optimization can show results in 2-4 weeks. We provide monthly progress reports showing keyword rankings, traffic growth, and lead generation metrics. Call 7027944324 to discuss your specific goals.'
    },
    {
      question: 'Do you serve specific industries in Karnal?',
      answer: 'Yes, we work with various industries in Karnal including: Retail stores, Real estate agents, Educational institutions, Healthcare providers, Manufacturing units, Hotels and restaurants, Professional services, and E-commerce businesses. Each industry gets customized strategies. Contact 7027944324 for industry-specific solutions.'
    },
    {
      question: 'What makes TechMintLab different from other agencies?',
      answer: 'TechMintLab stands out because: 1) We provide personalized attention to each client, 2) Use data-driven strategies with proven ROI, 3) Have deep understanding of Karnal market, 4) Offer transparent reporting, 5) Provide flexible pricing, 6) Guarantee results with money-back assurance. Call 7027944324 to experience the difference.'
    },
    {
      question: 'Do you offer Google My Business optimization?',
      answer: 'Absolutely! We specialize in Google My Business optimization for Karnal businesses. Our GMB services include: Profile optimization, Regular posts and updates, Review management, Photo uploads, Q&A monitoring, and Insights tracking. This helps you appear in local map packs. WhatsApp 7027944324 for a free GMB audit.'
    },
    {
      question: 'How can I contact TechMintLab?',
      answer: 'You can reach TechMintLab through multiple channels: 📞 Call/WhatsApp: 7027944324 (Sales) or 8571994258, 📧 Email: support@techmintlab.com, 📍 Visit: Sector 7, Karnal, Haryana. We respond within 1 hour during business hours.'
    },
    {
      question: 'Do you offer WhatsApp marketing services in Karnal?',
      answer: 'Yes! We provide comprehensive WhatsApp marketing services for Karnal businesses including broadcast campaigns, chatbot integration, automated responses, and broadcast lists. Contact 7027944324 to start your WhatsApp marketing campaign.'
    }
  ]

  const localAreas = [
    'Sector 7 Karnal', 'Sector 12 Karnal', 'Sector 13 Karnal', 'Sector 14 Karnal',
    'Old Karnal', 'New Karnal', 'Kunjpura Road', 'Gharunda', 'Assandh',
    'Indri', 'Nilokheri', 'Gharaunda', 'Madhuban', 'Karnal City', 'Sector 6',
    'Sector 8', 'Sector 9', 'Model Town', 'Urban Estate', 'Railway Road',
    'Gita Colony', 'Shakti Colony', 'Prem Nagar', 'Dayal Singh Colony'
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
            className="flex-1 flex items-center justify-center py-4 bg-green-500 text-white font-semibold"
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
          className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
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
      
      {/* Hero Section with Enhanced SEO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern for better visual */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge for credibility */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-gray-700">#1 Rated Digital Marketing Agency in Karnal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Best Digital Marketing Agency in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              🚀 Transform Your Business with <strong>Data-Driven Digital Marketing Strategies</strong> • 
              <span className="text-blue-600"> 50+ Happy Clients</span> • 
              <span className="text-purple-600"> 200+ Projects</span> • 
              <span className="text-green-600"> 100% ROI Focused</span>
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-2 font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="ml-2 font-semibold">Google Certified</span>
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

      {/* Stats Section with Icons */}
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

      {/* Services Section with Pricing */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Digital Marketing Services in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              We offer end-to-end digital marketing solutions tailored for Karnal businesses
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">PRICING PLANS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Affordable Digital Marketing Packages in{' '}
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
                  <span className="text-gray-600">{plan.period}</span>
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
              We combine global expertise with local market knowledge
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

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">DIGITAL MARKETING BLOG</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights & Guides for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal Businesses
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Expert advice, tips, and strategies to grow your business online
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

      {/* Industry Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">INDUSTRY INSIGHTS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Marketing Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karnal
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Tailored strategies for different industries in Karnal
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
              We provide digital marketing services across Karnal and nearby areas
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
              Real results from local businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg relative">
                {/* Quote mark */}
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

      {/* FAQ Section with Schema */}
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
              Everything you need to know about digital marketing in Karnal
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
                  <a href="tel:+917027944324" className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Call / WhatsApp</p>
                      <p className="font-semibold text-lg">+91-7027944324</p>
                    </div>
                  </a>

                  <a href="tel:+918571994258" className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
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

                  <a href="mailto:support@techmintlab.com" className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-all">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold">support@techmintlab.com</p>
                    </div>
                  </a>

                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white">
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
                    placeholder="Your Message"
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
            Ready to Grow Your Business in Karnal?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free digital marketing audit and consultation today. Limited slots available!
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