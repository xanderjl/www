'use client'

import type { Draw } from '@react-p5/core'
import type { SketchProps } from '@react-p5/sketch'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Sketch = dynamic<SketchProps>(() => import('@react-p5/sketch'), {
  ssr: false
})

const Page: NextPage = () => {
  const draw: Draw = p5 => {
    p5.background(0)
    p5.fill(255, 0, 0)
    p5.rect(0, 0, 100, 100)
  }
  return <Sketch draw={draw} dimensions={[400, 800]} />
}

export default Page
