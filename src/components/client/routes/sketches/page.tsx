'use client'

import { Container, Heading } from '@chakra-ui/react'
import type { FC } from 'react'

import { Navbar } from '@/components/client/Navbar'
import { Search } from '@/components/client/Search'

export interface PageProps {
  list: string[]
}

export const Page: FC<PageProps> = ({ list }) => {
  return (
    <>
      <Navbar />
      <Container
        display='flex'
        flexDirection='column'
        maxW='container.md'
        gap={4}
        py={8}
      >
        <Heading as='h1' size='2xl' pb={4}>
          Search Sketches
        </Heading>
        <Search list={list} />
      </Container>
    </>
  )
}
