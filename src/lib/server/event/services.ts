import { db } from '$libServer/db';
import {event} from '$libServer/db/schema/event';
import { eq } from 'drizzle-orm';

export type CreateEventInput = {
	name: string
	organizerId: number,
	description?: string,
	locationId: number,
	plannedDuration?: string,
}

export type DeleteEventInput = {
	id: number
}


export async function createEvent(eventInput: CreateEventInput) {
	return db.insert(event).values(eventInput)
}

export async function deleteEvent({id}: DeleteEventInput) {
	return db.delete(event).where(eq(event.id, id))
}