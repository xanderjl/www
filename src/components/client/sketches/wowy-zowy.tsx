'use client'

import type { ColorValue, Draw } from '@react-p5/core'

import { Sketch } from '@/components/client/Sketch'

const WowyZowy = () => {
  const background: ColorValue = [255, 253, 252]

  const draw: Draw = p5 => {
    p5.fill(0)
    p5.circle(0, 0, 100)
  }

  return <Sketch draw={draw} background={background} />
}

export default WowyZowy
