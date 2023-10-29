// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type P5 from "p5";

declare global {
  interface Window {
    p5: P5;
  }

  interface ImportMetaEnv {
    readonly AUTH_EMAIL: string;
    readonly AUTH_SECRET: string;
    readonly AUTH_TRUST_HOST: boolean;
    readonly BASE_URL: string;
    readonly BLOB_READ_WRITE_TOKEN: string;
    readonly DMMONO_URL: string;
    readonly DMSERIFTEXT_URL: string;
    readonly EMAIL_ICON_URL: string;
    readonly GITHUB_CLIENT_ID: string;
    readonly GITHUB_CLIENT_SECRET: string;
    readonly GITHUB_ICON_URL: string;
    readonly LINKEDIN_ICON_URL: string;
    readonly PHONE_ICON_URL: string;
    readonly VERCEL_URL: string;
  }

  interface ImportMeta {
    env: ImportMetaEnv;
  }
}
