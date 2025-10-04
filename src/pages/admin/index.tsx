'use client';
import { useState,useActionState } from "react";
import { createPostAction } from "../../lib/actions/posts";
import Editor from '@/components/posts/markdown-editor';
const  NewPostPage = () => {
  const [content,setContent]=useState('# this is the title\n and this is the content')

  const [state, formAction, isPending] = useActionState(createPostAction,null);
  return (
    <div className="h-screen w-fullflex flex-col items-start min-h-screen w-full bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Create New Post</h1>
      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md" action={formAction}>
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
            defaultValue='New Post Title - 1'
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
            defaultValue='This is a description of the new post.'
            type="text"
            placeholder="Post Description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <input type='hidden' value={content} name='content' />
          <Editor content={content} onChange={setContent}/>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default NewPostPage;