import type { RENDERER } from 'p5'
import P5 from 'p5'
import svg from 'p5.js-svg'
import type { SVG } from 'p5.js-svg/dist/types'

import { setupDefaults } from './setup'
import type { ColorValue, Draw, Setup, WindowResized } from './types'
import { windowResizedDefaults } from './windowResized'

interface SketchProps {
  draw?: Draw
  setup?: Setup
  windowResized?: WindowResized
  dimensions: number[]
  padding?: number[]
  background?: ColorValue
  renderer?: RENDERER | SVG
}

export const sketch = ({
  background,
  dimensions,
  draw,
  padding,
  setup,
  windowResized,
  renderer
}: SketchProps) => {
  const s = (p5: P5) => {
    p5.setup = () => {
      setupDefaults({
        p5,
        dimensions,
        padding,
        background,
        renderer
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

  const p5 = new P5(s, 'container' as unknown as HTMLElement)

  if (typeof window !== 'undefined') {
    window.p5 = p5
    svg(P5)
  }

}
