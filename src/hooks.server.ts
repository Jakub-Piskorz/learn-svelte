import type { Handle } from '@sveltejs/kit';
import * as auth from '../src/lib/server/auth.ts';
import { sequence } from '@sveltejs/kit/hooks';

const handleAuth: Handle = async ({ event, resolve }) => {
	console.log('handle auth hook');
	const sessionToken = event.cookies.get(auth.sessionCookieName);

	if (!sessionToken) {
		event.locals.user = null;
		event.locals.session = null;

		return resolve(event);
	}

	const { session, user } = await auth.validateSessionToken(sessionToken);

	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
	} else {
		auth.deleteSessionTokenCookie(event);
	}

	event.locals.user = user;
	event.locals.session = session;

	return resolve(event);
};

// Needed to load resources from micro-frontends on dev server. On production, not needed.
const handleProxy: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/_app/')) {
		const referer = event.request.headers.get('referer') || '';

		// Logic: If the page asking for this asset is /service/loans, use port 5174
		// If it's /service/microservice, use port 2137
		let port = 2137; // Default
		if (referer.includes('/service/loans')) port = 5174;
		if (referer.includes('/service/microservice')) port = 2137;

		return fetch(`http://localhost:${port}${event.url.pathname}`);
	}

	return resolve(event);
};

export const handle: Handle = sequence(handleAuth, handleProxy);
