'use client'

import type { ContainerProps } from '@chakra-ui/react'
import {
  Container,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from '@chakra-ui/react'
import type { FC } from 'react'
import { useRef } from 'react'

import { Navbar } from '@/components/client/Navbar'
import { Search } from '@/components/client/Search'

export interface LayoutProps extends ContainerProps {
  list: string[]
}

export const Layout: FC<LayoutProps> = ({ children, list }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent display='flex' flexDirection='column' gap={2} px={4}>
          <DrawerCloseButton />
          <DrawerHeader>Search Sketches</DrawerHeader>
          <Search list={list} />
        </DrawerContent>
      </Drawer>
      <Navbar ref={btnRef} onOpen={onOpen} />
      <Container maxW='container.lg'>{children}</Container>
    </>
  )
}
