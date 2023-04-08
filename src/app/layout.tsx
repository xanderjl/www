import type { ReactNode } from 'react'

import { Providers } from '@/components/client/Providers'
import { Layout } from '@/components/client/routes/home/layout'
import { getSketchSlugs } from '@/utils/data/getSketchSlugs'

export interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: {
    default: 'Xandy Dandy | Home',
    template: 'Xandy Dandy | %s'
  },
  description: 'A starter template for Next.js with Chakra UI'
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const list = await getSketchSlugs()

  return (
    <html lang='en'>
      <body>
        <Providers>
          <Layout list={list}>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
