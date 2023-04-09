'use client'

import type { ContainerProps } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import type { FC } from 'react'

import { Navbar } from '@/components/client/Navbar'

export const Layout: FC<ContainerProps> = ({ children }) => (
  <>
    <Navbar />
    <Container maxW='container.lg' py={8}>
      {children}
    </Container>
  </>
)
