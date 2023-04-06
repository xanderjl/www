'use client'

import { NextPage } from 'next'

import { Draw } from '@react-p5/core'
import { Sketch } from '@/components/client/Sketch'

const Page: NextPage = () => {
  const draw: Draw = p5 => {
    p5.background(0)
    p5.fill(255, 0, 0)
    p5.rect(0, 0, 100, 100)
  }
  return <Sketch draw={draw} dimensions={[400, 800]} />
}

export default Page
