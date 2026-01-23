import { relations } from 'drizzle-orm';
import { game } from './game';
import { platform } from './platform';

export const gameRelations = relations(game, ({ many }) => ({
	releasedOn: many(platform)
}));
