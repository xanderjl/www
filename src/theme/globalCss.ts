import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  // style for dat.gui select
  ".dg .c select": {
    color: "black",
  },
  "html, body": {
    _dark: {
      a: {
        _hover: {
          background:
            "linear-gradient(to top, var(--colors-red-700) 0% 50%, transparent 50% 100%)",
          textDecoration: "none",
        },
        background:
          "linear-gradient(to top, var(--colors-red-800) 0% 50%, transparent 50% 100%)",
        color: "gray.200",
      },
      background: "gray.900",
      color: "gray.400",
    },
    _light: {
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
    },
    transition: "background 300ms ease",
  },
});
