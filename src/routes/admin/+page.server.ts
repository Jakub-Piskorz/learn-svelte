import { error, fail } from '@sveltejs/kit';
import requireAdmin from '$libServer/helpers/requireAdmin';
import type { Actions } from '../../../.svelte-kit/types/src/routes/demo/lucia/login/$types';
import { requireLogin } from '$libServer/helpers/requireLogin';
import { createLocation as _createLocation } from '$libServer/location/create-location/services';
import { db } from '$libServer/db';
import { deleteLocation } from '$libServer/location/delete-location/services';

export const load = async () => {
	await requireAdmin("Only administrators can view this page");
	const user = await requireLogin();
	const locations = await db.query.location.findMany();
	return { user, locations };
};

export const actions = {
	'create-location': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const name = data.get('name') as string;
		if (!name) {
			return fail(404, { name, incorrect: true });
		}
		const result = await _createLocation({name});
		return { success: true, result: result.fields };
	},
	'delete-location': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const id = data.get('id') as number | null;
		if (!id) {
			return fail(404, { id, incorrect: true });
		}
		const result = await deleteLocation({id});
		return { success: true, result: result.fields }
	},
	'create-organizer': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const name = data.get('name') as string;
		if (!name) {
			return fail(404, { name, incorrect: true });
		}
		const result = await _createLocation({name});
		return { success: true, result: result.fields };
	},
	'delete-organizer': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const id = data.get('id') as number | null;
		if (!id) {
			return fail(404, { id, incorrect: true });
		}
		const result = await deleteLocation({id});
		return { success: true, result: result.fields }
	},

} satisfies Actions