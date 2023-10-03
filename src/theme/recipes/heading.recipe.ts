import { defineRecipe } from "@pandacss/dev";

export const heading = defineRecipe({
  base: {
    fontFamily: "heading",
    fontWeight: "bold",
    pb: 3,
  },
  className: "heading",
  defaultVariants: {
    size: "xl",
  },
  description: "Styles for heading components",
  variants: {
    size: {
      "2xl": {
        fontSize: { base: "4xl", lg: "5xl" },
        lineHeight: { base: 1.2, lg: 1 },
      },
      "3xl": {
        fontSize: { base: "5xl", lg: "6xl" },
        lineHeight: 1,
      },
      "4xl": {
        fontSize: { base: "6xl", lg: "7xl" },
        lineHeight: 1,
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
      xl: {
        fontSize: { base: "3xl", lg: "4xl" },
        lineHeight: { base: 1.33, lg: 1.2 },
      },
      xs: {
        fontSize: "base",
        lineHeight: 1.2,
      },
    },
  },
});
