/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#4f46e5",
					dark: "#4338ca",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: "100%",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
	darkMode: "class",
};
