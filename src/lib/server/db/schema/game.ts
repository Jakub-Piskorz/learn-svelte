import { text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const game = mySchema.table('game', {
	id: text('id').primaryKey(),
	name: text('name'),
	genreId: text('genre_id'),
	description: text('description'),
	pegi: text('pegi')
});

export type Game = typeof game.$inferSelect;