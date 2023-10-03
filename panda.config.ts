import { defineConfig } from "@pandacss/dev";

import { globalCss } from "@/theme/globalCss";
import { heading } from "@/theme/recipes";
import { textStyles } from "@/theme/textStyles";
import { tokens } from "@/theme/tokens";

export default defineConfig({
  clean: true,
  exclude: [],
  globalCss,
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro,md,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,astro,md,mdx}",
  ],
  minify: true,
  outdir: "./src/styled-system",
  preflight: true,
  theme: {
    extend: {
      recipes: {
        heading,
      },
      textStyles,
      tokens,
    },
  },
});
