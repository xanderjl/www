import type { ThemeComponents } from '@chakra-ui/react'

export const components: ThemeComponents = {
  Input: {
    defaultProps: {
      focusBorderColor: 'red.200'
    }
  },
  Link: {
    baseStyle: {
      bgGradient: 'linear(to-t, red.100 0% 50%, transparent 50% 100%)',
      color: 'black',
      _hover: {
        bgGradient: 'linear(to-t, red.200 0% 50%, transparent 50% 100%)',
        textDecoration: 'none'
      }
    }
  }
}
