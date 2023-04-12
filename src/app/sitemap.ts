import type { MetadataRoute } from 'next'

import baseUrl from '@/utils/baseUrl'
import { getDirSlugs } from '@/utils/data/getDirSlugs'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const writingUrls = await getDirSlugs('./src/app/(writing)/writing').then(
    slugs => slugs.map(slug => ({ url: `${baseUrl}/writing/${slug}` }))
  )
  const sketchUrls = await getDirSlugs('./src/app/(p5)/sketches').then(slugs =>
    slugs.map(slug => ({ url: `${baseUrl}/sketches/${slug}` }))
  )
  const mainSiteUrls = await getDirSlugs('./src/app/(mainSite)').then(slugs =>
    slugs.map(slug => ({ url: `${baseUrl}/${slug}` }))
  )

  const siteUrls = [...writingUrls, ...sketchUrls, ...mainSiteUrls]

  return [
    {
      url: `${baseUrl}`
    },
    {
      url: `${baseUrl}/writing`
    },
    {
      url: `${baseUrl}/sketches`
    },
    ...siteUrls
  ]
}

export default sitemap
