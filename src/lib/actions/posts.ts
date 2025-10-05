'use server';
import { unstable_redirect } from "waku/router/server";
import { createPost, deletePost, updatePost } from "./posts.db";

const createOrUpdatePostAction = async (preState, formData: FormData) => {
  console.log('create or update action')
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const id = parseInt(formData.get('id') as string);
  const createdAt = parseInt(formData.get('createdAt') as string);
  const mode = formData.get('mode') as string
  if( mode === 'new') {
    const post = { title,  description, content, createdAt: Date.now(), updatedAt: Date.now() };
    console.log('creating post: ', post)
    await createPost(post);
  }
  else {
    const post = { id, title, description, content, createdAt, updatedAt: Date.now() }
    await updatePost(id,post);
    console.log('updated the blog id: ', id)
  }
  return unstable_redirect('/')
}

const deletePostAction = async(id: number) => {
  await deletePost(id);
  return unstable_redirect('/')

}


export { createOrUpdatePostAction, deletePostAction };