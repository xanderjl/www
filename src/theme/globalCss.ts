import { defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  'html, body': {
    background: 'gray.50',
    a: {
      background:
        'linear-gradient(to top, var(--colors-red-100) 0% 50%, transparent 50% 100%)',
      _hover: {
        background:
          'linear-gradient(to top, var(--colors-red-200) 0% 50%, transparent 50% 100%)',
        textDecoration: 'none'
      }
    }
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Inter, sans-serif'
  }
})

export default globalCss
