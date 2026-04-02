import getUserFromToken from '$libServer/helpers/getUserFromToken';
import { db } from '$libServer/db';

export default async function whoAmI(withUserType = false) {
	const userFromToken = getUserFromToken();
	if (!userFromToken) return null;

	return db.query.user.findFirst({
		where: {
			id: userFromToken.id
		},
		with: {
			userType: withUserType
		}
	});
}