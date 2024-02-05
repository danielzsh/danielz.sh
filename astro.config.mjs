import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import Inspect from 'vite-plugin-inspect'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [Inspect()]
  }
})
