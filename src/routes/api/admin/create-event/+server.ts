import { error, json } from '@sveltejs/kit';
import { db } from '$libServer/db';

export async function POST({locals}) {
	if (!locals.user) {
		error(500, "User doesn't exist")
	}

	const dbUser = await db.query.user.findFirst({
		where: {
			id: locals.user.id
		},
		with: {
			userType: true
		}
	})

	if (!dbUser) error(404);
	return json("TODO");
}