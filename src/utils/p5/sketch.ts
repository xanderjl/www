import type { RENDERER } from "p5"
import P5 from "p5"
import svg from "p5.js-svg"
import type { SVG } from "p5.js-svg/dist/types"

import { getOs } from "../getOs"
import { keyPressed } from "./keyPressed"
import { setupDefaults } from "./setup"
import type {
  ColorValue,
  Draw,
  KeyPressed,
  Setup,
  WindowResized
} from "./types"
import { windowResizedDefaults } from "./windowResized"

interface SketchProps {
  draw?: Draw
  setup?: Setup
  suffix?: string
  windowResized?: WindowResized
  keyPressed?: KeyPressed
  dimensions: number[]
  padding?: number[]
  background?: ColorValue
  renderer?: RENDERER | SVG
  seed?: number
}

export const sketch = ({
  background,
  dimensions,
  draw,
  padding,
  setup,
  suffix,
  windowResized,
  renderer,
  seed
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
      if (seed) {
        p5.randomSeed(seed)
        p5.noiseSeed(seed)
      }

      setup && setup(p5)
    }

    p5.draw = () => {
      if (seed) {
        p5.randomSeed(seed)
        p5.noiseSeed(seed)
      }

      draw && draw(p5)
    }

    p5.windowResized = () => {
      windowResizedDefaults({
        p5,
        dimensions,
        padding,
        background
      })

      if (seed) {
        p5.randomSeed(seed)
        p5.noiseSeed(seed)
      }

      windowResized && windowResized(p5)
    }

    const date = new Date().toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
    const fileName = date + (suffix ? `-${suffix}` : "")

    p5.keyPressed = event => {
      const os = getOs()
      keyPressed({
        p5,
        event: event as KeyboardEvent,
        os,
        fileName,
        renderer,
        seed
      })
    }
  }

  const p5 = new P5(s, "container" as unknown as HTMLElement)

  if (typeof window !== "undefined") {
    window.p5 = p5
    svg(P5)
  }
}
