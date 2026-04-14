import { text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';
import { timestamps } from '../helpers';

export const platform = mySchema.table('platform', {
	id: text('id').primaryKey(),
	name: text('name').unique(),
	...timestamps()
});