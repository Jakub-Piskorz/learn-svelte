import { requireLogin } from '../demo/lucia/+page.server';
import errorIfNotAdmin from '$libServer/helpers/errorIfNotAdmin';

export const load = async () => {
	const user = await requireLogin();
	await errorIfNotAdmin("Only administrators can view this page");
	return { user };
};
