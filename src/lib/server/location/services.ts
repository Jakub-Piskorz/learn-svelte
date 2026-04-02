import { db } from '$libServer/db';
import { location } from '$libServer/db/schema';
import { eq } from 'drizzle-orm';

export type CreateLocationInput = {
	name: string
}
export type DeleteLocationInput = {
	id: number
}

export async function createLocation({name}: CreateLocationInput) {
	return db.insert(location).values({ name });
}

export async function deleteLocation({id}: DeleteLocationInput) {
	return db.delete(location).where(eq(location.id, id))
}