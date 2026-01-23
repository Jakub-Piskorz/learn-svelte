import { defineConfig } from 'drizzle-kit';

if (!process.env.var_dbUrl) throw new Error('var_dbUrl is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema/index.ts',
	dialect: 'postgresql',
	dbCredentials: { url: process.env.var_dbUrl },
	verbose: true,
	strict: true
});
