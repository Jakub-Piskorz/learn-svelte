import { text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const location = mySchema.table('location', {
	id: text('id').primaryKey(),
	name: text('name')
})

export type Location = typeof location.$inferSelect;