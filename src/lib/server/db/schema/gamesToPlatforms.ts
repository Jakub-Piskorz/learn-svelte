import { game, platform } from '.';
import { primaryKey, text } from 'drizzle-orm/pg-core';
import { mySchema } from './mySchema';

export const gamesToPlatforms = mySchema.table(
	"games_to_platforms",
	{
		gameId: text("game_id")
			.notNull()
			.references(() => game.id),
		platformId: text("platform_id")
			.notNull()
			.references(() => platform.id),
	},
	(table) => [
		primaryKey({columns: [table.gameId, table.platformId]})
	]
);