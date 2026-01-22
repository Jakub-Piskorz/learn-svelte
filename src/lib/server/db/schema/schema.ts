import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { user } from './user.ts';

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
export type Game = typeof game.$inferSelect;
