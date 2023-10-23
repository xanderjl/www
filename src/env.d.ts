/// <reference types="astro/client" />

import type P5 from "p5";

declare global {
  interface Window {
    p5: P5;
  }

  interface ImportMetaEnv {
    readonly AUTH_SECRET: string;
    readonly AUTH_TRUST_HOST: boolean;
    readonly BASE_URL: string;
    readonly BLOB_READ_WRITE_TOKEN: string;
    readonly VERCEL_URL: string;
  }

  interface ImportMeta {
    env: ImportMetaEnv;
  }
}
