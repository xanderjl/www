import type { FC, ReactNode } from 'react'

import { Layout } from '@/components/client/routes/writing/layout'

export interface MainSiteLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: {
    default: 'Writing',
    template: 'Xandy Dandy | %s'
  },
  description: 'A starter template for Next.js with Chakra UI'
}

const WritingLayout: FC<MainSiteLayoutProps> = ({ children }) => (
  <Layout>{children}</Layout>
)

export default WritingLayout
