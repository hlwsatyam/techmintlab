 




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
  
  function getAllRoutes(dir: string, baseRoute: string = '') {
    const items = fs.readdirSync(dir)
    
    items.forEach((item) => {
      // Skip special directories and files
      if (item.startsWith('_') || item.startsWith('.')) return
      
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        // Check if this directory has a page.tsx file
        const pagePath = path.join(fullPath, 'page.tsx')
        if (fs.existsSync(pagePath)) {
          const route = path.join(baseRoute, item)
          routes.push(route)
        }
        
        // Recursively check subdirectories
        getAllRoutes(fullPath, path.join(baseRoute, item))
      }
    })
  }
  
  getAllRoutes(appDirectory)
  
  // Convert routes to sitemap format
  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route === '' ? '' : route}`,
    lastModified: new Date(),
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...sitemapEntries,
  ]
}