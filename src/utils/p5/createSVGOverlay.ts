import type P5 from "p5";

import type { ColorValue } from ".";

export const createSVGOverlay = (
  p5: P5,
  margin: number,
  background: ColorValue,
) => {
  p5.push();
  p5.fill(background as unknown as P5.Color);
  p5.stroke(background as unknown as P5.Color);
  p5.rect(-margin, -margin, margin * 2, p5.height);
  p5.rect(-margin, -margin, p5.width, margin * 2);
  p5.rect(0, p5.height - margin, p5.width, margin * 2);
  p5.rect(p5.width - margin, 0, margin * 2, p5.height);
  p5.pop();
};
