import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import Inspect from 'vite-plugin-inspect'
import react from '@astrojs/react'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
  vite: {
    plugins: [Inspect()]
  },
  experimental: {
    contentLayer: true
  }
})
