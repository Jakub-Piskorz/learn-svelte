import { integer, serial, text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const event = mySchema.table('event', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	organizerId: integer('organizerId').notNull(),
	description: text('description'),
	locationId: integer('locationId').notNull(),
	plannedDuration: text('plannedDuration'),
});

export type Event = typeof event.$inferSelect;