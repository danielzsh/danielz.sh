import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import Inspect from 'vite-plugin-inspect'
import react from '@astrojs/react'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
  vite: {
    plugins: [Inspect()]
  }
})
