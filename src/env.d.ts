// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type P5 from "p5";

declare global {
  interface Window {
    p5?: P5;
  }

  interface ImportMetaEnv {
    readonly BASE_URL: string;
    readonly EMAIL_ICON_URL: string;
    readonly GITHUB_CLIENT_ID: string;
    readonly GITHUB_CLIENT_SECRET: string;
  }

  interface ImportMeta {
    env: ImportMetaEnv;
  }
}
