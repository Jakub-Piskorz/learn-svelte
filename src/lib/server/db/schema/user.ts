import { integer, text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const user = mySchema.table('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	userType: integer('user_type').notNull()
});

export type User = typeof user.$inferSelect;