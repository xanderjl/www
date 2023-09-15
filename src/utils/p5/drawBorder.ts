import type p5 from 'p5'

export const drawBorder = (p5: p5, margin: number) => {
  const x = margin
  const y = margin
  const w = p5.width - margin * 2
  const h = p5.height - margin * 2

  p5.push()
  p5.noFill()
  p5.rect(x, y, w, h)
  p5.pop()
}
