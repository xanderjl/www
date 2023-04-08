'use client'

import type { SketchProps } from '@react-p5/sketch'
import dynamic from 'next/dynamic'
import type { FC } from 'react'

const P5Sketch = dynamic<SketchProps>(() => import('@react-p5/sketch'), {
  ssr: false
})

export const Sketch: FC<SketchProps> = props => <P5Sketch {...props} />
