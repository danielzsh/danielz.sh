const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				interblack: ['Inter Black']
			}
		}
	},
	plugins: []
}
