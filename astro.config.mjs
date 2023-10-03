import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), mdx(), solidJs()],
  output: "server",
  adapter: vercel(),
});
