export const hatchRect = (
  p5: P5,
  x: number,
  y: number,
  w: number,
  h: number = w,
  density: number = 10,
  margin: number,
) => {
  const x1 =
    x - w * 0.5 > p5.width - margin
      ? p5.width - margin
      : x - w * 0.5 < margin
      ? margin
      : x - w * 0.5;
  const x2 =
    x + w * 0.5 > p5.width - margin
      ? p5.width - margin
      : x + w * 0.5 < margin
      ? margin
      : x + w * 0.5;
  const y1 =
    y - h * 0.5 > p5.height - margin
      ? p5.height - margin
      : y - h * 0.5 < margin
      ? margin
      : y - h * 0.5;
  const y2 =
    y + h * 0.5 > p5.height - margin
      ? p5.height - margin
      : y + h * 0.5 < margin
      ? margin
      : y + h * 0.5;
  const mw = x2 - x1;
  const mh = y2 - y1;

  Array.from({ length: density }, (_, i) => {
    const offset = p5.map(i, 0, density, 0, mw);
    const offset2 = p5.map(i, 0, density, 0, mh);

    p5.line(x1, y2 - offset2, x1 + offset, y2);
    p5.line(x1 + offset, y1, x2, y2 - offset2);
    p5.line(x2, y2 - offset2, x2 - offset, y2);
    p5.line(x2 - offset, y1, x1, y2 - offset2);
  });
};
