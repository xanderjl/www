import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  adapter: vercel({
    includeFiles: [
      "./serverless/fonts/DMMono-Regular.ttf",
      "./serverless/fonts/DMSerifText-Regular.ttf",
      "./serverless/icons/phone.png",
      "./serverless/icons/email.png",
      "./serverless/icons/github.png",
      "./serverless/icons/linkedin.png",
    ],
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
