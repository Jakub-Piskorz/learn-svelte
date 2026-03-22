import * as schema from "./schema";
import {defineRelations} from "drizzle-orm";

export const relations = defineRelations(schema, (r) => ({
	user: {
		sessions: r.many.session(),
		userType: r.one.userType({
			from: r.user.userTypeId,
			to: r.userType.id
		})
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
		}),
		organizer: r.one.organizer({
			from: r.event.organizerId,
			to: r.organizer.id
		})
	},
	location: {
		events: r.many.event()
	},
	organizer: {
		events: r.many.event()
	},
	game: {
		releasedOn: r.many.platform({
			from: r.game.id.through(r.gamesToPlatforms.gameId),
			to: r.platform.id.through(r.gamesToPlatforms.platformId),
		})
	}
}));