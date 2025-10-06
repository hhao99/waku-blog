import db from '../lib/db';
import { postsTable } from './schemas/posts_sqlite';

const posts = [
  {
    title: 'First Post',
    description: 'the first post.',
    content: '# This is the body of the first post.\n * this is first item.\n * this is the second item\nThis is the normal item',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    description: 'the second post.',
    title: 'Second Post',
    content: '# This is the body of the first post.\n * this is first item.\n * this is the second item\nThis is the normal item',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

async function seed() {
  for (const post of posts) {
    await db.insert(postsTable).values(post);
  }
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});