type CreateTiles = ({
  rows,
  cols,
  tileW,
  tileH,
}: {
  cols?: number;
  rows: number;
  tileH?: number;
  tileW: number;
}) => number[][];

export const createTiles: CreateTiles = ({
  rows,
  cols = rows,
  tileW,
  tileH = tileW,
}) => {
  const tiles: number[][] = [];

  Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => {
      const x = i * tileW;
      const y = j * tileH;

      tiles.push([x, y]);
    }),
  );

  return tiles;
};
