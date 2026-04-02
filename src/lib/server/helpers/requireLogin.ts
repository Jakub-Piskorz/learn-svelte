import { error } from '@sveltejs/kit';
import whoAmI from '$libServer/helpers/whoAmI';
import type { User, UserWithType } from '$libServer/db/schema';

export async function requireLogin(withUserType: true, errorMsg?: string): Promise<UserWithType>
export async function requireLogin(withUserType: false, errorMsg?: string): Promise<User>
export async function requireLogin(): Promise<User>

export async function requireLogin(
	withUserType: boolean = false,
	errorMsg = "Invalid or missing credentials"
) {
	const me = await whoAmI(withUserType);
	if (!me) return error(401, errorMsg);
	return me;
}