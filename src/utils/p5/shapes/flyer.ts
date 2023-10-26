import type P5 from "p5";

import { createGrid } from "@/utils/p5/createGrid";

export const flyer = (
  p5: P5,
  val: number,
  cx: number,
  cy: number,
  w: number,
) => {
  let fillCount = 0;
  const grid = createGrid(3);

  p5.push();
  p5.rectMode("center");
  grid.forEach(([u, v]) => {
    const x = p5.lerp(cx - w, cx + w, u);
    const y = p5.lerp(cy - w, cy + w, v);
    const flipped = p5.noise(val) > 0.15;
    const threshold = p5.random(1) > 0.75 ? 3 : p5.random(1) < 0.25 ? 4 : 5;

    if (flipped && fillCount < threshold) {
      p5.fill(0);
      p5.stroke(0);
      p5.rect(x, y, w);
      fillCount++;

      return;
    }
  });
  p5.pop();
};
