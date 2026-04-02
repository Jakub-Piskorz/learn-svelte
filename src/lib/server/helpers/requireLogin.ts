import { error } from '@sveltejs/kit';
import whoAmI from '$libServer/helpers/whoAmI';

export async function requireLogin() {
	const me = await whoAmI(true);
	if (!me) return error(401, "Invalid or missing credentials")
	return me;
}