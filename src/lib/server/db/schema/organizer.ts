import { text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const organizer = mySchema.table('organizer', {
	id: text('id').primaryKey(),
	name: text('name')
})

export type Organizer = typeof organizer.$inferSelect;