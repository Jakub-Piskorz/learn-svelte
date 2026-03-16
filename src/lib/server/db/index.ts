import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from '$env/dynamic/private';
import { relations } from '$libServer/db/relations';

if (!env.var_dbUrl) throw new Error('var_dbUrl is not set');


export const db = drizzle(env.var_dbUrl, {relations});
