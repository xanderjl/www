import type { Color } from 'p5'
import type P5 from 'p5'
import type { SVG } from 'p5.js-svg'

import type { ColorValue } from '@/utils/p5/types'

export interface KeyPressed {
  p5: P5
  event?: KeyboardEvent
  os: string
  fileName: string
  seed?: number
  width?: number
  dimensions?: number[]
  background?: ColorValue
  renderer?: P5.RENDERER | SVG
  noLoop?: boolean
}

export const keyPressed = ({
  p5,
  event,
  os,
  fileName,
  seed,
  width,
  dimensions,
  background,
  renderer,
  noLoop
}: KeyPressed) => {
  if (os === 'mac') {
    if (event?.key === 's' && event?.metaKey) {
      if (seed) {
        p5.randomSeed(seed)
        p5.noiseSeed(seed)
      }
      event?.preventDefault()
      const ratio =
        ((dimensions && dimensions[0]) ?? width ?? p5.width) / p5.width
      p5.pixelDensity(ratio)
      background && p5.background(background as unknown as Color)
      noLoop ? (p5.loop(), p5.noLoop()) : p5.draw()
      renderer == 'svg' ? p5.save(fileName) : p5.saveCanvas(fileName, 'png')
    }
  } else {
    if (event?.key === 's' && event?.ctrlKey) {
      if (seed) {
        p5.randomSeed(seed)
        p5.noiseSeed(seed)
      }
      event?.preventDefault()
      const ratio =
        ((dimensions && dimensions[0]) ?? width ?? p5.width) / p5.width
      p5.pixelDensity(ratio)
      background && p5.background(background as unknown as Color)
      noLoop ? (p5.loop(), p5.noLoop()) : p5.draw()
      renderer == 'svg' ? p5.save(fileName) : p5.saveCanvas(fileName, 'png')
    }
  }
}
