import { FC, ReactNode } from 'react'
import { Providers } from '@/components/client/Providers'
import { Layout } from '@/components/client/routes/home/layout'

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

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
