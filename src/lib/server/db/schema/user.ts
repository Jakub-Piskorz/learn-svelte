import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	userType: integer('user_type').notNull()
});

export type User = typeof user.$inferSelect;