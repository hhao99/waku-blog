'use server';
import { createPost } from "./posts.db";

const createPostAction = async (preState, formData: FormData) => {
  const title = formData.get("title") as string;
  const slug = title?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const post = { title, slug, description, content, createdAt: Date.now(), updatedAt: Date.now() };
  console.log('Creating Post:', post);
  await createPost(post);
}

export { createPostAction };