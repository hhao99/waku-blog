
import * as schema from './schemas/posts_sqlite';
import {users, posts} from './schemas/posts_sqlite';
import { eq, sql } from 'drizzle-orm';

import { drizzle } from 'drizzle-orm/libsql';

const url = process.env.DATABASE_URL || 'file:./data/dev.db'
const db = drizzle( {connection: {url}},{ schema});


const posts_data = [
  { content: '# This is the body of the first post.\n * this is first item.\n * this is the second item\nThis is the normal item'},
  { content: '# This is the body of the first post.\n * this is first item.\n * this is the second item\nThis is the normal item'},
];

const user =  { name: 'Eric Hao', email: 'hhao99@gmail.com'};

async function delete_tables() {
  await db.delete(users)
  await db.delete(posts)
}
async function insert_posts() {
  const [u1] = await db.insert(users).values(user).returning();
  for( let post of posts_data) {
    await db.insert(posts).values({...post, author_id: u1.id })
  }
}

async function get_posts() {
  const result = await db.select().from(posts);
    //.leftJoin(users,eq(posts.author_id,users.id))
  
    console.log(result)
}
async function seed() {
  // await delete_tables();
  // await insert_posts();
  await get_posts()
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});