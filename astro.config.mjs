import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    edgeMiddleware: true,
  }),
  integrations: [
    pandacss(),
    mdx({
      extendMarkdownConfig: true,
    }),
    solidJs(),
    auth(),
  ],
  markdown: {
    syntaxHighlight: "prism",
  },
  output: "server",
  redirects: {
    "/resume.pdf": {
      destination: "/api/resume"
    }
  }
});
