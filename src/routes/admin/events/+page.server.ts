import { fail } from '@sveltejs/kit';
import requireAdmin from '$libServer/helpers/requireAdmin';
import type { Actions } from '../../../../.svelte-kit/types/src/routes/demo/lucia/login/$types';
import { db } from '$libServer/db';
import getUserFromToken from '$libServer/helpers/getUserFromToken';
import { createEvent, deleteEvent } from '$libServer/event/services';

export const load = async () => {
	await requireAdmin("Only administrators can view this page");
	const me = getUserFromToken();
	const events = await db.query.event.findMany(
		{
			with: {
				organizer: true,
				location: true
			}
		});
	const locations = await db.query.location.findMany();
	const organizers = await db.query.organizer.findMany();
	return { user: me, locations, organizers, events };
};

export const actions = {
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
		const id = Number(data.get('id')) as number | null;
		if (!id) {
			return fail(404, { id, missing: true });
		}
		const result = await deleteEvent({id});
		console.log(id)
		return { success: true, result: result.fields }
	},

} satisfies Actions