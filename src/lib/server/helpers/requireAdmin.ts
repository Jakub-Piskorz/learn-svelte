import { error } from '@sveltejs/kit';
import isAdmin from '$libServer/helpers/isAdmin';
import whoAmI from '$libServer/helpers/whoAmI';

export default async (errorMsg = 'Invalid or missing credentials"') => {
	const me = await whoAmI(true);
	if (!me) return error(401, errorMsg);
	const admin = await isAdmin(me);
	if (!admin) return error(401, errorMsg);
	return me;
}