// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	output: "server",
	adapter: cloudflare({
		remoteBindings: !import.meta.env.CI,
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
