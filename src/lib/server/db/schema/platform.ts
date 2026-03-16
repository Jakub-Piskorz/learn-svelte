import { text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const platform = mySchema.table('platform', {
	id: text('id').primaryKey(),
	name: text('name')
});