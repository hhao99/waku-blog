'use server';
import db from '../db';
import { eq,desc} from 'drizzle-orm';
import { unstable_notFound, unstable_redirect } from 'waku/router/server';

import { postsTable } from '../../data/schemas/posts';
import type { NewPost, Post } from '../../data/schemas/posts';


export async function getAllPosts(): Promise<Post[]> {
    return await db.select().from(postsTable);
}

export async function getPostById(id: Number) {
    return await db.select().from(postsTable).where(eq(postsTable.id, id)).limit(1);  
}

export async function createPost(newPost: NewPost) {
    const [insertedPost] = await db.insert(postsTable).values(newPost).returning();
}

export async function updatePost(id: number, updatedFields: Partial<NewPost>): Promise<Post | undefined> {
    const [updatedPost] = await db.update(postsTable).set(updatedFields).where(eq(postsTable.id,id)).returning();
    return updatedPost;
}

export async function deletePost(id: number): Promise<void> {
    await db.delete(postsTable).where(postsTable.id.eq(id));
}       