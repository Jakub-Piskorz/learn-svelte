import { text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';
import { timestamps } from '../helpers';

export const game = mySchema.table('game', {
	id: text('id').primaryKey(),
	name: text('name'),
	genreId: text('genre_id'),
	description: text('description'),
	pegi: text('pegi'),
	...timestamps()
});

export type Game = typeof game.$inferSelect;