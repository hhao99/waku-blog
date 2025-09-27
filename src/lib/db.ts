import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const db = drizzle({
    client: createClient({
        url: process.env.DB_URL || 'file:./dev.db',
    })
});

export default db;
