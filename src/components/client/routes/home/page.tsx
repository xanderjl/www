'use client'

import { Link } from '@chakra-ui/next-js'
import { Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { OpenNewWindow } from 'iconoir-react'
import type { FC } from 'react'

export const Page: FC = () => (
  <>
    <Flex
      flex={1}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Heading pb={2}>Hi there!</Heading>
      <Text maxW='52ch' textAlign='center'>
        I&rsquo;m Xan. A <Link href='/sketches'>generative artist</Link>,{' '}
        <Link
          href='https://strange.love/#team'
          display='inline-flex'
          alignItems='center'
        >
          frontend developer
          <Icon as={OpenNewWindow} />
        </Link>
        , and <Link href='/open-source'>OSS maintainer.</Link>
      </Text>
    </Flex>
    <Flex flex={1} />
  </>
)
