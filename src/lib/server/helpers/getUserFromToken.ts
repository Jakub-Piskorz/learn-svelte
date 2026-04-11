import { getRequestEvent } from '$app/server';

export type userFromToken = {
	id: string,
	username: string,
}

export default function getUserFromToken() {
	const {locals} = getRequestEvent();
	return locals.user as userFromToken | null;
}