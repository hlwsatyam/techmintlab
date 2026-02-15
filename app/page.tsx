import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Stats from '@/components/Stats'
import Packages from '@/components/Packages'
import ContactForm from '@/components/ContactForm'
import { generateStructuredData } from '@/lib/seo'

export default function Home() {
  const structuredData = generateStructuredData('WebSite', {
    "name": "TechMintLab",
    "url": "https://techmintlab.com",
    "description": "Premium IT Solutions with Cutting-edge Technology",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://techmintlab.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <Packages />
      <ContactForm />
    </>
  )
}