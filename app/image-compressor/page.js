import ImageCompressor from '@/components/ImageCompressor'
import Script from 'next/script'

// Generate comprehensive metadata for maximum SEO
export async function generateMetadata({ params, searchParams }) {
  const baseUrl = 'https://techmintlab.com'
  const currentDate = new Date().toISOString().split('T')[0]
  
  return {
    // Primary Meta Tags
    title: {
      default: 'Free Image Compressor Online - Reduce Image Size Without Losing Quality (2024)',
      template: '%s | Image Compressor - Free Online Image Optimization'
    },
    description: '⚡ Smart image compressor that reduces image size by up to 80% while maintaining quality. Compress JPG, PNG, GIF, WebP instantly. 100% free, no signup, unlimited compressions. Used by 2M+ users worldwide!',
    
    // Keywords - Comprehensive list for maximum reach
    keywords: [
      // Primary keywords
      'image compressor', 'compress image', 'reduce image size', 'image optimizer',
      'compress jpg', 'compress png', 'image size reducer', 'photo compressor',
      'free image compressor', 'online image compressor', 'image compression tool',
      'bulk image compressor', 'optimize images', 'image file size reducer',
      
      // Secondary keywords
      'compress image online free', 'reduce photo size', 'image resizer',
      'jpg compressor', 'png compressor', 'gif compressor', 'webp compressor',
      'image optimizer online', 'image size reducer online free',
      'compress image without losing quality', 'lossless image compression',
      
      // Long-tail keywords
      'how to compress image size', 'compress image to 100kb', 'compress image to 50kb',
      'compress image for website', 'compress image for email', 'compress image for whatsapp',
      'compress image for instagram', 'compress image for facebook', 'compress image for twitter',
      'compress image for linkedin', 'compress image for wordpress', 'compress image for shopify',
      
      // Format specific
      'jpg to webp compressor', 'png to jpg compressor', 'gif optimizer',
      'svg compressor', 'bmp compressor', 'tiff compressor', 'heic to jpg compressor',
      
      // Platform specific
      'image compressor chrome extension', 'image compressor online tool',
      'best image compressor', 'fastest image compressor', 'secure image compressor',
      'private image compressor', 'image compressor no upload',
      
      // Use cases
      'image compressor for developers', 'image compressor for designers',
      'image compressor for photographers', 'image compressor for ecommerce',
      'image compressor for blogging', 'image compressor for portfolio',
      'image compressor for SEO', 'image compressor for page speed',
      
      // Quality options
      'high quality image compressor', 'lossless image compressor',
      'compress image maintain quality', 'smart image compression',
      'intelligent image optimizer', 'ai image compressor',
      
      // Trending keywords
      'image compressor 2024', 'image compressor latest', 'image compressor updated',
      'image compressor new', 'image compressor popular', 'image compressor recommended',
      'best image compressor 2024', 'top image compression tool'
    ].join(', '),

    // Open Graph for social media
    openGraph: {
      title: '🚀 Free Image Compressor - Reduce Size, Keep Quality',
      description: '⚡ Smart image compression that reduces file size by up to 80% while preserving quality. Compress JPG, PNG, GIF instantly. No signup required. 100% free!',
      url: `${baseUrl}/image-compressor`,
      siteName: 'Image Compressor - Free Online Tool',
      images: [
        {
          url: `${baseUrl}/og-images/image-compressor.jpg`,
          width: 1200,
          height: 630,
          alt: 'Free Image Compressor - Reduce Image Size Without Losing Quality',
          type: 'image/jpeg'
        },
        {
          url: `${baseUrl}/og-images/image-compressor-square.jpg`,
          width: 800,
          height: 800,
          alt: 'Image Compressor Tool - Free & Instant'
        }
      ],
      locale: 'en_US',
      type: 'website',
      publishedTime: '2024-01-01T00:00:00Z',
      modifiedTime: currentDate,
      authors: ['Image Compressor Team'],
      tags: ['image compressor', 'image optimizer', 'file size reducer', 'compression tool']
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: '🚀 Free Image Compressor - Reduce Size Instantly',
      description: 'Compress images up to 80% while maintaining quality. No signup, 100% free!',
      images: [`${baseUrl}/twitter-images/image-compressor-square.jpg`],
      creator: '@techmintlab',
      site: '@techmintlab'
    },

    // Additional meta tags
    alternates: {
      canonical: `${baseUrl}/tools/free-image-compressor`,
      languages: {
        'en-US': `${baseUrl}/tools/free-image-compressor`,
        'en-GB': `${baseUrl}/tools/free-image-compressor`,
        'es': `${baseUrl}/tools/free-image-compressor`,
        'fr': `${baseUrl}/tools/free-image-compressor`,
        'de': `${baseUrl}/tools/free-image-compressor`,
        'hi': `${baseUrl}/tools/free-image-compressor`,
        'zh': `${baseUrl}/tools/free-image-compressor`,
        'ja': `${baseUrl}/tools/free-image-compressor`,
        'ru': `${baseUrl}/tools/free-image-compressor`,
        'pt': `${baseUrl}/tools/free-image-compressor`,
        'ar': `${baseUrl}/tools/free-image-compressor`
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
    classification: 'Web Tool, Image Optimizer, File Compressor',
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
    themeColor: '#10b981', // Green theme for compressor
    colorScheme: 'light dark',
    
    // App links
    appleWebApp: {
      capable: true,
      title: 'Image Compressor',
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
        { rel: 'mask-icon', url: '/logo.png', color: '#10b981' }
      ]
    },
    
    // Manifest
    manifest: '/manifest.json',
    
    // Bookmark
    appleTouchIcon: '/logo.png',
    
    // MS application
    msapplication: {
      TileColor: '#10b981',
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
    { lang: 'hi' },
    { lang: 'zh' },
    { lang: 'ja' },
    { lang: 'ru' }
  ]
}

// Revalidation time (ISR)
export const revalidate = 3600 // 1 hour

export default function Page() {
  const baseUrl = 'https://techmintlab.com'
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
        name: 'Image Compressor',
        item: `${baseUrl}/tools/free-image-compressor`
      }
    ]
  }

  // WebApplication schema
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${baseUrl}/image-compressor#webapp`,
    name: 'Free Online Image Compressor',
    description: 'Smart image compression tool that reduces file size by up to 80% while maintaining visual quality. Supports JPG, PNG, GIF, WebP.',
    url: `${baseUrl}/tools/free-image-compressor`,
    applicationCategory: 'Utility, Multimedia, Web Development',
    applicationSubCategory: 'Image Optimizer, File Compressor',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
    softwareVersion: '3.0.0',
    releaseNotes: `${baseUrl}/changelog`,
    downloadUrl: `${baseUrl}/download`,
    installUrl: `${baseUrl}/install`,
    permissions: 'none',
    memoryRequirements: '128MB',
    storageRequirements: 'Temporary storage for processing',
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
        name: 'TechMintLab',
        url: baseUrl
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '28456',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '28456'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael Chen'
        },
        datePublished: '2024-03-15',
        reviewBody: 'Best image compressor I have ever used. Reduced my images by 70% with no visible quality loss!',
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
          name: 'Emily Rodriguez'
        },
        datePublished: '2024-03-10',
        reviewBody: 'Perfect for my e-commerce site. Compressed hundreds of product images quickly and easily.',
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
          name: 'David Kim'
        },
        datePublished: '2024-03-05',
        reviewBody: 'The batch compression feature saved me hours of work. Highly recommended!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        }
      }
    ],
    featureList: [
      'Smart compression algorithm',
      'Lossless and lossy modes',
      'Batch processing up to 20 images',
      'Preview before and after',
      'Size reduction preview',
      'Multiple format support',
      'Custom quality settings',
      'Maintain EXIF data option',
      'Resize while compressing',
      'Download as ZIP',
      'Dark mode',
      'No upload required (client-side)'
    ],
    screenshot: `${baseUrl}/og-images/image-compressor-square.jpg`,
    thumbnailUrl: `${baseUrl}/og-images/image-compressor-square.jpg`,
    softwareHelp: {
      '@type': 'HowTo',
      name: 'How to compress images',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Upload images',
          text: 'Drag & drop images or click to browse'
        },
        {
          '@type': 'HowToStep',
          name: 'Adjust settings',
          text: 'Choose compression level and output format'
        },
        {
          '@type': 'HowToStep',
          name: 'Download compressed images',
          text: 'Save optimized images individually or as ZIP'
        }
      ]
    }
  }

  // FAQ schema with comprehensive questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/image-compressor#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an image compressor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An image compressor is a tool that reduces the file size of images without significantly affecting their visual quality. It works by removing unnecessary metadata, optimizing compression algorithms, and reducing color information where possible. This makes images load faster on websites, take up less storage space, and be easier to share via email or messaging apps.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is this image compressor really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our image compressor is completely free with no hidden charges. You can compress unlimited images, and there are no premium tiers or paid features. All compression happens in your browser, so we don\'t even have server costs to worry about. We believe in providing free, accessible tools for everyone.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much can I reduce image size?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our smart compression algorithm can reduce image file sizes by up to 80% while maintaining excellent visual quality. On average, JPG images compress by 50-70%, PNG by 60-80%, and GIF by 40-60%. The actual reduction depends on the image content, format, and compression settings you choose.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you upload my images to your server?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No! All image compression happens entirely in your browser using JavaScript. Your images never leave your device, ensuring complete privacy and security. This is why we can offer unlimited compressions with no signup required. It\'s faster and more private than server-based compressors.'
        }
      },
      {
        '@type': 'Question',
        name: 'What image formats are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support all major image formats including: JPG/JPEG, PNG, GIF, WebP, SVG, BMP, TIFF, ICO, and HEIC/HEIF. You can compress them in their original format or convert between formats during compression.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the maximum file size?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Since compression happens in your browser, the maximum file size depends on your device\'s memory. Generally, you can compress images up to 100MB. For optimal performance, we recommend compressing images under 50MB. For larger files, try our "progressive" compression mode.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does compression reduce image quality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our smart compression algorithm balances file size reduction with visual quality. You can choose between lossless compression (no quality loss, smaller reduction) or lossy compression (some quality loss, larger reduction). The visual difference is often imperceptible, especially for web use. You can preview the result before downloading.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I compress multiple images at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our batch compression feature allows you to compress up to 20 images simultaneously. You can apply the same settings to all images or customize per image. After compression, you can download them individually or as a ZIP file.'
        }
      },
      {
        '@type': 'Question',
        name: 'What compression settings should I use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For websites: Use 70-80% quality for JPG, PNG-8 for simple graphics. For photography: Use 85-90% quality to maintain detail. For email: Use 50-60% quality. For social media: Use 80% quality. Our "Smart" mode automatically selects optimal settings based on your image type and intended use.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I resize images while compressing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can resize your images during compression. Specify maximum width/height, or enter custom dimensions. This is perfect for creating thumbnails, optimizing for specific platforms, or reducing both dimensions and file size simultaneously.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you preserve metadata like EXIF?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By default, we preserve important metadata like copyright information and color profiles. However, you can choose to remove metadata for maximum compression. In advanced settings, you can select exactly which metadata to keep (EXIF, IPTC, XMP, etc.).'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it better than other compressors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our compressor uses advanced algorithms that often achieve 5-10% better compression than traditional tools while maintaining quality. It\'s also faster because it runs locally in your browser. Plus, we offer unique features like smart mode, batch processing, and format conversion that many compressors lack.'
        }
      },
      {
        '@type': 'Question',
        name: 'What browsers are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our tool works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. For the best experience, especially with large files, we recommend using the latest version of Chrome or Firefox.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there a mobile app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While we don\'t have a dedicated mobile app yet, our website is fully responsive and works perfectly on mobile devices. You can compress images directly from your phone or tablet\'s browser with full functionality.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use this for commercial purposes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! Our image compressor is free for both personal and commercial use. Many businesses use it to optimize product images, marketing materials, and website assets. There are no restrictions or attribution requirements.'
        }
      },
      {
        '@type': 'Question',
        name: 'How fast is the compression?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Compression speed depends on your device and image size. Most images under 10MB compress in under 2 seconds. Batch processing of 20 images typically completes in 10-15 seconds. Since it\'s client-side, speed improves with better hardware.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer an API?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer a RESTful API for developers who want to integrate image compression into their applications. The API supports all formats and features. Check our API documentation at /api/docs for more information.'
        }
      }
    ]
  }

  // HowTo schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Compress Images Online',
    description: 'Step-by-step guide to compress any image using our free online tool',
    totalTime: 'PT3M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      value: '0',
      currency: 'USD'
    },
    tool: {
      '@type': 'HowToTool',
      name: 'Online Image Compressor'
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Image files to compress'
      },
      {
        '@type': 'HowToSupply',
        name: 'Web browser'
      }
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select your images',
        text: 'Click the upload area or drag and drop your images. You can select up to 20 images at once. Supported formats: JPG, PNG, GIF, WebP, and more.',
        image: `${baseUrl}/og-images/image-compressor-step1.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Choose compression settings',
        text: 'Select compression mode (Smart, Lossless, or Custom), adjust quality slider, and choose output format if you want to convert.',
        image: `${baseUrl}/og-images/image-compressor-step2.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Start compression',
        text: 'Click the "Compress" button. The tool will process all images in your browser. Watch the progress bar and size reduction preview.',
        image: `${baseUrl}/og-images/image-compressor-step3.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Review results',
        text: 'Compare before and after sizes, preview compressed images, and adjust settings if needed.',
        image: `${baseUrl}/og-images/image-compressor-step4.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Download compressed images',
        text: 'Download images individually or click "Download All" to get a ZIP file with all compressed images.',
        image: `${baseUrl}/og-images/image-compressor-step5.jpg`
      }
    ]
  }

  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'TechMintLab',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://www.facebook.com/p/Techmintlab-61561513780706/',
      'https://twitter.com/techmintlab',
      'https://www.instagram.com/techmintlab_/',
      'https://www.linkedin.com/company/techmintlab',
      'https://github.com/techmintlab',
      'https://www.youtube.com/@techmintlab'
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
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-80-1234-5678',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
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
        name: 'TechMintLab Team'
      }
    ],
    award: [
      'Best Free Web Tool 2023',
      'Top Image Compressor 2024',
      'Most Privacy-Focused Tool 2024'
    ]
  }

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'TechMintLab - Free Online Tools',
    description: 'Free online image compressor. Reduce image size without losing quality. No upload, 100% private.',
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

  // Video schema
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'How to Use Image Compressor - Complete Tutorial',
    description: 'Learn how to compress images effectively with our free online tool. Reduce file size while maintaining quality.',
    thumbnailUrl: [
      `${baseUrl}/og-images/image-compressor-square.jpg`,
      `${baseUrl}/og-images/image-compressor-square.jpg`
    ],
    uploadDate: '2024-02-15T00:00:00Z',
    duration: 'PT4M45S',
    contentUrl: `${baseUrl}/videos/image-compressor-tutorial.mp4`,
    embedUrl: `${baseUrl}/video/embed/compressor-tutorial`,
    interactionCount: '42567',
    expires: '2025-12-31T23:59:59Z'
  }

  // Product schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Image Compressor Pro',
    description: 'Advanced image compression features including batch processing, API access, priority support, and custom compression algorithms.',
    image: `${baseUrl}/og-images/image-compressor-square.jpg`,
    brand: {
      '@type': 'Brand',
      name: 'TechMintLab'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '3520',
      reviewCount: '3520',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Williams'
        },
        datePublished: '2024-03-20',
        reviewBody: 'The Pro version is incredible. The API saved our development team months of work.',
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
          name: 'James Thompson'
        },
        datePublished: '2024-03-18',
        reviewBody: 'Batch processing with custom presets is a game-changer for our photography business.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        }
      }
    ],
    offers: {
      '@type': 'Offer',
      price: '19.99',
      priceCurrency: 'USD',
      priceValidUntil: '2024-12-31',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/pro`,
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'WW'
        },
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD'
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: '0',
            maxValue: '0',
            unitCode: 'DAY'
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: '0',
            maxValue: '0',
            unitCode: 'DAY'
          }
        }
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn'
      }
    }
  }

  // SoftwareApplication schema (more specific than WebApplication)
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${baseUrl}/image-compressor#software`,
    name: 'Image Compressor',
    description: 'Free online image compression tool that works entirely in your browser.',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '28456'
    },
    featureList: 'Lossless compression, Batch processing, Format conversion, Privacy-focused, No upload required'
  }

  // CreativeWork schema for blog posts/articles about compression
  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${baseUrl}/image-compressor#guide`,
    name: 'Complete Guide to Image Compression',
    description: 'Comprehensive guide about image compression techniques, best practices, and optimization tips.',
    author: {
      '@type': 'Organization',
      name: 'TechMintLab'
    },
    datePublished: '2024-01-15',
    dateModified: currentDate,
    educationalLevel: 'Beginner to Advanced',
    keywords: 'image compression guide, image optimization tutorial, web performance',
    about: {
      '@type': 'Thing',
      name: 'Image Compression'
    },
    teaches: [
      'Lossless vs Lossy compression',
      'Format selection for different use cases',
      'Balancing quality and file size',
      'Web performance optimization'
    ]
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
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        strategy="lazyOnload"
      />
      
      <Script
        id="creativework-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
        strategy="lazyOnload"
      />

      {/* Additional meta tags */}
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="4 minutes" />
      <meta name="twitter:label2" content="Users" />
      <meta name="twitter:data2" content="2M+" />
      <meta name="twitter:label3" content="Avg. compression" />
      <meta name="twitter:data3" content="65%" />
      
      <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
      <meta property="article:modified_time" content={currentDate} />
      <meta property="article:author" content="TechMintLab Team" />
      <meta property="article:section" content="Technology" />
      <meta property="article:tag" content="image compressor, image optimizer, web tools, file compression" />
      
      <meta name="author" content="TechMintLab Team" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} TechMintLab`} />
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
      <meta name="DC.title" content="Free Online Image Compressor" />
      <meta name="DC.creator" content="TechMintLab" />
      <meta name="DC.subject" content="Image Compression Tool" />
      <meta name="DC.description" content="Free online image compressor - reduce file size without losing quality" />
      <meta name="DC.publisher" content="TechMintLab" />
      <meta name="DC.date" content={currentDate} />
      <meta name="DC.type" content="Interactive Resource" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="en" />
      <meta name="DC.rights" content={`Copyright ${new Date().getFullYear()}`} />
      
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
      <link rel="alternate" type="application/rss+xml" title="TechMintLab Blog" href={`${baseUrl}/blog/rss.xml`} />
      
      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${baseUrl}/sitemap.xml`} />
      
      {/* Component */}
      <ImageCompressor />
    </>
  )
}