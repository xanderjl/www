import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  "fade-in": {
    "0%": {
      opacity: 0,
      transform: "translateX(-10px)",
    },
    "100%": { opacity: 1 },
  },
});
