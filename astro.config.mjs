import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/dev/astro';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [
    pandacss(),
    react(),
    mdx({
      extendMarkdownConfig: true
    })
  ],
  markdown: {
    syntaxHighlight: 'prism'
  },
  output: "server",
  adapter: vercel()
});