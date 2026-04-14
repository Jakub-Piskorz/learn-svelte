import { integer, text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';
import type { UserType } from '$libServer/db/schema/userType';
import { timestamps } from '../helpers';

export const user = mySchema.table('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	userTypeId: integer('user_type').notNull(),
	...timestamps()
});

export type User = typeof user.$inferSelect;
export type UserWithType = User & {
	userType: UserType
}