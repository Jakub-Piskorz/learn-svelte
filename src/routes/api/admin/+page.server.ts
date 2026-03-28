import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/demo/lucia/$types';

import { requireLogin } from '$libServer/helpers/requireLogin';

export const load: PageServerLoad = async () => {
	const user = requireLogin();
	return { user };
};