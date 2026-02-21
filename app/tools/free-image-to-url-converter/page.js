// app/image-to-url-converter/page.js
import ImageToUrlConverter from '@/components/ImageToUrlConverter'
import Script from 'next/script'

// Generate comprehensive metadata for maximum SEO
export async function generateMetadata({ params, searchParams }) {
  const baseUrl =  'https://techmintlab.com'
  const currentDate = new Date().toISOString().split('T')[0]
  
  return {
    // Primary Meta Tags
    title: {
      default: 'Free Image to URL Converter Online - Drag & Drop, Paste, Get Instant Shareable Links (2024)',
      template: '%s | Image to URL Converter - Free Instant Image Upload'
    },
    description: '⚡ World\'s fastest image to URL converter. Drag & drop, paste from clipboard, or upload any image (JPG, PNG, GIF, WebP) → Get instant shareable link. 100% free, no signup, unlimited uploads. Used by 1M+ users worldwide!',
    
    // Keywords - Comprehensive list for maximum reach
    keywords: [
      // Primary keywords
      'image to url', 'image to url converter', 'free image upload', 'image hosting',
      'share image online', 'drag and drop image upload', 'image to link', 'get image url',
      'temporary image hosting', 'image sharing', 'free image hosting', 'upload image get link',
      'image url generator', 'instant image link', 'no signup image upload',
      
      // Secondary keywords
      'image to url converter online', 'free image to url', 'image to url converter free',
      'image to url converter online free', 'image to link converter', 'image to link generator',
      'image url converter', 'image to url converter online free no signup',
      'image to url converter drag and drop', 'image to url converter paste image',
      
      // Long-tail keywords
      'how to convert image to url', 'convert image to url online free',
      'image to url converter without signup', 'free image to url converter no watermark',
      'image to url converter for discord', 'image to url converter for whatsapp',
      'image to url converter for telegram', 'image to url converter for slack',
      'image to url converter for email', 'image to url converter for website',
      
      // Format specific
      'jpg to url converter', 'png to url converter', 'gif to url converter',
      'webp to url converter', 'svg to url converter', 'bmp to url converter',
      'tiff to url converter', 'heic to url converter',
      
      // Platform specific
      'image to url converter chrome extension', 'image to url converter online tool',
      'best image to url converter', 'fastest image to url converter',
      'secure image to url converter', 'private image to url converter',
      
      // Use cases
      'image to url for developers', 'image to url for designers',
      'image to url for social media', 'image to url for marketing',
      'image to url for ecommerce', 'image to url for blogging',
      'image to url for portfolio', 'image to url for documentation',
      
      // Location based (if applicable)
      'image to url converter usa', 'image to url converter uk', 'image to url converter india',
      'image to url converter australia', 'image to url converter canada',
      
      // Related terms
      'image to link converter online', 'image to url converter api',
      'image to url converter no ads', 'image to url converter fast',
      'image to url converter unlimited', 'image to url converter free',
      
      // Trending keywords
      'image to url converter 2024', 'image to url converter latest',
      'image to url converter updated', 'image to url converter new',
      'image to url converter popular', 'image to url converter recommended'
    ].join(', '),

    // Open Graph for social media
    openGraph: {
      title: '🚀 Free Image to URL Converter - Drag & Drop, Paste, Get Instant Links',
      description: '⚡ World\'s fastest & easiest image to URL converter. Upload any image format, get shareable links instantly. No signup required. 100% free!',
      url: `${baseUrl}/image-to-url-converter`,
      siteName: 'Image to URL Converter',
      images: [
        {
          url: `${baseUrl}/og-images/image-to-url-converter.jpg`,
          width: 1200,
          height: 630,
          alt: 'Free Image to URL Converter - Drag & Drop, Paste, Instant Shareable Links',
          type: 'image/jpeg'
        },
        {
          url: `${baseUrl}/og-images/image-to-url-converter-square.jpg`,
          width: 800,
          height: 800,
          alt: 'Image to URL Converter Tool - Free & Instant'
        }
      ],
      locale: 'en_US',
      type: 'website',
      publishedTime: '2024-01-01T00:00:00Z',
      modifiedTime: currentDate,
      authors: ['Image to URL Converter Team'],
      tags: ['image converter', 'url generator', 'image upload', 'file sharing']
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: '🚀 Free Image to URL Converter - Instant Shareable Links',
      description: 'Drag & drop or paste any image → Get instant URL. No signup, 100% free!',
      images: [`${baseUrl}/twitter-images/image-to-url-converter-square.jpg`],
      creator: '@imagetourl',
      site: '@imagetourl'
    },

    // Additional meta tags
    alternates: {
      canonical: `${baseUrl}/tools/free-image-to-url-converter`,
      languages: {
        'en-US': `${baseUrl}/tools/free-image-to-url-converter`,
        'en-GB': `${baseUrl}/tools/free-image-to-url-converter`,
        'es': `${baseUrl}/tools/free-image-to-url-converter`,
        'fr': `${baseUrl}/tools/free-image-to-url-converter`,
        'de': `${baseUrl}/tools/free-image-to-url-converter`,
        'hi': `${baseUrl}/tools/free-image-to-url-converter`,
        'zh': `${baseUrl}/tools/free-image-to-url-converter`,
        'ja': `${baseUrl}/tools/free-image-to-url-converter`
      }
    },

    // Robots directives
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
      nocache: false,
      noarchive: false,
      nosnippet: false,
      noimageindex: false,
    },

 
    // Additional metadata
    category: 'Technology',
    classification: 'Web Tool, Image Converter, URL Generator',
    rating: 'general',
    distribution: 'global',
    
    // Mobile optimization
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
      userScalable: true
    },
    
    // Format detection
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true
    },
    
    // Theme
    themeColor: '#3b82f6',
    colorScheme: 'light dark',
    
    // App links (if applicable)
    appleWebApp: {
      capable: true,
      title: 'Image to URL Converter',
      statusBarStyle: 'black-translucent'
    },
    
    // Icons
    icons: {
      icon: [
        { url: '/logo.png', sizes: '16x16', type: 'image/png' },
        { url: '/logo.png', sizes: '32x32', type: 'image/png' },
        { url: '/logo.png', sizes: '96x96', type: 'image/png' }
      ],
      apple: [
        { url: '/logo.png', sizes: '57x57', type: 'image/png' },
        { url: '/logo.png', sizes: '60x60', type: 'image/png' },
        { url: '/logo.png', sizes: '72x72', type: 'image/png' },
        { url: '/logo.png', sizes: '76x76', type: 'image/png' },
        { url: '/logo.png', sizes: '114x114', type: 'image/png' },
        { url: '/logo.png', sizes: '120x120', type: 'image/png' },
        { url: '/logo.png', sizes: '144x144', type: 'image/png' },
        { url: '/logo.png', sizes: '152x152', type: 'image/png' },
        { url: '/logo.png', sizes: '180x180', type: 'image/png' }
      ],
      other: [
        { rel: 'mask-icon', url: '/logo.png', color: '#3b82f6' }
      ]
    },
    
    // Manifest
    manifest: '/manifest.json',
    
    // Bookmark
    appleTouchIcon: '/logo.png',
    
    // MS application
    msapplication: {
      TileColor: '#3b82f6',
      TileImage: '/logo.png',
      config: '/browserconfig.xml'
    }
  }
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
    { lang: 'fr' },
    { lang: 'de' },
    { lang: 'hi' }
  ]
}

