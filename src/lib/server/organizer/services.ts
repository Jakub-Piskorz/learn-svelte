import { db } from '$libServer/db';
import { organizer } from '$libServer/db/schema';
import { eq } from 'drizzle-orm';

export type CreateOrganizerInput = {
	name: string
}
export type DeleteOrganizerInput = {
	id: number
}

export async function createOrganizer({name}: CreateOrganizerInput) {
	return db.insert(organizer).values({ name });
}

export async function deleteOrganizer({id}: DeleteOrganizerInput) {
	return db.delete(organizer).where(eq(organizer.id, id))
}