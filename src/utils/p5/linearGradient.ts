import type P5 from 'p5'

import type { ColorValue } from './types'

export const linearGradient = (
  p5: P5,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  c1: ColorValue,
  c2: ColorValue
) => {
  const ctx = p5.drawingContext as CanvasRenderingContext2D
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
  gradient.addColorStop(0, p5.color(c1 as unknown as P5.Color).toString())
  gradient.addColorStop(1, p5.color(c2 as unknown as P5.Color).toString())

  ctx.fillStyle = gradient
}
