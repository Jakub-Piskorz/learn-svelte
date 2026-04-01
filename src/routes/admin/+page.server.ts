import { fail } from '@sveltejs/kit';
import errorIfNotAdmin from '$libServer/helpers/errorIfNotAdmin';
import type { Actions } from '../../../.svelte-kit/types/src/routes/demo/lucia/login/$types';
import { requireLogin } from '$libServer/helpers/requireLogin';
import { createLocation as _createLocation } from '$libServer/location/create-location/services';
import { db } from '$libServer/db';
import { deleteLocation } from '$libServer/location/delete-location/services';

export const load = async () => {
	const user = await requireLogin();
	const locations = await db.query.location.findMany();
	await errorIfNotAdmin("Only administrators can view this page");
	return { user, locations };
};

export const actions = {
	'create-location': async ({request}) => {
		await requireLogin();
		const data = await request.formData();
		const name = data.get('name') as string;
		if (!name) {
			fail(404, { name, incorrect: true });
		}
		const result = await _createLocation({name});
		return { success: true, result: result.fields };
	},
	'delete-location': async ({request}) => {
		await requireLogin();
		const data = await request.formData();
		const id = data.get('id') as number | null;
		if (!id) {
			fail(404, { id, incorrect: true });
			return
		}
		const result = await deleteLocation({id});
		return { success: true, result: result.fields }
	}

} satisfies Actions