'use client'

import { SketchProps } from '@react-p5/sketch'
import dynamic from 'next/dynamic'
import { FC } from 'react'

const P5Sketch = dynamic(() => import('@react-p5/sketch'))

export const Sketch: FC<SketchProps> = props => <P5Sketch {...props} />
