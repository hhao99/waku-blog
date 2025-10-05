'use client';
import { useState, useActionState } from 'react'
import { createOrUpdatePostAction } from "@/lib/actions/posts";
import type { Post } from 'src/data/schemas/posts';
import Editor from "@/components/posts/editor";

export default function PostForm({post}: {post: Post}) {
    


      const [content,setContent] = useState(post? post.content: '');
      const [state, formAction, isPending] = useActionState(createOrUpdatePostAction,null);
    
    return (
        <div>
            <form 
              className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md" action={formAction}>
            
          <input hidden name='content' value={content} readOnly={true}/>

          <input hidden name='createdAt' value={post?post.createdAt:''} readOnly={true}/>

          <input hidden name='updatedAt' value={post?post.updatedAt:''} readOnly={true}/>

          <input hidden name='id' value={post?post.id:''} readOnly={true}/>

          <input hidden name='mode' value={post?'edit':'new'} readOnly={true}/>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border-b-1 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              id='title'
              type="text"
              placeholder="Post Title"
              defaultValue={post? post.title: "new title"}
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            className="shadow appearance-none border-b-1 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            id='description'
            defaultValue={post? post.description: 'blog description'}
            type="text"
            placeholder="Post Description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <Editor value={content} setValue={setContent}/>
        </div>
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value={post? 'Save Post': 'Create Post'}
        />    
      </form>
        </div>
    )
}