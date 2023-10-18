import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  adapter: vercel({
    includeFiles: [
      "./src/assets/fonts/DMMono-Regular.ttf",
      "./src/assets/fonts/DMSerifText-Regular.ttf",
      "./src/asets/icons/phone.png",
      "./src/assets/icons/email.png",
      "./src/assets/icons/github.png",
      "./src/assets/icons/linkedin.png",
    ]
  }),
  integrations: [
    pandacss(),
    mdx({ extendMarkdownConfig: true }),
    solidJs()
  ],
  markdown: {
    syntaxHighlight: "prism"
  },
  output: "server",
});
