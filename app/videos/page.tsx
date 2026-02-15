import { generateSEO } from '@/lib/seo'
import { PlayCircle } from 'lucide-react'

export const metadata = generateSEO('Videos')

export default function VideosPage() {
  const videos = [
    { id: 'demo1', title: 'Mobile App Development Process', duration: '5:30' },
    { id: 'demo2', title: 'Web Development Best Practices', duration: '7:45' },
    { id: 'demo3', title: 'UI/UX Design Principles', duration: '6:15' },
    { id: 'demo4', title: 'Cloud Deployment Guide', duration: '8:20' },
    { id: 'demo5', title: 'Agile Development Methodology', duration: '9:10' },
    { id: 'demo6', title: 'SEO Optimization Techniques', duration: '4:55' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Videos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our tutorials, case studies, and technology insights to learn more about our expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="glass-card group">
              <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">
                Learn about our development process and best practices in this informative video.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}