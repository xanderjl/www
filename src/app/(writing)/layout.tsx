import type { FC, ReactNode } from 'react'

import { Layout } from '@/components/client/routes/writing/layout'

export interface MainSiteLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Writing'
}

const WritingLayout: FC<MainSiteLayoutProps> = ({ children }) => (
  <Layout>{children}</Layout>
)

export default WritingLayout
