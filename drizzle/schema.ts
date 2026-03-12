import { pgTable, text, unique, serial, foreignKey, timestamp, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const game = pgTable("game", {
	id: text().primaryKey().notNull(),
	name: text(),
	genreId: text("genre_id"),
	description: text(),
	pegi: text(),
});

export const platform = pgTable("platform", {
	id: text().primaryKey().notNull(),
	name: text(),
});

export const userType = pgTable("user_type", {
	id: serial().primaryKey().notNull(),
	type: text(),
}, (table) => [
	unique("user_type_type_unique").on(table.type),
]);

export const session = pgTable("session", {
	id: text().primaryKey().notNull(),
	userId: text("user_id").notNull(),
	expiresAt: timestamp("expires_at", { withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "session_user_id_user_id_fk"
		}),
]);

export const user = pgTable("user", {
	id: text().primaryKey().notNull(),
	age: integer(),
	username: text().notNull(),
	passwordHash: text("password_hash").notNull(),
	userType: integer("user_type").notNull(),
}, (table) => [
	unique("user_username_unique").on(table.username),
]);

export const event = pgTable("event", {
	id: text().primaryKey().notNull(),
	organizerId: text(),
	description: text(),
	locationId: text(),
	plannedDuration: text(),
});

export const organizer = pgTable("organizer", {
	id: text().primaryKey().notNull(),
	name: text(),
});

export const location = pgTable("location", {
	id: text().primaryKey().notNull(),
	name: text(),
});
