import { error } from '@sveltejs/kit';
import isAdmin from '$libServer/helpers/isAdmin';

export default async (userId?: string, errorMsg: string = 'Unauthorized access') => {
	const admin = await isAdmin(userId);
	if (!admin) return error(401, errorMsg);
}