import { getRequestEvent } from '$app/server';

export type userFromToken = {
	id: string,
	username: string,
}

export default function getUserFromToken() {
	const {locals} = getRequestEvent();
	console.log(locals.user)
	return locals.user as userFromToken | null;
}