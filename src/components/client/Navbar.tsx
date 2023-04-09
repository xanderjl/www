'use client'

import { Link } from '@chakra-ui/next-js'
import type { FlexProps } from '@chakra-ui/react'
import { Container, Flex } from '@chakra-ui/react'
import type { FC } from 'react'

import { routes } from '@/routes'

export const Navbar: FC<FlexProps> = () => {
  return (
    <Flex py={4} boxShadow='md'>
      <Container
        as='nav'
        maxW='container.lg'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Flex gap={4} alignItems='center'>
          <Link href='/' fontWeight='bold'>
            Home
          </Link>
        </Flex>
        <Flex gap={4} alignItems='center'>
          {routes.map(({ path, title }) => (
            <Link key={path} href={path}>
              {title}
            </Link>
          ))}
        </Flex>
      </Container>
    </Flex>
  )
}
