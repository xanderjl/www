type CreateTiles = ({
  rows,
  cols,
  tileW,
  tileH,
  xStart,
  yStart,
}: {
  cols?: number;
  rows: number;
  tileH?: number;
  tileW: number;
  xStart?: number;
  yStart?: number;
}) => number[][];

export const createTiles: CreateTiles = ({
  rows,
  cols = rows,
  tileW,
  tileH = tileW,
  xStart = 0,
  yStart = 0,
}) => {
  const tiles: number[][] = [];

  Array.from({ length: cols }, (_, i) =>
    Array.from({ length: rows }, (_, j) => {
      const x = i * tileW;
      const y = j * tileH;
      const w = tileW;
      const h = tileH;

      tiles.push([x + xStart, y + yStart, w, h]);
    }),
  );

  return tiles;
};
