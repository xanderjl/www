import type { FC, ReactNode } from 'react'

import { Layout } from '@/components/client/routes/home/layout'

export interface MainSiteLayoutProps {
  children: ReactNode
}

const MainSiteLayout: FC<MainSiteLayoutProps> = ({ children }) => (
  <Layout>{children}</Layout>
)

export default MainSiteLayout
