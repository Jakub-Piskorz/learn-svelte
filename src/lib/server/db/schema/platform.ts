import { pgTable, text } from 'drizzle-orm/pg-core';

export const platform = pgTable('platform', {
	id: text('id').primaryKey(),
	name: text('name')
});