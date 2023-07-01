import { defineConfig } from '@pandacss/dev';
import textStyles from '@/styles/textStyles';
import globalCss from '@/styles/globalCss';
import { heading } from '@/styles/heading.recipe';

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{ts,tsx,js,jsx,astro,md,mdx}',
    './pages/**/*.{ts,tsx,js,jsx,astro,md,mdx}',
  ],
  exclude: [],
  outdir: 'styled-system',
  globalCss,
  theme: {
    extend: {
      textStyles,
      recipes: {
        heading,
      },
    },
  },
});
