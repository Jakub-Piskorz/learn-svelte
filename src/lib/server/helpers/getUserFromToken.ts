import { getRequestEvent } from '$app/server';

export default function getUserFromToken() {
	const {locals} = getRequestEvent();
	return locals.user;
}