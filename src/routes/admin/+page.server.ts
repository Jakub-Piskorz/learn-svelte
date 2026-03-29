import { json } from '@sveltejs/kit';
import errorIfNotAdmin from '$libServer/helpers/errorIfNotAdmin';
import type { Actions } from '../../../.svelte-kit/types/src/routes/demo/lucia/login/$types';
import { requireLogin } from '$libServer/helpers/requireLogin';
import { createLocation } from '$libServer/location/create-location/services';

export const load = async () => {
	const user = await requireLogin();
	await errorIfNotAdmin("Only administrators can view this page");
	return { user };
};

export const actions: Actions = {
	createlocation: async (event: any) => {
		const formData = await event.request.formData();
		const name = formData.get('name');
		const res = await createLocation({name})
		return {success: true, res};
	}
}