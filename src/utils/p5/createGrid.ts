export const createGrid = (rows: number, cols: number = rows) => {
  const points: number[][] = [];

  Array.from({ length: cols }, (_, u) =>
    Array.from({ length: rows }, (_, v) => {
      const x = u / (cols - 1);
      const y = v / (rows - 1);
      points.push([x, y]);
    }),
  );

  return points;
};
