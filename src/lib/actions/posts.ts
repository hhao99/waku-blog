'use server';
import { unstable_redirect } from "waku/router/server";
import { createPost, deletePost, updatePost } from "./posts.db";

const createOrUpdatePostAction = async (preState, formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content");
  const id = parseInt(formData.get('id') as string);
  const createdAt = parseInt(formData.get('createdAt') as string) || Date.now();
  const updatedAt = Date.now()
  const mode = formData.get('mode') as string
  const post = { title,  description, content, createdAt, updatedAt };
  if( mode === 'new') {
    await createPost(post);
  }
  else {
    await updatePost(id,post);
  }
  return unstable_redirect('/')
}

const deletePostAction = async(preState,formData:FormData) => {
  const id = parseInt(formData.get('id') as string);
  console.log('delete with id:',id)
  if(id) await deletePost(id);
  return unstable_redirect('/')

}


export { createOrUpdatePostAction, deletePostAction };