import type P5 from "p5";

import type { ColorValue } from "./types";

export const createOverlay = (
  p5: P5,
  background: ColorValue = [255, 253, 252],
  margin: number = p5.width * 0.1,
): P5.Graphics => {
  const overlay = p5.createGraphics(p5.width, p5.height);
  overlay.background(background as unknown as P5.Color);
  overlay.erase();
  overlay.rect(margin, margin, p5.width - margin * 2, p5.height - margin * 2);
  overlay.noErase();

  return overlay;
};