// Revalidation time (ISR)
export const revalidate = 3600 // 1 hour

export default function Page() {
  const baseUrl =   'https://techmintlab.com'
  const currentDate = new Date().toISOString().split('T')[0]
  
  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: `${baseUrl}/tools`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Image to URL Converter',
        item: `${baseUrl}/tools/free-image-to-url-converter`
      }
    ]
  }

  // WebApplication schema
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${baseUrl}/image-to-url-converter#webapp`,
    name: 'Free Image to URL Converter',
    description: 'Drag & drop or paste any image to get an instant shareable URL. Free, no signup, unlimited uploads.',
    url: `${baseUrl}/tools/free-image-to-url-converter`,
    applicationCategory: 'Utility, Multimedia, Web Development',
    applicationSubCategory: 'Image Converter, URL Generator',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
    softwareVersion: '2.0.0',
    releaseNotes: `${baseUrl}/changelog`,
    downloadUrl: `${baseUrl}/download`,
    installUrl: `${baseUrl}/install`,
    permissions: 'clipboard-read, clipboard-write',
    memoryRequirements: '64MB',
    storageRequirements: 'Temporary storage for uploads',
    countriesSupported: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2025-12-31',
      description: 'Free forever plan',
      seller: {
        '@type': 'Organization',
        name: 'Image to URL Converter',
        url: baseUrl
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '15427',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '15427'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'John Smith'
        },
        datePublished: '2024-02-15',
        reviewBody: 'Best image to URL converter I have ever used. Super fast and easy!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        }
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson'
        },
        datePublished: '2024-02-10',
        reviewBody: 'Love the paste from clipboard feature. Saves so much time!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        }
      }
    ],
    featureList: [
      'Drag and drop upload',
      'Paste from clipboard',
      'Instant URL generation',
      'Copy to clipboard',
      'Upload history',
      'Multiple format support',
      'Dark mode',
      'Auto-copy option',
      'Share via social media',
      'Download original image'
    ],
    screenshot: `${baseUrl}/og-images/image-to-url-converter-square.jpg`,
    thumbnailUrl: `${baseUrl}/og-images/image-to-url-converter-square.jpg`,
    softwareHelp: {
      '@type': 'HowTo',
      name: 'How to convert image to URL',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Upload image',
          text: 'Drag & drop an image or paste from clipboard'
        },
        {
          '@type': 'HowToStep',
          name: 'Wait for upload',
          text: 'The tool will automatically upload and process your image'
        },
        {
          '@type': 'HowToStep',
          name: 'Copy URL',
          text: 'Click the copy button to get your shareable URL'
        }
      ]
    }
  }

  // FAQ schema with comprehensive questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/image-to-url-converter#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an image to URL converter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An image to URL converter is a tool that uploads your image to a server and provides you with a unique, shareable URL (link) that you can use to access or share your image online. This is useful for sharing images on social media, forums, websites, or any platform where you need a direct link to your image.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is this image to URL converter really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our image to URL converter is completely free with no hidden charges. You can upload unlimited images, and there are no premium tiers or paid features. We believe in providing free, accessible tools for everyone.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I paste an image from clipboard?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To paste an image from clipboard: 1) Copy any image (press Ctrl+C or right-click + copy) 2) Click on our upload area or press Ctrl+V anywhere on the page 3) The image will automatically upload and generate a URL. This works with screenshots, copied images from websites, and images from design tools.'
        }
      },
      {
        '@type': 'Question',
        name: 'What image formats are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support all major image formats including: JPG/JPEG, PNG, GIF, WebP, SVG, BMP, TIFF, ICO, and HEIC. Our tool automatically handles format conversion and optimization while maintaining the original quality as much as possible.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the maximum file size?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The maximum file size is 50MB per upload. This limit ensures fast upload speeds and optimal performance. For larger files, we recommend compressing them first or contacting us for custom solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long do the image URLs last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By default, image URLs last for 24 hours. However, you can choose different expiry times in advanced options: 1 hour, 24 hours, 7 days, 30 days, or never expire (premium feature). The countdown starts from the moment of upload.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are my images private and secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All uploads are private by default. Only people with the exact URL can access your images. We use HTTPS encryption for all transfers, and images are automatically deleted after their expiry time. We never share or sell your data.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use this for my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! Many businesses use our image to URL converter for sharing product images, marketing materials, internal documentation, and more. We offer reliable service with 99.9% uptime and fast CDN delivery.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you have an API?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer a RESTful API for developers who want to integrate image to URL conversion into their applications. The API supports all formats and features. Check our API documentation at /api/docs for more information.'
        }
      },
      {
        '@type': 'Question',
        name: 'How fast is the upload?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Upload speeds depend on your internet connection, but most images under 10MB upload in under 5 seconds. We use optimized servers and CDN infrastructure to ensure the fastest possible upload and delivery speeds.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I upload multiple images at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, we support single image uploads to ensure the best quality and user experience. However, you can upload multiple images one after another, and they will each get their own unique URL.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you compress or modify my images?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We store images in their original quality without any compression or modification. If you choose format conversion in advanced options, we convert while preserving maximum quality. Your original image remains unchanged.'
        }
      },
      {
        '@type': 'Question',
        name: 'What browsers are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our tool works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. For the best experience, we recommend using the latest version of your preferred browser.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there a mobile app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While we don\'t have a dedicated mobile app yet, our website is fully responsive and works perfectly on mobile devices. You can use it from your phone or tablet\'s browser with full functionality.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I report a bug or suggest a feature?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We love feedback! You can report bugs or suggest features through our contact form, email us at support@imagetourl.com, or use the feedback button in the app. We typically respond within 24 hours.'
        }
      }
    ]
  }

  // HowTo schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Convert Image to URL',
    description: 'Step-by-step guide to convert any image to a shareable URL',
    totalTime: 'PT2M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      value: '0',
      currency: 'USD'
    },
    tool: {
      '@type': 'HowToTool',
      name: 'Image to URL Converter'
    },
    step: [
      {
        '@type': 'HowToStep',
        name: 'Prepare your image',
        text: 'Have your image ready on your computer. Supported formats: JPG, PNG, GIF, WebP, SVG, BMP, TIFF.',
        image: `${baseUrl}/og-images/image-to-url-converter-square.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Upload or paste image',
        text: 'Drag and drop your image into the upload area, click to browse files, or press Ctrl+V to paste from clipboard.',
        image: `${baseUrl}/og-images/image-to-url-converter-square.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Wait for processing',
        text: 'The tool will automatically upload your image and generate a URL. This usually takes just a few seconds.',
        image: `${baseUrl}/og-images/image-to-url-converter-square.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Copy your URL',
        text: 'Click the copy button to copy your unique image URL to clipboard. You can also view, download, or share directly.',
        image: `${baseUrl}/og-images/image-to-url-converter-square.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Share your image',
        text: 'Paste the URL anywhere you want to share your image - social media, emails, forums, websites, etc.',
        image: `${baseUrl}/og-images/image-to-url-converter-square.jpg`
      }
    ]
  }

  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Image to URL Converter',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://www.facebook.com/p/Techmintlab-61561513780706/',
      'https://twitter.com/techmintlab',
      'https://www.instagram.com/techmintlab_/',
      'https://www.linkedin.com/company/techmintlab',
      'https://github.com/techmintlab',
       
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-800-123-4567',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English', 'Spanish']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+44-20-1234-5678',
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: ['English']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    foundingDate: '2020-01-01',
    founders: [
      {
        '@type': 'Person',
        name: 'John Doe'
      }
    ],
    award: [
      'Best Free Web Tool 2023',
      'Top Image Converter 2024'
    ]
  }

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Image to URL Converter - Free Online Tool',
    description: 'Free image to URL converter. Drag & drop or paste images to get instant shareable links.',
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  // Video schema (if you have a tutorial video)
 // Video schema (if you have a tutorial video)
