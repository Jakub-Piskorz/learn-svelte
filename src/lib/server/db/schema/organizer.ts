import { pgTable, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { event } from '$libServer/db/schema/event';

export const organizer = pgTable('organizer', {
	id: text('id').primaryKey(),
	name: text('name')
})

export const organizerRelations = relations(event, ({ one }) => ({
	type: one(organizer, {
		fields: [event.organizerId],
		references: [organizer.id]
	})
}));

export type Organizer = typeof organizer.$inferSelect;