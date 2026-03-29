import { serial, text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const location = mySchema.table('location', {
	id: serial('id').primaryKey(),
	name: text('name').unique().notNull()
})

export type Location = typeof location.$inferSelect;