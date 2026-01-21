import { pgTable, integer, text, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const game = pgTable('game', {
	id: text('id').primaryKey(),
	name: text('name'),
	genreId: text('genre_id'),
	description: text('description'),
	pegi: text('pegi'),
})

export const platform = pgTable('platform', {
	id: text('id').primaryKey(),
	name: text('name'),
})

export const gameRelations =
	relations(game, ({many}) => ({
	releasedOn: many(platform)
}))

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
