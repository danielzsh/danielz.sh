import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
	server: {
		fs: {
			allow: ['./blog']
		}
	},
	plugins: [sveltekit(), Inspect()]
})
