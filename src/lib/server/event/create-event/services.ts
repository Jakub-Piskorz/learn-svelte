import { db } from '$libServer/db';
import {event} from '$libServer/db/schema/event';

export type CreateEventInput = {
	name: string
	organizerId: number,
	description?: string,
	locationId: number,
	plannedDuration?: string,
}
export async function createEvent(eventInput: CreateEventInput) {
	return db.insert(event).values(eventInput)
}