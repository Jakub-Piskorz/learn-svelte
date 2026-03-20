import { error, json } from '@sveltejs/kit';
import { db } from '$libServer/db';
import isAdmin from '$libServer/helpers/isAdmin';
import { organizer } from '$libServer/db/schema';

export async function POST({locals, request}) {
	const {name} = await request.json();
	if (!name || typeof name !== 'string') {
		error(404, "Organizer name not provided!");
	}

	const admin = await isAdmin(locals.user?.id);
	if (!admin) {
		error(401, "User is not authorized!" );
	}
	const retOrganizer = await db
		.insert(organizer).values({name: name})
		.returning({id: organizer.id, name: organizer.name});

	return json(retOrganizer);
}