'use client'

import { Link } from '@chakra-ui/next-js'
import type { FlexProps } from '@chakra-ui/react'
import { Button, Container, Flex, forwardRef } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

import { routes } from '@/routes'

export interface NavbarProps extends FlexProps {
  onOpen: () => void
}

export const Navbar = forwardRef<NavbarProps, 'button'>(({ onOpen }, ref) => {
  const pathname = usePathname()
  const [isSketchRoute, setSketchRoute] = useState<boolean>(false)

  useEffect(() => {
    // check if the current route is a sketches subroute
    const sketchRoute =
      pathname.includes('/sketches') && pathname !== '/sketches'
    setSketchRoute(sketchRoute)
  }, [pathname])

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
          {isSketchRoute && (
            <Button
              ref={ref}
              size='sm'
              leftIcon={<BiSearch />}
              onClick={onOpen}
            >
              Search
            </Button>
          )}
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
})
