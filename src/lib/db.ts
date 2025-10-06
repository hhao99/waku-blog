import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres'
import { getEnv } from 'waku'

const connectionString = getEnv('DATABASE_URL')||'';
const client = postgres(connectionString,{ prepare: false});
const db = drizzle(client);

export default db;
