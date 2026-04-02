import type { User, UserWithType } from '$libServer/db/schema';
import getUserFromToken from '$libServer/helpers/getUserFromToken';
import { db } from '$libServer/db';

export default async function whoAmI<T extends boolean>(
	withUserType: T = false as T
): Promise<T extends true ? (UserWithType | null) : (User | null)> {
	const userFromToken = getUserFromToken();
	if (!userFromToken) return null;

	return db.query.user.findFirst({
		where: { id: userFromToken.id },
		with: { userType: withUserType }
	}) as never;
}