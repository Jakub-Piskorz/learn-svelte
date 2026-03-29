import { db } from '$libServer/db';
import { organizer } from '$libServer/db/schema';

type CreateOrganizerInput = {
	name: string;
}

export function createOrganizer({name}: CreateOrganizerInput) {
	return db
		.insert(organizer).values({name})
}