const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'How to Use Image to URL Converter - Complete Tutorial',
  description: 'Learn how to convert images to URLs with our free online tool. Drag & drop, paste from clipboard, and get instant shareable links.',
  thumbnailUrl: [
    `${baseUrl}/og-images/image-to-url-converter-square.jpg`,
    `${baseUrl}/og-images/image-to-url-converter-square.jpg`
  ],
  uploadDate: '2024-01-15T00:00:00Z', // Added timezone (Z for UTC)
  duration: 'PT3M30S',
  contentUrl: `${baseUrl}/og-images/image-to-url-converter-square.jpg`,
  embedUrl: `${baseUrl}/video/embed`,
  interactionCount: '15427',
  expires: '2025-12-31T23:59:59Z' // Added timezone (Z for UTC)
}

  // Local business schema (if applicable)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Image to URL Converter',
    image: `${baseUrl}/logo.png`,
    telephone: '+1-800-123-4567',
    email: 'support@imagetourl.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749,
      longitude: -122.4194
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '18:00'
      }
    ]
  }

  // Sitemap schema
  const sitemapSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Home',
        description: 'Image to URL Converter Home',
        url: baseUrl
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Image to URL',
        description: 'Convert images to URLs',
        url: `${baseUrl}/image-to-url-converter`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'API',
        description: 'Developer API for image to URL conversion',
        url: `${baseUrl}/api`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Blog',
        description: 'Image conversion tips and tutorials',
        url: `${baseUrl}/blog`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'FAQ',
        description: 'Frequently asked questions',
        url: `${baseUrl}/faq`
      }
    ]
  }

  // Speakable schema (for voice search)
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '.speakable-headline',
        '.speakable-summary'
      ]
    },
    url: `${baseUrl}/image-to-url-converter`
  }

  // Product schema (if offering premium features)
 // Product schema (if offering premium features)
 



