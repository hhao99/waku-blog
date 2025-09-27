import db from '../db';
import { postsTable } from '../../data/schema/posts';
import type { NewPost, Post } from '../../data/schema/posts';
import { eq,desc} from 'drizzle-orm';

export async function getAllPosts(): Promise<Post[]> {
    return await db.select().from(postsTable);
}

export async function getPostBySlug(slug: String): Promise<Post | undefined> {
    return db.select().from(postsTable).where(eq(postsTable.slug, slug)).limit(1);  
}

export async function createPost(newPost: NewPost): Promise<Post> {
    const [insertedPost] = await db.insert(postsTable).values(newPost).returning();
    return insertedPost;
}

export async function updatePost(id: number, updatedFields: Partial<NewPost>): Promise<Post | undefined> {
    const [updatedPost] = await db.update(postsTable).set(updatedFields).where(postsTable.id.eq(id)).returning();
    return updatedPost;
}

export async function deletePost(id: number): Promise<void> {
    await db.delete(postsTable).where(postsTable.id.eq(id));
}       