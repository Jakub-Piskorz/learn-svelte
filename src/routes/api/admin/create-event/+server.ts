import { error, json } from '@sveltejs/kit';
import { db } from '$libServer/db';
import { user } from '$libServer/db/schema';
import { eq } from 'drizzle-orm';

export async function POST({locals, request}) {
	const users =
		await db.selectDistinct().from(user)
			.where(eq(user.id, locals.user!.id));
	if (users.length === 0) error(404);
	const selectedUser = users[0];
	return json(selectedUser);
}