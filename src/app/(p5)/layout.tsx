import type { ReactNode } from 'react'

import { Layout } from '@/components/client/routes/sketches/layout'
import { getSketchSlugs } from '@/utils/data/getSketchSlugs'

export interface SketchLayoutProps {
  children: ReactNode
}

const SketchLayout = async ({ children }: SketchLayoutProps) => {
  const list = await getSketchSlugs()

  return <Layout list={list}>{children}</Layout>
}

export default SketchLayout
