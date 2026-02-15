import Portfolio from '@/components/Portfolio'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO('Portfolio')

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of successful projects that have helped businesses achieve their digital goals.
          </p>
        </div>
        
        <Portfolio />
      </div>
    </div>
  )
}