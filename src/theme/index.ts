import { extendTheme } from '@chakra-ui/react'

import { components } from './components'
import { shadows } from './shadows'
import { styles } from './styles'
import { fonts } from './typography'

export const theme = extendTheme({ fonts, shadows, styles, components })
