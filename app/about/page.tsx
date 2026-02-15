import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO('About Us')

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            About <span className="gradient-text">TechMintLab</span>
          </h1>
          
          <div className="glass-card mb-8">
            <p className="text-xl text-gray-600 mb-6">
              TechMintLab is a premier IT development company specializing in creating cutting-edge mobile apps, websites, and desktop software solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To deliver innovative, reliable, and scalable digital solutions that empower businesses to thrive in the digital age.
              </p>
            </div>
            
            <div className="glass-card">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted technology partner for businesses worldwide, recognized for excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}