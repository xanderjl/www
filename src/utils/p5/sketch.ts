import type { RENDERER } from "p5";
import P5 from "p5";
import p5plot from "p5.plotsvg";

import { keyPressed as kp } from "./keyPressed";
import { setupDefaults } from "./setup";
import type {
  ColorValue,
  Draw,
  FileExtension,
  GifOptions,
  KeyPressed,
  MousePressed,
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
  mousePressed?: MousePressed;
  padding?: number[];
  renderer?: RENDERER | "svg";
  saveAs?: FileExtension;
  seed?: number;
  setup?: Setup;
  suffix?: string;
  windowResized?: WindowResized;
}

export const sketch = ({
  background,
  dimensions,
  draw,
  padding,
  setup,
  suffix,
  keyPressed,
  mousePressed,
  windowResized,
  renderer,
  seed,
  saveAs,
  gifOptions,
}: SketchProps) => {
  const sketch = (p5: P5) => {
    const isSvg = renderer === "svg" || saveAs === "svg";

    p5.setup = () => {
      setupDefaults({
        background,
        dimensions,
        p5,
        padding,
        renderer,
        saveAs,
        mousePressed,
      });
      if (isSvg) {
        p5plot.beginRecordSVG(p5);
      }
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
      keyPressed && keyPressed(p5, event as KeyboardEvent);
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

  const p5 = new P5(
    sketch,
    document.getElementById("container") as HTMLElement,
  );

  if (typeof window !== "undefined") {
    if (window.p5) {
      window.p5 = undefined;
    }

    window.p5 = p5;
  }
};
