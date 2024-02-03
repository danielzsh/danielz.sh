import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import Inspect from 'vite-plugin-inspect'
import svelte from '@astrojs/svelte'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), svelte()],
  vite: {
    plugins: [Inspect()]
  },
  adapter: vercel()
})
