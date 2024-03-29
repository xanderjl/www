import type P5 from "p5";

export type FileExtension = "jpg" | "png" | "svg" | "gif";

export type GifOptions = [
  duration: number,
  {
    delay: number;
    units: "frames" | "seconds";
  },
];

export type ColorValue = string | number | number[];

export type Preload = (p5: P5) => void;

export type Draw = (p5: P5) => void;

export type Setup = (p5: P5) => void;

export type WindowResized = (p5: P5) => void;

export type KeyPressed = (p5: P5, e?: KeyboardEvent) => void;

export type MousePressed = (p5: P5, e?: MouseEvent) => void;
