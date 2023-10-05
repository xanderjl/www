import type { ExtendableTheme } from "@pandacss/types/dist/theme";

import { keyframes } from "./keyframes";
import { recipes } from "./recipes";
import { textStyles } from "./textStyles";
import { tokens } from "./tokens";

export const theme: ExtendableTheme = {
  extend: {
    keyframes,
    recipes,
    textStyles,
    tokens,
  },
};
