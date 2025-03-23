import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://techstart.cloud",
	integrations: [tailwind(), mdx(), sitemap()],
	vite: {
		ssr: {
			// Fixes issues with certain dependencies
			noExternal: ["path-to-regexp"],
		},
		build: {
			// Improve debugging in development
			sourcemap: true,
		},
	},
	server: {
		port: 4321,
	},
	markdown: {
		shikiConfig: {
			// Choose a theme for syntax highlighting
			theme: "github-dark",
		},
		remarkPlugins: [],
		rehypePlugins: [],
	},
	compressHTML: true,
});
