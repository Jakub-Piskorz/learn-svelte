import type { Handle } from '@sveltejs/kit';
import * as auth from '../src/lib/server/auth.ts';
import { sequence } from '@sveltejs/kit/hooks';

const handleAuth: Handle = async ({ event, resolve }) => {
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
	if (event.url.pathname.startsWith('/mfe-assets')) {
		const targetPath = event.url.pathname.replace('/mfe-assets', '');
		const mfeUrl = `http://localhost:2137${targetPath}${event.url.search}`;

		// Fetch the asset from the MFE and return it to the browser
		return fetch(mfeUrl);
	}

	return resolve(event);
};

export const handle: Handle = sequence(handleAuth, handleProxy);
