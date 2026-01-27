import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 2137,
		cors: true, // Crucial: allows port 5173 to execute these scripts
		fs: {
			allow: ['..'] // Keep this to allow access to node_modules
		},
		hmr: {
			// Direct HMR back to the MFE port
			host: 'localhost',
			port: 2137
		}
	}
});