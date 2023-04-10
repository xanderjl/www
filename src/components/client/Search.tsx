'use client'

import { Link } from '@chakra-ui/next-js'
import type { FlexProps } from '@chakra-ui/react'
import { Flex, Input, ListItem, UnorderedList } from '@chakra-ui/react'
import { headerCase } from 'change-case'
import Fuse from 'fuse.js'
import type { FC } from 'react'
import { useState } from 'react'

export interface SearchProps extends FlexProps {
  list: string[]
  path: string
}

export const Search: FC<SearchProps> = ({ list, path, ...rest }) => {
  const fuse = new Fuse(list)
  const [searchArray, setSearchArray] = useState<
    Fuse.FuseResult<string>[] | undefined
  >(undefined)

  return (
    <Flex direction='column' gap={2} {...rest}>
      <Input
        type='text'
        placeholder='Search'
        onChange={e => {
          const arr = fuse.search(e.currentTarget.value)
          setSearchArray(arr)
        }}
      />
      <UnorderedList
        display='flex'
        flexDirection='column'
        gap={1}
        m={0}
        listStyleType='none'
        listStylePosition='outside'
      >
        {searchArray && searchArray.length > 0
          ? searchArray?.map(({ item }) => (
              <ListItem key={item}>
                <Link href={`${path}${item}`}>
                  {headerCase(item).replaceAll('-', ' ')}
                </Link>
              </ListItem>
            ))
          : list.map(item => (
              <ListItem key={item}>
                <Link href={`${path}${item}`}>
                  {headerCase(item).replaceAll('-', ' ')}
                </Link>
              </ListItem>
            ))}
      </UnorderedList>
    </Flex>
  )
}
