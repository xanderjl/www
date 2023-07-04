import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/dev/astro';
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/edge";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), mdx({
    extendMarkdownConfig: true
  }), solidJs()],
  markdown: {
    syntaxHighlight: 'prism'
  },
  output: "server",
  adapter: vercel()
});