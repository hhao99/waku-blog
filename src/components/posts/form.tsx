'use client';
import { lazy, Suspense, useState, useActionState, } from 'react'
import { createOrUpdatePostAction } from "@/lib/actions/posts";
import type { Post } from '@/data/schemas/posts';
import Markdown from 'react-markdown'
const MDEditor = lazy(()=> import('@uiw/react-md-editor'))

export default function PostForm({post}: {post: Post}) {
    


      const [value,setValue] = useState(post? post.content : "");
      const [state, formAction, isPending] = useActionState(createOrUpdatePostAction,null);
      
    return (
      <Suspense fallback={<h3>loading form...</h3>}>
        <div className='container'>
          <form  action={formAction}>
            <div className='flex justify-between mx-8'>
              <h3>{post? "Edit the Post": "Create the Post"}</h3>
              <Save_Button />
            </div>
          <textarea hidden name='content' value={value} readOnly={true}/>
          <input hidden name='createdAt' value={post?post.createdAt:''} readOnly={true}/>
          <input hidden name='updatedAt' value={post?post.updatedAt:''} readOnly={true}/>
          <input hidden name='id' value={post?post.id:''} readOnly={true}/>

          <input hidden name='mode' value={post?'edit':'new'} readOnly={true}/>
          <div className='flex justify-between space-x-2'>
            <div className="w-1/3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title: 
            </label>
            <input
              className="shadow appearance-none border-b-1 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              id='title'
              type="text"
              placeholder="Post Title"
              defaultValue={post? post.title: "new title"}
            />
            </div>
        <div className="w-2/3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description: 
          </label>
          <input
            className="shadow appearance-none border-b-1 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            id='description'
            defaultValue={post? post.description: 'blog description'}
            type="text"
            placeholder="Post Description"
          />
          
        </div>
      </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content:
          </label>
          <MDEditor value={value} onChange={setValue}/> 
        </div>
        <Save_Button />
        </form>

      </div>
    </Suspense>
    )
}

const Save_Button = ()=> (
      <div className='text-end'>
          <button className="bg-blue-400 w-24 hover:bg-blue-700  text-white text-center text-sm  p-2 shadow-sm rounded-lg">Save</button> 
      </div>
    );