import { defineConfig } from '@pandacss/dev'

import globalCss from '@/theme/globalCss'
import { heading } from '@/theme/recipes'
import textStyles from '@/theme/textStyles'
import tokens from '@/theme/tokens'

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{ts,tsx,js,jsx,astro,md,mdx}',
    './pages/**/*.{ts,tsx,js,jsx,astro,md,mdx}'
  ],
  exclude: [],
  outdir: 'styled-system',
  globalCss,
  theme: {
    extend: {
      textStyles,
      recipes: {
        heading
      },
      tokens
    }
  }
})
