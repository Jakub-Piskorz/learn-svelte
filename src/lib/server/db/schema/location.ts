import { pgTable, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { event } from "./event"

export const location = pgTable('location', {
	id: text('id').primaryKey(),
	name: text('name')
})

export const eventRelations = relations(event, ({ one }) => ({
	type: one(location, {
		fields: [event.locationId],
		references: [location.id]
	})
}));

export type Location = typeof location.$inferSelect;