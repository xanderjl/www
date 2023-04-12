import type { MetadataRoute } from 'next'

import baseUrl from '@/utils/baseUrl'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  }
}

export default robots