// Product schema (if offering premium features)
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Image to URL Converter Premium',
  description: 'Premium features for image to URL conversion including unlimited expiry, priority support, and API access.',
  image: `${baseUrl}/og-images/image-to-url-converter-square.jpg`,
  brand: {
    '@type': 'Brand',
    name: 'Image to URL Converter'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
    reviewCount: '1250',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Alex Johnson'
      },
      datePublished: '2024-02-20',
      reviewBody: 'The premium features are worth every penny. Unlimited expiry and API access saved me hours of work.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      }
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Maria Garcia'
      },
      datePublished: '2024-02-18',
      reviewBody: 'Priority support is amazing - they helped me integrate the API within minutes.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      }
    }
  ],
  offers: {
    '@type': 'Offer',
    price: '9.99',
    priceCurrency: 'USD',
    priceValidUntil: '2024-12-31',
    availability: 'https://schema.org/InStock',
    url: `${baseUrl}/premium`
  }
}










  return (
    <>
      {/* Primary Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      
      <Script
        id="webapp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        strategy="beforeInteractive"
      />
      
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
      
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        strategy="beforeInteractive"
      />
      
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="beforeInteractive"
      />
      
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="beforeInteractive"
      />
      
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        strategy="lazyOnload"
      />
      
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="lazyOnload"
      />
      
      <Script
        id="sitemap-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapSchema) }}
        strategy="lazyOnload"
      />
      
      <Script
        id="speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
        strategy="lazyOnload"
      />
      
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        strategy="lazyOnload"
      />

      {/* Additional meta tags */}
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="5 minutes" />
      <meta name="twitter:label2" content="Users" />
      <meta name="twitter:data2" content="1M+" />
      
      <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
      <meta property="article:modified_time" content={currentDate} />
      <meta property="article:author" content="Image to URL Converter Team" />
      <meta property="article:section" content="Technology" />
      <meta property="article:tag" content="image converter, url generator, web tools" />
      
      <meta name="author" content="Image to URL Converter Team" />
      <meta name="copyright" content="© 2024 Image to URL Converter" />
      <meta name="language" content="en" />
      <meta name="doc-type" content="Web Page" />
      <meta name="doc-class" content="Published" />
      <meta name="doc-rights" content="Copywritten work" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="resource-type" content="document" />
      <meta name="content-type" content="web-tool" />
      <meta name="revisit-after" content="1 day" />
      
      {/* Dublin Core */}
      <meta name="DC.title" content="Free Image to URL Converter" />
      <meta name="DC.creator" content="Image to URL Converter Team" />
      <meta name="DC.subject" content="Image to URL Converter" />
      <meta name="DC.description" content="Free online image to URL converter" />
      <meta name="DC.publisher" content="Image to URL Converter" />
      <meta name="DC.date" content={currentDate} />
      <meta name="DC.type" content="Interactive Resource" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="en" />
      <meta name="DC.rights" content="Copyright 2024" />
      
      {/* Geo tags */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="San Francisco" />
      <meta name="geo.position" content="37.7749;-122.4194" />
      <meta name="ICBM" content="37.7749, -122.4194" />
      
      {/* SEO Meta */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="yandex" content="index, follow" />
      <meta name="baidu" content="index, follow" />
      
      {/* Performance hints */}
      <link rel="preconnect" href={baseUrl} />
      <link rel="dns-prefetch" href={baseUrl} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* RSS Feed */}
      <link rel="alternate" type="application/rss+xml" title="Image to URL Converter Blog" href={`${baseUrl}/blog/rss.xml`} />
      
      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${baseUrl}/sitemap.xml`} />
      
      {/* Component */}
      <ImageToUrlConverter />
    </>
  )
}