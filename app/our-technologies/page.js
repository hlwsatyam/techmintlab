// app/our-technologies/page.js
import {
  Code2,
  Database,
  Cloud,
  Lock,
  Zap,
  Smartphone,
  Globe,
  Server,
  GitBranch,
  Box,
  Cpu,
  Shield,
  Rocket,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
  MessageCircle,
  Headphones,
  Calendar,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Figma,
  Chrome,
  Terminal,
  Package,
  CloudLightning,
  Layers,
  PenTool,
  Eye,
  Settings,
  Wrench,
  FileCode,
  Braces,
  Code,
  Command,
  Cpu as CpuIcon,
  HardDrive,
  Network,
  Share2,
  Layers as StackIcon,
  BookOpen,
  TrendingUp as TrendingIcon,
  ShoppingCart,
  BarChart,
  Briefcase,
  Target,
  ZapOff,
  Wind,
  Sun,
  Moon,
  Star as StarIcon
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Enhanced metadata for maximum SEO with more keywords and better structure
export const metadata = {
  title: 'Our Technologies & Tech Stack 2024 🚀 TechMintLab - MERN, Python, Cloud, AI/ML Development Company | Call 📞 7027944324',
  description: '✅ TechMintLab: Experts in Modern Technology Stack. 200+ Projects Delivered using MERN, Python, AWS, Azure, AI/ML, React Native, DevOps. Free Technical Consultation. ISO Certified. 100% Client Satisfaction. Call Now: 7027944324',
  keywords: 'technology stack, tech stack, MERN stack development, Python development company, cloud computing services, AWS consulting, Azure services, AI ML development, mobile app development, React Native experts, Node.js development, Next.js developers, full stack development, DevOps services, Docker Kubernetes, microservices architecture, API development, database management, MongoDB, PostgreSQL, MySQL, GraphQL, REST APIs, frontend technologies, backend technologies, cloud infrastructure, digital transformation, technology consulting, software development company, best tech stack, modern technology stack, enterprise technology solutions, startup technology stack, scalable architecture, high performance applications, secure software development, 7027944324, 8571994258, technology partners India, software development India, IT consulting Karnal, Haryana tech company',
  
  openGraph: {
    title: 'Our Technologies & Tech Stack 2024 | TechMintLab - Award-Winning Development Company',
    description: 'Discover TechMintLab\'s modern technology stack. We use cutting-edge tools for web, mobile, cloud, and AI development. 200+ successful projects. ISO 27001 Certified. Free tech consultation! Call: 7027944324',
    url: 'https://techmintlab.com/our-technologies',
    siteName: 'TechMintLab',
    images: [
      {
        url: 'https://techmintlab.com/og-technologies.jpg',
        width: 1200,
        height: 630,
        alt: 'TechMintLab - Our Modern Technology Stack 2024 - MERN, Python, Cloud, AI/ML Experts'
      }
    ],
    locale: 'en_IN',
    type: 'website',
    publishedTime: '2024-01-15T00:00:00+05:30',
    modifiedTime: '2024-02-19T00:00:00+05:30',
    authors: ['TechMintLab Engineering Team'],
    phoneNumbers: ['+917027944324', '+918571994258']
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Our Technologies & Tech Stack 2024 | TechMintLab',
    description: 'Explore our modern technology stack for web, mobile, cloud & AI development. MERN, Python, AWS, and more. 200+ projects. Call 7027944324',
    images: ['https://techmintlab.com/twitter-technologies.jpg'],
    creator: '@techmintlab',
    site: '@techmintlab'
  },
  
  alternates: {
    canonical: 'https://techmintlab.com/our-technologies',
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
  
  category: 'technology',
  
  other: {
    'format-detection': 'telephone=yes',
    'geo.region': 'IN-HR',
    'geo.placename': 'Karnal',
    'geo.position': '29.6857;76.9905',
    'ICBM': '29.6857, 76.9905'
  }
}

// Enhanced Schema.org structured data with more detailed information
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareDevelopmentCompany',
      '@id': 'https://techmintlab.com/#company',
      name: 'TechMintLab - Technology Solutions Provider',
      description: 'Leading technology company specializing in modern web development, cloud computing, AI/ML solutions, and mobile app development using cutting-edge tech stack. ISO 27001 Certified with 200+ successful projects.',
      url: 'https://techmintlab.com/our-technologies',
      telephone: '+91-7027944324',
      email: 'tech@techmintlab.com',
      logo: 'https://techmintlab.com/logo.png',
      image: 'https://techmintlab.com/company-image.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sector 7, Main Market',
        addressLocality: 'Karnal',
        addressRegion: 'Haryana',
        postalCode: '132001',
        addressCountry: 'IN'
      },
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
          contactType: 'technical support',
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
        'https://github.com/techmintlab',
        'https://linkedin.com/company/techmintlab',
        'https://twitter.com/techmintlab',
        'https://stackoverflow.com/companies/techmintlab',
        'https://www.facebook.com/techmintlab',
        'https://www.instagram.com/techmintlab'
      ],
      knowsAbout: [
        'MERN Stack Development',
        'Python Programming',
        'Cloud Computing (AWS/Azure)',
        'Artificial Intelligence',
        'Machine Learning',
        'DevOps',
        'Mobile App Development',
        'Microservices Architecture',
        'Database Management',
        'API Development',
        'React Native Development',
        'Next.js Framework',
        'Docker Containerization',
        'Kubernetes Orchestration',
        'GraphQL APIs'
      ],
      award: [
        'Best Technology Solutions Provider 2023',
        'Top Software Development Company 2023',
        'Innovation in Tech Stack 2023',
        'ISO 27001:2022 Certified',
        'Google Cloud Partner 2023'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full Stack Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Computing Solutions'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI/ML Development'
            }
          }
        ]
      },
     
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://techmintlab.com/our-technologies#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What technologies does TechMintLab specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TechMintLab specializes in MERN Stack (MongoDB, Express.js, React, Node.js), Python/Django, Cloud Computing (AWS, Azure, GCP), AI/ML technologies, Mobile Development (React Native, Flutter), DevOps tools (Docker, Kubernetes, Jenkins), and modern database solutions (PostgreSQL, MongoDB, MySQL).'
          }
        },
        {
          '@type': 'Question',
          name: 'Why choose TechMintLab for technology development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Choose TechMintLab for our expertise in modern technologies, experienced developers (avg 5+ years), proven track record with 200+ projects, ISO 27001 certification, scalable solutions, competitive pricing, and dedicated 24/7 technical support. We stay updated with latest tech trends and provide free technical consultation.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I contact TechMintLab for technology consulting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact TechMintLab for technology consulting at +91-7027944324 (Call/WhatsApp), email tech@techmintlab.com, or visit our office in Sector 7, Karnal, Haryana. We offer free initial technical consultation and project estimation.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is your experience with cloud computing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We have extensive experience with all major cloud platforms: AWS (EC2, S3, Lambda, RDS, DynamoDB), Microsoft Azure (App Services, Functions, SQL), and Google Cloud Platform (Compute Engine, Cloud Functions, Firebase). We\'ve successfully migrated 50+ applications to the cloud.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide ongoing technical support after project completion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide comprehensive post-deployment support including 24/7 technical assistance, maintenance packages, security updates, performance monitoring, and feature enhancements. Our support team is available via phone, email, and WhatsApp.'
          }
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://techmintlab.com/our-technologies#breadcrumb',
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
          name: 'Our Technologies',
          item: 'https://techmintlab.com/our-technologies'
        }
      ]
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://techmintlab.com/#business',
      name: 'TechMintLab',
      description: 'Technology Solutions Provider in Karnal',
      telephone: '+91-7027944324',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sector 7, Main Market',
        addressLocality: 'Karnal',
        addressRegion: 'Haryana',
        postalCode: '132001',
        addressCountry: 'IN'
      },
      openingHours: 'Mo-Fr 09:00-18:00',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI'
    }
  ]
}

