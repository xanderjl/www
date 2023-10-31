import type P5 from "p5";

export const createGrain = (p5: P5, opacity = 10) => {
  const grain = p5.createGraphics(p5.width, p5.height);
  grain.loadPixels();
  Array.from({ length: p5.width }, (_, i) => {
    Array.from({ length: p5.height }, (_, j) => {
      grain.set(i, j, p5.color(p5.random(255), opacity));
    });
  });
  grain.updatePixels();

  p5.image(grain, 0, 0, p5.width, p5.height);
};
