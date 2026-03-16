import { serial, text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const userType = mySchema.table('user_type', {
	id: serial('id').primaryKey(),
	type: text('type').unique(),
});
