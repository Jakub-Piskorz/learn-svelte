import { getRequestEvent } from '$app/server';
import { redirect } from '@sveltejs/kit';

export async function requireLogin() {
	const { locals } = getRequestEvent();

	if (!locals.user) {
		return redirect(302, '/demo/lucia/login');
	}

	return locals.user;
}