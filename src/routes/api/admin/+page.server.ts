import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/demo/lucia/$types';
import { requireLogin } from '../../demo/lucia/+page.server';

export const load: PageServerLoad = async () => {
	const user = requireLogin();
	return { user };
};