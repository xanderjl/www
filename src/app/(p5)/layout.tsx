import type { ReactNode } from 'react'

import { Layout } from '@/components/client/routes/sketches/layout'
import { getDirSlugs } from '@/utils/data/getDirSlugs'

export interface SketchLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: {
    default: 'Sketches',
    template: 'Xandy Dandy | %s'
  },
  description: 'A starter template for Next.js with Chakra UI'
}

const SketchLayout = async ({ children }: SketchLayoutProps) => {
  const list = await getDirSlugs('./src/app/(p5)/sketches')

  return <Layout list={list}>{children}</Layout>
}

export default SketchLayout
