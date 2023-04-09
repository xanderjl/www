---
to: src/app/(p5)/sketches/<%= name %>/page.tsx
---
'use client'

import type { ColorValue, Draw } from '@react-p5/core'

import { Sketch } from '@/components/client/Sketch'

const <%= h.changeCase.pascal(name) %> = () => {
  const background: ColorValue = [255, 253, 252]

  const draw: Draw = p5 => {}

  return (
    <Sketch
      draw={draw}
      background={background}
    />
  )
}

export default <%= h.changeCase.pascal(name) %>