'use client';
import { lazy, Suspense, useState, useActionState, } from 'react'
import { createOrUpdatePostAction } from "@/lib/actions/posts";
import type { Post } from '@/data/schemas/posts';
import { useUserStore } from '@/store/users';
import { useRouter } from 'waku';
import Markdown from 'react-markdown'
const MDEditor = lazy(()=> import('@uiw/react-md-editor'))

export default function PostForm({post,mode}: {post: Post, mode: string}) {
    const { loginStatus }= useUserStore( state => state);
    const router = useRouter();

    const [value,setValue] = useState(post? post.content : "---\ntitle: hello \n---\n# Hello");
    const [state, formAction, isPending] = useActionState(createOrUpdatePostAction,null);
      
      if(!loginStatus.isLoggedIn) {
        console.log("Not login..., redirect to login")
        router.push('/auth/login');
      }
      else {
          // return (
          //   <Suspense fallback={<h3>loading form...</h3>}>
          //     <div className='container'>
          //       <form  action={formAction}>
          //         <div className='flex justify-between mx-8'>
          //           <h3>{post? "Edit the Post": "Create the Post"}</h3>
          //           <Save_Button />
          //         </div>
          //       <textarea hidden name='content' value={value} readOnly={true}/>
          //       <input hidden name='created_at' value={post?post.created_at:''} readOnly={true}/>
          //       <input hidden name='updated_at' value={post?post.updated_at:''} readOnly={true}/>
          //       <input hidden name='id' value={post?post.id:''} readOnly={true}/>

          //       <input hidden name='author_id' value={post?post.author_id:'1'} readOnly={true}/>
          //       <input hidden name='mode' value={mode} readOnly={true} />

          //     <div className="mb-4 h-3/4">
                
          //       <MDEditor 
          //         value={value} 
          //         onChange={setValue}
          //         preview='edit'
          //         minHeight={200}
          //         maxHeight={400}
          //         /> 
          //     </div>
          //     <Save_Button />
          //     </form>

          //   </div>
          //   </Suspense>
          // )
    }

  
}

const Save_Button = ()=> (
      <div className='text-end'>
          <button className="bg-blue-400 w-24 hover:bg-blue-700  text-white text-center text-sm  p-2 shadow-sm rounded-lg">Save</button> 
      </div>
    );