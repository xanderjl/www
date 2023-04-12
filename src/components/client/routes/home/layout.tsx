'use client'

import type { ContainerProps } from '@chakra-ui/react'
import { Container, Flex } from '@chakra-ui/react'
import type { FC } from 'react'

import { Navbar } from '@/components/client/Navbar'

export const Layout: FC<ContainerProps> = ({ children }) => (
  <Flex flexDirection='column' minH='100vh' w='100%'>
    <Navbar />
    <Container as='main' flex={1} maxW='container.lg' py={8}>
      {children}
    </Container>
  </Flex>
)
