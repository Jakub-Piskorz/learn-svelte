import { text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const event = mySchema.table('event', {
	id: text('id').primaryKey(),
	organizerId: text('organizerId'),
	description: text('description'),
	locationId: text('locationId'),
	plannedDuration: text('plannedDuration'),
});

export type Event = typeof event.$inferSelect;