'use client'

import type { Draw } from '@react-p5/core'
import { getDimensions } from '@react-p5/utils'

import { Sketch } from '@/components/client/Sketch'

const dimensions = getDimensions('A4')

const SketchIdea = () => {
  const draw: Draw = p5 => {
    p5.background(0)
    p5.fill(255, 0, 0)
    p5.rect(0, 0, 100, 100)
  }

  return <Sketch draw={draw} dimensions={dimensions} />
}

export default SketchIdea
