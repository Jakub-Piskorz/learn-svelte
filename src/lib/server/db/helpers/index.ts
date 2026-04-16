import { timestamp, type PgTimestampBuilder } from 'drizzle-orm/pg-core';

export type Timestamps = {
	createdAt: PgTimestampBuilder;
	updatedAt: PgTimestampBuilder;
}

export const timestamps = () => ({
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull().$onUpdate(() => new Date()),
} as Timestamps)