'use client'

import type { Draw } from '@react-p5/core'

import { Sketch } from '@/components/client/Sketch'

const dimensions = [800, 600]

const SketchIdea = () => {
  const draw: Draw = p5 => {
    p5.background(0)
    p5.fill(255, 0, 0)
    p5.rect(0, 0, 100, 100)
  }

  return <Sketch draw={draw} dimensions={dimensions} />
}

export default SketchIdea
