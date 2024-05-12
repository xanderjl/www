import type P5 from "p5";
import type { SVG } from "p5.js-svg";

import type { ColorValue, FileExtension, MousePressed } from "./types";

export interface SetupProps {
  background?: ColorValue;
  dimensions?: number[];
  height?: number;
  p5: P5;
  padding?: number[];
  pixelDensity?: number;
  renderer?: P5.RENDERER | SVG;
  saveAs?: FileExtension;
  width?: number;
  mousePressed?: MousePressed;
}

export const setupDefaults = ({
  p5,
  width,
  height,
  dimensions,
  padding,
  background,
  renderer = "p2d",
  pixelDensity,
  saveAs,
  mousePressed,
}: SetupProps) => {
  let cnv: P5.Renderer | undefined;
  const r = saveAs === "svg" ? "svg" : renderer;
  const usedWidth = dimensions ? dimensions[0] : width ? width : p5.windowWidth;
  const usedHeight = dimensions
    ? dimensions[1]
    : height
      ? height
      : p5.windowHeight;
  const aspectRatio = usedWidth / usedHeight;
  const windowRatio = p5.windowWidth / p5.windowHeight;
  const paddingWidth = padding && padding.length > 0 ? padding[0] * 2 : 0;
  const paddingHeight =
    padding && padding.length === 2
      ? padding[1] * 2
      : padding && padding.length === 1
        ? padding[0] * 2
        : 0;
  const maxWidth = Math.round(p5.windowWidth - paddingWidth);
  const maxHeight = Math.round(p5.windowHeight - paddingHeight);

  if (usedWidth > p5.windowWidth || usedHeight > p5.windowHeight) {
    if (aspectRatio > windowRatio) {
      const newHeight = Math.round(maxWidth / aspectRatio);
      cnv = p5.createCanvas(
        maxWidth,
        newHeight,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        r,
      );
    } else {
      const newWidth = Math.round(maxHeight * aspectRatio);
      cnv = p5.createCanvas(
        newWidth,
        maxHeight,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        r,
      );
    }
  } else {
    cnv = p5.createCanvas(
      usedWidth,
      usedHeight,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      r,
    );
  }

  mousePressed &&
    cnv &&
    cnv.mousePressed((event) =>
      mousePressed(p5, event as MouseEvent | undefined),
    );

  pixelDensity && p5.pixelDensity(pixelDensity);
  background && p5.background(background as unknown as P5.Color);

  return { cnv };
};
