import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "html, body": {
    a: {
      _hover: {
        background:
          "linear-gradient(to top, var(--colors-red-200) 0% 50%, transparent 50% 100%)",
        textDecoration: "none",
      },
      background:
        "linear-gradient(to top, var(--colors-red-100) 0% 50%, transparent 50% 100%)",
    },
    background: "gray.50",
    color: "gray.900",
    transition: "background 300ms ease",
  },
});
