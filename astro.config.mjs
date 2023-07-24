import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/edge';
import pandacss from '@pandacss/dev/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
// https://github.com/yisibl/resvg-js/issues/175#issuecomment-1577291297
export default defineConfig({
  integrations: [pandacss(), mdx({
    extendMarkdownConfig: true
  }), solidJs(), react()],
  markdown: {
    syntaxHighlight: 'prism'
  },
  output: 'server',
  adapter: vercel(),
  experimental: {
    viewTransitions: true
  },
  vite: {
    ssr: {
      external: ['@resvg/resvg-js']
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    },
    build: {
      rollupOptions: {
        external: ['@resvg/resvg-js']
      }
    }
  }
});