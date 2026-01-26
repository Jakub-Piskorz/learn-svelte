import adapter from '@sveltejs/adapter-auto';
import { preprocess } from 'svelte/compiler';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		compatibility: {
			componentApi: 4
		}
	},
	preprocess: preprocess,
	kit: { adapter: adapter() }
};

export default config;
