/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PRIVATE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
