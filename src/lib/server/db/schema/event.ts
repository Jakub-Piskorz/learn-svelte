import { pgTable, text } from 'drizzle-orm/pg-core';

export const event = pgTable('event', {
	id: text('id').primaryKey(),
	organizerId: text('organizerId'),
	description: text('description'),
	locationId: text('locationId'),
	plannedDuration: text('plannedDuration'),
});

export type Event = typeof event.$inferSelect;