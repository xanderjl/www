/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import * as P5 from 'p5';

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
  interface Window {
    p5: P5;
  }
