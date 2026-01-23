import { relations } from 'drizzle-orm';
import { game, platform } from '.';

export const gameRelations = relations(game, ({ many }) => ({
	releasedOn: many(platform)
}));
