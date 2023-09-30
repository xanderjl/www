import { defineConfig } from "@pandacss/dev";

import { globalCss } from "./src/theme/globalCss";
import { heading } from "./src/theme/recipes/heading.recipe";
import { textStyles } from "./src/theme/textStyles";

export default defineConfig({
  preflight: true,
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro,md,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,astro,md,mdx}",
  ],
  exclude: [],
  outdir: "./src/styled-system",
  globalCss,
  theme: {
    extend: {
      textStyles,
      recipes: {
        heading,
      },
    },
  },
  clean: true,
  minify: true,
});
