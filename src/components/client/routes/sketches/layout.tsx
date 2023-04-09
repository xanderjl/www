'use client'

import type { BoxProps } from '@chakra-ui/react'
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure
} from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

import { Search } from '@/components/client/Search'

export interface LayoutProps extends BoxProps {
  list: string[]
}

export const Layout: FC<LayoutProps> = ({ children, list }) => {
  const { back } = useRouter()
  const pathname = usePathname()
  const [isSketchRoute, setSketchRoute] = useState<boolean>(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // check if the current route is a sketches subroute
    const sketchRoute =
      pathname.includes('/sketches') && pathname !== '/sketches'
    setSketchRoute(sketchRoute)
  }, [pathname])

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
      {isSketchRoute && (
        <Flex position='absolute' top={8} left={8} gap={2}>
          <Button onClick={back}>Back</Button>
          <Button ref={btnRef} leftIcon={<BiSearch />} onClick={onOpen}>
            Sketches
          </Button>
        </Flex>
      )}
      {children}
    </>
  )
}
