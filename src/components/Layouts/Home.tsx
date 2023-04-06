'use client'

import { Container, ContainerProps } from '@chakra-ui/react'
import { FC } from 'react'

export const HomeLayout: FC<ContainerProps> = ({ children }) => {
  return <Container maxW='container.lg'>{children}</Container>
}
