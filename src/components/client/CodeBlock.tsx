'use client'

import { Box } from '@chakra-ui/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import type { FC } from 'react'

export interface CodeBlockProps {
  children: string
}

export const CodeBlock: FC<CodeBlockProps> = ({ children }) => {
  return (
    <Highlight {...defaultProps} code={children} language='jsx' theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as='pre'
          className={className}
          style={style}
          px={4}
          pt={4}
          pb={8}
          mb={4}
          borderRadius={8}
          overflowX='scroll'
          fontSize={{ base: 'xs', sm: 'sm' }}
        >
          {tokens.map((line, i) => {
            const { key, ...rest } = getLineProps({ line, key: i })
            return (
              <Box key={key} {...rest}>
                {line.map((token, key) => {
                  const { key: tokenKey, ...rest } = getTokenProps({
                    token,
                    key
                  })
                  return <Box as='span' key={tokenKey} {...rest} />
                })}
              </Box>
            )
          })}
        </Box>
      )}
    </Highlight>
  )
}
