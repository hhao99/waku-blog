'use server';
import { unstable_redirect } from "waku/router/server";
import { createPost, deletePost, updatePost } from "./posts.db";

const createOrUpdatePostAction = async (preState, formData: FormData) => {
  const content = formData.get("content") as string;
  const id = parseInt(formData.get('id') as string);
  const author_id = parseInt(formData.get('author_id') as string);
  
  const mode = formData.get('mode') as string

  if( mode === 'new') {
    try {
      await createPost({content,author_id});
    } catch(err) {
      console.log('insert error ', err)
    }
  }
  else {
    try {
      await updatePost(id,{content});
    } catch(err) {
      console.log('update error ', err)
    }
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