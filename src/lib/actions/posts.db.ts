'use server';
import db from '../db';
import { eq } from 'drizzle-orm';
import { unstable_notFound, unstable_redirect } from 'waku/router/server';

import { posts,users } from '@/data/schemas/posts';
import type { NewPost, Post } from '@/data/schemas/posts';
import matter from 'gray-matter';


export async function getAllPosts(): Promise<Post[]> {
    
    try {
        const result = await db.select({
            id: posts.id,
            content: posts.content,
            created_at: posts.created_at,
            updated_at: posts.updated_at,
            author: users.name,
            email: users.email
        }).from(posts)
            .leftJoin(users,eq(posts.author_id,users.id));
        console.log(result)
        return result;
    } catch(err) {
        console.log(err)
        return [];
    }
}

export async function getPostById(id: Number) { 
    try {
        const [post] =  (await db.select().from(posts).where(eq(posts.id, id)));
        const {data,content} = matter(post.content);
        return {...post, ...data, text: content}
    }
    catch(err) { console.log(err);
        return null
    }
}

export async function createPost(newPost: NewPost) {
    const [insertedPost] = await db.insert(posts).values(newPost).returning();
}

export async function updatePost(id: number, updatedFields: Partial<NewPost>): Promise<Post | undefined> {
    const [updatedPost] = await db.update(posts).set(updatedFields).where(eq(postsTable.id,id)).returning();
    return updatedPost;
}

export async function deletePost(id: number): Promise<void> {
    await db.delete(posts).where(eq(posts.id,id));
}       