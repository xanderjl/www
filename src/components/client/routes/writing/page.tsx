'use client'

import { Container, Heading } from '@chakra-ui/react'
import type { FC } from 'react'

import { WritingSearch } from '../../WritingSearch'

export interface PageProps {
  list: string[]
}

export const Page: FC<PageProps> = ({ list }) => (
  <Container
    display='flex'
    flexDirection='column'
    maxW='container.md'
    gap={4}
    py={8}
  >
    <Heading as='h1' size='2xl' pb={4}>
      Search Writing
    </Heading>
    <WritingSearch list={list} />
  </Container>
)
