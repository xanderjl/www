'use client'

import type { ColorValue, Draw, P5, Setup, WindowResized } from '@react-p5/core'
import { convertSeed, getDimensions } from '@react-p5/utils'
import { useState } from 'react'

import { Sketch } from '@/components/client/Sketch'

const poem: string[] = [
  `We went to the coffee shop, where`,
  `I walked up and introduced myself, I was afraid that he might run away`,
  `It made me weirdly sad to imagine`,
  `like-minded oddballs and`,
  `capacities for empathy and warmth`,
  `pinpoints in a greater darkness,`,
  `tells this metaphysical love story`,
  `desired by a ghost, who inhabits`,
  `a house in rural upstate New York, with a`,
  `human skeleton on a shelf in the basement.`,
  `took a break to watch a movie together.`,
  `Time moves whether we want it to or not.`,
  `The moon lit up the mountains as I drove to the valley below.`,
  `Big Husband.`,
  `"He's sleepy`,
  `But I want to see him.`,
  `"I hope that I was able to help you`
]

type Coordinates = [number, number, string]

const initialCoordinates = (
  p5: P5,
  poem: string[],
  margin: number
): Coordinates[] =>
  poem.map((string, i) => [
    p5.map(
      p5.noise(string.length * i, p5.width - margin),
      0,
      1,
      margin,
      p5.width - margin
    ),
    p5.map(
      p5.noise(string.length * i, p5.height - margin * 2),
      0,
      1,
      margin,
      p5.height - margin
    ),
    string
  ])

const shape = (p5: P5, x: number, y: number, sMod = 1) => {
  const array = Array.from({ length: sMod })
  array.forEach((_, i) => {
    // const w = i * sMod * 0.1
    const xPos = x + i * 10
    const yPos = y + i * 10
    const w = p5.map(p5.noise(x * i, y * i), 0, 1, 10, 100)
    const h = i * sMod * 0.1
    p5.rect(xPos, yPos, w, h)
  })

  p5.rect(x, y, p5.random(10) * sMod, p5.random(10) * sMod)
}

const Rachelle = () => {
  const dimensions: number[] = getDimensions('A4')
  const padding: number[] = [40]
  const background: ColorValue = [255, 253, 252]

  const poemString = poem.join()
  const marginRatio = 0.05
  const seed = convertSeed(poemString)
  const [coordinates, setCoordinates] = useState<Coordinates[] | null>(null)
  const [margin, setMargin] = useState<number>(0)

  const setup: Setup = p5 => {
    const margin = p5.width * marginRatio

    // initialize state
    setMargin(margin)
    setCoordinates(initialCoordinates(p5, poem, margin))
  }

  const draw: Draw = p5 => {
    p5.noLoop()

    p5.background(background)
    p5.noFill()

    // mark starting coordinates
    coordinates?.forEach(([x, y, s]) => {
      const sMod = Math.ceil(p5.width / s.length)

      shape(p5, x, y, sMod)
    })

    // apply border
    p5.rect(margin, margin, p5.width - margin * 2, p5.height - margin * 2)
  }

  const windowResized: WindowResized = p5 => {
    const margin = p5.width * marginRatio

    // update state
    setMargin(margin)
    setCoordinates(initialCoordinates(p5, poem, margin))
  }

  return (
    <Sketch
      seed={seed}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      dimensions={dimensions}
      padding={padding}
      background={background}
      renderSVG
    />
  )
}

export default Rachelle
