import type { ReactNode } from 'react'

import { Providers } from '@/components/client/Providers'
import { description, title } from '@/sharedMetadata'
import baseUrl from '@/utils/baseUrl'

export interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: {
    default: `${title} | Home`,
    template: `${title} | %s`
  },
  description,
  metadataBase: new URL(baseUrl),
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    site: new URL(baseUrl),
    handle: '@xandydandy'
  }
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
