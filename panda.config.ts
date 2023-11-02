import { defineConfig } from "@pandacss/dev";

import { theme } from "@/theme";
import { globalCss } from "@/theme/globalCss";

export default defineConfig({
  clean: true,
  conditions: {
    dark: '[data-color-mode="dark"] &',
    light: '[data-color-mode="light"] &',
  },
  globalCss,
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro,md,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,astro,md,mdx}",
  ],
  jsxFramework: "solid",
  minify: true,
  outdir: "./src/styled-system",
  preflight: true,
  theme,
});
