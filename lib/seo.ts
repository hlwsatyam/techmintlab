import { Metadata } from 'next'

export const generateSEO = (page?: string): Metadata => {
  const baseUrl = 'https://techmintlab.com'
  const title = page 
    ? `${page} | TechMintLab - Premium IT Solutions`
    : 'TechMintLab - Premium IT Solutions & Software Development'
  
  const description = 'TechMintLab delivers premium IT solutions with cutting-edge technology. Specializing in mobile apps, web development, and custom software solutions.'
  
  return {
    title,
    description,
    keywords: [
      'IT Solutions',
      'Software Development',
      'Mobile App Development',
      'Web Development',
      'Digital Transformation',
      'TechMintLab',
      'Flutter Development',
      'React Native',
      'Custom Software',
      'UI/UX Design'
    ],
    authors: [{ name: 'TechMintLab' }],
    creator: 'TechMintLab',
    publisher: 'TechMintLab',
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
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${baseUrl}/${page ? page.toLowerCase() : ''}`,
      title,
      description,
      siteName: 'TechMintLab',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'TechMintLab - Premium IT Solutions',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/twitter-image.png`],
      creator: '@techmintlab',
    },
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
    },
    alternates: {
      canonical: `${baseUrl}/${page ? page.toLowerCase() : ''}`,
    },
    category: 'technology',
  }
}

export const generateStructuredData = (type: string, data: any) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  }

  return JSON.stringify(baseSchema)
}