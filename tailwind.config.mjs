/** @type {import('tailwindcss').Config} */
export default {
	// Enable Just-in-Time mode for faster builds
	mode: "jit",
	// Specify the paths to all of the template files in your project
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#4f46e5",
					dark: "#4338ca",
					light: "#6366f1",
				},
				secondary: {
					DEFAULT: "#10b981",
					dark: "#059669",
					light: "#34d399",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Merriweather", "serif"],
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: "100%",
						color: "#333",
						a: {
							color: "#4f46e5",
							"&:hover": {
								color: "#4338ca",
							},
						},
					},
				},
			},
		},
	},
	// Add the typography plugin
	plugins: [require("@tailwindcss/typography")],
	// Enable dark mode based on a CSS class
	darkMode: "class",
};
