import { error } from '@sveltejs/kit';
import { db } from '$libServer/db';
import { getRequestEvent } from '$app/server';

export default async () => {
	const { locals } = getRequestEvent();
	const userId = locals.user?.id;

	if (!userId) {
		error(404, "User not provided!");
	}

	const user = await db.query.user.findFirst({
		where: {
			id: userId
		},
		with: {
			userType: true
		}
	})
	if (!user) {
		error(404, "User not found.");
	}
	return user.userType?.type === "admin";
}