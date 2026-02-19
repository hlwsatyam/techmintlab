 
// import { MetadataRoute } from 'next'

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = 'https://techmintlab.com'
  
//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/services`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/software-development-karnal`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/website-designer-in-karnal`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/hi`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/our-technologies`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/digital-marketing-karnal`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/portfolio`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.9,
//     },
//   ]
// }






import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techmintlab.com'
  const pagesDirectory = path.join(process.cwd(), 'app')

  const staticPages = fs.readdirSync(pagesDirectory)

  const routes = staticPages
    .filter((page) => page !== 'api' && page !== 'layout.tsx')
    .map((page) => ({
      url: `${baseUrl}/${page === 'page.tsx' ? '' : page}`,
      lastModified: new Date(),
    }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...routes,
  ]
}





