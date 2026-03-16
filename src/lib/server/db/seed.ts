import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { userType } from './schema/userType';

const pool = new Pool({ connectionString: process.env.var_dbUrl });
const db = drizzle(process.env.var_dbUrl!);

async function seed() {
	await db.insert(userType)
		.values([
			{ type: 'admin' },
			{ type: 'user' }
		])
		.onConflictDoNothing({ target: userType.type });

	console.log('✅ user_type seeded');
	await pool.end();
}

seed().catch(err => {
	console.error(err);
	process.exit(1);
});
