import { error } from '@sveltejs/kit';
import isAdmin from '$libServer/helpers/isAdmin';
import whoAmI from '$libServer/helpers/whoAmI';
import type { UserWithType } from '$libServer/db/schema';

export default async (errorMsg = 'Unauthorized access') => {
	const me = await whoAmI(true) as UserWithType | null;
	if (!me) return error(401, "Invalid or missing credentials");
	const admin = await isAdmin(me);
	if (!admin) return error(401, errorMsg);
	return me;
}