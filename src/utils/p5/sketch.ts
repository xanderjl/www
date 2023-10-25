import type { RENDERER } from "p5";
import P5 from "p5";
import svg from "p5.js-svg";
import type { SVG } from "p5.js-svg/dist/types";

import { keyPressed as kp } from "./keyPressed";
import { setupDefaults } from "./setup";
import type {
  ColorValue,
  Draw,
  FileExtension,
  GifOptions,
  KeyPressed,
  Preload,
  Setup,
  WindowResized,
} from "./types";
import { windowResizedDefaults } from "./windowResized";

interface SketchProps {
  background?: ColorValue;
  dimensions: number[];
  draw?: Draw;
  gifOptions?: GifOptions;
  keyPressed?: KeyPressed;
  padding?: number[];
  preload?: Preload;
  renderer?: RENDERER | SVG;
  saveAs?: FileExtension;
  seed?: number;
  setup?: Setup;
  suffix?: string;
  windowResized?: WindowResized;
}

export const sketch = ({
  background,
  dimensions,
  preload,
  draw,
  padding,
  setup,
  suffix,
  keyPressed,
  windowResized,
  renderer,
  seed,
  saveAs,
  gifOptions,
}: SketchProps) => {
  const s = (p5: P5) => {
    p5.preload = () => {
      preload && preload(p5);
    };

    p5.setup = () => {
      setupDefaults({
        background,
        dimensions,
        p5,
        padding,
        renderer,
        saveAs,
      });
      if (seed) {
        p5.randomSeed(seed);
        p5.noiseSeed(seed);
      }

      setup && setup(p5);
    };

    p5.draw = () => {
      if (seed) {
        p5.randomSeed(seed);
        p5.noiseSeed(seed);
      }

      draw && draw(p5);
    };

    p5.windowResized = () => {
      windowResizedDefaults({
        background,
        dimensions,
        p5,
        padding,
      });

      if (seed) {
        p5.randomSeed(seed);
        p5.noiseSeed(seed);
      }

      windowResized && windowResized(p5);
    };

    const date = new Date().toLocaleString("en-US", {
      day: "2-digit",
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
      month: "2-digit",
      second: "2-digit",
      year: "numeric",
    });
    const fileName = date + (suffix ? `-${suffix}` : "");

    p5.keyPressed = (event) => {
      keyPressed ??
        kp({
          dimensions,
          event: event as KeyboardEvent,
          fileName,
          gifOptions,
          p5,
          renderer,
          saveAs,
          seed,
        });
    };
  };

  const p5 = new P5(s, "container" as unknown as HTMLElement);

  if (typeof window !== "undefined") {
    window.p5 = p5;
    svg(P5);
  }
};
