export const chunk = <T>(arr: T[], n: number): T[][] => {
  const size = Math.ceil(arr.length / n);

  return Array.from({ length: n }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
};
