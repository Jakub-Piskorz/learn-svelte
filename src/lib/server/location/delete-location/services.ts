import { db } from '$libServer/db';
import { location } from '$libServer/db/schema';
import { eq } from 'drizzle-orm';

type DeleteLocationType = {
	id: number
}

export async function deleteLocation({id}: DeleteLocationType) {
	return db.delete(location).where(eq(location.id, id))
}