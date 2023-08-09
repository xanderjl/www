import type P5 from 'p5'

import { setupDefaults } from './setup'
import type { ColorValue, Draw, Setup, WindowResized } from './types'
import { windowResizedDefaults } from './windowResized'

interface SketchProps {
  p5: P5
  draw?: Draw
  setup?: Setup
  windowResized?: WindowResized
  dimensions: number[]
  padding?: number[]
  background?: ColorValue
}

export const sketch = ({
  background,
  dimensions,
  draw,
  p5,
  padding,
  setup,
  windowResized
}: SketchProps) => {
  const s = () => {
    p5.setup = () => {
      setupDefaults({
        p5,
        dimensions,
        padding,
        background
      })

      setup && setup(p5)
    }

    p5.draw = () => draw && draw(p5)

    p5.windowResized = () => {
      windowResizedDefaults({
        p5,
        dimensions,
        padding,
        background
      })

      windowResized && windowResized(p5)
    }
  }

  new p5(s, 'container' as unknown as HTMLElement)
}
