import { generateSEO } from '@/lib/seo'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import { generateStructuredData } from '@/lib/seo'

export const metadata = generateSEO('Services')

export default function ServicesPage() {
  const structuredData = generateStructuredData('Service', {
    "serviceType": "IT Services",
    "provider": {
      "@type": "Organization",
      "name": "TechMintLab"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development"
          }
        }
      ]
    }
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions tailored to your business needs. 
              From concept to deployment, we deliver excellence at every step.
            </p>
          </div>
        </div>
        
        <Services />
        <Packages />
        
        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our <span className="gradient-text">Process</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements' },
                { step: '02', title: 'Planning', desc: 'Strategic roadmap creation' },
                { step: '03', title: 'Development', desc: 'Agile development process' },
                { step: '04', title: 'Launch & Support', desc: 'Deployment and maintenance' }
              ].map((process, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}