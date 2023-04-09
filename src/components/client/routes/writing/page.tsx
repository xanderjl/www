'use client'

import { Flex, Heading } from '@chakra-ui/react'
import type { FC } from 'react'

import { WritingSearch } from '@/components/client/WritingSearch'

export interface PageProps {
  list: string[]
}

export const Page: FC<PageProps> = ({ list }) => (
  <Flex direction='column' gap={4}>
    <Heading as='h1' size='2xl' pb={4}>
      Search Writing
    </Heading>
    <WritingSearch list={list} />
  </Flex>
)
