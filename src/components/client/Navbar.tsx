'use client'

import { Link } from '@chakra-ui/next-js'
import type { FlexProps } from '@chakra-ui/react'
import { Button, Container, Flex, useDisclosure } from '@chakra-ui/react'
import { Cancel, Menu } from 'iconoir-react'
import type { FC } from 'react'

import { routes } from '@/routes'

const filteredRoutes = routes.filter(({ path }) => path !== '/')

export const Navbar: FC<FlexProps> = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Flex
        py={4}
        height='auto'
        boxShadow='md'
        zIndex='sticky'
        direction='column'
        transition='height 2s ease-in-out'
      >
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
          <Flex
            display={{ base: 'none', sm: 'flex' }}
            gap={4}
            alignItems='center'
          >
            {filteredRoutes.map(({ path, title }) => (
              <Link key={path} href={path}>
                {title}
              </Link>
            ))}
          </Flex>
          <Button
            as={isOpen ? Cancel : Menu}
            display={{ base: 'block', sm: 'none' }}
            variant='unstyled'
            boxSize={6}
            onClick={onToggle}
          />
        </Container>
        <Container
          display={{ base: isOpen ? 'flex' : 'none', sm: 'none' }}
          pt={4}
          flexDirection='column'
        >
          {filteredRoutes.map(({ path, title }) => (
            <Link key={path} href={path}>
              {title}
            </Link>
          ))}
        </Container>
      </Flex>
    </>
  )
}
