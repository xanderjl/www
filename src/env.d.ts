/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite-plugin-glsl/ext" />

import type * as P5 from "p5";

interface ImportMetaEnv {
  readonly PRIVATE_BASE_URL: string;
  readonly VERCEL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    p5: P5;
  }
}
