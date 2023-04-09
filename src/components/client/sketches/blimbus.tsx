'use client'

import type { ColorValue, Draw } from '@react-p5/core'
import { getDimensions } from '@react-p5/utils'

import { Sketch } from '@/components/client/Sketch'

const Blimbus = () => {
  const dimensions: number[] = getDimensions('A4')
  const padding: number[] = [40]
  const background: ColorValue = [255, 253, 252]

  const draw: Draw = p5 => {
    p5.background(background)
    p5.rect(0, 0, 100, 100)
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

export default Blimbus
