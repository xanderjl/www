import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
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
  integrations: [
    mdx({
      extendMarkdownConfig: true,
    }),
    solidJs(),
  ],
  markdown: {
    syntaxHighlight: "prism",
  },
  output: "static",
  redirects: {
    "/resume.pdf": "/api/resume",
  },
  site: BASE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
});
