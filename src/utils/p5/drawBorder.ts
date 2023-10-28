import type p5 from "p5";

export const drawBorder = (p5: p5, margin: number) => {
  const bx1 = margin;
  const bx2 = p5.width - margin;
  const by1 = margin;
  const by2 = p5.height - margin;

  p5.push();
  p5.noFill();
  // TOP
  p5.line(bx1, by1, bx2, by1);
  // RIGHT
  p5.line(bx2, by1, bx2, by2);
  // BOTTOM
  p5.line(bx2, by2, bx1, by2);
  // LEFT
  p5.line(bx1, by2, bx1, by1);
  p5.pop();
};
