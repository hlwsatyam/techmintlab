 




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
  const appDir = path.join(process.cwd(), 'app')

  function getRoutes(dir: string, parentPath = ''): string[] {
    const files = fs.readdirSync(dir)

    let routes: string[] = []

    files.forEach((file) => {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        if (file !== 'api') {
          routes = routes.concat(
            getRoutes(fullPath, `${parentPath}/${file}`)
          )
        }
      }

      if (file === 'page.tsx') {
        routes.push(parentPath || '')
      }
    })

    return routes
  }

  const routes = getRoutes(appDir)

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
