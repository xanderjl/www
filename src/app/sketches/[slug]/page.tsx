// import { getSketch } from '@/utils/data/getSketch'
import type { SketchProps } from '@react-p5/sketch'
import dynamic from 'next/dynamic'

import { getSketchSlugs } from '@/utils/data/getSketchSlugs'

export interface PageProps {
  params: {
    slug: string
  }
}

export const generateStaticParams = async () => {
  const slugs = await getSketchSlugs()

  return slugs.map(slug => ({ params: { slug } }))
}

const SketchPage = async ({ params: { slug } }: PageProps) => {
  // this doesn't work
  // const Sketch = dynamic<SketchProps>(
  //   () => import(`@components/client/sketches/${slug}`.toString())
  // )

  // hard-coded string works
  const Sketch = dynamic<SketchProps>(
    () => import('@/components/client/sketches/sketch')
  )

  return <Sketch />
}

export default SketchPage
