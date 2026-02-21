 




// import { MetadataRoute } from 'next'
// import fs from 'fs'
// import path from 'path'

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = 'https://techmintlab.com'
//   const pagesDirectory = path.join(process.cwd(), 'app')

//   const staticPages = fs.readdirSync(pagesDirectory)

//   const routes = staticPages
//     .filter((page) => page !== 'api' && page !== 'layout.tsx')
//     .map((page) => ({
//       url: `${baseUrl}/${page === 'page.tsx' ? '' : page}`,
//       lastModified: new Date(),
//     }))

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//     },
//     ...routes,
//   ]
// }

import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techmintlab.com'
  const appDirectory = path.join(process.cwd(), 'app')
  
  const routes: string[] = []
  
  function getAllValidRoutes(dir: string, basePath: string = '') {
    try {
      const items = fs.readdirSync(dir)
      
      items.forEach((item) => {
        // Skip unwanted items
        if (item.startsWith('_') || 
            item.startsWith('.') || 
            item === 'api' || 
            item === 'layout.js' ||
            item === 'layout.tsx' ||
            item === 'layout.jsx' ||
            item.includes('[') || // Skip dynamic routes for now
            item.includes('(')) { // Skip route groups
          return
        }
        
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)
        
        if (stat.isDirectory()) {
          // Check for page files in this directory
          const pageExtensions = ['page.js', 'page.tsx', 'page.jsx']
          const hasPageFile = pageExtensions.some(ext => 
            fs.existsSync(path.join(fullPath, ext))
          )
          
          if (hasPageFile) {
            // Create proper URL path
            const routePath = basePath ? `${basePath}/${item}` : item
            routes.push(routePath)
          }
          
          // RECURSION: Go inside every subdirectory
          getAllValidRoutes(fullPath, basePath ? `${basePath}/${item}` : item)
        }
      })
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error)
    }
  }
  
  // Start scanning from app directory
  getAllValidRoutes(appDirectory)
  
  // Sort routes for better organization
  routes.sort()
  
  // Generate sitemap with proper URLs
  const sitemapEntries = routes.map((route) => {
    // Determine priority based on depth
    const depth = route.split('/').length
    let priority = 0.7
    if (depth === 1) priority = 0.8
    if (route === '') priority = 1.0
    
    // Determine change frequency
    let changeFreq: 'daily' | 'weekly' | 'monthly' = 'weekly'
    if (route.includes('tools/') || route.includes('fools/')) {
      changeFreq = 'daily'
    }
    
    return {
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority: priority,
    }
  })
  
  // Return homepage + all routes
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...sitemapEntries,
  ]
}