// Enhanced technology categories with more detailed information
const technologyCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="w-8 h-8" />,
    description: 'Modern, responsive, and performant user interfaces with cutting-edge frameworks',
    technologies: [
      { name: 'React.js', level: 'Expert', experience: '5+ years', projects: 50, icon: '⚛️', rating: 4.9, certifications: 12 },
      { name: 'Next.js', level: 'Expert', experience: '4+ years', projects: 35, icon: '▲', rating: 4.8, certifications: 8 },
      { name: 'Vue.js', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🟢', rating: 4.7, certifications: 5 },
      { name: 'TypeScript', level: 'Expert', experience: '4+ years', projects: 60, icon: '🔷', rating: 5.0, certifications: 15 },
      { name: 'Tailwind CSS', level: 'Expert', experience: '4+ years', projects: 70, icon: '🌊', rating: 4.9, certifications: 10 },
      { name: 'Redux', level: 'Advanced', experience: '4+ years', projects: 45, icon: '🔄', rating: 4.8, certifications: 8 },
      { name: 'Material-UI', level: 'Expert', experience: '4+ years', projects: 40, icon: '🎨', rating: 4.7, certifications: 6 },
      { name: 'Bootstrap', level: 'Expert', experience: '6+ years', projects: 80, icon: '🅱️', rating: 4.9, certifications: 10 },
      { name: 'SASS/SCSS', level: 'Expert', experience: '5+ years', projects: 65, icon: '💅', rating: 4.8, certifications: 8 },
      { name: 'Webpack', level: 'Advanced', experience: '4+ years', projects: 30, icon: '📦', rating: 4.6, certifications: 4 },
      { name: 'Angular', level: 'Advanced', experience: '3+ years', projects: 15, icon: '🅰️', rating: 4.5, certifications: 3 },
      { name: 'Gatsby', level: 'Advanced', experience: '3+ years', projects: 12, icon: '⚡', rating: 4.6, certifications: 4 },
      { name: 'Framer Motion', level: 'Advanced', experience: '2+ years', projects: 18, icon: '🎭', rating: 4.7, certifications: 3 },
      { name: 'Three.js', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '🪐', rating: 4.5, certifications: 2 },
      { name: 'Styled Components', level: 'Expert', experience: '3+ years', projects: 25, icon: '💅', rating: 4.8, certifications: 5 }
    ]
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-8 h-8" />,
    description: 'Robust, scalable, and secure server-side solutions with microservices architecture',
    technologies: [
      { name: 'Node.js', level: 'Expert', experience: '5+ years', projects: 55, icon: '🟢', rating: 4.9, certifications: 14 },
      { name: 'Python', level: 'Expert', experience: '5+ years', projects: 45, icon: '🐍', rating: 5.0, certifications: 12 },
      { name: 'Django', level: 'Advanced', experience: '4+ years', projects: 25, icon: '🎸', rating: 4.7, certifications: 6 },
      { name: 'Express.js', level: 'Expert', experience: '5+ years', projects: 50, icon: '⚡', rating: 4.9, certifications: 10 },
      { name: 'PHP', level: 'Advanced', experience: '6+ years', projects: 40, icon: '🐘', rating: 4.6, certifications: 8 },
      { name: 'Laravel', level: 'Advanced', experience: '4+ years', projects: 20, icon: '🎭', rating: 4.7, certifications: 5 },
      { name: 'Java', level: 'Intermediate', experience: '3+ years', projects: 15, icon: '☕', rating: 4.5, certifications: 4 },
      { name: 'Go', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '🐹', rating: 4.6, certifications: 3 },
      { name: 'REST APIs', level: 'Expert', experience: '5+ years', projects: 70, icon: '🔗', rating: 5.0, certifications: 15 },
      { name: 'GraphQL', level: 'Advanced', experience: '3+ years', projects: 25, icon: '📊', rating: 4.8, certifications: 7 },
      { name: 'FastAPI', level: 'Advanced', experience: '2+ years', projects: 12, icon: '⚡', rating: 4.7, certifications: 4 },
      { name: 'Nest.js', level: 'Advanced', experience: '2+ years', projects: 10, icon: '🐱', rating: 4.6, certifications: 3 },
      { name: 'Ruby on Rails', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '💎', rating: 4.5, certifications: 2 },
      { name: 'ASP.NET Core', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '🔷', rating: 4.5, certifications: 3 },
      { name: 'Spring Boot', level: 'Intermediate', experience: '2+ years', projects: 12, icon: '🍃', rating: 4.6, certifications: 4 }
    ]
  },
  {
    title: 'Database Technologies',
    icon: <Database className="w-8 h-8" />,
    description: 'Efficient data management and storage solutions for any scale',
    technologies: [
      { name: 'MongoDB', level: 'Expert', experience: '5+ years', projects: 50, icon: '🍃', rating: 4.9, certifications: 11 },
      { name: 'PostgreSQL', level: 'Expert', experience: '5+ years', projects: 45, icon: '🐘', rating: 4.9, certifications: 10 },
      { name: 'MySQL', level: 'Expert', experience: '6+ years', projects: 60, icon: '🐬', rating: 5.0, certifications: 12 },
      { name: 'Redis', level: 'Advanced', experience: '4+ years', projects: 30, icon: '🔴', rating: 4.8, certifications: 7 },
      { name: 'Elasticsearch', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🔍', rating: 4.7, certifications: 5 },
      { name: 'Firebase', level: 'Expert', experience: '4+ years', projects: 35, icon: '🔥', rating: 4.8, certifications: 8 },
      { name: 'Supabase', level: 'Advanced', experience: '2+ years', projects: 15, icon: '⚡', rating: 4.6, certifications: 4 },
      { name: 'DynamoDB', level: 'Intermediate', experience: '2+ years', projects: 12, icon: '📀', rating: 4.5, certifications: 3 },
      { name: 'Cassandra', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '👥', rating: 4.4, certifications: 2 },
      { name: 'SQLite', level: 'Expert', experience: '5+ years', projects: 25, icon: '📁', rating: 4.8, certifications: 5 },
      { name: 'MariaDB', level: 'Advanced', experience: '3+ years', projects: 15, icon: '🐬', rating: 4.6, certifications: 4 },
      { name: 'Neo4j', level: 'Intermediate', experience: '2+ years', projects: 6, icon: '🔷', rating: 4.5, certifications: 2 },
      { name: 'InfluxDB', level: 'Intermediate', experience: '2+ years', projects: 5, icon: '📈', rating: 4.4, certifications: 1 },
      { name: 'CouchDB', level: 'Intermediate', experience: '2+ years', projects: 7, icon: '🛋️', rating: 4.5, certifications: 2 },
      { name: 'Oracle DB', level: 'Intermediate', experience: '2+ years', projects: 5, icon: '🔶', rating: 4.3, certifications: 2 }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-8 h-8" />,
    description: 'Scalable infrastructure and automated deployment with enterprise-grade solutions',
    technologies: [
      { name: 'AWS', level: 'Advanced', experience: '4+ years', projects: 35, icon: '☁️', rating: 4.8, certifications: 9 },
      { name: 'Azure', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🔵', rating: 4.7, certifications: 7 },
      { name: 'Google Cloud', level: 'Intermediate', experience: '3+ years', projects: 18, icon: '🟢', rating: 4.6, certifications: 5 },
      { name: 'Docker', level: 'Expert', experience: '4+ years', projects: 40, icon: '🐳', rating: 4.9, certifications: 10 },
      { name: 'Kubernetes', level: 'Advanced', experience: '3+ years', projects: 25, icon: '⚓', rating: 4.8, certifications: 7 },
      { name: 'Jenkins', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🤖', rating: 4.7, certifications: 6 },
      { name: 'GitHub Actions', level: 'Expert', experience: '3+ years', projects: 35, icon: '⚙️', rating: 4.9, certifications: 8 },
      { name: 'Terraform', level: 'Advanced', experience: '2+ years', projects: 15, icon: '🏗️', rating: 4.8, certifications: 5 },
      { name: 'Ansible', level: 'Intermediate', experience: '2+ years', projects: 12, icon: '📦', rating: 4.6, certifications: 4 },
      { name: 'Prometheus', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '📊', rating: 4.5, certifications: 3 },
      { name: 'Grafana', level: 'Advanced', experience: '2+ years', projects: 15, icon: '📈', rating: 4.7, certifications: 4 },
      { name: 'GitLab CI', level: 'Advanced', experience: '3+ years', projects: 18, icon: '🦊', rating: 4.7, certifications: 5 },
      { name: 'CircleCI', level: 'Advanced', experience: '2+ years', projects: 14, icon: '🔄', rating: 4.6, certifications: 4 },
      { name: 'ArgoCD', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '⚓', rating: 4.5, certifications: 3 },
      { name: 'Vagrant', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '📦', rating: 4.4, certifications: 2 }
    ]
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="w-8 h-8" />,
    description: 'Native and cross-platform mobile applications for iOS and Android',
    technologies: [
      { name: 'React Native', level: 'Expert', experience: '4+ years', projects: 30, icon: '📱', rating: 4.9, certifications: 8 },
      { name: 'Flutter', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🦋', rating: 4.8, certifications: 6 },
      { name: 'iOS (Swift)', level: 'Intermediate', experience: '3+ years', projects: 15, icon: '🍎', rating: 4.7, certifications: 4 },
      { name: 'Android (Kotlin)', level: 'Intermediate', experience: '3+ years', projects: 15, icon: '🤖', rating: 4.7, certifications: 4 },
      { name: 'Ionic', level: 'Advanced', experience: '3+ years', projects: 12, icon: '⚡', rating: 4.6, certifications: 3 },
      { name: 'Xamarin', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '🔷', rating: 4.5, certifications: 2 },
      { name: 'PWA', level: 'Expert', experience: '4+ years', projects: 25, icon: '🌐', rating: 4.8, certifications: 6 },
      { name: 'Expo', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🎭', rating: 4.7, certifications: 4 },
      { name: 'Firebase', level: 'Expert', experience: '4+ years', projects: 35, icon: '🔥', rating: 4.9, certifications: 8 },
      { name: 'App Store Connect', level: 'Advanced', experience: '3+ years', projects: 20, icon: '📱', rating: 4.6, certifications: 4 },
      { name: 'Google Play Console', level: 'Advanced', experience: '3+ years', projects: 18, icon: '📱', rating: 4.6, certifications: 4 },
      { name: 'SwiftUI', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '🍎', rating: 4.5, certifications: 3 },
      { name: 'Jetpack Compose', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '🤖', rating: 4.5, certifications: 2 },
      { name: 'NativeScript', level: 'Intermediate', experience: '2+ years', projects: 6, icon: '📱', rating: 4.4, certifications: 2 },
      { name: 'Capacitor', level: 'Advanced', experience: '2+ years', projects: 12, icon: '⚡', rating: 4.6, certifications: 3 }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: <Cpu className="w-8 h-8" />,
    description: 'Intelligent solutions and data-driven insights for business growth',
    technologies: [
      { name: 'TensorFlow', level: 'Advanced', experience: '3+ years', projects: 15, icon: '🧠', rating: 4.8, certifications: 5 },
      { name: 'PyTorch', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '🔥', rating: 4.7, certifications: 4 },
      { name: 'Scikit-learn', level: 'Advanced', experience: '3+ years', projects: 18, icon: '📊', rating: 4.8, certifications: 5 },
      { name: 'OpenAI', level: 'Advanced', experience: '2+ years', projects: 12, icon: '🤖', rating: 4.9, certifications: 4 },
      { name: 'Hugging Face', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '🤗', rating: 4.7, certifications: 3 },
      { name: 'Pandas', level: 'Expert', experience: '4+ years', projects: 25, icon: '🐼', rating: 4.9, certifications: 6 },
      { name: 'NumPy', level: 'Expert', experience: '4+ years', projects: 25, icon: '🔢', rating: 4.9, certifications: 6 },
      { name: 'LangChain', level: 'Intermediate', experience: '1+ years', projects: 6, icon: '⛓️', rating: 4.6, certifications: 2 },
      { name: 'Computer Vision', level: 'Advanced', experience: '3+ years', projects: 12, icon: '👁️', rating: 4.8, certifications: 4 },
      { name: 'NLP', level: 'Advanced', experience: '3+ years', projects: 15, icon: '💬', rating: 4.8, certifications: 4 },
      { name: 'Keras', level: 'Advanced', experience: '3+ years', projects: 12, icon: '🧠', rating: 4.7, certifications: 4 },
      { name: 'OpenCV', level: 'Advanced', experience: '3+ years', projects: 10, icon: '👁️', rating: 4.7, certifications: 3 },
      { name: 'XGBoost', level: 'Advanced', experience: '2+ years', projects: 8, icon: '📈', rating: 4.6, certifications: 3 },
      { name: 'LLaMA', level: 'Intermediate', experience: '1+ years', projects: 5, icon: '🦙', rating: 4.5, certifications: 2 },
      { name: 'Stable Diffusion', level: 'Intermediate', experience: '1+ years', projects: 4, icon: '🎨', rating: 4.6, certifications: 2 }
    ]
  },
  {
    title: 'DevOps & CI/CD',
    icon: <GitBranch className="w-8 h-8" />,
    description: 'Streamlined development and deployment pipelines with automation',
    technologies: [
      { name: 'Git', level: 'Expert', experience: '6+ years', projects: 100, icon: '📦', rating: 5.0, certifications: 15 },
      { name: 'Jenkins', level: 'Advanced', experience: '4+ years', projects: 30, icon: '🤖', rating: 4.8, certifications: 7 },
      { name: 'GitLab CI', level: 'Advanced', experience: '3+ years', projects: 25, icon: '🦊', rating: 4.8, certifications: 6 },
      { name: 'CircleCI', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🔄', rating: 4.7, certifications: 5 },
      { name: 'Travis CI', level: 'Intermediate', experience: '2+ years', projects: 15, icon: '✅', rating: 4.6, certifications: 4 },
      { name: 'ArgoCD', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '⚓', rating: 4.5, certifications: 3 },
      { name: 'Helm', level: 'Advanced', experience: '2+ years', projects: 18, icon: '⛑️', rating: 4.7, certifications: 5 },
      { name: 'Vagrant', level: 'Intermediate', experience: '2+ years', projects: 12, icon: '📦', rating: 4.5, certifications: 3 },
      { name: 'Packer', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '📦', rating: 4.5, certifications: 3 },
      { name: 'Consul', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '🔌', rating: 4.4, certifications: 2 },
      { name: 'Vault', level: 'Intermediate', experience: '2+ years', projects: 7, icon: '🔒', rating: 4.5, certifications: 2 },
      { name: 'Nomad', level: 'Intermediate', experience: '1+ years', projects: 5, icon: '📦', rating: 4.3, certifications: 1 },
      { name: 'Spinnaker', level: 'Intermediate', experience: '1+ years', projects: 4, icon: '🐧', rating: 4.2, certifications: 1 },
      { name: 'Drone CI', level: 'Intermediate', experience: '1+ years', projects: 6, icon: '🚁', rating: 4.4, certifications: 2 },
      { name: 'Concourse CI', level: 'Intermediate', experience: '1+ years', projects: 5, icon: '🔄', rating: 4.3, certifications: 1 }
    ]
  },
  {
    title: 'Testing & QA',
    icon: <Shield className="w-8 h-8" />,
    description: 'Comprehensive testing for robust, bug-free applications',
    technologies: [
      { name: 'Jest', level: 'Expert', experience: '4+ years', projects: 45, icon: '🃏', rating: 4.9, certifications: 8 },
      { name: 'Mocha', level: 'Advanced', experience: '4+ years', projects: 30, icon: '☕', rating: 4.8, certifications: 6 },
      { name: 'Cypress', level: 'Advanced', experience: '3+ years', projects: 25, icon: '🌲', rating: 4.9, certifications: 7 },
      { name: 'Selenium', level: 'Advanced', experience: '4+ years', projects: 20, icon: '🧪', rating: 4.7, certifications: 6 },
      { name: 'Puppeteer', level: 'Advanced', experience: '3+ years', projects: 18, icon: '🎭', rating: 4.7, certifications: 5 },
      { name: 'JUnit', level: 'Advanced', experience: '4+ years', projects: 25, icon: '🟨', rating: 4.8, certifications: 6 },
      { name: 'PyTest', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🐍', rating: 4.8, certifications: 5 },
      { name: 'Postman', level: 'Expert', experience: '5+ years', projects: 60, icon: '📮', rating: 5.0, certifications: 10 },
      { name: 'JMeter', level: 'Intermediate', experience: '2+ years', projects: 12, icon: '⚡', rating: 4.5, certifications: 3 },
      { name: 'SonarQube', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🔍', rating: 4.7, certifications: 4 },
      { name: 'Playwright', level: 'Advanced', experience: '2+ years', projects: 15, icon: '🎭', rating: 4.8, certifications: 4 },
      { name: 'Karma', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '⚡', rating: 4.5, certifications: 3 },
      { name: 'Jasmine', level: 'Advanced', experience: '3+ years', projects: 18, icon: '🌸', rating: 4.6, certifications: 4 },
      { name: 'Cucumber', level: 'Intermediate', experience: '2+ years', projects: 12, icon: '🥒', rating: 4.6, certifications: 3 },
      { name: 'K6', level: 'Intermediate', experience: '1+ years', projects: 8, icon: '📊', rating: 4.5, certifications: 2 }
    ]
  },
  {
    title: 'Version Control & Tools',
    icon: <Settings className="w-8 h-8" />,
    description: 'Efficient collaboration and code management with industry-standard tools',
    technologies: [
      { name: 'Git', level: 'Expert', experience: '6+ years', projects: 100, icon: '📦', rating: 5.0, certifications: 15 },
      { name: 'GitHub', level: 'Expert', experience: '6+ years', projects: 100, icon: '🐙', rating: 5.0, certifications: 14 },
      { name: 'GitLab', level: 'Advanced', experience: '4+ years', projects: 40, icon: '🦊', rating: 4.8, certifications: 8 },
      { name: 'Bitbucket', level: 'Advanced', experience: '4+ years', projects: 30, icon: '🔵', rating: 4.7, certifications: 6 },
      { name: 'Jira', level: 'Expert', experience: '5+ years', projects: 70, icon: '🎯', rating: 4.9, certifications: 10 },
      { name: 'Trello', level: 'Expert', experience: '5+ years', projects: 50, icon: '📋', rating: 4.8, certifications: 7 },
      { name: 'Asana', level: 'Advanced', experience: '3+ years', projects: 25, icon: '📊', rating: 4.7, certifications: 5 },
      { name: 'Slack', level: 'Expert', experience: '5+ years', projects: 80, icon: '💬', rating: 4.9, certifications: 8 },
      { name: 'Discord', level: 'Advanced', experience: '3+ years', projects: 30, icon: '🎮', rating: 4.7, certifications: 4 },
      { name: 'Notion', level: 'Expert', experience: '4+ years', projects: 40, icon: '📝', rating: 4.8, certifications: 6 },
      { name: 'Confluence', level: 'Advanced', experience: '3+ years', projects: 35, icon: '📚', rating: 4.7, certifications: 5 },
      { name: 'Figma', level: 'Expert', experience: '4+ years', projects: 45, icon: '🎨', rating: 4.9, certifications: 7 },
      { name: 'Adobe XD', level: 'Advanced', experience: '3+ years', projects: 25, icon: '🖌️', rating: 4.7, certifications: 4 },
      { name: 'Sketch', level: 'Intermediate', experience: '2+ years', projects: 15, icon: '🎨', rating: 4.6, certifications: 3 },
      { name: 'Miro', level: 'Advanced', experience: '2+ years', projects: 20, icon: '📊', rating: 4.7, certifications: 4 }
    ]
  },
  {
    title: 'Programming Languages',
    icon: <Code className="w-8 h-8" />,
    description: 'Mastery in multiple programming languages for versatile development',
    technologies: [
      { name: 'JavaScript', level: 'Expert', experience: '6+ years', projects: 120, icon: '🟨', rating: 5.0, certifications: 16 },
      { name: 'TypeScript', level: 'Expert', experience: '4+ years', projects: 60, icon: '🔷', rating: 4.9, certifications: 10 },
      { name: 'Python', level: 'Expert', experience: '5+ years', projects: 45, icon: '🐍', rating: 4.9, certifications: 12 },
      { name: 'Java', level: 'Advanced', experience: '4+ years', projects: 25, icon: '☕', rating: 4.7, certifications: 8 },
      { name: 'C#', level: 'Intermediate', experience: '3+ years', projects: 15, icon: '🎯', rating: 4.6, certifications: 5 },
      { name: 'PHP', level: 'Advanced', experience: '5+ years', projects: 35, icon: '🐘', rating: 4.7, certifications: 7 },
      { name: 'Go', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '🐹', rating: 4.6, certifications: 4 },
      { name: 'Rust', level: 'Intermediate', experience: '1+ years', projects: 5, icon: '⚙️', rating: 4.5, certifications: 2 },
      { name: 'Swift', level: 'Intermediate', experience: '3+ years', projects: 15, icon: '🍎', rating: 4.6, certifications: 4 },
      { name: 'Kotlin', level: 'Intermediate', experience: '3+ years', projects: 15, icon: '🤖', rating: 4.6, certifications: 4 },
      { name: 'Ruby', level: 'Intermediate', experience: '2+ years', projects: 10, icon: '💎', rating: 4.5, certifications: 3 },
      { name: 'Dart', level: 'Advanced', experience: '3+ years', projects: 20, icon: '🎯', rating: 4.7, certifications: 5 },
      { name: 'C++', level: 'Intermediate', experience: '2+ years', projects: 8, icon: '⚡', rating: 4.5, certifications: 3 },
      { name: 'Scala', level: 'Intermediate', experience: '1+ years', projects: 5, icon: '🔷', rating: 4.4, certifications: 2 },
      { name: 'R', level: 'Intermediate', experience: '2+ years', projects: 7, icon: '📊', rating: 4.5, certifications: 3 }
    ]
  }
]

// Enhanced project stats with more credibility
const projectStats = [
  { number: '250+', label: 'Projects Delivered', icon: <Rocket className="w-6 h-6" />, subtext: 'Across 15+ industries' },
  { number: '100%', label: 'Project Success Rate', icon: <Award className="w-6 h-6" />, subtext: 'On-time delivery' },
  { number: '50+', label: 'Happy Clients', icon: <Users className="w-6 h-6" />, subtext: 'Repeat business 80%' },
  { number: '5+', label: 'Years Experience', icon: <Clock className="w-6 h-6" />, subtext: 'Since 2019' },
  { number: '24/7', label: 'Technical Support', icon: <Headphones className="w-6 h-6" />, subtext: 'Always available' },
  { number: '30+', label: 'Tech Experts', icon: <Users className="w-6 h-6" />, subtext: 'Avg 5+ years exp' },
  { number: '15+', label: 'Industries Served', icon: <Briefcase className="w-6 h-6" />, subtext: 'Healthcare, Fintech, E-commerce' },
  { number: '98%', label: 'Client Retention', icon: <Heart className="w-6 h-6" />, subtext: 'Long-term partners' }
]

// Enhanced technology benefits with more details
const techBenefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Modern & Scalable',
    description: 'We use latest technologies that scale with your business growth, handling millions of users',
    features: ['Microservices ready', 'Horizontal scaling', 'Load balancing', 'Caching strategies']
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Secure by Design',
    description: 'Security best practices implemented at every layer with ISO 27001 compliance',
    features: ['Encryption at rest', 'Secure APIs', 'Auth best practices', 'Regular audits']
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'High Performance',
    description: 'Optimized code for maximum speed and efficiency with 99.9% uptime guarantee',
    features: ['CDN integration', 'Database indexing', 'Code splitting', 'Lazy loading']
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud Native',
    description: 'Built for cloud with microservices architecture and containerization',
    features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'Serverless', 'Auto-scaling']
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Developer Friendly',
    description: 'Clean code, comprehensive documentation, and industry best practices',
    features: ['Code reviews', 'CI/CD pipelines', 'Testing automation', 'Code standards']
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Future Ready',
    description: 'Technologies that evolve with industry trends and emerging standards',
    features: ['Regular updates', 'Tech monitoring', 'Migration paths', 'Long-term support']
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Cost Optimized',
    description: 'Efficient resource utilization to minimize infrastructure costs',
    features: ['Auto-scaling', 'Resource monitoring', 'Cost analysis', 'Optimization']
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'Analytics Ready',
    description: 'Built-in analytics and monitoring for data-driven decisions',
    features: ['Real-time metrics', 'Custom dashboards', 'Alerting', 'Log aggregation']
  }
]

// Enhanced case studies with more detailed information
const caseStudies = [
  {
    title: 'E-commerce Platform Migration to MERN Stack',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redis'],
    description: 'Migrated monolithic PHP app to microservices-based MERN stack, resulting in 60% faster load times and 40% reduced server costs',
    results: ['60% faster performance', '40% cost reduction', '99.9% uptime', '3x concurrent users'],
    client: 'Fashion Retailer',
    duration: '6 months',
    icon: <ShoppingCart className="w-6 h-6" />,
    challenge: 'Legacy system couldn\'t handle traffic spikes during sales',
    solution: 'Implemented microservices with auto-scaling and CDN'
  },
  {
    title: 'AI-Powered Analytics Dashboard for Healthcare',
    tech: ['Python', 'TensorFlow', 'React', 'Docker', 'PostgreSQL'],
    description: 'Built real-time analytics platform with ML predictions, processing 1M+ data points daily for patient monitoring',
    results: ['1M+ daily data points', '95% prediction accuracy', 'Real-time alerts', '30% faster diagnosis'],
    client: 'Healthcare Provider',
    duration: '8 months',
    icon: <Cpu className="w-6 h-6" />,
    challenge: 'Manual data analysis was slow and error-prone',
    solution: 'Automated ML pipeline with real-time visualization'
  },
  {
    title: 'Cross-Platform Social Networking App',
    tech: ['React Native', 'Firebase', 'Node.js', 'GraphQL'],
    description: 'Developed social networking app for iOS and Android with real-time features and 100K+ downloads',
    results: ['100K+ downloads', '4.8★ rating', '50K MAU', '40% engagement rate'],
    client: 'Social Media Startup',
    duration: '5 months',
    icon: <Smartphone className="w-6 h-6" />,
    challenge: 'Need for simultaneous iOS and Android launch',
    solution: 'React Native with shared codebase and native features'
  },
  {
    title: 'Cloud Migration for Financial Services',
    tech: ['AWS', 'Terraform', 'Kubernetes', 'Python', 'PostgreSQL'],
    description: 'Migrated on-premise infrastructure to AWS with zero downtime and enhanced security',
    results: ['Zero downtime', '45% cost savings', '99.99% availability', 'Automated backups'],
    client: 'Fintech Company',
    duration: '4 months',
    icon: <Cloud className="w-6 h-6" />,
    challenge: 'Strict compliance and security requirements',
    solution: 'Multi-region deployment with encryption and monitoring'
  }
]

// Enhanced FAQ data with more technical questions
const faqs = [
  {
    question: 'What is your technology stack for web development?',
    answer: 'Our primary web development stack includes MERN (MongoDB, Express.js, React, Node.js), Next.js for React applications, TypeScript for type safety, and Tailwind CSS for styling. We also work with Python/Django, PHP/Laravel, and Vue.js based on project requirements. All our projects follow best practices for SEO, performance, and security.',
    category: 'Web Development'
  },
  {
    question: 'Do you use modern DevOps practices?',
    answer: 'Yes! We implement complete DevOps pipelines using Docker for containerization, Kubernetes for orchestration, Jenkins/GitHub Actions for CI/CD, and infrastructure as code with Terraform. We also use monitoring tools like Prometheus and Grafana, with automated alerts and rollback capabilities.',
    category: 'DevOps'
  },
  {
    question: 'How do you ensure code quality?',
    answer: 'We maintain code quality through: 1) Automated testing (Jest, Cypress) with >80% coverage, 2) Code reviews with senior developers, 3) ESLint/Prettier for consistent formatting, 4) SonarQube for code analysis, 5) Git hooks for pre-commit checks, and 6) Continuous integration pipelines that prevent merging of low-quality code.',
    category: 'Quality'
  },
  {
    question: 'What cloud platforms do you work with?',
    answer: 'We are proficient in all major cloud platforms: AWS (EC2, S3, Lambda, RDS, DynamoDB), Google Cloud Platform (Compute Engine, Cloud Functions, Firebase), and Microsoft Azure (App Services, Functions, SQL). We help clients choose the best platform based on their needs, budget, and technical requirements.',
    category: 'Cloud'
  },
  {
    question: 'Can you handle mobile app development?',
    answer: 'Absolutely! We develop native iOS (Swift) and Android (Kotlin) apps, as well as cross-platform solutions using React Native and Flutter. We handle the entire lifecycle from UI/UX design to App Store/Play Store deployment, including app store optimization and post-launch support.',
    category: 'Mobile'
  },
  {
    question: 'How do you stay updated with latest technologies?',
    answer: 'Our team continuously learns through: 1) Regular training sessions and workshops, 2) Conference attendance and speaking, 3) Open source contributions, 4) Tech blog writing and technical documentation, 5) Beta testing new tools and frameworks, and 6) Certification programs (AWS, Google Cloud, Microsoft).',
    category: 'Learning'
  },
  {
    question: 'What is your experience with AI/ML?',
    answer: 'We have extensive experience in AI/ML including: Natural Language Processing (NLP) for chatbots and text analysis, Computer Vision for image recognition, Predictive Analytics for business forecasting, Recommendation Systems for e-commerce, and LLM integration using frameworks like TensorFlow, PyTorch, and LangChain.',
    category: 'AI/ML'
  },
  {
    question: 'How can I contact your tech team?',
    answer: 'You can reach our technical team at +91-7027944324 (Call/WhatsApp), email tech@techmintlab.com, or visit our office at Sector 7, Karnal. We offer free 30-minute technical consultation to discuss your project requirements and recommend the best technology stack.',
    category: 'Contact'
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including fixed-price projects, time & material, dedicated teams, and monthly retainers. We provide detailed estimates based on your requirements, with transparent pricing and no hidden costs. Contact us for a free project quote.',
    category: 'Pricing'
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes, we provide comprehensive post-deployment support including 24/7 technical assistance, maintenance packages, security updates, performance monitoring, and feature enhancements. Our support team is available via phone, email, and WhatsApp with guaranteed response times.',
    category: 'Support'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including Healthcare (HIPAA compliant), Fintech (secure transactions), E-commerce (scalable platforms), Education (LMS systems), Real Estate (property portals), Logistics (tracking systems), and Manufacturing (IoT integration).',
    category: 'Industries'
  },
  {
    question: 'How do you handle project management?',
    answer: 'We use Agile/Scrum methodology with 2-week sprints, daily standups, and regular demos. Tools: Jira for tracking, Slack for communication, GitHub for code, and Figma for designs. Clients get access to project dashboards with real-time progress updates.',
    category: 'Management'
  }
]

// Testimonials data
const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'TechStart Solutions',
    role: 'CTO',
    comment: 'TechMintLab\'s expertise in MERN stack transformed our platform. Their team delivered on time with excellent code quality. Highly recommended!',
    rating: 5,
    project: 'E-commerce Platform'
  },
  {
    name: 'Priya Singh',
    company: 'HealthAI',
    role: 'Product Manager',
    comment: 'The AI/ML solution they built for us is exceptional. 95% accuracy in predictions and great post-launch support. 5 stars!',
    rating: 5,
    project: 'Healthcare Analytics'
  },
  {
    name: 'Amit Verma',
    company: 'SocialConnect',
    role: 'Founder',
    comment: 'Our React Native app reached 100K downloads in 3 months. TechMintLab\'s team was responsive and technically brilliant.',
    rating: 5,
    project: 'Mobile App'
  }
]

// Industry expertise
const industries = [
  { name: 'Healthcare', icon: '🏥', projects: 25, description: 'HIPAA compliant solutions' },
  { name: 'Fintech', icon: '💰', projects: 30, description: 'Secure payment processing' },
  { name: 'E-commerce', icon: '🛒', projects: 45, description: 'Scalable shopping platforms' },
  { name: 'Education', icon: '🎓', projects: 20, description: 'LMS and e-learning' },
  { name: 'Real Estate', icon: '🏢', projects: 15, description: 'Property portals' },
  { name: 'Logistics', icon: '🚚', projects: 18, description: 'Tracking systems' },
  { name: 'Manufacturing', icon: '🏭', projects: 12, description: 'IoT integration' },
  { name: 'Media', icon: '📺', projects: 22, description: 'Content platforms' }
]

// Certifications
const certifications = [
  { name: 'AWS Certified Solutions Architect', count: 5 },
  { name: 'Google Cloud Professional', count: 4 },
  { name: 'Microsoft Azure Expert', count: 3 },
  { name: 'Certified Kubernetes Administrator', count: 4 },
  { name: 'MongoDB Certified Developer', count: 6 },
  { name: 'TensorFlow Developer Certificate', count: 3 }
]

export default function OurTechnologies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Floating Contact Bar - Mobile Optimized */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 lg:hidden safe-bottom">
        <div className="flex divide-x divide-gray-200">
          <a 
            href="tel:+917027944324" 
            className="flex-1 flex items-center justify-center py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-sm sm:text-base active:opacity-90 transition-all"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Tech Team
          </a>
          <a 
            href="https://wa.me/917027944324" 
            className="flex-1 flex items-center justify-center py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-sm sm:text-base active:opacity-90 transition-all"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Now
          </a>
        </div>
      </div>

      {/* Sticky Contact for Desktop */}
      <div className="hidden lg:block fixed right-6 bottom-6 z-50 space-y-3">
        <a 
          href="tel:+917027944324" 
          className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:from-blue-600 hover:to-blue-700"
        >
          <Phone className="w-5 h-5 mr-2" />
          +91-7027944324
        </a>
        <a 
          href="https://wa.me/917027944324" 
          className="flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:from-green-600 hover:to-green-700"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Tech Consultation
        </a>
      </div>
      
      {/* Hero Section - Mobile Optimized */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - Responsive */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse mr-1.5 sm:mr-2"></span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700">🏆 ISO 27001 Certified • 250+ Projects • 30+ Experts</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              🚀 Building <strong>Scalable, Secure & High-Performance</strong> Solutions with Cutting-Edge Technologies
            </p>
            
            {/* Trust badges - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="ml-2 text-xs sm:text-sm font-semibold">Google Cloud Partner</span>
              </div>
              <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="ml-2 text-xs sm:text-sm font-semibold">AWS Consulting Partner</span>
              </div>
              <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <Users className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="ml-2 text-xs sm:text-sm font-semibold">ISO 27001 Certified</span>
              </div>
            </div>
            
            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 mb-6 sm:mb-8">
              <Link 
                href="/contact" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base"
              >
                Discuss Your Project
              </Link>
              <a 
                href="https://wa.me/917027944324"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Free Tech Consultation
              </a>
            </div>
            
            {/* Quick contact - Responsive */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center text-xs sm:text-sm text-gray-600 px-2">
              <a href="tel:+917027944324" className="flex items-center hover:text-blue-600 font-semibold bg-white/80 px-3 py-1.5 rounded-full">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> +91-7027944324
              </a>
              <a href="https://wa.me/917027944324" className="flex items-center hover:text-green-600 font-semibold bg-white/80 px-3 py-1.5 rounded-full">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> WhatsApp: 7027944324
              </a>
              <a href="mailto:tech@techmintlab.com" className="flex items-center hover:text-blue-600 bg-white/80 px-3 py-1.5 rounded-full">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> tech@techmintlab.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center text-white p-2 sm:p-3">
                <div className="flex justify-center mb-1 sm:mb-2 text-xl sm:text-2xl">{stat.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm opacity-90 font-medium">{stat.label}</div>
                <div className="text-[10px] sm:text-xs opacity-75 hidden sm:block">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section - New */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-blue-600 font-semibold text-sm sm:text-base mb-2 block">INDUSTRY EXPERTISE</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Proven experience across diverse sectors with domain-specific solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all text-center group">
                <span className="text-3xl sm:text-4xl mb-2 sm:mb-3 block group-hover:scale-110 transition-transform">{industry.icon}</span>
                <h3 className="font-semibold text-sm sm:text-base mb-1">{industry.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">{industry.description}</p>
                <span className="text-xs text-blue-600 font-semibold">{industry.projects}+ projects</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Categories - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <span className="text-blue-600 font-semibold text-sm sm:text-base mb-2 block">TECHNOLOGY STACK</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Modern Technologies We{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excel At
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Comprehensive expertise across the entire development spectrum with 100+ technologies
            </p>
          </div>

          {technologyCategories.map((category, idx) => (
            <div key={idx} className="mb-10 sm:mb-12 lg:mb-16">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-600 mr-0 sm:mr-4 mb-2 sm:mb-0">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{category.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
                {category.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 group"
                  >
                    <div className="flex items-center mb-1 sm:mb-2">
                      <span className="text-lg sm:text-2xl mr-1 sm:mr-2">{tech.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold truncate">{tech.name}</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      <span className={`inline-block px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold mb-1 sm:mb-2 ${
                        tech.level === 'Expert' ? 'bg-green-100 text-green-700' :
                        tech.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {tech.level}
                      </span>
                      <div className="flex justify-between text-[10px] sm:text-xs">
                        <span>📅 {tech.experience}</span>
                        <span>📊 {tech.projects}+</span>
                      </div>
                      <div className="hidden sm:flex items-center mt-1 text-yellow-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="ml-1 text-xs">{tech.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section - New */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-blue-600 font-semibold text-sm sm:text-base mb-2 block">CERTIFICATIONS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our Team's{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Industry-recognized certifications that validate our expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all text-center">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-xs sm:text-sm mb-1">{cert.name}</h3>
                <p className="text-xs text-gray-600">{cert.count}+ Certified</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Benefits - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <span className="text-blue-600 font-semibold text-sm sm:text-base mb-2 block">WHY OUR TECH STACK</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Benefits of Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology Choices
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              We carefully select technologies that deliver the best results for your business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {techBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{benefit.description}</p>
                <ul className="space-y-1">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <span className="text-blue-600 font-semibold text-sm sm:text-base mb-2 block">CASE STUDIES</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Success Stories with Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Real projects delivered using our expertise with measurable results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-blue-600">
                  {study.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2">{study.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{study.description}</p>
                
                <div className="mb-3 sm:mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Client:</p>
                  <p className="text-sm font-medium">{study.client}</p>
                  <p className="text-xs text-gray-500">Duration: {study.duration}</p>
                </div>

                <div className="mb-3 sm:mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Challenge:</p>
                  <p className="text-xs text-gray-600">{study.challenge}</p>
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                    {study.tech.map((t, i) => (
                      <span key={i} className="px-1.5 sm:px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] sm:text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center text-[10px] sm:text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - New */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <span className="text-blue-600 font-semibold text-sm sm:text-base mb-2 block">TESTIMONIALS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              What Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-xs sm:text-sm text-gray-600">{testimonial.rating}.0</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  <p className="text-xs text-blue-600 mt-1">Project: {testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <span className="text-blue-600 font-semibold text-sm sm:text-base mb-2 block">FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Questions
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Everything you need to know about our technology expertise and process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-3 sm:mb-4 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all"
                itemScope
                itemType="https://schema.org/Question"
              >
                <div className="flex items-start">
                  <span className="text-blue-600 font-semibold text-xs sm:text-sm mr-2 mt-0.5">{faq.category}</span>
                </div>
                <h3 
                  className="font-semibold text-sm sm:text-base mb-2 cursor-pointer hover:text-blue-600 transition-colors"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div 
                  className="text-xs sm:text-sm text-gray-600"
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

      {/* Contact Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Discuss Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technical Requirements
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Get expert advice on technology stack for your project - Free 30-minute consultation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Contact Info - Mobile Optimized */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">Technical Contact</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <a href="tel:+917027944324" className="flex items-center p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl hover:bg-blue-100 transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <p className="text-xs text-gray-600">Tech Support</p>
                      <p className="font-semibold text-sm sm:text-base">+91-7027944324</p>
                      <p className="text-xs text-gray-500">24/7 Available</p>
                    </div>
                  </a>

                  <a href="https://wa.me/917027944324" className="flex items-center p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl hover:bg-green-100 transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <p className="text-xs text-gray-600">Tech Consultation</p>
                      <p className="font-semibold text-sm sm:text-base">+91-7027944324</p>
                      <p className="text-xs text-gray-500">Instant Response</p>
                    </div>
                  </a>

                  <a href="mailto:tech@techmintlab.com" className="flex items-center p-3 sm:p-4 bg-purple-50 rounded-lg sm:rounded-xl hover:bg-purple-100 transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <p className="text-xs text-gray-600">Email Tech Team</p>
                      <p className="font-semibold text-xs sm:text-sm break-all">tech@techmintlab.com</p>
                      <p className="text-xs text-gray-500">Reply within 2 hours</p>
                    </div>
                  </a>

                  <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <p className="text-xs text-gray-600">Visit Us</p>
                      <p className="font-semibold text-xs sm:text-sm">Sector 7, Karnal, Haryana</p>
                      <p className="text-xs text-gray-500">Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                  <p className="text-xs sm:text-sm font-semibold mb-3">Follow Us</p>
                  <div className="flex gap-3 sm:gap-4">
                    <a href="https://github.com/techmintlab" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-all">
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="https://linkedin.com/company/techmintlab" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all">
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="https://twitter.com/techmintlab" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all">
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="https://facebook.com/techmintlab" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all">
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Form - Mobile Optimized */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">Quick Technical Query</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">Get free consultation within 2 hours</p>
                
                <form className="space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                    <option>Select Technology Interest *</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Cloud & DevOps</option>
                    <option>AI/ML</option>
                    <option>Database</option>
                    <option>Other</option>
                  </select>
                  
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project requirements"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="w-full py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                  >
                    Submit Technical Query
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our privacy policy. We'll respond within 2 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get expert technology advice and free 30-minute consultation. Let's discuss your requirements!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              href="/contact" 
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              Discuss Your Project
            </Link>
            <a 
              href="https://wa.me/917027944324"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              WhatsApp Tech Team
            </a>
          </div>
          
          {/* Trust indicators - Responsive */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center text-white/80 text-xs sm:text-sm">
            <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-full">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Free Consultation
            </span>
            <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-full">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Expert Team
            </span>
            <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-full">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 24/7 Support
            </span>
            <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-full">
              <Headphones className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Call: 7027944324
            </span>
          </div>

          {/* Response time badge */}
          <div className="mt-4 sm:mt-6 inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 mr-1 sm:mr-2" />
            <span className="text-white text-xs sm:text-sm">Average response time: 2 minutes</span>
          </div>
        </div>
      </section>
    </>
  )
}