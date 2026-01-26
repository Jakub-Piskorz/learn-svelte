import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch }) => {
	const { serviceName, path } = params;

	const portMap: Record<string, number> = {
		microservice: 2137,
		loans: 5174
	};

	const port = portMap[serviceName];
	if (!port) throw error(404, 'Service Not Found');

	const mfeUrl = `http://localhost:${port}/${path ?? ''}`;

	try {
		const res = await fetch(mfeUrl);
		if (!res.ok) throw new Error(`MFE returned ${res.status}`);

		// We return the HTML as a string inside an object
		const html = await res.text();
		return {
			mfeHtml: html,
			serviceName
		};
	} catch (err) {
		return {
			mfeHtml: null,
			error: `Could not reach ${serviceName}. Error: ${err.message}`,
		};
	}
};