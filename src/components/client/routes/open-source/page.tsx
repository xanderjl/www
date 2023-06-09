'use client'

import { Flex, Heading } from '@chakra-ui/react'
import type { FC } from 'react'

import { OSSCard } from '../../OSSCard'

export interface OSS {
  name: string
  description?: string
  href: URL | string
}

const OSSPojects: OSS[] = [
  {
    name: '@react-p5/core',
    description: 'A React wrapper for p5.js',
    href: 'https://github.com/react-p5/react-p5/tree/main/packages/core'
  },
  {
    name: '@react-p5/sketch',
    description:
      "A companion library for @react-p5/core that provides an experience akin to Matt Deslaurier's canvas-sketch",
    href: 'https://github.com/react-p5/react-p5/tree/main/packages/sketch'
  },
  {
    name: '@react-p5/utils',
    description:
      'A series of helper functions to abstract away p5.js boilerplate and complicated math.',
    href: 'https://github.com/react-p5/react-p5/tree/main/packages/utils'
  }
]

export const Page: FC = () => (
  <>
    <Heading pb={4}>Open Source Projects</Heading>
    <Flex gap={4} flexWrap='wrap'>
      {OSSPojects.map((project, i) => (
        <OSSCard key={i} {...project} />
      ))}
    </Flex>
  </>
)
