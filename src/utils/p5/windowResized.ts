import type P5 from "p5";

import type { ColorValue } from "./types";

interface WindowResized {
  background?: ColorValue;
  dimensions?: number[];
  height?: number;
  noLoop?: boolean;
  p5: P5;
  padding?: number[];
  width?: number;
}

export const windowResizedDefaults = ({
  p5,
  width,
  height,
  dimensions,
  padding,
  background,
  noLoop,
}: WindowResized) => {
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
      p5.resizeCanvas(maxWidth, newHeight);
    } else {
      const newWidth = Math.round(maxHeight * aspectRatio);
      p5.resizeCanvas(newWidth, maxHeight);
    }
  } else {
    p5.resizeCanvas(usedWidth, usedHeight);
  }

  background && p5.background(background as unknown as P5.Color);

  noLoop ? (p5.loop(), p5.noLoop()) : p5.loop();
};
