import { extendTheme } from '@chakra-ui/react'

import { components } from './components'
import { shadows } from './shadows'
import { fonts } from './typography'

export const theme = extendTheme({ fonts, shadows, components })
