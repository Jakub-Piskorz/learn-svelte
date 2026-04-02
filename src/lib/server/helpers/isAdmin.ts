import type { UserWithType } from '$libServer/db/schema';

export default async (user: UserWithType) => {
	return user.userType.type === "admin";
}