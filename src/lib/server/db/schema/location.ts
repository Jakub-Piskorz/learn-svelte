import { serial, text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';
import { timestamps } from '../helpers';

export const location = mySchema.table('location', {
	id: serial('id').primaryKey(),
	name: text('name').unique().notNull(),
	...timestamps()
})

export type Location = typeof location.$inferSelect;