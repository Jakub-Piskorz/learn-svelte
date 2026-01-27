import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: '/mfe-assets',
			// FORCE absolute URLs for assets in dev so they bypass the host proxy
			assets: process.env.NODE_ENV === 'development'
				? 'http://localhost:2137'
				: '',
			relative: false
		}
	}
};

export default config;