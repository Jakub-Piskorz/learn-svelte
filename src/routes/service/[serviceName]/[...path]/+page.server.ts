import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch }) => {
	const { serviceName, path } = params;

	const portMap: Record<string, number> = {
		microservice: 2137,
		loans: 5174
	};

	const port = portMap[serviceName];
	if (!port) throw error(404, 'Service Not Found');

	const remoteAppUrl = `http://localhost:${port}/remote-app/${path ?? ''}?fragment=true`;

	try {
		const res = await fetch(remoteAppUrl);
		let html = await res.text();

		// THE FIX: Brute force rewrite all relative MFE paths to absolute URLs
		// This covers scripts, imports, and Vite's internal @fs paths
		const mfeOrigin = `http://localhost:${port}`;
		html = html.replace(/src="\/remote-app\//g, `src="${mfeOrigin}/remote-app/`);
		html = html.replace(/href="\/remote-app\//g, `href="${mfeOrigin}/remote-app/`);
		// This part fixes the internal Vite imports inside the scripts
		html = html.replace(/from "\/remote-app\//g, `from "${mfeOrigin}/remote-app/`);
		html = html.replace(/import\("\/remote-app\//g, `import("${mfeOrigin}/remote-app/`);

		const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/);
		const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);

		const head = headMatch ? headMatch[1] : undefined;
		const body = bodyMatch ? bodyMatch[1] : html;
		return {
			remoteApp: {
				head,
				body,
				serviceName
			},
			error: null
		};
	} catch (err) {
		return {
			remoteApp: {},
			error: `Could not reach ${serviceName}.`
		};
	}
};
