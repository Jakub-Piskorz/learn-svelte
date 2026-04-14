import { serial, text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';
import { timestamps } from '../helpers';

export const organizer = mySchema.table('organizer', {
	id: serial('id').primaryKey(),
	name: text('name').unique().notNull(),
	...timestamps()
})

export type Organizer = typeof organizer.$inferSelect;