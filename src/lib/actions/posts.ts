'use server';
import { unstable_redirect } from "waku/router/server";
import { createPost, deletePost, updatePost } from "./posts.db";

const createOrUpdatePostAction = async (preState, formData: FormData) => {
  const content = formData.get("content") as string;
  const id = parseInt(formData.get('id') as string);
  const created_at = parseInt(formData.get('createdAt') as string) || Date.now();
  const updated_at = Date.now()
  const mode = formData.get('mode') as string
  if( mode === 'new') {
    await createPost({content, created_at});
  }
  else {
    await updatePost(id,{content,updated_at});
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