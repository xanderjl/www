import { FC } from 'react'
import { Providers } from '@/components/Providers'
import { Metadata } from 'next'
import { HomeLayout } from '@/components/Layouts/Home'

export interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Next.js Chakra UI Starter',
  description: 'A starter template for Next.js with Chakra UI'
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <HomeLayout>{children}</HomeLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
