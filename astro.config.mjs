import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import content from "@originjs/vite-plugin-content";
import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  adapter: vercel(),
  integrations: [
    pandacss(),
    mdx({ extendMarkdownConfig: true }),
    solidJs()
  ],
  markdown: {
    syntaxHighlight: "prism"
  },
  output: "server",
  vite: {
    plugins: [content()]
  }
});
