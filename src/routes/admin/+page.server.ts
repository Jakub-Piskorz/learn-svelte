import { requireLogin } from '../demo/lucia/+page.server';
import notAdminError from '$libServer/helpers/notAdminError';

export const load = async () => {
	const user = await requireLogin();
	await notAdminError(user.id, "Only administrators can view this page");
	return { user };
};
