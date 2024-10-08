import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import auth from "auth-astro";
import { loadEnv } from "vite";

const {
  BASE_URL,
  // eslint-disable-next-line no-undef
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    edgeMiddleware: true,
  }),
  devToolbar: {
    enabled: true,
  },
  experimental: {
    contentCollectionCache: true,
  },
  integrations: [
    mdx({
      extendMarkdownConfig: true,
    }),
    solidJs(),
    auth(),
  ],
  markdown: {
    syntaxHighlight: "prism",
  },
  output: "hybrid",
  redirects: {
    "/resume.pdf": "/api/resume",
  },
  site: BASE_URL,
  vite: {
    plugins: [tailwindcss()],
  }
});
