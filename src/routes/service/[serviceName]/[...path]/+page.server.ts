import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch }) => {
	const { serviceName, path } = params;

	const portMap: Record<string, number> = {
		microservice: 2137,
		loans: 5174
	};

	const port = portMap[serviceName];
	if (!port) throw error(404, 'Service Not Found');

	const mfeUrl = `http://localhost:${port}/mfe-assets/${path ?? ''}?fragment=true`;

	try {
		const res = await fetch(mfeUrl);
		let html = await res.text();

		// THE FIX: Brute force rewrite all relative MFE paths to absolute URLs
		// This covers scripts, imports, and Vite's internal @fs paths
		const mfeOrigin = `http://localhost:${port}`;
		html = html.replace(/src="\/mfe-assets\//g, `src="${mfeOrigin}/mfe-assets/`);
		html = html.replace(/href="\/mfe-assets\//g, `href="${mfeOrigin}/mfe-assets/`);
		// This part fixes the internal Vite imports inside the scripts
		html = html.replace(/from "\/mfe-assets\//g, `from "${mfeOrigin}/mfe-assets/`);
		html = html.replace(/import\("\/mfe-assets\//g, `import("${mfeOrigin}/mfe-assets/`);

		const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/);
		const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);

		const head = headMatch ? headMatch[1] : undefined;
		const body = bodyMatch ? bodyMatch[1] : html;
		return {
			mfe: {
				head,
				body,
				serviceName
			},
			error: null
		};
	} catch (err) {
		return {
			mfeHtml: {},
			error: `Could not reach ${serviceName}.`
		};
	}
};
