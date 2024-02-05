import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import Inspect from 'vite-plugin-inspect';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel/serverless';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), svelte(), react()],
  vite: {
    plugins: [Inspect()]
  },
  adapter: vercel({
    imageService: true
  })
});