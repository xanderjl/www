import type { ReactNode } from 'react'

import { Providers } from '@/components/client/Providers'

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
