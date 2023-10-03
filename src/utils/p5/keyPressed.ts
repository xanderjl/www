import type { Color } from "p5";
import type P5 from "p5";
import type { SVG } from "p5.js-svg";

import { getOs } from "@/utils/getOs";
import type { ColorValue, FileExtension, GifOptions } from "@/utils/p5/types";

export interface KeyPressed {
  background?: ColorValue;
  dimensions?: number[];
  event?: KeyboardEvent;
  fileName: string;
  gifOptions?: GifOptions;
  noLoop?: boolean;
  p5: P5;
  renderer?: P5.RENDERER | SVG;
  saveAs?: FileExtension;
  seed?: number;
  width?: number;
}

export const keyPressed = ({
  p5,
  event,
  fileName,
  seed,
  width,
  dimensions,
  background,
  renderer,
  saveAs,
  noLoop,
  gifOptions = [60, { delay: 0, units: "frames" }],
}: KeyPressed) => {
  const os = getOs();
  const saveFile = () =>
    saveAs === "svg" || renderer == "svg"
      ? p5.save(fileName)
      : saveAs === "gif"
      ? p5.saveGif(fileName, gifOptions[0], gifOptions[1])
      : p5.saveCanvas(fileName, saveAs);

  if (os === "mac") {
    if (event?.key === "s" && event?.metaKey) {
      if (seed) {
        p5.randomSeed(seed);
        p5.noiseSeed(seed);
      }
      event?.preventDefault();
      const ratio =
        ((dimensions && dimensions[0]) ?? width ?? p5.width) / p5.width;
      p5.pixelDensity(ratio);
      background && p5.background(background as unknown as Color);
      noLoop ? (p5.loop(), p5.noLoop()) : p5.draw();
      saveFile();
    }
  } else {
    if (event?.key === "s" && event?.ctrlKey) {
      if (seed) {
        p5.randomSeed(seed);
        p5.noiseSeed(seed);
      }
      event?.preventDefault();
      const ratio =
        ((dimensions && dimensions[0]) ?? width ?? p5.width) / p5.width;
      p5.pixelDensity(ratio);
      background && p5.background(background as unknown as Color);
      noLoop ? (p5.loop(), p5.noLoop()) : p5.draw();
      saveFile();
    }
  }
};
