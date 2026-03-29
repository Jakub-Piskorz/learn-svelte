import { db } from '$libServer/db';
import { location } from '$libServer/db/schema';

type CreateLocationInput = {
	name: string
}

export async function createLocation({name}: CreateLocationInput) {
	return db.insert(location).values({ name });
}