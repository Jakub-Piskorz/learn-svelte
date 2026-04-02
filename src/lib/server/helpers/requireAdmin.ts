import { error } from '@sveltejs/kit';
import isAdmin from '$libServer/helpers/isAdmin';

export default async (errorMsg: string = 'Unauthorized access') => {
	const admin = await isAdmin();
	if (!admin) return error(401, errorMsg);
}