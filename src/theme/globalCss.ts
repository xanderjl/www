import { defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    background: "gray.50",
    a: {
      background:
        "linear-gradient(to top, var(--colors-red-100) 0% 50%, transparent 50% 100%)",
      _hover: {
        background:
          "linear-gradient(to top, var(--colors-red-200) 0% 50%, transparent 50% 100%)",
        textDecoration: "none",
      },
    },
  },
});

export default globalCss;
