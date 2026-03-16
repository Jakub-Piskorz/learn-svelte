import { text, timestamp } from 'drizzle-orm/pg-core';
import { user } from '.';
import { mySchema } from './mySchema';

export const session = mySchema.table('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});
export type Session = typeof session.$inferSelect;