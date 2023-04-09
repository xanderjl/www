'use client'

import type { ColorValue, Draw } from '@react-p5/core'
import { getDimensions } from '@react-p5/utils'

import { Sketch } from '@/components/client/Sketch'

const Test = () => {
  const dimensions: number[] = getDimensions('A4')
  const padding: number[] = [40]
  const background: ColorValue = [255, 253, 252]

  const draw: Draw = p5 => {
    const { width, height } = p5

    p5.background(background)

    p5.noFill()
    p5.strokeWeight(1)
    p5.stroke(0)

    p5.beginShape()
    p5.vertex(0, 0)
    p5.vertex(width, 0)
    p5.vertex(width, height)
    p5.vertex(0, height)
    p5.endShape(p5.CLOSE)
  }

  return (
    <Sketch
      draw={draw}
      dimensions={dimensions}
      padding={padding}
      background={background}
    />
  )
}

export default Test
