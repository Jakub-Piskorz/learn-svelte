import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { user } from './user.ts';

export const userType = pgTable('user_type', {
	id: serial('id').primaryKey(),
	type: text('type').unique(),
});


// Many users <-> one userType
// Every user has a userType.
export const userTypeRelation = relations(user, ({ one }) => ({
	type: one(userType, {
		fields: [user.userType],
		references: [userType.id]
	})
}));