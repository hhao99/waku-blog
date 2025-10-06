'use server';
import db from '../db';
import { eq,desc} from 'drizzle-orm';
import { unstable_notFound, unstable_redirect } from 'waku/router/server';

import { postsTable } from '../../data/schemas/posts';
import type { NewPost, Post } from '../../data/schemas/posts';
import matter from 'gray-matter';


export async function getAllPosts(): Promise<Post[]> {
    let posts
    try {
        posts = await db.select().from(postsTable)
        if(posts.length > 0) {
            posts = posts.map( (post: Post) =>{
                const {data} = matter(post.content)
                return {...post, ...data}
            })
        }
        return posts;
    } catch(err) {
        console.log(err)
        return [];
    }
}

export async function getPostById(id: Number) { 
    let post:Post
    try {
        post =  (await db.select().from(postsTable).where(eq(postsTable.id, id)))[0];
        const {data,content} = matter(post.content);
        post = {...post, ...data, text: content}
        return post;
    }
    catch(err) { console.log(err);
        return null
    }
}

export async function createPost(newPost: NewPost) {
    const [insertedPost] = await db.insert(postsTable).values(newPost).returning();
}

export async function updatePost(id: number, updatedFields: Partial<NewPost>): Promise<Post | undefined> {
    const [updatedPost] = await db.update(postsTable).set(updatedFields).where(eq(postsTable.id,id)).returning();
    return updatedPost;
}

export async function deletePost(id: number): Promise<void> {
    await db.delete(postsTable).where(eq(postsTable.id,id));
}       