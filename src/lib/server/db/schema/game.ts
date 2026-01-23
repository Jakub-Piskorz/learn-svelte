import { pgTable, text } from 'drizzle-orm/pg-core';

export const game = pgTable('game', {
	id: text('id').primaryKey(),
	name: text('name'),
	genreId: text('genre_id'),
	description: text('description'),
	pegi: text('pegi')
});

export type Game = typeof game.$inferSelect;