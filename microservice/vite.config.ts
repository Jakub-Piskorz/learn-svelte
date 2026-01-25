import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

export default defineConfig({
	plugins: [sveltekit(),
	federation({
		name: 'microservice',
		filename: 'remoteEntry.js',
		exposes: {
			'./remote-app': './src/routes/+page.svelte',
		}
	})],
	server: {
		host: 'localhost',
		port: 2137,
	},
	build: {
		target: 'chrome',
	}
});
