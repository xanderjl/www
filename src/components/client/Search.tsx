'use client'

import { Link } from '@chakra-ui/next-js'
import type { FlexProps } from '@chakra-ui/react'
import { Flex, Input } from '@chakra-ui/react'
import Fuse from 'fuse.js'
import type { FC } from 'react'
import { useState } from 'react'

export interface SearchProps<T> extends FlexProps {
  list: T[]
}

export const Search: FC<SearchProps<string>> = ({ list, ...rest }) => {
  const fuse = new Fuse(list)
  const [searchArray, setSearchArray] = useState<
    Fuse.FuseResult<string>[] | undefined
  >(undefined)

  return (
    <Flex direction='column' {...rest}>
      <Input
        type='text'
        placeholder='Search'
        onChange={e => {
          const arr = fuse.search(e.currentTarget.value)
          setSearchArray(arr)
        }}
      />
      {searchArray && searchArray.length > 0
        ? searchArray?.map(({ item }) => (
            <Link key={item} href={`/sketches/${item}`}>
              {item}
            </Link>
          ))
        : list.map(item => (
            <Link key={item} href={`/sketches/${item}`}>
              {item}
            </Link>
          ))}
    </Flex>
  )
}
