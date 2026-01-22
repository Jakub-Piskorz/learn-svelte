import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/schema.ts';
import { env } from '$env/dynamic/private';

if (!env.var_dbUrl) throw new Error('var_dbUrl is not set');

const client = postgres(env.var_dbUrl);

export const db = drizzle(client, { schema });
