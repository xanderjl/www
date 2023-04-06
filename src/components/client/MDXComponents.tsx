'use client'

import type { HeadingProps, TextProps } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react'
import type { FC } from 'react'

export const H1: FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading as='h1' size='2xl' {...rest}>
    {children}
  </Heading>
)

export const H2: FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading as='h2' size='xl' {...rest}>
    {children}
  </Heading>
)

export const H3: FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading as='h3' size='lg' {...rest}>
    {children}
  </Heading>
)

export const H4: FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading as='h4' size='md' {...rest}>
    {children}
  </Heading>
)

export const H5: FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading as='h5' size='sm' {...rest}>
    {children}
  </Heading>
)

export const H6: FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading as='h6' size='xs' {...rest}>
    {children}
  </Heading>
)

export const P: FC<TextProps> = ({ children, ...rest }) => (
  <Text {...rest}>{children}</Text>
)

// TODO: complete mdx components
