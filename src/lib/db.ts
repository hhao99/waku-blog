import { drizzle } from 'drizzle-orm/libsql';
import { getEnv } from 'waku'
import * as schema from '@/data/schemas/posts'

const url = getEnv('DATABASE_URL')||'';
const db = drizzle({connection: {url}}, { schema});

export default db;
