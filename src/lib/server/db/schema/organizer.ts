import { serial, text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const organizer = mySchema.table('organizer', {
	id: serial('id').primaryKey(),
	name: text('name').unique().notNull()
})

export type Organizer = typeof organizer.$inferSelect;