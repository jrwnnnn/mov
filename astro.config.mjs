// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	output: "server",
	adapter: cloudflare({
		remoteBindings: !process.env.CI,
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
