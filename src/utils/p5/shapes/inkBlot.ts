import type P5 from "p5";

export type InkBlot = (
  p5: P5,
  x: number,
  y: number,
  r: number,
  resolution?: number,
  fill?: P5.Color,
) => {
  show: () => void;
  marble: (other: ReturnType<InkBlot>) => void;
  center: P5.Vector;
  r: number;
  fill?: P5.Color;
};

export const inkBlot: InkBlot = (p5, x, y, r, resolution, fill) => {
  const vertices: P5.Vector[] = [];
  const length = resolution ?? 10;
  const center = p5.createVector(x, y);

  Array.from({ length }, (_, i) => {
    const angle = p5.map(i, 0, length, 0, p5.TWO_PI);
    const v = p5.createVector(p5.cos(angle), p5.sin(angle));
    v.mult(r);
    v.add(center);
    vertices[i] = v;
  });

  const show = () => {
    p5.beginShape();
    vertices.forEach((v) => {
      p5.vertex(v.x, v.y);
    });
    p5.endShape("close");
  };

  const marble = (other: ReturnType<InkBlot>) => {
    vertices.forEach((v) => {
      const c = other.center;
      const r = other.r;
      const p = v.copy();
      p.sub(c);
      const root = p5.sqrt(1 + (r * r) / p.magSq());
      p.mult(root);
      p.add(c);
      v.set(p);
    });
  };

  return { show, marble, center, r, fill };
};
