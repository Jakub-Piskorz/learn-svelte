import * as schema from "./schema";
import {defineRelations} from "drizzle-orm";

export const relations = defineRelations(schema, (r) => ({
	user: {
		sessions: r.many.session(),
	},
	session: {
		user: r.one.user({
			from: r.session.userId,
			to: r.user.id
		})
	},
	event: {
		location: r.one.location({
			from: r.event.locationId,
			to: r.location.id
		})
	},
	// game: {
	// 	releasedOn: r.many.platform({
	// 		from: r.game.id.through(r.)
	// 	})
	// }
}));

// export const eventRelations = relations(event, ({ one }) => ({
// 	type: one(location, {
// 		fields: [event.locationId],
// 		references: [location.id]
// 	})
// }));

// export const gameRelations = relations(game, ({ many }) => ({
// 	releasedOn: many(platform)
// }));
//
// export const organizerRelations = relations(event, ({ one }) => ({
// 	type: one(organizer, {
// 		fields: [event.organizerId],
// 		references: [organizer.id]
// 	})
// }));

// // Many users <-> one userType
// // Every user has a userType.
// export const userTypeRelation = relations(user, ({ one }) => ({
// 	type: one(userType, {
// 		fields: [user.userType],
// 		references: [userType.id]
// 	})
// }));