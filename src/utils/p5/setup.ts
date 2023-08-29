import type P5 from 'p5'
import type { SVG } from 'p5.js-svg'

import type { ColorValue } from './types'

export interface Setup {
  p5: P5
  padding?: number[]
  width?: number
  height?: number
  dimensions?: number[]
  renderer?: P5.RENDERER | SVG
  background?: ColorValue
  pixelDensity?: number
  seed?: number
}

export const setupDefaults = ({
  p5,
  width,
  height,
  dimensions,
  padding,
  background,
  renderer = 'p2d',
  pixelDensity,
  seed
}: Setup): void => {
  const usedWidth = dimensions ? dimensions[0] : width ? width : p5.windowWidth
  const usedHeight = dimensions
    ? dimensions[1]
    : height
    ? height
    : p5.windowHeight
  const aspectRatio = usedWidth / usedHeight
  const windowRatio = p5.windowWidth / p5.windowHeight
  const paddingWidth = padding && padding.length > 0 ? padding[0] * 2 : 0
  const paddingHeight =
    padding && padding.length === 2
      ? padding[1] * 2
      : padding && padding.length === 1
      ? padding[0] * 2
      : 0
  const maxWidth = Math.round(p5.windowWidth - paddingWidth)
  const maxHeight = Math.round(p5.windowHeight - paddingHeight)

  if (seed) {
    p5.randomSeed(seed)
    p5.noiseSeed(seed)
  }

  if (usedWidth > p5.windowWidth || usedHeight > p5.windowHeight) {
    if (aspectRatio > windowRatio) {
      const newHeight = Math.round(maxWidth / aspectRatio)
      p5.createCanvas(
        maxWidth,
        newHeight,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        renderer
      )
    } else {
      const newWidth = Math.round(maxHeight * aspectRatio)
      p5.createCanvas(
        newWidth,
        maxHeight,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        renderer
      )
    }
  } else {
    p5.createCanvas(
      usedWidth,
      usedHeight,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      renderer
    )
  }

  pixelDensity && p5.pixelDensity(pixelDensity)
  background && p5.background(background as unknown as P5.Color)
}
