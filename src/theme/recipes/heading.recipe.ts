import { defineRecipe } from "@pandacss/dev";

export const heading = defineRecipe({
  className: "heading",
  description: "Styles for heading components",
  base: {
    fontFamily: "'DM Serif Text', serif",
    fontWeight: "bold",
    pb: 3,
  },
  variants: {
    size: {
      "4xl": {
        fontSize: { base: "6xl", lg: "7xl" },
        lineHeight: 1,
      },
      "3xl": {
        fontSize: { base: "5xl", lg: "6xl" },
        lineHeight: 1,
      },
      "2xl": {
        fontSize: { base: "4xl", lg: "5xl" },
        lineHeight: { base: 1.2, lg: 1 },
      },
      xl: {
        fontSize: { base: "3xl", lg: "4xl" },
        lineHeight: { base: 1.33, lg: 1.2 },
      },
      lg: {
        fontSize: { base: "2xl", lg: "3xl" },
        lineHeight: { base: 1.33, lg: 1.2 },
      },
      md: {
        fontSize: "xl",
        lineHeight: 1.2,
      },
      sm: {
        fontSize: "md",
        lineHeight: 1.2,
      },
      xs: {
        fontSize: "base",
        lineHeight: 1.2,
      },
    },
  },
  defaultVariants: {
    size: "xl",
  },
});
