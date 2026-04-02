import { error } from '@sveltejs/kit';
import whoAmI from '$libServer/helpers/whoAmI';

export default async () => {
	const me = await whoAmI(true);
	if (!me) return error(401, "Invalid or missing credentials")
	return me.userType!.type === "admin";
}