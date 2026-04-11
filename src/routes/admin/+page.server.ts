import { fail } from '@sveltejs/kit';
import requireAdmin from '$libServer/helpers/requireAdmin';
import type { Actions } from '../../../.svelte-kit/types/src/routes/demo/lucia/login/$types';
import { createLocation, deleteLocation } from '$libServer/location/services';
import { createOrganizer } from '$libServer/organizer/services';
import { db } from '$libServer/db';
import getUserFromToken from '$libServer/helpers/getUserFromToken';
import { createEvent, deleteEvent } from '$libServer/event/services';

export const load = async () => {
	await requireAdmin("Only administrators can view this page");
	const me = getUserFromToken();
	const locations = await db.query.location.findMany();
	const organizers = await db.query.organizer.findMany();
	return { user: me, locations, organizers };
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
	'create-event': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const name = data.get('name') as string;
		const description = data.get('description') as string | undefined;
		const locationId = data.get('selectedLocation') as number | null;
		const organizerId = data.get('selectedOrganizer') as number | null;
		if (!name || !locationId || !organizerId) {
			return fail(404, { missing: true });
		}
		const result = await createEvent({name, description, organizerId, locationId});
		return { success: true, result: result.fields }
	},
	'delete-event': async ({request}) => {
		await requireAdmin();
		const data = await request.formData();
		const id = data.get('id') as number | null;
		if (!id) {
			return fail(404, { id, missing: true });
		}
		const result = await deleteEvent({id});
		return { success: true, result: result.fields }
	},

} satisfies Actions