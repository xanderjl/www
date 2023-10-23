/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type P5 from "p5";

interface ImportMetaEnv {
  readonly BLOB_READ_WRITE_TOKEN: string;
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
