import db from '../lib/db';
import { postsTable } from './schemas/posts';

const posts = [
  {
    title: 'First Post',
    slug: 'first-post',
    description: 'the first post.',
    content: 'This is the body of the first post.',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    slug: 'second-post',
    description: 'the second post.',
    title: 'Second Post',
    content: 'This is the body of the second post.',
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