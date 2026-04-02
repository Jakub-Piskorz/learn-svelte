import { fail } from '@sveltejs/kit';
import requireAdmin from '$libServer/helpers/requireAdmin';
import type { Actions } from '../../../.svelte-kit/types/src/routes/demo/lucia/login/$types';
import { createLocation, deleteLocation } from '$libServer/location/services';
import { createOrganizer, deleteOrganizer } from '$libServer/organizer/services';
import { db } from '$libServer/db';
import whoAmI from '$libServer/helpers/whoAmI';

export const load = async () => {
	await requireAdmin("Only administrators can view this page");
	const me = await whoAmI();
	const locations = await db.query.location.findMany();
	return { user: me, locations };
};

export const actions = {
	'create-location': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const name = data.get('name') as string;
		if (!name) {
			return fail(404, { name, missing: true });
		}
		const result = await createLocation({name});
		return { success: true, result: result.fields };
	},
	'delete-location': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const id = data.get('id') as number | null;
		if (!id) {
			return fail(404, { id, missing: true });
		}
		const result = await deleteLocation({id});
		return { success: true, result: result.fields }
	},
	'create-organizer': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const name = data.get('name') as string;
		if (!name) {
			return fail(404, { name, missing: true });
		}
		const result = await createOrganizer({name});
		return { success: true, result: result.fields };
	},
	'delete-organizer': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const id = data.get('id') as number | null;
		if (!id) {
			return fail(404, { id, missing: true });
		}
		const result = await deleteOrganizer({id});
		return { success: true, result: result.fields }
	},

} satisfies Actions