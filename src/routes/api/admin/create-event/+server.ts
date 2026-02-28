import { json } from '@sveltejs/kit';

export function POST({request}) {
	const user = request;
	console.log(user);
	return json(user);
}