type PaperSize =
  | "A0"
  | "A1"
  | "A2"
  | "A3"
  | "A4"
  | "iPhone15"
  | "iPhoneProMax"
  | "legal"
  | "letter";

// Sizes are for 96 DPI
const paperSizes = {
  A0: [3179, 4494],
  A1: [2245, 3179],
  A2: [1587, 2245],
  A3: [1123, 1587],
  A4: [794, 1123],
  iPhone15: [1179, 2556],
  iPhoneProMax: [1170, 2532],
  legal: [816, 1344],
  letter: [816, 1056],
};

export const getDimensions = (
  paperSize: PaperSize,
  landscape = false,
): [number, number] => {
  if (landscape) {
    return paperSizes[paperSize].reverse() as [number, number];
  }

  return paperSizes[paperSize] as [number, number];
};
