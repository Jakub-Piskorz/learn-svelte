import { error } from '@sveltejs/kit';
import { db } from '$libServer/db';

export default async (userId?: string) => {
	if (!userId) {
		error(404, "User not provided!");
	}
	const dbUser = await db.query.user.findFirst({
		where: {
			id: userId
		},
		with: {
			userType: true
		}
	})
	if (!dbUser) {
		error(404, "User not found.");
	}
	return dbUser.userType?.type === "admin";
}