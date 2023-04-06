'use client'

import { Navbar } from '@/components/client/Navbar'
import { Container, ContainerProps } from '@chakra-ui/react'
import { FC } from 'react'

export const Layout: FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW='container.lg'>{children}</Container>
    </>
  )
}
