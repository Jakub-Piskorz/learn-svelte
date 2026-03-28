import { error, json } from '@sveltejs/kit';
import { db } from '$libServer/db';
import isAdmin from '$libServer/helpers/isAdmin';
import { location } from '$libServer/db/schema';

export async function POST({request}) {
	const {name} = await request.json();
	if (!name || typeof name !== 'string') {
		error(404, "Location name not provided!");
	}

	const admin = await isAdmin();
	if (!admin) {
		error(401, "User is not authorized!" );
	}
	const retLocation = await db
		.insert(location).values({name})
		.returning({id: location.id, name: location.name});

	return json(retLocation);
}