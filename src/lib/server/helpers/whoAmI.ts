import type { User, UserWithType } from '$libServer/db/schema';
import getUserFromToken from '$libServer/helpers/getUserFromToken';
import { db } from '$libServer/db';

export default async function whoAmI(withUserType: true): Promise<UserWithType | null>
export default async function whoAmI(withUserType?: false): Promise<User | null>
export default async function whoAmI(withUserType: boolean): Promise<User | UserWithType | null>

export default async function whoAmI(
	withUserType = false
) {
	const userFromToken = getUserFromToken();
	if (!userFromToken) return null;

	return db.query.user.findFirst({
		where: { id: userFromToken.id },
		with: { userType: withUserType }
	}) as Promise<User | UserWithType | null>;
}